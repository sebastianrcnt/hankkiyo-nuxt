<template>
  <div class="container">
    <top-bar />
    <div class="banner">배너(삽입예정)</div>
    <div class="categories">
      <template v-for="(row, rowNumber) in categoryRows">
        <div class="category-row" :key="rowNumber">
          <template v-for="(category, index) in row">
            <div
              class="category-item"
              :key="index"
              @click="goToCategory(category.name)"
            >
              <img :src="category.imgSrc" alt="" />
              <span>{{ category.name }}</span>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TopBar from '../components/TopBar'
import axios from 'axios'

export default {
  data() {
    return {
      categories: [],
    }
  },
  created() {
    axios
      .get(process.env.API_URL + '/api/categories/')
      .then(({ data }) => {
        this.categories = data
      })
      .catch((err) => {
        console.log(err)
      })
  },
  computed: {
    ...mapState({
      primaryAddress: (store) => store.primaryAddress,
    }),
    categoryRows() {
      let result = []
      for (
        let rowNumber = 0;
        rowNumber < Math.floor(this.categories.length / 3);
        rowNumber++
      ) {
        result.push(
          this.categories.filter((category, index) => {
            // rowNumber = 1 => return item 3, 4, 5
            return rowNumber * 3 <= index && index < rowNumber * 3 + 3
          })
        )
      }
      return result
    },
  },
  methods: {
    goToCategory(name) {
      this.$router.push({
        path: '/categories',
        query: { category: name },
      })
    },
  },
  layout: 'withbottombar',
  components: { TopBar },
}
</script>

<style lang="scss" scoped>
.container {
  @include expanded;
  @include flex(column, flex-start, flex-start);

  .banner {
    width: 100%;
    height: 192px;
    background: #40404069;

    @include center;
  }

  .categories {
    $margin: 15px;
    @include expanded-horizontal;

    .category-row {
      @include side-margin(25px);
      @include vertical-margin($margin);
      @include flex(row, center, center);

      .category-item {
        @include side-margin($margin);
        @include flex(column, center, center);
        img {
          @include expanded;
          object-fit: contain;
          margin-bottom: 10px;
        }
        span {
          white-space: nowrap;
        }
      }
    }
  }
}
</style>

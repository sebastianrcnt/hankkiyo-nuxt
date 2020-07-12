<template>
  <div class="container">
    <top-bar />
    <div class="banner">배너(삽입예정)</div>
    <div class="categories">
      <template v-for="row in [0, 1, 2]">
        <div class="category-row" :key="row">
          <template v-for="col in [0, 1, 2]">
            <div class="category-item" :key="col">
              <img :src="categories[row * 3 + col].imgSrc" alt="" />
              <span>{{ categories[row * 3 + col].name }}</span>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { categories } from '../temp/data'
import TopBar from '../components/TopBar'

export default {
  async asyncData() {
    return {
      categories,
    }
  },
  computed: {
    ...mapState({
      primaryAddress: (store) => store.primaryAddress,
    }),
  },
  layout: 'withbottombar',
  components: [TopBar],
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

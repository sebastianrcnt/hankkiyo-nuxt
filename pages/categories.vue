<template>
  <div class="container">
    <div class="top-bar">{{ currentCategoryName }}</div>
    <div class="tabs">
      <template v-for="(category, index) in categories">
        <div
          class="tab"
          :key="index"
          :class="{ active: currentCategoryName === category.name }"
          @click="currentCategoryName = category.name"
        >
          {{ category.name }}
        </div>
      </template>
    </div>
    <div class="stores">
      <template v-for="(store, index) in stores">
        <div
          class="store"
          v-if="currentCategoryName === store.category"
          :key="index"
          @click="$router.push(`/store/${store.name}`)"
        >
          <img :src="store.imgSrc" alt="" />
          <div class="store-info-bar">
            <span class="store-name">{{ store.name }}</span>
            <span class="store-best-menus">{{ store.bestMenus }}</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      categories: [],
      stores: [],
      currentCategoryName: this.$route.query.category || '치킨',
    }
  },
  created() {
    axios
      .get(process.env.API_URL + '/api/categories/')
      .then(({ data }) => {
        this.categories = data
      })
      .catch((err) => {
        console.error(err)
      })

    axios
      .get(process.env.API_URL + '/api/stores/')
      .then(({ data }) => {
        this.stores = data
      })
      .catch((err) => {
        console.error(err)
      })
  },
  layout: 'withbottombar',
}
</script>

<style lang="scss" scoped>
.container {
  @include expanded;

  .top-bar,
  .tabs {
    background: white;
    z-index: 100;
  }

  .top-bar {
    @include center;
    position: sticky;
    top: 0;
    height: 55px;
  }

  .tabs {
    @include flex(row, center, space-between);
    overflow-x: scroll;

    position: sticky;
    top: 55px;
    width: 100%;

    .tab {
      padding: 7px 7.5px;
      white-space: nowrap;
      flex-shrink: 0;
      font-weight: 300;
      font-size: 15px;
      color: #9a9a9a;
      border-bottom: 5px solid white;

      &.active {
        font-weight: 400;
        color: #383838;
        border-bottom-color: $mainColor;
      }
    }
  }

  .stores {
    width: 100vw;
    padding: 42px 25px;

    .store {
      width: 100%;
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0 3px 6px #00000029;
      margin-bottom: 31px;

      img {
        object-fit: cover;
        width: 100%;
        height: 155px;
        margin-bottom: 41px;
      }

      .store-info-bar {
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 41px;
        padding: 0 17.5px;

        @include flex(row, center, space-between);

        span.store-name {
          font-size: 15.5px;
          color: #383838;
        }

        span.store-best-menus {
          font-size: 10px;
          color: #9a9a9a;
        }
      }
    }
  }
}
</style>

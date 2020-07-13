<template>
  <div class="container">
    <div class="top-bar">
      <span>{{ store.name }}</span>
      <i class="fa fa-chevron-left"></i>
    </div>
    <!-- <div v-seen="loading" class="loading">
      <Spinner></Spinner>
    </div> -->
    <div class="store-image">
      <img :src="store.imgSrc" alt="" />
    </div>
    <h1 class="store-title">{{ store.name }}</h1>
    <div class="store-menus">
      <h2>메뉴</h2>
      <template v-for="(menu, index) in store.menus">
        <div class="menu" :key="index" @click="handleMenuClick(menu)">
          <div class="checkbox" :class="{ active: cart.includes(menu.abbr) }">
            <i class="fa fa-check"></i>
          </div>
          <span class="menu-name">
            {{ menu.name }}
          </span>
          <span class="menu-price"> + {{ insertCommas(menu.price) }} 원 </span>
        </div>
      </template>
    </div>
    <button
      class="order-button"
      :class="{ active: cart.length > 0 }"
      @click="handleOrderButtonClick()"
    >
      주문하기
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import Spinner from 'vue-spinner-component/src/Spinner.vue'
import _ from 'lodash'

export default {
  data() {
    return {
      store: {},
      cart: [], // list of selected menu's abbrs
    }
  },
  created() {
    axios.get('/api/stores').then(({ data }) => {
      const stores = data
      this.store = stores.find((store) => this.$route.params.name == store.name)
    })
  },
  computed: {
    loading() {
      return !!this.store
    },
  },
  methods: {
    insertCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    handleMenuClick(menu) {
      if (!this.cart.includes(menu.abbr)) {
        this.cart = [...this.cart, menu.abbr]
      } else {
        this.cart = this.cart.filter((menuAbbr) => {
          return menuAbbr !== menu.abbr
        })
      }
    },
    handleOrderButtonClick() {
      if (this.cart.length === 0) {
        alert('메뉴를 선택해주세요')
        return
      }
      const packet = JSON.stringify(
        this.cart.map((menuAbbr) => {
          return {
            menu: menuAbbr,
            destination: this.$store.getters.fullAddress,
          }
        })
      )
      axios
        .post('/api/orders/', packet, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((result) => {
          console.log(result)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          alert(`🐔죄송합니다 고객님,
아직 준비 중인 서비스 입니다.🙇‍♀️

아래 링크를 통해 설문에 참여해주시면 스타벅스 기프티콘을 포함한
✨3가지 혜택을 드리겠습니다.`)
          window.location = `https://forms.gle/Cr4xSvNfGtucAYBX7`
        })
      console.log(packet)
    },
  },
  components: {
    Spinner,
  },
}
</script>

<style lang="scss" scoped>
.container {
  @include expanded;

  .top-bar {
    @include top-bar(55px);
    i {
      position: absolute;
      left: 18px;
      color: grey;
    }

    span {
      font-size: 16px;
    }
  }

  .loading {
    width: 100px;
    height: 100px;
    @include center;

    position: fixed;
    top: calc(50vh - 50px);
    left: calc(50vw - 50px);
  }

  .store-image {
    width: 100%;
    height: 172px;

    img {
      @include expanded;
      object-fit: cover;
    }
  }

  h1.store-title {
    @include expanded;
    padding: 27px;
    font-size: 20px;
    color: #383838;
    font-weight: 600;
    margin: 0;

    border-bottom: 1px solid #ddd;
  }

  .store-menus {
    padding: 27px;
    margin-bottom: 66px;

    h2 {
      font-size: 15px;
      color: #383838;
      padding-bottom: 27px;
      margin: 0;
    }

    .menu {
      @include flex(row, center, flex-start);
      margin-bottom: 30px;

      .checkbox {
        width: 21px;
        height: 21px;
        @include center;
        background: #cecece;
        color: white;
        border-radius: 2.5px;

        &.active {
          background: $mainColor;
        }
      }

      span {
        color: #383838;
      }
      span.menu-name {
        font-size: 14px;
        margin-left: 12.64px;
      }

      span.menu-price {
        font-size: 13px;
        margin-left: auto;
        font-weight: 300;
      }
    }
  }

  button.order-button {
    width: calc(100% - 54px);
    margin-left: 27px;
    margin-right: 27px;
    position: fixed;
    color: $mainColor;
    font-size: 17px;
    background: white;
    bottom: 25px;
    height: 41px;
    border-radius: 3px;

    border: 1px solid $mainColor;
    outline: none;

    &.active {
      background-color: $mainColor;
      color: white;
    }
  }
}
</style>

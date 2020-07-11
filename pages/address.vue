<template>
  <div class="address">
    <h1>주소를 입력해주세요</h1>
    <div @click="setAddress()" class="search">
      <span>{{ address || '건물명, 도로명 또는 지번으로 검색' }}</span>
    </div>
    <input
      class="second-address"
      type="text"
      v-model="detailedAddress"
      v-bind:placeholder="detailedAddress || '상세주소 입력'"
      v-on:change="setDetailedAddress()"
    />
    <div
      class="next-button"
      @click="handleNextButtonClick()"
      v-bind:class="{ active: isFilled }"
    >
      저장하기
    </div>
    <Modal
      v-bind:visible="isModalVisible"
      @close="hideModal()"
      imgSrc="images/angry-chicken.png"
      message="주소를 입력하세요 😠"
    />
  </div>
</template>

<script>
import Modal from '../components/Modal'

export default {
  data() {
    return { detailedAddress: '', isModalVisible: false }
  },
  created() {
    this.detailedAddress = this.$store.state.detailedAddress || ''
  },
  methods: {
    setAddress() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          this.$store.commit('setAddress', data.address)
        },
      }).open()
    },
    setDetailedAddress() {
      this.$store.commit('setDetailedAddress', this.detailedAddress)
    },
    handleNextButtonClick() {
      if (this.isFilled) {
        this.$router.push('/main')
      } else {
        this.showModal()
      }
    },
    showModal() {
      this.isModalVisible = true
    },
    hideModal() {
      this.isModalVisible = false
    },
  },
  computed: {
    address() {
      return this.$store.state.address
    },
    isFilled() {
      return !!(this.detailedAddress && this.address)
    },
  },
  components: {
    Modal,
  },
}
</script>

<style lang="scss" scoped>
.address {
  @include expanded;
  padding: 0 25px;
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: left;
}

h1 {
  font-size: 22px;
}

.search {
  height: 46px;
  background-color: rgba(128, 128, 128, 0.15);
  border-radius: 5px;

  margin-top: 25px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  /* padding: 0 12.27px; */

  i {
    color: #cecece;
  }

  span {
    margin-left: 28.31px;
    color: #9a9a9a;
  }
}

input.second-address {
  outline: none;
  border: #cecece 1px solid;
  border-radius: 5px;
  padding: 10px;
  color: #9a9a9a;
  height: 46px;
  -webkit-appearance: none;
  &::placeholder {
    color: #9a9a9a;
  }

  width: 100%;
  margin-top: 15px;

  @include flex-container;
}

.next-button {
  @include flex-container;
  font-size: 16px;
  width: calc(100% - 52px);
  height: 41px;
  border-radius: 5px;

  color: $mainColor;
  background-color: white;
  border: 1px solid $mainColor;

  transition: color 0.4s ease, background-color 0.4s ease;

  position: absolute;
  bottom: 30px;

  &.active {
    color: white;
    background-color: $mainColor;
  }
}
</style>

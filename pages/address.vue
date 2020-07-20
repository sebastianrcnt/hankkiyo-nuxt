<template>
  <div class="container">
    <i
      v-if="$route.query.hasBackButton"
      class="fa fa-angle-left back-button"
      @click="$router.push('/home')"
    ></i>
    <h1>주소를 입력해주세요</h1>
    <div
      class="primary-address"
      @click="promptDaumAddress()"
    >{{ primaryAddress.address || '건물명, 도로명 또는 지번으로 검색' }}</div>
    <input
      class="secondary-address"
      type="text"
      placeholder="상세주소 입력"
      @input="handleSecondaryAddressFieldChange"
      :value="secondaryAddress"
    />
    <button class="save-button" @click="handleSaveButtonClick()">저장하기</button>
    <Modal
      v-bind:visible="isModalVisible"
      @close="hideModal()"
      imgSrc="images/angry-chicken.png"
      message="주소를 입력하세요 😠"
    />
    <img src="images/arrow-chicken-left.png" alt class="arrow-chicken-left" />
  </div>
</template>

<script>
import Modal from '../components/Modal'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      primaryAddress: (state) => state.primaryAddress,
      secondaryAddress: (state) => state.secondaryAddress,
    }),
  },
  data: () => ({
    isModalVisible: false,
  }),
  methods: {
    promptDaumAddress() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          this.$store.commit('setPrimaryAddress', data)
        },
      }).open()
    },
    handleSecondaryAddressFieldChange(event) {
      this.$store.commit('setSecondaryAddress', event.target.value)
    },
    handleSaveButtonClick() {
      if (this.primaryAddress && this.secondaryAddress) {
        this.$router.push('/home')
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
  components: {
    Modal,
  },
}
</script>

<style lang="scss" scoped>
.container {
  @include expanded;
  @include flex(column, left, flex-start);

  i.back-button {
    position: fixed;
    top: 18px;
    left: 0px;
    width: 30px;
    height: 30px;
    font-size: 25px;
    color: grey;
  }

  & > * {
    @include side-margin(25px);
  }

  h1 {
    font-size: 22px;
    margin-top: 70px;
  }

  .primary-address {
    @include flex(row, center, center);
    height: 46px;
    background-color: rgba(128, 128, 128, 0.15);
    border-radius: 5px;
    margin-top: 25px;
    color: #9a9a9a;
  }

  input.secondary-address {
    @include center;

    outline: none;
    border: #cecece 1px solid;
    border-radius: 5px;
    color: #9a9a9a;
    height: 46px;
    text-align: center;
    font-size: 1rem;
    -webkit-appearance: none;
    &::placeholder {
      color: #9a9a9a;
    }

    margin-top: 15px;
  }

  button.save-button {
    @include center;
    font-size: 16px;
    width: calc(100% - 52px);
    height: 41px;
    border-radius: 5px;
    outline: none;

    color: $mainColor;
    background-color: white;
    border: 1px solid $mainColor;

    transition: color 0.4s ease, background-color 0.4s ease;

    position: fixed;
    bottom: 30px;

    &.active {
      color: white;
      background-color: $mainColor;
    }
  }

  img.arrow-chicken-left {
    position: absolute;
    top: 60px;
    right: 20px;

    height: 50px;
    object-fit: contain;
  }
}
</style>

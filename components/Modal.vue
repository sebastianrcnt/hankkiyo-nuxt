<template>
  <div class="modal-filter" v-bind:class="{ show: visible }" @click="close()">
    <div class="modal" v-if="visible">
      <img v-bind:src="imgSrc" alt="boom" />
      <span v-html="parsedMessage"></span>
      <div class="close-button">확인</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    imgSrc: String,
    visible: Boolean,
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
  computed: {
    parsedMessage() {
      return this.message.split('\\n').join('<br />')
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-filter {
  position: fixed;
  width: 100%;
  height: 100%;
  /* visibility: collapse; */

  top: 0;
  left: 0;
  @include flex-container;
  z-index: -1;

  &.show {
    animation: blurContainer 0.3s ease-in-out forwards;
    z-index: 1;

    .modal {
      animation: blurModalIn 0.3s ease-in-out forwards;
    }

    @keyframes blurModalIn {
      from {
        opacity: 0;
        transform: scale(0/8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  .modal {
    $width: 263px;
    $height: 325px;

    width: $width;
    height: $height;

    position: fixed;

    top: calc(50% - #{$height/2});
    left: calc(50% - #{$width/2});

    border-radius: 15px;
    background: white;

    box-shadow: 0px 5px 7px #00000029;
    opacity: 0;
    transform: scale(0.8);
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 132px;
      height: 132px;
    }

    span {
      margin-top: 20px;
      line-height: 1.2rem;
    }

    .close-button {
      width: 126px;
      height: 41px;

      border-radius: 3px;
      background-color: $mainColor;

      color: white;
      font-size: 15px;
      margin-top: 28px;

      @include flex-container;
    }
  }

  @keyframes blurContainerIn {
    to {
      backdrop-filter: blur(5px);
    }
  }
}
</style>

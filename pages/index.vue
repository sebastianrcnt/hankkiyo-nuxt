<template>
  <div class="container">
    <img
      src="images/landing-page.png"
      alt=""
      @click="$router.push('/address')"
    />
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.container {
  img {
    width: 100%;
  }

  .frame {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: brightness(0%);

    @include center;
    img {
      width: 200px;
      height: 200px;
      object-fit: contain;
    }
  }
}
</style>

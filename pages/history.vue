<template>
  <div class="container">
    <img src="images/crying-chicken.png"/>
    <span>주문내역이 없습니다 😭</span>
  </div>
</template>

<script>
export default {
  layout: 'withbottombar',
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100vw;
  @include center;
  @include flex(column, center, center);
  
  img {
    width: 12rem;
    height: 12rem;
    margin-bottom: 30px;
  }

  span {
    font-weight: 2.5rem;
    color: grey;
  }
}
</style>

<template>
  <div class="root">
    <Nuxt class="content" />
    <div class="bottom-bar">
      <div class="item" @click="$router.push('/home')">
        <span class="material-icons">home</span>
        <span>홈</span>
      </div>
      <div class="item">
        <span class="material-icons">article</span>
        <span>주문내역</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  margin-bottom: 60px;
}

.bottom-bar {
  width: 100%;
  height: 55px;

  position: fixed;
  bottom: 0px;
  background: white;

  @include flex(row, center, center);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);

  .item {
    flex: 1;
    @include flex(column, center, center);
    color: $mainColor;
    span.material-icons {
      font-size: 2rem;
    }

    span {
      font-size: 0.5rem;
    }
  }
}
</style>

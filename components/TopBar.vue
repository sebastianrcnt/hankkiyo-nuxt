<template>
  <div class="top-bar" @click="$router.push('/address?hasBackButton=true')">
    <span>{{
      $store.state.primaryAddress.address || '주소를 입력해 주세요'
    }}</span>
    <i class="fa fa-angle-down"></i>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.top-bar {
  @include top-bar(45px);

  i {
    @include center;
    margin-left: 10px;
    border-radius: 10px;
    width: 20px;
    height: 20px;
    background: $mainColor;
    color: white;
  }
}
</style>

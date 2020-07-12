<template>
  <div class="container">
    <div class="tabs">
      <div class="tab-selectors"></div>
      <div class="tab-selectors"></div>
    </div>
  </div>
</template>

<script>
import TopBar from '../components/TopBar.vue'
export default {
  layout: 'withbottombar',
  components: { TopBar },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.container {
  @include expanded;
  @include flex(column, flex-start, flex-start);

  .tab-container {
    width: 100%;
    & > * {
      width: 100%;
    }

    .tabs-titles {
      overflow-x: scroll;
      .title-item {
        width: 100px;
      }
    }
  }
}
</style>

<template>
  <div class="row">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'RowSection',
};
</script>

<style lang="stylus" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
</style>

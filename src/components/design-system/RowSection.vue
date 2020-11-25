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
@import '../../styles/flexbox.styl';

.row {
  flexboxWrap(wrap);
}
</style>

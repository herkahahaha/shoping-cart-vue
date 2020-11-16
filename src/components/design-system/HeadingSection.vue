<template>
  <div class="heading">
    <h1 class="heading__h1">
      <slot />
    </h1>
    <hr class="heading__line" />
  </div>
</template>

<script>
export default {
  name: 'HeadingSection',
};
</script>

<style lang="stylus" scoped>
@import '../../styles/theme.styl';

.heading {
  &__h1 {
    font-size: 36px;
    line-height: 44px;
    font-weight: 500;
    color: $orangePrimary;
    margin-bottom: -22px;
    margin-top: 0px;
    text-align: left;
  }

  &__line {
    height: 8px;
    min-width: 300px;
    width: 100%;
    background: $lightGrey;
    border: none;
    z-index: 12;
  }
}
</style>

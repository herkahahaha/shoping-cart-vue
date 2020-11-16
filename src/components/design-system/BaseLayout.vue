<template>
  <div class="base base-layout">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseLayout',
};
</script>

<style lang="stylus" scoped>
@import '../../styles/theme.styl';

.base {
  max-width: 1100px;

  +media-breakpoint-down($xl) {
    max-width: 960px;
  }

  +media-breakpoint-down($lg) {
    max-width: 720px;
  }

  +media-breakpoint-down($md) {
    max-width: 540px;
  }

  +media-breakpoint-down($sm) {
    max-width: 100%;
  }

  &-layout {
    margin: 0 auto;
  }
}
</style>

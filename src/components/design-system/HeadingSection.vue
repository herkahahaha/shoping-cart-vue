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
    title(2.25rem);
  }

  &__line {
    lines(300px);
  }
}
</style>

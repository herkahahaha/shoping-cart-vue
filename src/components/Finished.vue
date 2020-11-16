<template>
  <div class="finished">
    <div class="finished__wrap">
      <heading-section class="finished__heading">Thank you</heading-section>
      <div class="finished__order-id">ORDER ID: XXKYB</div>
      <p class="finished__info">
        Your order will be delivered today with GO-SEND
      </p>
      <button type="button" class="finished__btn" @click="reset">
        <span class="material-icons finished__btn__icon">
          keyboard_backspace
        </span>
        Go to homepage
      </button>
    </div>
  </div>
</template>

<script>
import HeadingSection from './design-system/HeadingSection.vue';

export default {
  name: 'Finished',
  components: {
    HeadingSection,
  },
  props: ['reset'],
};
</script>

<style lang="stylus" scoped>
@import '../styles/theme.styl';

.finished {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;

  &__wrap {
    text-align: left;
  }

  &__heading {
    margin-bottom: 24px;
  }

  &__order-id {
    margin-bottom: 9px;
    font-weight: 400;
    font-size: 14px;
    color: $originBlack;
  }

  &__info {
    margin-bottom: 60px;
    font-weight: 400;
    font-size: 14px;
  }

  &__btn {
    font-weight: 500;
    font-size: 14px;
    color: $dark;
    mix-blend-mode: normal;
    opacity: 0.6;
    outline: none;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
    }

    &__icon {
      margin-right: 4px;
    }
  }
}
</style>

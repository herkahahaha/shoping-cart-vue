<template>
  <div :class="['select__item', { select__item__selected: selected }]">
    <div class="select__item-p">
      <div
        :class="[
          'select__item__name',
          { 'select__item__name__no-value': !option.value },
        ]"
      >
        {{ option.name }}
      </div>
      <div v-if="option.value" class="select__item__value">
        {{ option.value }} <span v-if="option.name === 'e-Wallet'"> </span>
      </div>
      <span v-if="selected" class="select__item__icon material-icons"
        >check</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectedSection',
  // props: ['option', 'selected'],
  props: {
    option: {
      type: [String, Object],
      default: () => {},
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../../styles/theme.styl';

.select__item {
  border: 2px solid $lightGrey;
  max-width: 180px;
  width: 100%;
  margin: 0 10px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;

  +media-breakpoint-down($md) {
    max-width: 100%;
    margin-bottom: 12px;
  }

  &__selected {
    background-color: rgba(27, 217, 123, 0.1);
    border: 2px solid $successGreen;

    .select__item__name {
      opacity: 0.8;
    }

    .select__item__value {
      opacity: 1;
    }
  }

  &-p {
    padding: 12px 15px;
  }

  &__name {
    font-weight: 500;
    font-size: 13px;
    mix-blend-mode: normal;
    opacity: 0.6;
    margin-bottom: 2px;

    &__no-value {
      font-size: 16px;
      padding-top: 9px;
    }
  }

  &__value {
    font-weight: bold;
    font-size: 16px;
    color: $darkNavy;
    mix-blend-mode: normal;
    opacity: 0.6;
  }

  &__icon {
    position: absolute;
    top: 21px;
    right: 15px;
    font-size: 18px;
    color: $successGreen;
  }
}
</style>

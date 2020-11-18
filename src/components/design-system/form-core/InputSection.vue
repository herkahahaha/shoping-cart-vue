<template>
  <div class="input">
    <input
      :class="[
        'input__section',
        {
          input__section__invalid: invalid && touched,
          input__section__success: !invalid && touched,
        },
      ]"
      :type="type"
      :name="name"
      :placeholder="label"
      :maxlength="maxLength"
      :minlength="minLength"
      v-model="inputValue"
    />
    <label class="input__label">{{ label }}</label>
    <!-- icons validation -->
    <span v-if="invalid && touched" class="input__icon material-icons"
      >close</span
    >
    <span v-if="!invalid && touched" class="input__icon material-icons"
      >check</span
    >
  </div>
</template>

<script>
export default {
  name: 'InputSection',
  // props: [
  //   'type',
  //   'name',
  //   'label',
  //   'value',
  //   'invalid',
  //   'touched',
  //   'maxLength',
  //   'minLength',
  // ],
  props: {
    type: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: 'Name',
    },
    label: {
      type: String,
      default: 'Label',
    },
    value: {
      type: String,
      default: '',
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    touched: {
      type: Boolean,
      default: false,
    },
    maxLength: {
      type: Number,
      default: NaN,
    },
    minLength: {
      type: Number,
      default: NaN,
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('model', val);
      },
    },
  },
};
</script>

<style lang="stylus">
@import '../../../styles/theme.styl';
@import '../../../styles/flexbox.styl';

.input {
  position: absolute;
  text-align: left;
  flexboxColomnReverse(column-reverse);

  &__section {
    position: relative;
    border: 1px solid $lightGrey;
    max-width: 100%;
    cursor: text;
    padding: 25px 24px 15px 15px;
    box-sizing: border-box;
    font-size: 1rem;
    width: 300px;

    +media-breakpoint-down($md) {
      width: 100%;
      max-width: 100%;
    }

    &:focus {
      outline: none;
      opacity: 1;
    }

    &__invalid {
      border-color: $orangePrimary;

      &~^[0] {
        &__label, &__icon {
          color: $orangePrimary;
        }
      }
    }

    &__success {
      border-color: $successGreen;

      &~^[0] {
        &__label, &__icon {
          color: $successGreen;
        }
      }
    }

    // animation for label
    // anime(from, to, scale, valOpa)
    &:placeholder-shown + .input__label {
      font-size: 1rem;
      white-space: nowrap;
      overflow: hidden;
      anime(15px, 40px, 1.23, 0);
    }

    &:not(:placeholder-shown) + .input__label, &:focus + .input__label {
      anime(10px, 19px, 1, 1);
      cursor: pointer;
    }
  }

  &__icon {
    position: absolute;
    right: 15px;
    bottom: 21px;
    font-size: 1rem;
  }

  &__label {
    font-size: 1rem;
    opacity: 0.2;
  }

  &__input, &__label {
    transition: all 0.2s;
    touch-action: manipulation;
  }
}
</style>

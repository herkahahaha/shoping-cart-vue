<template>
  <div class="delivery">
    <!-- row -->
    <row-section class="delivery-section section">
      <div class="section__header">
        <heading-section>Delivery Detail</heading-section>
      </div>
      <!-- checkbox droopshiper -->
      <div class="section__checkbox checkbox">
        <input
          class="checkbox__input"
          type="checkbox"
          name="dropshipper"
          id="theDropshipper"
          @change="onSubmit"
          v-model="dropshipperStatus"
        />
        <label class="checkbox__label" for="theDropshipper"
          >Send as Dropshiper</label
        >
      </div>
    </row-section>
    <!-- form -->
    <form class="delivery-form form" @input="onSubmit">
      <div class="form__input input">
        <row-section class="row">
          <!-- has colomn 7 -->
          <div class="input__delevery">
            <input-section
              type="email"
              name="email"
              label="Email"
              :value="$v.form.email.$model"
              :invalid="$v.form.email.$error"
              :touched="$v.form.email.$dirty"
              @model="$v.form.email.$model = $event"
            />
            <input-section
              type="text"
              name="phone"
              label="Phone Number"
              :maxLength="20"
              :minLength="6"
              :value="$v.form.phone.$model"
              :invalid="$v.form.phone.$error"
              :touched="$v.form.phone.$dirty"
              @model="$v.form.phone.$model = $event"
            />
            <textarea-section
              type="text"
              maxLength="120"
              name="delivery address"
              label="Delivery Address"
              :value="$v.form.address.$model"
              :invalid="$v.form.address.$error"
              :touched="$v.form.address.$dirty"
              @model="$v.form.address.$model = $event"
            />
          </div>
          <!-- If Dropshipper -->
          <!-- has colomn 5 -->
          <div v-if="dropshipperStatus" class="input__dropshipper">
            <input-section
              type="name"
              name="dropshipper name"
              label="Dropshipper Name"
              :value="$v.form.dropshipper.name.$model"
              :invalid="$v.form.dropshipper.name.$error"
              :touched="$v.form.dropshipper.name.$dirty"
              @model="$v.form.dropshipper.name.$model = $event"
            />
            <input-section
              type="text"
              name="phone"
              label="Dropshipper Phone Number"
              :maxLength="20"
              :minLength="6"
              :value="$v.form.dropshipper.phone.$model"
              :invalid="$v.form.dropshipper.phone.$error"
              :touched="$v.form.dropshipper.phone.$dirty"
              @model="$v.form.dropshipper.phone.$model = $event"
            />
          </div>
        </row-section>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable operator-linebreak */

import { required } from '@vuelidate/validators';
import HeadingSection from './design-system/HeadingSection.vue';
import RowSection from './design-system/RowSection.vue';
import InputSection from './design-system/form-core/InputSection.vue';
import TextareaSection from './design-system/form-core/TextareaSection.vue';

export default {
  name: 'DeliveryDetail',
  components: {
    HeadingSection,
    InputSection,
    TextareaSection,
    RowSection,
  },
  data() {
    return {
      dropshipperStatus: false,
      form: {
        email: '',
        phone: '',
        address: '',
        dropshipper: {
          name: '',
          phone: '',
        },
      },
    };
  },
  validations: {
    form: {
      email: {
        required,
      },
      phone: {
        required,
        // getPhoneNumber(value) {
        //   if (!value) return '';
        //   if (value[0] === '0') return value.substr(1);
        //   if (value[0] === '+') return value.substr(3);
        //   return value;
        // },
        invalidPhone(phone) {
          const regex = new RegExp(
            /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
          );
          return regex.test(phone);
        },
      },
      address: {
        required,
      },
      dropshipper: {
        name: {},
        phone: {
          invalidPhone(phone) {
            const regex = new RegExp(
              /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
            );
            return regex.test(phone);
          },
        },
      },
    },
  },
  methods: {
    onSubmit() {
      // validation
      const getValid1 =
        this.form.name !== '' &&
        this.form.phone !== '' &&
        this.form.address !== '';
      const getValid2 = this.dropshipperStatus
        ? this.form.dropshipper.name !== '' &&
          this.form.dropshipper.phone !== ''
        : !this.dropshipperStatus;

      // submit data input
      this.$emit('update', {
        data: {
          email: this.form.email,
          phone: this.form.phone,
          address: this.form.address,
          dropshipper: {
            name: this.form.dropshipper.name,
            phone: this.form.dropshipper.phone,
          },
        },
        valid: !this.$v.$invalid && getValid1 && getValid2,
      });
    },
  },
};
</script>

<style lang='stylus'>
@import '../styles/theme.styl';

.delivery {
  &-section {
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    // checkbox for dropshiper
    &__checkbox, .checkbox {
      height: 22px;

      +media-breakpoint-down($md) {
        margin-top: 24px;
      }

      &__input {
        position: absolute;
        left: -9999px;
      }

      &__input:not(:checked) + .checkbox__label:after {
        opacity: 0;
        transform: scale(0);
      }

      &__input:checked + .checkbox__label:after {
        opacity: 1;
        transform: scale(1);
      }

      &__input:checked + .checkbox__label:before {
        border-color: $successGreen;
      }

      &__label {
        position: relative;
        padding-left: 30px;
        cursor: pointer;
        color: $darkNavy;
        font-weight: 500;
        font-size: 14px;
        opacity: 0.8;

        &:before {
          content: '';
          position: absolute;
          left: 0px;
          top: -2px;
          width: 18px;
          height: 18px;
          border: 2px solid $lightGrey;
          transition: all 0.2s;
        }

        &:after {
          font-family: 'Material Icons';
          content: 'check';
          line-height: 18px;
          font-size: 18px;
          width: 18px;
          height: 18px;
          position: absolute;
          top: 0px;
          left: 2px;
          display: inline-block;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: $darkNavy;
          transition: all 0.2s;
        }
      }
    }
  }

  &-form {
    padding: 0 10px;

    .input__delevery {
      margin-right: 35px;

      &__delevery {
        max-width: 60%;
        width: 100%;

        +media-breakpoint-down($md) {
          max-width: 100%;
        }
      }

      &__dropshipper {
        max-width: 40%;
        width: 100%;

        +media-breakpoint-down($md) {
          max-width: 100%;
        }
      }
    }
  }
}
</style>

<template>
  <div class="summary">
    <h2 class="summary__heading">Summary</h2>
    <div class="summary__count">10 items purchased</div>

    <div v-if="checkoutForm.shipment" class="summary__info delivery">
      <hr class="summary__info__line" />
      <div class="summary__info__label">Delivery estimation</div>
      <div class="summary__info__value">
        today by {{ checkoutForm.shipment.name }}
      </div>
    </div>

    <div v-if="checkoutForm.payment" class="summary__info payment">
      <hr class="summary__info__line" />
      <div class="summary__info__label">Payment method</div>
      <div class="summary__info__value">{{ checkoutForm.payment.name }}</div>
    </div>

    <div class="summary__detail cost">
      <row-section class="cost__row">
        <div class="cost__label">Cost of goods</div>
        <div class="cost__value">{{ currency(goodsValue) }}</div>
      </row-section>
      <row-section
        v-if="checkoutForm.dropshipper && checkoutForm.dropshipper.name"
        class="cost__row"
      >
        <div class="cost__label">Dropshipping Fee</div>
        <div class="cost__value">{{ currency(5900) }}</div>
      </row-section>
      <row-section v-if="checkoutForm.shipment" class="cost__row">
        <div class="cost__label">
          <span class="cost__label--bold">{{
            checkoutForm.shipment.name
          }}</span>
        </div>
        <div class="cost__value">
          {{ currency(checkoutForm.shipment.value) }}
        </div>
      </row-section>
      <row-section class="summary__total">
        <div class="summary__total__label">Total</div>
        <div class="summary__total__value">{{ currency(totalPayment) }}</div>
      </row-section>

      <button
        type="button"
        v-if="!isLastStep"
        class="summary__btn"
        @click="handleClick"
        :disabled="!allowNext"
      >
        {{
          status !== 2
            ? 'Continue Payment'
            : `Pay with ${
                checkoutForm.payment ? checkoutForm.payment.name : '?'
              }`
        }}
      </button>
    </div>
  </div>
</template>

<script>
import RowSection from './design-system/RowSection.vue';

export default {
  name: 'TotalSummary',
  components: {
    RowSection,
  },
  props: ['status', 'isLastStep', 'handleClick', 'checkoutForm', 'allowNext'],
  data() {
    return {
      goodsValue: 500000,
    };
  },
  computed: {
    totalPayment() {
      let totalPrice = this.goodsValue;
      const { dropshipper, shipment } = this.checkoutForm;
      if (dropshipper && dropshipper.name) {
        totalPrice += 5900;
      }
      if (shipment) {
        totalPrice += shipment.value;
      }

      return totalPrice;
    },
  },
  methods: {
    currency(value) {
      const val = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return val;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../styles/theme.styl';

.summary {
  text-align: left;
  padding: 10px 0px 0px 20px;
  box-sizing: border-box;
  border-left: 1px solid rgba(253, 140, 63, 0.2);
  position: relative;
  min-height: 500px;

  +media-breakpoint-down($md) {
    padding: 10px 0px;
    border: none;
  }

  &__heading {
    color: $orangePrimary;
    font-size: 24px;
    margin-bottom: 10px;
  }

  &__info {
    &__line {
      margin: 21px 0;
      max-width: 80px;
      border: 1px solid $Grey;
    }

    &__label {
      font-weight: 400;
      font-size: 14px;
      color: $originBlack;
      margin-bottom: 4px;
    }

    &__value {
      font-weight: 500;
      color: $successGreen;
      font-size: 16px;
    }
  }

  &__detail {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 20px;

    +media-breakpoint-down($md) {
      left: 0px;
    }
  }

  .cost {
    color: $dark;
    font-size: 14px;

    &__row {
      justify-content: space-between;
      margin-bottom: 12px;
    }

    &__label {
      mix-blend-mode: normal;
      opacity: 0.6;

      &--bold {
        font-weight: bold;
      }
    }

    &__value {
      font-weight: bold;
    }
  }

  &__total {
    justify-content: space-between;
    margin-top: 24px;
    font-weight: bold;
    color: $orangeOrigin;
    font-size: 24px;
    margin-bottom: 10px;
  }

  &__btn {
    background: $orangePrimary;
    padding: 20px;
    color: $light;
    outline: none;
    width: 100%;
    border: none;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }
}
</style>

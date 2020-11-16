<template>
  <div class="payment">
    <!-- row -->
    <row-section class="payment__row row">
      <div class="payment_header row-padding">
        <heading-section>Shipment</heading-section>
      </div>
    </row-section>
    <!-- Shipment -->
    <div class="payment__shipment payment__shipment">
      <Select
        @setvalue="setShipment"
        :options="shipment"
        :selectedValue="getShipment"
      />
    </div>
    <row-section class="payment__row row">
      <div class="payment_header row-padding">
        <heading-section>Payment</heading-section>
      </div>
    </row-section>
    <!-- payment -->
    <div class="payment__via payment__via">
      <Select
        @setvalue="setPayment"
        :options="payment"
        :selectedValue="paymentVia"
      />
    </div>
  </div>
</template>

<script>
import { required } from '@vuelidate/validators';
import HeadingSection from './design-system/HeadingSection.vue';
import RowSection from './design-system/RowSection.vue';
import Select from './design-system/Select.vue';

export default {
  name: 'Payment',
  components: {
    HeadingSection,
    RowSection,
    Select,
  },
  data() {
    return {
      getShipment: '',
      paymentVia: '',
      shipment: [
        {
          id: 1,
          name: 'GO-SEND',
          value: 15000,
        },
        {
          id: 2,
          name: 'JNE',
          value: 9000,
        },
        {
          id: 3,
          name: 'Personal Courier',
          value: 29000,
        },
      ],
      payment: [
        {
          id: 1,
          name: 'e-Wallet',
          value: 1500000,
        },
        {
          id: 2,
          name: 'Bank Transfer',
          value: null,
        },
        {
          id: 3,
          name: 'Virtual Account',
          value: null,
        },
      ],
    };
  },
  validations: {
    form: {
      shipment: {
        required,
      },
      payment: {
        required,
      },
    },
  },
  methods: {
    // shipment
    setShipment(items) {
      this.getShipment = items;
      const validData = this.getShipment !== '' && this.getShipment !== '';
      this.$emit('update', {
        data: {
          shipment: this.getShipment,
        },
        validData,
      });
    },

    // payment
    setPayment(items) {
      this.paymentVia = items;
      const validData = this.getShipment !== '' && this.paymentVia !== '';
      this.$emit('update', {
        data: {
          payment: this.paymentVia,
        },
        validData,
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.payment {
  &__row .row {
    &-padding {
      padding: 30px 10px;
    }
  }

  &__shipment {
    margin-bottom: 30px;
  }

  &__via {
    margin-bottom: 30px;
  }
}
</style>

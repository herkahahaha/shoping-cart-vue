<template>
  <base-layout>
    <!-- Progress-bar -->
    <row-section>
      <progress-bar :status="status" :actived="currentState" />
    </row-section>
    <!-- Shoping Cart -->
    <card-section :state="currentState" :handleClick="toTheBack">
      <row-section class="row">
        <div class="section__change">
          <keep-alive>
            <component
              :is="nextSteps"
              :reset="resetState"
              ref="nextSteps"
              @update="fetchData"
            />
          </keep-alive>
        </div>
        <!-- total cart -->
        <total-sumary
          class="section__summary"
          :isLastStep="lastStep"
          :handleClick="toTheNext"
          :checkoutForm="form"
          :allowNext="goNext"
          :status="currentState"
        />
      </row-section>
    </card-section>
  </base-layout>
</template>

<script>
import CardSection from './components/CardSection.vue';
import DeliveryDetail from './components/DeliveryDetail.vue';
import Finished from './components/Finished.vue';
import Payment from './components/Payment.vue';
import TotalSumary from './components/TotalSumary.vue';
import BaseLayout from './components/design-system/BaseLayout.vue';
import RowSection from './components/design-system/RowSection.vue';
import ProgressBar from './components/design-system/ProgressBar.vue';

export default {
  name: 'App',
  components: {
    CardSection,
    BaseLayout,
    RowSection,
    ProgressBar,
    TotalSumary,
  },
  data() {
    return {
      currentState: 1,
      goNext: false,
      chapterStep: [DeliveryDetail, Payment, Finished],
      form: {
        email: '',
        phone: null,
        address: '',
        dropshipper: {
          name: '',
          phone: null,
        },
        shipment: null,
        payment: null,
      },
      status: [
        {
          id: 1,
          name: 'Delivery',
        },
        {
          id: 2,
          name: 'Payment',
        },
        {
          id: 3,
          name: 'Finish',
        },
      ],
    };
  },
  computed: {
    nextSteps() {
      return this.chapterStep[this.currentState - 1];
    },
    lastStep() {
      return this.currentState === 3;
    },
  },
  methods: {
    toTheNext() {
      this.currentState += 1;
      this.goNext = !this.$refs.nextSteps.$v.$invalid;
    },
    toTheBack() {
      this.currentState -= 1;
      this.goNext = !this.goNext;
    },
    resetState() {
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    },
    fetchData(item) {
      Object.assign(this.form, item.data);
      this.goNext = item.valid;
    },
  },
};
</script>

<style lang='stylus'>
@import './styles/theme.styl';

html {
  background-color: $lightPink;

  a {
    text-decoration: none;
    color: $dark;
    font-weight: 500;
    font-size: 1rem;
  }
}

.row {
  .section__change {
    width: 75%;

    +media-breakpoint-down($md) {
      width: 100%;
    }
  }

  .section__summary {
    width: 25%;

    +media-breakpoint-down($md) {
      width: 100%;
    }
  }
}
</style>

<template>
  <div class="basic-card card">
    <div class="card-body">
      <div v-if="state !== 3" class="card-nav">
        <button
          href="/"
          class="card-action"
          @click="handleClick"
          :disabled="state.length < 2"
        >
          ← back to {{ state === 1 ? 'cart' : 'delivery' }}
        </button>
      </div>
      <div class="card-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSection',
  // props: ['state', 'handleClick'],
  props: {
    state: {
      type: Number,
      default: NaN,
    },
    handleClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../styles/theme.styl';
@import '../styles/flexbox.styl';

.basic-card {
  background-color: $light;
  box-shadow: 2px 4px $lightGrey;
  max-width: 100%;
  // height: 80vh;
  margin: 0 0 40px;

  .card-body {
    padding: 20px;

    .card-nav {
      width: 100%;

      .card-action {
        flexboxCenter(center);
        font-size: 1.25rem;
        opacity: 0.6;
        margin: 10px 0 0;
        transition: all 0.2s;
        outline: none;
        background: none;
        border: none;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>

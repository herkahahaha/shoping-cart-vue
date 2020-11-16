<template>
  <div class="progress">
    <div
      v-for="data in status"
      :class="['progress-bar', { 'progress-bar-actived': data.id <= actived }]"
      :key="data.id"
    >
      <div class="progress-bar__id">{{ data.id }}</div>
      <div class="progress-bar__title">{{ data.name }}</div>
      <span
        v-if="data.id < status.length"
        class="progress-bar__arrow material-icons"
        >keyboard_arrow_right</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'progress',
  props: ['status', 'actived'],
};
</script>

<style lang='stylus'>
@import '../../styles/theme.styl';

.progress {
  display: flex;
  justify-content: center;
  background-color: $lightPink;
  color: $orangePrimary;
  border-radius: 35px;
  padding: 28px;
  transform: translateY(35px);
  margin: 0 auto;

  &-bar {
    display: flex;
    justify-content: center;
    align-items: center;

    &__id {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      background: rgba(253, 140, 63, 0.2);
      border-radius: 100%;
      margin: 0 10px;

      +media-breakpoint-down($sm) {
        display: none;
      }
    }

    &-actived {
      .progress-bar {
        &__id {
          background: $orangePrimary;
          color: $light;
        }

        &__title {
          +media-breakpoint-down($sm) {
            font-weight: bold;
          }
        }
      }
    }

    &__arrow {
      margin-left: 20px;

      +media-breakpoint-down($sm) {
        margin-left: 0px;
      }
    }
  }
}
</style>

<template>
  <div class="select">
    <row-section>
      <selected-section
        v-for="item in options"
        :key="item.id"
        :option="item"
        :selected="selectedValue.id === item.id"
        @click="$emit('setvalue', item)"
      />
    </row-section>
  </div>
</template>

<script>
import SelectedSection from './form-core/SelectedSection.vue';
import RowSection from './RowSection.vue';

export default {
  name: 'Select',
  components: {
    SelectedSection,
    RowSection,
  },
  // props: ['options', 'selectedValue'],
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    selectedValue: {
      type: String,
      default: '',
    },
  },
  methods: {},
};
</script>

<style lang="stylus" scoped>
.select {
  width: 100%;
}
</style>

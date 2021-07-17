<script>
import { get } from 'lodash'

export default {
  props: {
    item: {
      type: [String, Object]
    },
    label: {
      type: String,
      default: 'label'
    }
  },
  computed: {
    title () {
      const { label, item } = this
      console.log({ label, item })

      return get(item, label, '')
    }
  },
  methods: {
    onSelect() {
      console.log('on select...')
      this.$emit('selected', this.item)
    }
  }
}
</script>

<template>
  <div v-on:click="onSelect" class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
    <div class="w-full items-center flex">
      <div class="mx-2 leading-6">{{ title }}</div>
    </div>
  </div>
</template>

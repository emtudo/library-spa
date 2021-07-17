<script>
import { debounce, filter, get, size, remove, head } from 'lodash'
import MultiSelectOption from './option.vue'
import MultiSelectSelected from './selected.vue'

export default {
  components: { MultiSelectOption, MultiSelectSelected },
  props: {
    endpoint: {
      type: String
    },
    search: {
      type: String,
      default: 'filters[search]'
    },
    label: {
      type: String,
      default: 'label'
    },
    updateModel: {
      type: [String, Number, Array]
    },
    single: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    showOptions: false,
    query: '',
    options: [],
    selected: []
  }),
  computed: {
    total () {
      const { selected } = this

      return size(selected)
    },
    optionsFiltered () {
      const { options, label, query, selected } = this

      return filter(options, item => {
        const value = get(item, label, '').toLowerCase()
        const queryValue = query.toLowerCase()

        const current = filter(selected, ({id}) => id === item.id)
        console.log({ current })

        return value.includes(queryValue) && size(current) === 0
      })
    }
  },
  methods: {
    removeItem (item) {
      console.log('remove Item')
      const { selected } = this

      remove(selected, item)

      this.selected = selected
    },
    doSelect (item) {
      console.log({ item })
      this.selected.push(item)
    },
    onChange: debounce(function ({ target }) {
      this.getOptions(target.value)
    }, 300),
    getOptions (value) {
      this.query = value
      const { search, endpoint } = this

      this.$http.get(`${endpoint}?${search}=${value}`)
        .then(({ data }) => {
          this.options = data
        })
    },
    handleFocus () {
      this.showOptions = true
    },
    handleBlur () {
      setTimeout(() => {
        this.showOptions = false
      }, 300)
    }
  },
  watch: {
    total (value) {
      const { single } = this
      if (single) {
        this.$emit('update:modelValue', head(this.selected))
        return
      }
      this.$emit('update:modelValue', this.selected)
    }
  }
}
</script>

<template>
  <div class="w-full md:w-1/2 flex flex-col items-center mx-auto" :class="{'h-64': showOptions}">
      <div class="w-full px-4">
          <div class="flex flex-col items-center relative">
              <div class="w-full svelte-1l8159u">
                  <div class="my-2 p-1 flex border border-gray-200 bg-white rounded svelte-1l8159u">
                      <div class="flex flex-auto flex-wrap">
                          <template v-for="(item, index) in selected" v-bind:key="index">
                            <MultiSelectSelected v-bind="{ item, label }" v-on:remove="removeItem" />
                          </template>
                          <div class="flex-1">
                            <input v-on:focus="handleFocus" v-on:input="onChange" v-on:blur="handleBlur" placeholder="" class="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800">
                          </div>
                      </div>
                      <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 svelte-1l8159u">
                          <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up w-4 h-4">
                                  <polyline points="18 15 12 9 6 15"></polyline>
                              </svg>
                          </button>
                      </div>
                  </div>
              </div>
              <div class="absolute shadow top-100 bg-white z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj" v-if="showOptions">
                  <div class="flex flex-col w-full">
                      <div v-for="(item, index) in optionsFiltered" v-bind:key="index" class="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100">
                        <MultiSelectOption v-bind="{ item, label }" v-on:selected="doSelect" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<style scoped>
  .top-100 {top: 100%}
  .bottom-100 {bottom: 100%}
  .max-h-select {
    max-height: 100px;
  }
</style>

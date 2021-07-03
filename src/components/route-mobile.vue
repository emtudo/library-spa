<template>
  <nav class="mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
    <div class="px-2 space-y-1">
      <router-link v-for="route in routes" :key="route.name" :to="route.to" :class="[route.current ? 'bg-cyan-800 text-white' : 'text-cyan-100 hover:text-white hover:bg-cyan-600', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']" :aria-current="route.current ? 'page' : undefined">
        <component :is="route.icon" class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200" aria-hidden="true" />
        {{ route.name }}
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    routes: {
      type: Array,
      required: true
    }
  }
}
</script>

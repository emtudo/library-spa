<script>
import { filter } from 'lodash'

export default {
  data: () => ({
    librariesDeletes: [],
    libraries: []
  }),
  computed: {
    librariesFiltered () {
      const { libraries, librariesDeletes } = this

      return filter(libraries, ({ id }) => librariesDeletes.indexOf(id) === -1)
    }
  },
  methods: {
    doDelete (library) {
      this.$http.delete(`/libraries/${library.id}`)
        .then(() => {
          this.librariesDeletes.push(library.id)
        })
        .catch(() => {
          console.log('deu ruim')
        })
    },
    getAll () {
      this.$http.get('libraries')
        .then(({ data }) => {
          this.libraries = data
        })
        .catch(() => {
          console.log('deu ruim')
        })
    },
    toCreate () {
      this.$router.push('/libraries/create')
    }
  },
  mounted () {
    this.getAll()
  }
}
</script>

<template>
  <button v-on:click="toCreate" type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
    Cadastrar
  </button>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-0">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Biblioteca
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Endereço
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Editar</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="library in librariesFiltered" :key="library.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ library.name }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ library.address }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button v-on:click="doDelete(library)" type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Excluir
                  </button>
                  &nbsp;
                  <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Editar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>


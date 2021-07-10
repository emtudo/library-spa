<script>
export default {
  data: () => ({
    author: {
      name: '',
      birthdate: null,
      genre: ''
    }
  }),
  methods: {
  doSave () {
    const { author } = this

    this.$http.post('/authors', author)
      .then(() => {
        this.author = {
          name: '',
          birthdate: null,
          genre: ''
        }

        alert('ok deu tudo certo')
      })
      .catch(() => {
        alert('deu ruim')
        console.log('deu ruim')
      })
    }
  }
}
</script>

<template>
  <form v-on:submit.prevent="doSave" class="space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Autores
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Cadastro de novos authores
          </p>
        </div>
        <div class="space-y-6 sm:space-y-5">
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="author_name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Nome
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input v-model="author.name" type="text" name="author_name" id="author_name" autocomplete="given-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="author_genre" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Genero Literário
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input v-model="author.genre" name="author_genre" id="author_genre" autocomplete="family-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="author_birthdate" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Data de nascimento
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input v-model="author.birthdate" type="date" step="1" name="author_birthdate" id="author_birthdate" autocomplete="family-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-5">
      <div class="flex justify-end">
        <button ype="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Save
        </button>
      </div>
    </div>
  </form>
</template>

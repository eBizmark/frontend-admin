<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="flex justify-start">
        <h3 class="text-gray-700 text-3xl font-medium">Daftar Kategori</h3>
      </div>

      <div class="flex justify-end">
        <router-link
            :to="{ name: 'CreateKategori' }"
          class="bg-indigo-600 hover:bg-indigo-400 hover:text-white border border-gray-200 text-gray-200 font-bold py-2 px-4 rounded-lg"
        >
          Tambah Kategori
        </router-link>
      </div>
    </div>

    <div class="mt-8"></div>

    <div class="flex flex-col mt-8">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="pl-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  #
                </th>
                <th
                  class="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Nama Kategori
                </th>
                <th
                    class="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Deskripsi
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="(kategori, index) in dataKategori" :key="index">
                <td
                  class="pl-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  <span
                    class="inline-flex text-xs leading-5 font-semibold rounded-full"
                  >
                    {{ index + 1 }}.
                  </span>
                </td>
                <td
                  class="pr-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  <div class="flex items-center">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                      {{ kategori.nama }}
                    </div>
                  </div>
                </td>
                <td
                    class="pr-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  <div class="flex items-center">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                      {{ kategori.deskripsi }}
                    </div>
                  </div>
                </td>
                <td
                  class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                >
                  <a
                    href="#"
                    class="bg-gray-200 hover:bg-indigo-600 hover:text-white border border-gray-200 text-indigo-600 font-bold py-2 px-6 rounded-lg"
                    >Edit</a
                  >
                  <a
                      @click="removeKategori(kategori.id)"
                    href="#"
                    class="bg-gray-200 hover:bg-red-600 hover:text-white border border-gray-200 text-red-600 font-bold py-2 px-4 rounded-lg ml-4"
                    >Delete</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { defineComponent, ref, onMounted, reactive, onUpdated } from 'vue'
export default defineComponent({
  setup() {
    const kategori = reactive({
      id: null,
      nama: '',
      deskripsi: ''
    })

    const dataKategori = ref([kategori])

    const getDataKategori = async () => {
      let { data } = await axios.get('/kategori')
      console.log(data)
      dataKategori.value = data
    }

    onMounted(() => {
      getDataKategori()
    })

    const removeKategori = async (_id) => {
      await axios
          .delete(`/kategori/${_id}`)
          .then((response) => console.log(response))
          .catch((error) => console.log(error))
      await getDataKategori()
    }

    // onUpdated(() => {
    //     getDataKategori();
    // })

    return {
      dataKategori,
      removeKategori
    }
  },
})
</script>

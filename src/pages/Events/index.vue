<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="flex justify-start">
        <h3 class="text-gray-700 text-3xl font-medium">Daftar Events</h3>
      </div>

      <div class="flex justify-end">
        <router-link
          :to="{ name: 'CreateEvent' }"
          class="bg-indigo-600 hover:bg-indigo-400 hover:text-white border border-gray-200 text-gray-200 font-bold py-2 px-4 rounded-lg"
        >
          Tambah Event
        </router-link>
      </div>

      <div
        :class="`modal ${
          !open && 'opacity-0 pointer-events-none'
        } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
      >
        <div
          class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
        ></div>

        <div
          class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
        >
          <div
            class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
          >
            <svg
              class="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              />
            </svg>
            <span class="text-sm">(Esc)</span>
          </div>

          <!-- Add margin if you want to see some of the overlay behind the modal-->
          <div class="modal-content py-4 text-left px-6">
            <!--Title-->
            <div class="flex justify-between items-center pb-3">
              <p class="text-2xl font-bold">Modal Title</p>
              <div
                class="modal-close cursor-pointer z-50"
                @click="open = false"
              >
                <svg
                  class="fill-current text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path
                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                  />
                </svg>
              </div>
            </div>

            <!--Body-->
            <p>Modal content.</p>

            <!--Footer-->
            <div class="flex justify-end pt-2">
              <button
                @click="open = false"
                class="px-6 py-3 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
              >
                Close
              </button>
              <button
                @click="open = false"
                class="px-6 py-3 bg-indigo-600 rounded-md text-white font-medium tracking-wide hover:bg-indigo-500"
              >
                Action
              </button>
            </div>
          </div>
        </div>
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
                  Nama Seminar
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Kategori
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tanggal
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Max Peserta
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Pemateri
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="(acara, index) in dataAcara" :key="index">
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
                      {{ acara.nama }}
                    </div>
                  </div>
                </td>
                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  <div class="flex items-center">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                      {{ acara.kategori }}
                    </div>
                  </div>
                </td>
                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  <div class="flex items-center">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                      {{ acara.tanggal }}
                    </div>
                  </div>
                </td>
                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  <div class="flex items-center">
                    <div
                      class="text-sm leading-5 font-medium text-gray-900 ml-3 2xl:ml-8 xl:ml-7 lg:ml-6 md:ml-5 sm:ml-4"
                    >
                      {{ acara.maksPeserta }}
                    </div>
                  </div>
                </td>
                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  <div class="flex items-center">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                      <div
                        v-for="(pemateri, index) in acara.pemateri"
                        :key="index"
                      >
                        <div class="flex items-center">
                          <div class="flex-shrink-0 w-10 h-10">
                            <img
                              class="w-full h-full rounded-full"
                              :src="pemateri.foto"
                              alt
                            />
                          </div>

                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ pemateri.nama }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td
                  class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                >
                  <a
                      @click="editAcara(acara.id)"
                    href="#"
                    class="bg-gray-200 hover:bg-indigo-600 hover:text-white border border-gray-200 text-indigo-600 font-bold py-2 px-6 rounded-lg"
                    >Edit</a
                  >
                  <button
                    @click="removeAcara(acara.id)"
                    href="#"
                    class="2xl:mt-0 lg:mt-4 md:mt-5 mt-4 bg-gray-200 hover:bg-red-600 hover:text-white border border-gray-200 text-red-600 font-bold py-2 px-4 rounded-lg ml-4"
                  >
                    Delete
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

<script>
import axios from 'axios'
import { defineComponent, ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const acara = reactive({
      id: null,
      nama: '',
      tanggal: '',
      maksPeserta: '',
      pemateri: [
        {
          id: null,
          nama: '',
          foto: '',
        },
      ],
      kategori: '',
    })

    const dataAcara = ref([acara])

    const getDataAcara = async () => {
      let { data } = await axios.get('/event')
      dataAcara.value = data.data
    }

    onMounted(() => {
      getDataAcara()
    })

    const open = ref(false)

    const removeAcara = async (_id) => {
      await axios
        .delete(`/event/${_id}`)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
      await getDataAcara()
    }

    const router = useRouter();

    function editAcara (_id) {
      router.push({
        name: 'UpdateEvent',
        params: {
          id: _id
        }
      })
    }

    return {
      dataAcara,
      open,
      removeAcara,
      editAcara
    }
  },
})
</script>

<style src="@vueform/multiselect/themes/default.css">
.modal {
  transition: opacity 0.25s ease;
}
</style>

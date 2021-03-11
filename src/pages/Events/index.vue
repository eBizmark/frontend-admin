<template>
  <div>

    <div class="flex justify-between items-center">
      <div class="flex justify-start">
        <h3 class="text-gray-700 text-3xl font-medium">Daftar Events</h3>
      </div>

      <div class="flex justify-end">
        <a href="#" class="bg-indigo-600 hover:bg-indigo-400 hover:text-white border border-gray-200 text-gray-200 font-bold py-2 px-4 rounded-lg">Tambah Event</a>
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
                <td class="pl-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span class="inline-flex text-xs leading-5 font-semibold rounded-full">
                    {{ index+1 }}.
                    </span>
                </td>
                <td class="pr-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ acara.nama }}
                      </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ acara.kategori }}
                      </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ acara.tanggal }}
                      </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="text-sm leading-5 font-medium text-gray-900 ml-3 2xl:ml-8 xl:ml-7 lg:ml-6 md:ml-5 sm:ml-4">
                        {{ acara.maksPeserta }}
                      </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                      <div v-for="(pemateri,index) in acara.pemateri" :key="index">
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
                <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <a href="#" class="bg-gray-200 hover:bg-indigo-600 hover:text-white border border-gray-200 text-indigo-600 font-bold py-2 px-6 rounded-lg">Edit</a>
                  <a href="#" class="bg-gray-200 hover:bg-red-600 hover:text-white border border-gray-200 text-red-600 font-bold py-2 px-4 rounded-lg ml-4">Delete</a>
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
import axios from "axios"
import { defineComponent, ref, onMounted, reactive } from "vue";
export default defineComponent({
  setup() {
    const acara = reactive({
        "id": null,
        "nama": "",
        "tanggal": "",
        "maksPeserta": "",
        "pemateri": [
            {
                "id": null,
                "nama": "",
                "foto": ""
            }
        ],
        "kategori": ""
    });

    const dataAcara = ref([acara]);

    const getDataAcara = async()=>{
      let { data } = await axios.get("/event");
      dataAcara.value = data;
    }

    onMounted(()=>{
      getDataAcara();
    })

    return{
      dataAcara
    }
  },
});
</script>

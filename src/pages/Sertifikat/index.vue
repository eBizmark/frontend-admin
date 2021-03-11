<template>
  <div>
    <h3 class="text-gray-700 text-3xl font-medium">Sertifikat</h3>

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
                  Nama Event
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tanggal Event
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Template
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="(sertifikat, index) in dataSertifikat" :key="index">
                <td class="pl-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span class="inline-flex text-xs leading-5 font-semibold rounded-full">
                    {{ index+1 }}.
                    </span>
                </td>
                <td class="pr-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ sertifikat.seminar.nama }}
                      </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ sertifikat.seminar.tanggal }}
                      </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-20 h-15">
                      <a href="#">
                        <div @click="openImage(sertifikat.template)">
                          <img
                            class="w-full h-full"
                            :src="sertifikat.template"
                            alt
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <div v-if="sertifikat.template === ''">
                      <a href="#" class="bg-red-600 hover:bg-red-400 hover:text-white border border-gray-200 text-gray-200 font-bold py-2 px-4 rounded-lg">Not Uploaded</a>
                  </div>
                  <div v-else>
                    <a href="#" class="bg-green-600 hover:bg-green-400 hover:text-white border border-gray-200 text-gray-200 font-bold py-2 px-7 rounded-lg">Uploaded</a>
                  </div>
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
    const sertifikat = reactive({
        "id": null,
        "seminar" :{
            "id": null,
            "nama": "",
            "tanggal": "",
            "pemateri": [],
            "kategori": {
                "id": null,
                "nama": ""
            }
        },
        "template": ""
    });

    const dataSertifikat = ref([sertifikat]);

    const getDataSertifikat = async()=>{
      let { data } = await axios.get("/sertifikat");
      dataSertifikat.value = data;
    }

    onMounted(()=>{
      getDataSertifikat();
    })

    const openImage = (url) => {
      window.open(url);
    };

    return{
      dataSertifikat,
      openImage
    }
  },
});
</script>

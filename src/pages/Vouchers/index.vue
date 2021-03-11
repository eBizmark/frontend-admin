<template>
  <div>

    <div class="flex justify-between items-center">
      <div class="flex justify-start">
        <h3 class="text-gray-700 text-3xl font-medium">Daftar Vouchers</h3>
      </div>

      <div class="flex justify-end">
        <a href="#" class="bg-indigo-600 hover:bg-indigo-400 hover:text-white border border-gray-200 text-gray-200 font-bold py-2 px-4 rounded-lg">Tambah Voucher</a>
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
                  Kode
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tanggal Aktif
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tanggal Berakhir
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Jumlah Potongan
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="(kupon, index) in dataKupon" :key="index">
                <td class="pl-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span class="inline-flex text-xs leading-5 font-semibold rounded-full">
                    {{ index+1 }}.
                    </span>
                </td>
                <td class="pr-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ kupon.kode }}
                      </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ kupon.tglAktif }}
                      </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ kupon.tglAkhir }}
                      </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                        Rp {{ kupon.potongan }}
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
    const kupon = reactive({
        "id": null,
        "kode": "PAYDAY15",
        "tglAktif": "",
        "tglAkhir": "",
        "potongan": 0
    });

    const dataKupon = ref([kupon]);

    const getDataKupon = async()=>{
      let { data } = await axios.get("/voucher");
      dataKupon.value = data;
    }

    onMounted(()=>{
      getDataKupon();
    })

    return{
      dataKupon
    }
  },
});
</script>

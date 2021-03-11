<template>
  <div>

    <div class="flex justify-between items-center">
      <div class="flex justify-start">
        <h3 class="text-gray-700 text-3xl font-medium">Daftar Transaksi</h3>
      </div>

      <div class="flex justify-end">
        <a href="#" class="bg-indigo-600 hover:bg-indigo-400 hover:text-white border border-gray-200 text-gray-200 font-bold py-2 px-4 rounded-lg">Export to Excel</a>
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
                  Tanggal Pesan
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Nama
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Kode Voucher
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total Bayar
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status Bayar
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="(transaksi, index) in dataTransaksi" :key="index">
                <td class="pl-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span class="inline-flex text-xs leading-5 font-semibold rounded-full">
                    {{ index+1 }}.
                    </span>
                </td>
                <td class="pr-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ transaksi.tanggalPesan }}
                      </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ transaksi.nama }}
                      </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ transaksi.voucher.kode }}
                      </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                        Rp {{ transaksi.totalBayar }}
                      </div>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div v-if="transaksi.status === 'Sudah Bayar'">
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                      <span class="relative">{{ transaksi.status }}</span>
                    </span>
                  </div>
                  <div v-else-if="transaksi.status === 'Belum Bayar'">
                    <span class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                      <span aria-hidden class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                      <span class="relative">{{ transaksi.status }}</span>
                    </span>
                  </div>
                  <div v-else>
                    <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                      <span aria-hidden class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                      <span class="relative">{{ transaksi.status }}</span>
                    </span>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <a href="#" class="bg-gray-200 hover:bg-green-600 hover:text-white border border-gray-200 text-green-600 font-bold py-2 px-4 rounded-lg">Detail</a>
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
// import { useTableData } from "../../hooks/useTableData";
export default defineComponent({
  setup() {
    const transaksi = reactive({
        "id": null,
        "nama": "",
        "totalBayar": 0,
        "tanggalPesan": "",
        "status": "",
        "voucher": {
            "id": null,
            "kode": "",
            "tglAktif": "",
            "tglAkhir": "",
            "potongan": {
                "id": 0,
                "kode": "",
                "tglAktif": "",
                "tglAkhir": "",
                "potongan": 0
            }
        }
    });

    const dataTransaksi = ref([transaksi]);

    const getDataTransaksi = async()=>{
      let { data } = await axios.get("/transaksi");
      dataTransaksi.value = data;
    }

    // get table with paginantion
    // const { paginatedTableData } = useTableData();

    onMounted(()=>{
      getDataTransaksi();
    })

    return{
      dataTransaksi,
      // paginatedTableData
    }
  },
});
</script>

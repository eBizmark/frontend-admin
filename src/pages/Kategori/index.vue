<template>
  <div>

    <div class="flex justify-between items-center">
      <div class="flex justify-start">
        <h3 class="text-gray-700 text-3xl font-medium">Daftar Kategori</h3>
      </div>

        <div class="flex justify-end">
        <button
            @click="open = true"
            class="bg-indigo-600 hover:bg-indigo-400 hover:text-white border border-gray-200 text-gray-200 font-bold py-2 px-4 rounded-lg"
        >
            Tambah Kategori
        </button>
    </div>
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
                class="modal-container fixed bg-white px-2 w-auto mx-auto h-auto rounded shadow-lg z-50 overflow-y-auto"
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
                <div class="modal-content py-4 text-left px-8">
                    <!--Title-->
                    <div class="flex justify-between items-center pb-3">
                        <p class="text-2xl font-bold">Buat Kategori</p>
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
                    <form class="w-full max-w-lg lg:ml-9 lg:mt-3" @submit.prevent="createKategori">
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/4">
                                <label
                                    class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                                    for="nama"
                                >
                                    Nama Kategori
                                </label>
                            </div>
                            <div class="md:w-3/4">
                                <input
                                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-auto py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                                    id="nama"
                                    type="text"
                                    placeholder="Masukkan nama kategori"
                                    v-model="formData.nama"
                                />
                            </div>
                        </div>

                        <!--Footer-->
                        <div class="flex justify-end pt-2 px-9">
                            <button
                                type="button"
                                @click="open = false"
                                class="px-6 py-3 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
                            >
                                Tutup
                            </button>
                            <button
                                class="px-6 py-3 bg-indigo-600 rounded-md text-white font-medium tracking-wide hover:bg-indigo-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>                        
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
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="(kategori, index) in dataKategori" :key="index">
                <td class="pl-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span class="inline-flex text-xs leading-5 font-semibold rounded-full">
                    {{ index+1 }}.
                    </span>
                </td>
                <td class="pr-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ kategori.nama }}
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
import { defineComponent, ref, onMounted, reactive, onUpdated } from "vue";
export default defineComponent({
  setup() {
    const kategori = reactive({
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

    const dataKategori = ref([kategori]);

    const getDataKategori = async()=>{
      let { data } = await axios.get("/kategori");
      dataKategori.value = data;
    }

    onMounted(()=>{
      getDataKategori();
    })

    const open = ref(false);

    const formData = reactive({
        nama: ''
    });

    const createKategori = async () => {
      await axios.post('/kategori', formData)
        .then(response => console.log(response))
        .catch(error => console.log(error))
        open.value = false
        getDataKategori();
        // window.location.reload()
    };

    // onUpdated(() => {
    //     getDataKategori();
    // })

    return{
      dataKategori,
      formData,
      open,
      createKategori
    }
  },
});
</script>

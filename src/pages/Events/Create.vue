<template>
  <div>
    <form
        class="w-full m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="createKegiatan"
    >
      <div class="flex justify-start">
        <h4 class="text-gray-700 text-3xl font-medium mb-6">
          Form Tambah Event
        </h4>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/6">
          <label
              class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              for="namaKegiatan"
          >
            Nama Kegiatan
          </label>
        </div>
        <input
            class="inline-block relative w-64 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="namaKegiatan"
            type="text"
            placeholder="Masukkan nama event"
            v-model="formData.nama"
        />
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/6">
          <label
              class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              for="kategori"
          >
            Kategori
          </label>
        </div>
        <div id="v-model-select-dynamic" class="inline-block relative w-64">
          <select
              class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="kategori"
              v-model="formData.idKategori"
          >
            <option disabled value="">Pilih kategori</option>
            <option
                v-for="(kategori, index) in dataKategori"
                :key="index"
                :value="kategori.id"
            >
              {{ kategori.nama }}
            </option>
          </select>
          <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
            >
              <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/6">
          <label
              class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              for="tanggal"
          >
            Tanggal
          </label>
        </div>
        <div class="inline-block relative w-64">
          <litepie-datepicker
              as-single
              :formatter="formatter"
              id="tanggal"
              v-model="formData.tanggal"
          ></litepie-datepicker>
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/6">
          <label
              class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              for="maxPeserta"
          >
            Max Peserta
          </label>
        </div>
        <div
            class="flex flex-row h-10 w-40 rounded-lg relative bg-transparent mt-1"
        >
          <button
              type="button"
              @click="decreaseNumber"
              class="bg-gray-300 text-black hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          >
            <span class="m-auto text-2xl font-bold">−</span>
          </button>
          <input
              type="text"
              class="outline-none focus:outline-none text-center w-full bg-white-200 appearance-none border-2 border-gray-200 rounded font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 mx-2 focus:border-indigo-500"
              id="maxPeserta"
              v-model="formData.maksPeserta"
          />
          <button
              type="button"
              @click="increaseNumber"
              class="bg-gray-300 text-black hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          >
            <span class="m-auto text-2xl font-bold">+</span>
          </button>
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/6">
          <label
              class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              for="inline-full-name"
          >
            Pemateri
          </label>
        </div>
        <div class="inline-block relative w-64">
          <div>
            <Multiselect
                v-model="formData.pemateri"
                mode="tags"
                :searchable="true"
                :createTag="true"
                :options="multiselectData"
                placeholder="Pilih pemateri"
            />
          </div>
        </div>
      </div>

      <!--Footer-->
      <div class="flex justify-end pt-2">
        <router-link
            to="/events"
            type="button"
            class="px-6 py-3 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
        >
          Kembali
        </router-link>
        <button
            class="px-6 py-3 bg-indigo-600 rounded-md text-white font-medium tracking-wide hover:bg-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { defineComponent, ref, reactive, onMounted } from 'vue'
import LitepieDatepicker from 'litepie-datepicker'
import Multiselect from '@vueform/multiselect'
// import router from '@/router'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    LitepieDatepicker,
    Multiselect,
  },
  setup() {
    const kategori = reactive({
      id: null,
      nama: '',
    })

    const dataKategori = ref([kategori])

    const getDataKategori = async () => {
      let { data } = await axios.get('/kategori')
      dataKategori.value = data
    }

    const pemateri = reactive({
      id: null,
      nama: '',
      foto: '',
      deskripsi: '',
    })

    const dataPemateri = ref([pemateri])

    const multiselect = reactive({
      value: '',
      label: '',
    })

    const multiselectData = ref([multiselect])

    const getDataPemateri = async () => {
      let { data } = await axios.get('/pemateri')
      dataPemateri.value = data
      // console.log(dataPemateri.value)
      multiselectData.value = modifyKey(dataPemateri.value)
    }

    function renameKey(obj, oldKey, newKey) {
      obj[newKey] = obj[oldKey]
      delete obj[oldKey]
    }

    const modifyKey = (data) => {
      // console.log("ini data" + data );
      // const arr = JSON.parse(data);
      data.forEach((obj) => renameKey(obj, 'id', 'value'))
      data.forEach((obj) => renameKey(obj, 'nama', 'label'))
      // const updatedJson = JSON.stringify( data );
      // console.log("ini data abis rename" + updatedJson );
      return data
    }

    onMounted(() => {
      getDataKategori()
      getDataPemateri()
    })

    const increaseNumber = () => {
      formData.maksPeserta++
    }

    const decreaseNumber = () => {
      if (maxPeserta.value > 0) formData.maksPeserta--
    }

    const formatter = reactive({
      date: 'YYYY-MM-DD',
      month: 'MM',
    })

    // const convertDate = (data) => {
    //   let newDate = new Date(data);
    // }

    const formData = reactive({
      nama: '',
      tanggal: '',
      maksPeserta: 0,
      pemateri: [],
      idKategori: '',
    })

    const router = useRouter()

    const createKegiatan = async () => {
      // formData.kategori = 1
      await axios
          .post('/event', formData)
          .then((response) => console.log(response))
          .catch((error) => console.log(error))
      // await router.push({ name: 'Events' })
      await router.push('/events')
      // window.location.reload()
    }

    return {
      dataKategori,
      dataPemateri,
      increaseNumber,
      decreaseNumber,
      formatter,
      formData,
      multiselect,
      multiselectData,
      createKegiatan,
    }
  },
})
</script>

<style></style>

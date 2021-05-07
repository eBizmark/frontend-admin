<template>
  <div>
    <form
        class="w-full m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="createPemateri"
    >
      <div class="flex justify-start">
        <h4 class="text-gray-700 text-3xl font-medium mb-6">
          Form Tambah Pemateri
        </h4>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/6">
          <label
              class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              for="namaPemateri"
          >
            Nama Pemateri
          </label>
        </div>
        <input
            class="inline-block relative w-64 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="namaPemateri"
            type="text"
            placeholder="Masukkan nama pemateri"
            v-model="formData.nama"
        />
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/6">
          <label
              class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              for="deskripsi"
          >
            Deskripsi
          </label>
        </div>
        <div class="md:w-1/2">
          <textarea
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
              id="deskripsi"
              type="text"
              placeholder="Masukkan deskripsi"
              v-model="formData.deskripsi"
          >
          </textarea>
        </div>
      </div>

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/6">
          <label
              class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              for="file-input"
          >
            Foto
          </label>
        </div>

        <div class="text-sm leading-5 font-medium text-gray-900">
          <img v-show="imageUrl" :src="imageUrl" class="w-48 h-48 object-cover mb-4">
          <input accept="image/*" type="file"  @change="handleImageSelected" id="file-input">
        </div>
      </div>

      <!--Footer-->
      <div class="flex justify-end pt-2">
        <router-link
            to="/pemateri"
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
import { defineComponent, ref, reactive, watch } from 'vue'
import {useImageUpload} from "../../hooks/useImageUpload";
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    let { imageFile, imageUrl, handleImageSelected} = useImageUpload()
    let data = new FormData();

    const formData = reactive({
      nama: '',
      deskripsi: '',
      url_gambar: null
    })

    const router = useRouter()

    function encapsulatingData() {
      data.append('nama', formData.nama);
      data.append('deskripsi', formData.deskripsi);
      data.append('url_gambar', imageFile.value);
    }

    const createPemateri = async () => {
      encapsulatingData()
      // console.log(data)
      await axios
          .post('/pemateri', data)
          .then((response) => console.log(response.data))
          .catch((error) => console.log(error.data))
      // await router.push({ name: 'Events' })
      await router.push('/pemateri')
      // window.location.reload()
    }

    return {
      formData,
      createPemateri,
      imageFile,
      imageUrl,
      handleImageSelected
    }
  },
})
</script>

<style></style>

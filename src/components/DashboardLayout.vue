<template>
<!--  <div class="flex h-screen bg-gray-200 font-roboto" v-if="isAuthenticated">-->
  <div class="flex h-screen bg-gray-200 font-roboto">
    <Sidebar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-6 py-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import axios from "axios";
import {onBeforeMount} from 'vue'
import {useStore} from "vuex";
export default{
  components: {
    Header,
    Sidebar,
  },
  setup(){
    // function attachToken() {
    //   axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("admin_token");
    // }
    const store = useStore()

    // const isAuthenticated = computed(() => store.getters['admin/isAuthenticated'])
    // console.log(isAuthenticated)

    // onMounted(() => {
    //   attachToken()
    // })

    // Set config defaults when creating the instance
    // const instance = axios.create({
    //   baseURL: 'http://localhost:5000/api/v1/'
    // });
    //
    // onBeforeMount(() => {
    //   // Alter defaults after instance has been created
    //   instance.defaults.headers.common['Authorization'] = localStorage.getItem("admin_key");
    // })
    // axios.defaults.headers.common['Authorization'] = localStorage.getItem("admin_token");

    return{
      // isAuthenticated,
      isAuthenticated: computed(() => store.getters['admin/isAuthenticated']),
    }
  }
}
</script>

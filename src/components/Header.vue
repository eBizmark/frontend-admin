<template>
  <header
    class="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600"
  >
    <div class="flex items-center">
      <button
        @click="isOpen = true"
        class="text-gray-500 focus:outline-none lg:hidden"
      >
        <svg
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H11"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div class="relative mx-4 lg:mx-0">
        <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
          <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>

        <input
          class="form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600"
          type="text"
          placeholder="Search"
        />
      </div>
      Hi {{ admin }}
    </div>

    <div class="flex items-center">
      <button class="flex mx-4 text-gray-600 focus:outline-none">
        <svg
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div class="relative">
        <button
          @click="dropdownOpen = !dropdownOpen"
          class="relative z-10 block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none"
        >
          <img
            class="h-full w-full object-cover"
            src="data:image/jpeg;base64,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"
            alt="Your avatar"
          />
        </button>

        <div
          v-show="dropdownOpen"
          @click="dropdownOpen = false"
          class="fixed inset-0 h-full w-full z-10"
        ></div>

        <div
          v-show="dropdownOpen"
          class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20"
        >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >Profile</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >Products</a
          >
          <router-link
            to="/"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >Log out</router-link
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useSidebar } from "../hooks/useSidebar";
import {useStore} from 'vuex'

export default{
  setup(_, { emit }) {
    const dropdownOpen = ref(false);
    const { isOpen } = useSidebar();
    const store = useStore()

    // const admin = computed(() => store.getters['user/getUser'])
    // const admin = computed(() => store.state.user.user)

    // console.log(admin)

    return {
      isOpen,
      dropdownOpen,
      admin: computed(() => store.getters['user/getUser']),
      // admin
    };
  },
}
</script>

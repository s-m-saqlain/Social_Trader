<template>
    <div v-if="!isOpen" class="flex justify-between items-center bg-black lg:px-[4rem] sm:px-10 px-4 py-2">
        <img src="~/assets/images/issuance.svg" class="cursor-pointer" />
        <div class="flex justify-between items-center sm:gap-8 gap-3">
            <p class="text-white font-thin text-sm text-base cursor-pointer">Terms</p>
            <p class="text-white font-thin text-sm text-base cursor-pointer">Privacy</p>
            <p class="text-white font-thin text-sm text-base cursor-pointer">Investor Login</p>
        </div>
    </div>
    <div class="lg:hidden pr-4 pt-4">
        <div class="flex justify-end">
            <button @click="toggleMenu" class="text-white p-2" v-if="isOpen">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class="w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>
    <div
        :class="['sticky top-0 flex justify-between items-center sm:px-[3rem] py-3 border-b border-green-500 shadow-2xl shadow-green-500 transition duration-300', isOpen ? 'bg-black' : 'bg-[#282828]']">
        <img v-if="!isOpen" src="~/assets/images/social.svg" class="cursor-pointer" />

        <button @click="toggleMenu" class="lg:hidden text-white p-2" v-if="!isOpen">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

        <div
            :class="['lg:flex', isOpen ? 'flex' : 'hidden', 'flex-col', 'lg:flex-row', 'gap-3', 'items-center', 'lg:h-full sm:h-screen', 'mx-auto']">
            <p
                class="text-white text-sm text-base cursor-pointer relative inline-block px-2 hover:border-green-500 hover:border-l-2 hover:border-r-2">
                PRODUCT</p>
            <div class="lg:hidden border-t border-green-700 w-44"></div>
            <p
                class="text-white text-sm text-base cursor-pointer relative inline-block hover:border-green-500 hover:border-l-2 hover:border-r-2 px-2">
                OPPORTUNITY</p>
            <div class="lg:hidden border-t border-green-700 w-44"></div>
            <p
                class="text-white text-sm text-base cursor-pointer hover:border-green-500 hover:border-l-2 hover:border-r-2 px-2">
                BUDGET</p>
            <div class="lg:hidden border-t border-green-700 w-44"></div>
            <p
                class="text-white text-sm text-base cursor-pointer hover:border-green-500 hover:border-l-2 hover-border-r-2 px-2">
                INVESTMENT TIERS</p>
            <div class="lg:hidden border-t border-green-700 w-44"></div>
            <p
                class="text-white text-sm text-base cursor-pointer hover-border-green-500 hover-border-l-2 hover-border-r-2 px-2">
                ROADMAP</p>
            <div class="lg:hidden border-t border-green-700 w-44"></div>
            <p
                class="text-white text-sm text-base cursor-pointer hover-border-green-500 hover-border-l-2 hover-border-r-2 px-2">
                FAQS</p>
        </div>

        <button v-if="!isOpen" class="sm:block hidden btn btn-hover mr-3 rounded-md hover-border-none">
            INVEST NOW
        </button>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import "~/assets/css/butoon.scss"

const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};
</script>
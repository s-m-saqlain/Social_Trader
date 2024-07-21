<template>
    <div class="bg-[#282828] lg:px-[8rem] sm:px-6 ">
        <h1 class="text-white text-3xl pt-[3rem] sm:text-start text-center">Meet the team</h1>

        <!-- For Desktop -->

        <p class="sm:block hidden text-gray-300 pt-4 sm:text-start text-center">There was a little dancing man but you can call him kettle and</p>
        <p class="sm:block hidden text-white text-gray-300 sm:text-start text-center">every day he goes for a jag from morning until dark.</p>
        
        <!-- For Mobile -->
        
        <p class="sm:hidden text-white text-gray-300 text-center pt-4">There was a little dancing man but you can call him kettle and every day he goes for a jag from morning until dark.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-[3rem] sm:mx-0 mx-4">
            <div v-for="(card, index) in cards" :key="index" class="flex justify-start items-start gap-6 py-4">
                <img :src="card.image" alt="Card image" class="lg:w-64 w-[8rem]" />
                <div>
                    <h2 class="text-xl font-medium mb-2 text-white">{{ card.title }}</h2>
                    <p class="text-gray-500 font-medium">{{ card.subtitle }}</p>
                    <p class="text-gray-500 font-medium pt-4 lg:w-64">{{ card.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Meet from "~/assets/images/meet_image.svg"

const cards = ref([
    {
        image: Meet,
        title: 'LINDSAY WALTON',
        subtitle: 'Director',
        content: 'Quis nis ullarper vestibulum eros. Suspendisse lacus lectus molestie id et, nibh tellus in. Lorem diam eu, diam vel. Nec ut eu molestie mattis consectetur mi neque nunc dignissim. Semper eget vel faucibus odio eleifend.',
    },
    {
        image: Meet,
        title: 'LINDSAY WALTON',
        subtitle: 'Director',
        content: 'Quis nis ullarper vestibulum eros. Suspendisse lacus lectus molestie id et, nibh tellus in. Lorem diam eu, diam vel. Nec ut eu molestie mattis consectetur mi neque nunc dignissim. Semper eget vel faucibus odio eleifend.',
    },
    {
        image: Meet,
        title: 'LINDSAY WALTON',
        subtitle: 'Director',
        content: 'Quis nis ullarper vestibulum eros. Suspendisse lacus lectus molestie id et, nibh tellus in. Lorem diam eu, diam vel. Nec ut eu molestie mattis consectetur mi neque nunc dignissim. Semper eget vel faucibus odio eleifend.',
    },
    {
        image: Meet,
        title: 'LINDSAY WALTON',
        subtitle: 'Director',
        content: 'Quis nis ullarper vestibulum eros. Suspendisse lacus lectus molestie id et, nibh tellus in. Lorem diam eu, diam vel. Nec ut eu molestie mattis consectetur mi neque nunc dignissim. Semper eget vel faucibus odio eleifend.',
    },
])
</script>
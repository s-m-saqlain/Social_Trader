<template>
    <div class="h-full bg-black lg:px-[10rem] px-6 py-[4rem] ">
        <div class="sm:flex justify-between items-start">
            <div class="w-full">
                <p class="text-white lg:text-5xl text-3xl">Frequently Asked</p>
                <p class="text-white lg:text-5xl text-3xl">Questions</p>
                <!-- For Desktop -->
                <p class="lg:block hidden text-white pt-8">Aren’t able to find the answers you’re looking for?</p>
                <p class="lg:block hidden text-white">Reach out to our <span
                        class="text-green-300 text-[18px] cursor-pointer">customer
                        support</span>
                    team.</p>
                <!-- For Tablet -->
                <p class="lg:hidden text-white pt-8 px-2">Aren’t able to find the answers you’re looking for?Reach out
                    to our
                    <span class="text-green-300 text-[18px] cursor-pointer">customersupport</span>
                    team.
                </p>
            </div>
            <main class="bg-light-blue">
                <div class="flex justify-center items-start">
                    <div class="lg:w-[750px]">
                        <ul class="flex flex-col">
                            <li class="my-2 shadow-lg border" v-for="item in items" :key="item.id"
                                :class="{ active: item.id === activeId }">
                                <h2 @click="toggle(item.id)"
                                    class="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer">
                                    <span class="text-white">{{ item.question }}</span>
                                    <svg :class="item.id === activeId ? 'rotate-180' : ''"
                                        class="fill-current text-white h-6 w-6 duration-500" viewBox="0 0 20 20">
                                        <path
                                            d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10">
                                        </path>
                                    </svg>
                                </h2>
                                <div :ref="el => refs[`tab${item.id}`] = el" :style="{
                                    maxHeight: item.id === activeId ? maxHeights[item.id] : '0px'
                                }" class="overflow-hidden duration-500 transition-all">
                                    <p class="p-3 text-gray-400">{{ item.answer }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, nextTick } from 'vue';

const items = ref([
    {
        id: 1,
        question: 'What is Regulation CF?',
        answer:
            '[answer depends on Form C contents / offering structure] - NEED DETAILS',
    },
    {
        id: 2,
        question: 'What is eligible invest?',
        answer:
            '[answer depends on Form C contents / offering structure] - NEED DETAILS',
    },
    {
        id: 3,
        question: 'What are the tax implication of making a Reg CF investment?',
        answer:
            '[answer depends on Form C contents / offering structure] - NEED DETAILS',
    },
    {
        id: 4,
        question: 'How was the valuation/valuation cap determined?',
        answer:
            '[answer depends on Form C contents / offering structure] - NEED DETAILS',
    },
    {
        id: 5,
        question: 'What is the market of these securities? How can I expect to see a return on my investment if I invest in this offering?',
        answer: '[answer depends on Form C contents / offering structure] - NEED DETAILS',
    },
    {
        id: 6,
        question: 'What is the issuance Express?',
        answer:
            '[answer depends on Form C contents / offering structure] - NEED DETAILS',
    },
]);

const activeId = ref(null);
const refs = reactive({});
const maxHeights = reactive({});

const toggle = async (id) => {
    activeId.value = activeId.value === id ? null : id;
    await nextTick();
    if (activeId.value !== null) {
        maxHeights[id] = `${refs[`tab${id}`].scrollHeight}px`;
    }
};

</script>

<style scoped>
/* Add any custom styles here */
</style>
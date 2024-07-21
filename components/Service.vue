<template>
    <div class="sm:block hidden relative">
        <img src="~/assets/images/service.svg" class="lg:block hidden mx-auto pt-12" />
        <img src="~/assets/images/stick.svg" class="lg:hidden mx-auto pt-12" />
        <h1 class="absolute inset-0 text-white lg:text-5xl sm:text-4xl text-center top-12">Our Goal is to Provide Unique
            Services</h1>
        <p class="absolute inset-0 text-gray-300 text-center text-thin pt-[50px] top-12">We are positioned to have a
            list of
            features that set us
            apart</p>
        <div
            class="absolute inset-0 sm:flex justify-end items-start lg:gap-[6rem] sm:gap-[4rem] mt-[210px] lg:mx-[150px] sm:mx-[4rem]">
            <img src="~/assets/images/socialtrader.svg" class="lg:w-[100px] sm:w-[45px]" />
            <div class="flex justify-end items-start lg:gap-[2rem] sm:gap-4">
                <img src="~/assets/images/sofi.svg" class="lg:w-full sm:w-[45px]" />
                <img src="~/assets/images/betterment.svg" class="lg:w-full sm:w-[45px]" />
                <img src="~/assets/images/trade.svg" class="lg:w-full sm:w-[45px]" />
                <img src="~/assets/images/wealthfront.svg" class="lg:w-full sm:w-[45px]" />
            </div>
        </div>
        <div class="absolute inset-0 lg:top-[280px] sm:top-[250px]">
            <div v-for="(feature, index) in features" :key="index">
                <div class="relative sm:flex justify-between item-center lg:gap-10 gap-[4rem] mt-[5px] pt-1 h-10">
                    <p class="text-white pl-[4rem] font-medium text-sm text-base lg:w-100 sm:w-[350px]">{{ feature.name
                        }}</p>
                    <div class="flex justify-end items-start lg:gap-[10rem] sm:gap-[11rem] lg:mx-[180px] mx-12">
                        <img :src="feature.mainImage" class="" />
                        <div class="flex justify-end items-start lg:gap-[7rem] gap-[3rem]">
                            <img :src="img" v-for="(img, subIndex) in feature.subImages" :key="subIndex" />
                        </div>
                    </div>
                </div>
                <div class="relative border-t border-green-400 lg:mx-[4rem] mx-[3rem] lg:my-0 sm:my-2"></div>
            </div>
        </div>
        <div class="absolute inset-0 sm:top-[750px] top-[550px]">
            <div class="flex justify-end items-center">
                <p class="text-white text-sm text-base sm:px-[4rem] px-6 text-end">*See Forward-Looking Statements
                    Disclaimer</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Green from "~/assets/images/greentick.svg";
import Cancel from "~/assets/images/cancel.svg";

const features = ref([
    {
        name: 'SEC-Approved Robo-Advisory Platform',
        mainImage: Green,
        subImages: [Cancel, Cancel, Cancel, Cancel]
    },
    {
        name: 'Drag-and-Drop Strategy Building Tools',
        mainImage: Green,
        subImages: [Cancel, Cancel, Cancel, Cancel]
    },
    {
        name: 'Robo-Advisory for Cryptocurrencies',
        mainImage: Green,
        subImages: [Green, Green, Green, Green]
    },
    {
        name: 'AI-Powered Strategy Marketplace',
        mainImage: Green,
        subImages: [Cancel, Cancel, Cancel, Cancel]
    },
    {
        name: 'Enhanced Exchange-Traded Products (ETXs)',
        mainImage: Green,
        subImages: [Cancel, Cancel, Cancel, Cancel]
    },
    {
        name: 'Stock Trading Capabilities',
        mainImage: Green,
        subImages: [Cancel, Green, Green, Green]
    },
    {
        name: 'AI-Moderated Social Trading Community',
        mainImage: Green,
        subImages: [Cancel, Cancel, Cancel, Cancel]
    }
]);
</script>
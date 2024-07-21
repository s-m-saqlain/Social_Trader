<template>
    <div class="sm:flex justify-between items-center">
        <div class="lg:ml-12 sm:ml-8 sm:w-96 sm:py-0 py-8">
            <h1 class="text-white lg:text-4xl text-3xl sm:text-start text-center">Explore our Tiers</h1>
            <h1 class="text-white lg:text-4xl text-3xl sm:text-start text-center">of Investments</h1>
            <p class="text-gray-300 sm:py-6 py-3 sm:text-start text-center">Be part of our journey</p>
            <div class="flex sm:justify-start justify-center">
                <button class="sm:block hidden btn btn-hover cursor-pointer mr-3 rounded-md hover:border-none">
                    INVEST NOW
                </button>
            </div>
            <div class="flex sm:justify-start justify-center items-center gap-6 mt-4">
                <div class="sm:relative">
                    <p class="text-white text-base text-sm font-thin cursor-pointer">View Form C</p>
                    <div class="sm:absolute sm:top-4 sm:inset-0 border-t"></div>
                </div>
                <div class="sm:relative">
                    <p class="text-white text-base text-sm font-thin cursor-pointer">View All Fillings</p>
                    <div class="sm:absolute sm:top-4 sm:inset-0 border-t"></div>
                </div>
            </div>
        </div>
        <swiper :spaceBetween="20" :pagination="{ clickable: true }" :breakpoints="{
            320: { slidesPerView: 1.2 },
            768: { slidesPerView: 1.4 },
            1024: { slidesPerView: 2.4 }
        }" :modules="modules" class="relative mySwiper lg:w-full rounded-md bg-[#282828]">
            <swiper-slide v-for="(item, index) in slides" :key="index" class="bg-slide bg-cover bg-no-repeat">
                <div class="flex justify-between item-center gap-4">
                    <div class="my-[3rem]">
                        <p class="pl-10 font-thin text-2xl text-green-500">{{ item.type }}</p>
                        <p class="pl-10 text-end text-6xl text-white">{{ item.price }}</p>
                        <p class="pl-10 text-end text-sm text-base text-gray-500">{{ item.title }}</p>
                        <p class="pl-10 text-medium text-sm text-base text-gray-400">{{ item.question }}</p>
                        <div class="flex justify-start pl-8 gap-2" v-if="item.content1">
                            <img :src="item.image" />
                            <p class="pt-10 text-gray-300">{{ item.content1 }}</p>
                        </div>
                        <div class="flex justify-start pl-8 gap-2" v-if="item.content2">
                            <img :src="item.image" />
                            <p class="pt-10 text-gray-300">{{ item.content2 }}</p>
                        </div>
                        <div class="flex justify-start pl-8 gap-2" v-if="item.content3">
                            <img :src="item.image" />
                            <p class="pt-10 text-gray-300">{{ item.content3 }}</p>
                        </div>
                        <div class="flex justify-start pl-8 gap-2" v-if="item.content4">
                            <img :src="item.image" />
                            <p class="pt-10 text-gray-300">{{ item.content4 }}</p>
                        </div>
                        <div class="flex justify-start pl-8 gap-2" v-if="item.content5">
                            <img :src="item.image" />
                            <p class="pt-10 text-gray-300">{{ item.content5 }}</p>
                        </div>
                    </div>
                    <div class="border-l border-gray-400 h-[600px] my-[4rem]"></div>
                </div>
            </swiper-slide>
            <img src="~/assets/images/arrow.svg"
                class="absolute inset-0 lg:top-[670px] sm:top-[680px] top-[680px] lg:left-[1100px] sm:left-[350px] left-[12rem] cursor-pointer" />
        </swiper>
    </div>
</template>

<script setup>

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "~/assets/css/style.css";
import { Pagination } from "swiper/modules";
import Tick from "~/assets/images/tick.svg";

import "~/assets/css/butoon.scss"

const slides = [
    {
        type: "Tier 1",
        price: "$250",
        title: "Investment amount",
        question: "WHAT'S INCLUDED",
        image: Tick,
        content1: "3 months of complimentary subscription fees for RoboAnalyzer, RoboTrader, and RoboTools.",
        content2: "Personalized welcome letter from our CEO."
    },
    {
        type: "Tier 2",
        price: "$500",
        title: "Investment amount",
        question: "WHAT'S INCLUDED",
        image: Tick,
        content1: "6 months of complimentary subscription fees for RoboAnalyzer, RoboTrader, and RoboTools.",
        content2: "Personalized welcome letter from our CEO.",
        content3: "Exclusive SocialTrader.AI branded merchandise."
    },
    {
        type: "Tier 3",
        price: "$1000",
        title: "Investment amount",
        question: "WHAT'S INCLUDED",
        image: Tick,
        content1: "1 year of complimentary subscription fees for RoboAnalyzer, RoboTrader, and RoboTools.",
        content2: "Discount on platform trading fees.",
        content3: "Personalized thank you video from our executive team.",
        content4: "Early access to new features and product launches."
    },
    {
        type: "Tier 4",
        price: "$5000",
        title: "Investment amount",
        question: "WHAT'S INCLUDED",
        image: Tick,
        content1: "3 years of complimentary subscription fees for RoboAnalyzer, RoboTrader, and RoboTools.",
        content2: "Discount on platform trading fees.",
        content3: "Personalized thank you video from our executive team.",
        content4: "Early access to new features and product launches.",
        content5: "Invitation to an exclusive quarterly webinar with our executive team, discussing market trends and company updates."
    },
    {
        type: "Tier 5",
        price: "$10,000",
        title: "Investment amount",
        question: "WHAT'S INCLUDED",
        image: Tick,
        content1: "Lifetime of complimentary subscription fees for RoboAnalyzer, RoboTrader, and RoboTools.",
        content2: "Discount on platform trading fees.",
        content3: "Exclusive VIP meet and greet with the executive team at the prestigious University Club of San Diego, including a private tour of our headquarters.",
        content4: "Personalized thank you video from our CEO.",
        content5: "Exclusive invitation to our annual investor event."
    },
    {
        type: "Tier 6",
        price: "$25,000",
        title: "Investment amount",
        question: "WHAT'S INCLUDED",
        image: Tick,
        content1: "Everthing at the $10,000 level.",
        content2: "Private dinner with the executive team In a top-rated San Diego restaurant, tailared to your culinary preferences",
        content3: "Personalized one-on-one consultation with our execution team to discuss your trading strategies and goals.",
        content4: "Custom SocialTrader.AI gift box featuring premium branded items."
    },
    {
        type: "Tier 7",
        price: "$50,000",
        title: "Investment amount",
        question: "WHAT'S INCLUDED",
        image: Tick,
        content1: "Everthing at the $25,000 level.",
        content2: "Invitation to an exclusive industry networking event at the Yale/Harvard Club in NYC, with opportunities to connect with top fintech professionals.",
        content3: "Personalized one-on-one consultation with our execution team to discuss your trading strategies and goals.",
        content4: "Custom SocialTrader.AI gift box featuring premium branded items."
    },
    {
        type: "Tier 8",
        price: "$100,000",
        title: "Investment amount",
        question: "WHAT'S INCLUDED",
        image: Tick,
        content1: "Everthing at the $50,000 level.",
        content2: "Work closely with our team to name, design, and deploy your own trading algorithm.",
        content3: "Featured educational and instructional content highlighting the rationale behind your custom strategy.",
        content4: "Dedicated support team to assist with the deployment and optimization of your trading algorithm.",
        content5: "Personalized leather-bound portfolio with your custom algorithm details and performance metrics."
    },
    {
        type: "Tier 9",
        price: "$250,000",
        title: "Investment amount",
        question: "WHAT'S INCLUDED",
        image: Tick,
        content1: "Everthing at the $100,000 level.",
        content2: "Featured interview on Fintech TV, showcasing your investment and insights.",
        content3: "Special recognition on our website and in press releases as a top-tier investor",
        content4: "Personalized VIP experience package, including luxury accommodations and exclusive experiences during company events.",
        content5: "Lifetime access to all SocialTrader.AI events and exclusive content."
    }
]

</script>
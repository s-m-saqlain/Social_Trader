<template>

    <!-- For Desktop And Tablet -->

    <div class="sm:block hidden relative mt-8 ">
        <img src="~/assets/images/social_trader.png" class="h-[640px] w-full" />
        <div class="absolute inset-0 lg:top-[150px] sm:top-[8rem] lg:left-[10rem] sm:left-8">
            <h1 class="text-white text-3xl">Invest in SocialTrader and</h1>
            <h1 class="text-white text-3xl">be part of the Financial Revolution</h1>
            <p class="text-white text-sm text-base mt-4">Invest in our vision and be part of the next wave of financial
                innovation.</p>
            <p class="text-white text-sm text-base">Seize this opportunity to grow with us and shape the future of
                finance.</p>
        </div>
        <div class="absolute inset-0 lg:top-[310px] sm:top-[280px] lg:left-[10rem] sm:left-8">
            <button class="sm:block hidden btn btn-hover cursor-pointer mr-3 rounded-md hover:border-none">
                INVEST NOW
            </button>
        </div>
        <div
            class="absolute inset-0 lg:top-[150px] sm:top-[80px] flex justify-start items-center gap-6 lg:ml-[10rem] sm:ml-8">
            <div class="relative">
                <p class="text-white text-base text-sm font-thin cursor-pointer">View Form C</p>
                <div class="absolute top-4 inset-0 border-t"></div>
            </div>
            <div class="relative">
                <p class="text-white text-base text-sm font-thin cursor-pointer">View All Fillings</p>
                <div class="absolute top-4 inset-0 border-t"></div>
            </div>
        </div>
    </div>

    <!-- For Mobile -->

    <div class="sm:hidden mt-8">
        <div class="h-full">
            <h1 class="text-white text-3xl text-center">Invest in SocialTrader and be part of the Financial Revolution
            </h1>
            <p class="text-white text-sm text-base mt-4 text-center px-6">Invest in our vision and be part of the next
                wave of financial
                innovation. Seize this opportunity to grow with us and shape the future of
                finance.</p>
            <div class="flex justify-center mt-6">
                <button class="btn btn-hover cursor-pointer mr-3 rounded-md hover:border-none">
                    INVEST NOW
                </button>
            </div>
            <div class="flex justify-center items-center gap-6 my-6">
                <div class="relative">
                    <p class="text-white text-base text-sm font-thin cursor-pointer">View Form C</p>
                    <div class="absolute top-4 inset-0 border-t"></div>
                </div>
                <div class="relative">
                    <p class="text-white text-base text-sm font-thin cursor-pointer">View All Fillings</p>
                    <div class="absolute top-4 inset-0 border-t"></div>
                </div>
            </div>
        </div>
        <img src="~/assets/images/social_trader.png" class="" />
    </div>
</template>

<script setup>
import "~/assets/css/butoon.scss"
</script>
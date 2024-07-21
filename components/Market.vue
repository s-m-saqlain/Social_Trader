<template>
    <div class="lg:relative ">
        <div class="lg:block hidden">
            <div class="flex justify-start items-center gap-4 absolute inset-0 bottom-[400px] left-[4rem]">
                <div class="shadow-btns h-20"></div>
                <div>
                    <p class="text-2xl text-white">2024-2032</p>
                    <p class="text-gray-500 font-medium pt-3">Robo Advisory Total Market Growth Projections
                    </p>
                </div>
            </div>
        </div>
        <img src="~/assets/images/market.png" class="w-full bg-cover bg-no-repeat" />
        <img src="~/assets/images/market_graph.svg" class="lg:block hidden absolute inset-0 top-[6rem] left-[6rem]" />
        <!-- For Desktop -->
        <div
            class="lg:block hidden absolute inset-0 left-[930px] top-[5rem] bg-black sm:w-[580px] h-[350px] border-t-2 border-green-300 px-4">
            <h1 class="text-gray-300 text-3xl text-semibold pt-8">A $72 Billion Dollar Market Opportunity</h1>
            <p class="text-gray-300 pt-4">The robo-advisory market is experiencing a remarkable surge in</p>
            <p class="text-gray-300">global growth. Worth USD 7.39 billion in 2023, forecasts project an</p>
            <p class="text-gray-300">impressive compound annual growth rate (CAGR) of 28.8% from</p>
            <p class="text-gray-300">2024 to 2032</p>
            <p class="text-gray-300 pt-8">A primary driving face behind this expansion is the ongoing digital</p>
            <p class="text-gray-300">transformation in the financial sector. As more and more financial</p>
            <p class="text-gray-300">services adapt digital and automated processes, robo-advisors</p>
            <p class="text-gray-300">have come to the forfront, providing users with advanced</p>
            <p class="text-gray-300">analytical capabilities for investment consultations</p>
        </div>
        <!-- For Tablet And Mobile -->
        <div class="lg:hidden sm:block bg-black border-t-2 border-green-300 sm:w-[580px] w-[300px] px-4 mx-auto">
            <h1 class="text-white text-3xl text-semibold pt-8">A $72 Billion Dollar Market Opportunity</h1>
            <p class="text-gray-300 pt-4">The robo-advisory market is experiencing a remarkable surge in global growth.
                Worth USD 7.39 billion in 2023, forecasts project an impressive compound annual growth rate
                (CAGR) of 28.8% from 2024 to 2032</p>
            <p class="text-gray-300 pt-8">A primary driving face behind this expansion is the ongoing digital
                transformation in the financial sector. As more and more financial services adapt digital and automated
                processes, robo-advisors have come to the forfront, providing users with advanced
                analytical capabilities for investment consultations
            </p>
        </div>
        <!-- For Tablet -->
        <div class="lg:hidden">
            <div class="flex justify-start items-center gap-4 sm:mx-[6rem] mx-6 mt-8">
                <div class="shadow-btns h-20"></div>
                <div>
                    <p class="text-3xl text-white">2024-2032</p>
                    <p class="text-gray-500 font-medium pt-3">Robo Advisory Total Market Growth Projections
                    </p>
                </div>
            </div>
        </div>
        <img src="~/assets/images/market_graph.svg" class="lg:hidden mx-auto" />
        <p class="lg:absolute inset-0 text-white top-[470px] text-sm text-base text-end right-[5rem] lg:px-0 px-6">*Polaris Market
            Resert Report ID:
            PM4529, Published FEB-2024</p>
    </div>
</template>
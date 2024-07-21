<template>
    <div class="lg:relative bg-black sm:h-[1000px] pt-12 lg:ml-0 sm:ml-10">
        <h1 class="text-white lg:text-7xl sm:text-4xl text-3xl lg:text-center sm:mx-0 mx-5">We have an early mover's
            advantage.</h1>
        <div class="sm:flex justify-between lg:mx-[6rem]">
            <div class="lg:pl-[7rem]">
                <p class="text-white pt-4 sm:mx-0 mx-5">Licenses, Approvals and User Waitlist Growing</p>
                <div class="lg:w-[600px] sm:w-96 border-b-2 border-green-500 my-6 sm:mx-0 mx-5"></div>
                <p class="text-green-400 font-medium uppercase sm:mx-0 mx-5">Comprehensive SEC Approvals Include:</p>
                <div class="flex justify-start items-center gap-3 mt-4 sm:mx-0 mx-4">
                    <img src="~/assets/images/file.svg" />
                    <p class="text-white font-medium">AI-enabled robo-advising through a SaaS model available in all 50
                        states.</p>
                </div>
                <div class="flex justify-start items-center gap-3 mt-4 sm:mx-0 mx-4">
                    <img src="~/assets/images/file.svg" />
                    <p class="text-white">Authorization to charge monthly subscription fees for clients subscribed to
                        our algorithmic and all fund offerings.</p>
                </div>
                <div class="flex justify-start items-center gap-3 mt-4 sm:mx-0 mx-4">
                    <img src="~/assets/images/file.svg" />
                    <p class="text-white">Permission to offer hedge fund-like strategies to both accredited and
                        non-accredited investors.</p>
                </div>
            </div>
            <img src="~/assets/images/advantages.svg" class="lg:w-full sm:w-[300px]" />
        </div>
        <div
            class="lg:absolute inset-0 top-[530px] sm:flex justify-between items-center lg:gap-[6rem] sm:gap-8 lg:mx-[220px] mx-6 sm:mr-12">
            <div class="bordered-box">
                <p class="text-end text-green-500 mr-4">01</p>
                <img src="~/assets/images/tick_file.svg" />
                <p class="text-white font-medium pt-4">RIA Licensed and Approved</p>
                <p class="text-white text-sm text-base pt-4">Our platform has garnered significant interest from a
                    diverse range
                    of stakeholders.</p>
            </div>
            <div class="bordered-box sm:my-0 my-12">
                <p class="text-end text-green-500 mr-4">02</p>
                <img src="~/assets/images/human.svg" />
                <p class="text-white font-medium pt-4">RIA Licensed and Approved</p>
                <p class="text-white text-sm text-base pt-4">Our platform has garnered significant interest from a
                    diverse range
                    of stakeholders.</p>
            </div>
            <div class="bordered-box">
                <p class="text-end text-green-500 mr-4">03</p>
                <img src="~/assets/images/dollar.svg" />
                <p class="text-white font-medium pt-4">RIA Licensed and Approved</p>
                <p class="text-white text-sm text-base pt-4">Our platform has garnered significant interest from a
                    diverse range
                    of stakeholders.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bordered-box {
    position: relative;
    border-top: 1px solid #22c55e;
    border-left: 1px solid #22c55e;
    padding-top: 1rem;
    padding-left: 2rem;
    height: 320px;
}

.bordered-box::before,
.bordered-box::after {
    content: '';
    position: absolute;
    background-color: #22c55e;
}

.bordered-box::before {
    top: 0;
    left: 0;
    width: 5px;
    height: 38px;
    border-top: 2px solid #22c55e;
    border-left: 2px solid #22c55e;
}

.bordered-box::after {
    bottom: 0;
    right: 0;
    width: 18px;
    height: 8px;
    border-bottom: 2px solid #22c55e;
    border-right: 2px solid #22c55e;
}
</style>
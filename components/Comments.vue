<template>
    <div class="bg-[#080808] pt-12">
        <div class="sm:flex justify-start items-center gap-[12rem] lg:mx-[10rem] mx-6">
            <h1 class="text-white text-4xl">Discussion</h1>
            <h1 class="text-red-500 lg:text-6xl sm:text-4xl font-thin">PLACEHOLDER DIV</h1>
        </div>
        <div class="border-b border-gray-600 w-10 lg:mx-[10rem] mx-6 mt-4"></div>
        <div class="sm:flex justify-between items-center lg:mx-[10rem] mx-6 bg-[#464646] rounded-xl mt-4 py-4 px-4">
            <div>
                <p class="text-white font-medium text-sm text-base">aptera-regcf Comment Policy</p>
                <p class="text-gray-300 font-thin text-sm text-base pt-1">Use this section to ask the issuer questions
                    directly. Responses from issuer are market Official. No off-topic comments.</p>
            </div>
            <button class="text-black font-medium bg-[#8dc740] w-44 rounded-xl py-2">Got it</button>
        </div>
        <div class="flex justify-between items-center lg:mx-[10rem] mx-7">
            <p class="text-gray-300 mt-7 text-sm text-base">42 Comments</p>
            <div class="flex justify-between items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-log-in text-white h-4 mt-7 cursor-pointer">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
                <p class="text-white font-semibold mt-6 cursor-pointer">Login</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-chevron-down text-white mt-7 cursor-pointer">
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>
        </div>
        <div class="border-b-2 border-gray-300 lg:mx-[10rem] sm:mx-6 mt-3"></div>
        <div class="flex justify-start items-start gap-2 lg:mx-[10rem] mx-6 mt-4">
            <div class="bg-green-300 rounded-xl px-2">
                <p class="text-gray-700 font-medium text-3xl">G</p>
            </div>
            <input type="text" id="first_name"
                class="bg-[#191919] text-gray-600 text-sm rounded-lg block w-full px-4 py-4"
                placeholder="Join the discussion..." required />
        </div>
        <div class="sm:flex justify-start item-center gap-[12rem] lg:mx-[205px] sm:mx-[5rem] mx-6 mt-3">
            <p class="text-gray-300 text-sm text-base">LOG IN WITH</p>
            <div class="flex justify-between item-end gap-2">
                <p class="text-gray-300 text-sm text-base">GET SIGN UP WITH DISQUS</p>
                <p class="text-white border rounded-full px-2 text-sm text-base">?</p>
            </div>
        </div>
        <div class="sm:flex justify-start items-center gap-2 lg:mx-[10rem] sm:mx-[5rem] mx-8 mt-4">
            <div class="flex justify-start items-start gap-1 mt-2">
                <div class="bg-blue-500 rounded-full px-2 cursor-pointer">
                    <p class="text-white font-bold text-2xl">D</p>
                </div>
                <div class="bg-blue-800 rounded-full px-3 cursor-pointer">
                    <p class="text-white font-bold text-2xl">f</p>
                </div>
                <div class="bg-black border rounded-full px-2 cursor-pointer">
                    <p class="text-white font-bold text-2xl">X</p>
                </div>
                <div class="bg-red-500 rounded-full px-2 pb-1 cursor-pointer">
                    <p class="text-white font-bold text-2xl">G</p>
                </div>
                <div class="bg-white rounded-full px-2 pb-1 cursor-pointer">
                    <p class="text-red-500 font-bold text-2xl">M</p>
                </div>
                <div class="bg-white rounded-full px-2 pb-1 cursor-pointer">
                    <p class="text-red-500 font-bold text-2xl">A</p>
                </div>

            </div>
            <input type="text" id="first_name"
                class="bg-white text-black text-sm rounded-md block w-full px-4 py-1 mt-3" placeholder="Name"
                required />
        </div>
        <div class="sm:flex justify-between items-center lg:mx-[10rem] mx-6 mt-12">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-gray-400">
                <path d="M12 21s-8-7.6-8-11.6 3.2-6 8-6 8 2.8 8 6-8 11.6-8 11.6z" />
            </svg>
            <div class="flex justify-between item-center gap-4">
                <p class="text-gray-400 text-sm text-base cursor-pointer">Best</p>
                <p class="text-green-500 border-b border-green-500 text-sm text-base cursor-pointer">Newest</p>
                <p class="text-gray-400 text-sm text-base cursor-pointer">Oldest</p>
            </div>
        </div>
        <div class="sm:flex justify-start items-start gap-2 lg:mx-[10rem] mx-6 mt-4">
            <div class="bg-green-500 rounded-xl px-[14px] sm:w-100 w-10">
                <p class="text-gray-700 font-medium text-3xl">J</p>
            </div>
            <div>
                <div class="flex justify-start item-start">
                    <p class="text-green-400 font-medium">Jeff Carlton</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-gray-400">
                        <circle cx="12" cy="4" r="2" />
                        <path d="M12 6v4" />
                        <path d="M10 8h4" />
                        <path d="M10 12h4v6h-4z" />
                        <path d="M8 18h8" />
                    </svg>
                </div>
                <div class="flex justify-start item-center gap-6">
                    <p class="text-gray-400 text-[12px]">2 days ago</p>
                    <p class="text-gray-400 text-[12px]">edited</p>
                </div>
                <p class="text-gray-200 pt-2 text-sm text-base">Was in Italy recently, it's full of Bangladeshis. I have
                    mixed feeling about
                    people from South Asia migrating all over the world. We have a combined population closing in on 2
                    billion people and we are flooding the world since there are no jobs at home and the Western
                    countries are growing older. But this is also leading to a lot of racism against south asians
                    because of our large numbers. I wish South Asia is able to prosper and people don't have to migrate
                    for jobs and a good life. PS: I am an Indian who came back from California and live in India now.
                    Home is home</p>
            </div>
            <div class="flex justify-between items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 w-5 cursor-pointer" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 w-5 cursor-pointer" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 2l.55 9.93L12 12l-6.45 1.07L5 22l-2.55-9.93L1 12l6.45-1.07L5 2z"></path>
                </svg>
            </div>
        </div>
        <div class="flex justify-start items-start gap-5 lg:mx-[205px] sm:mx-[4rem] mx-6 mt-2">
            <div class="flex justify-start items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 w-4 text-base text-sm cursor-pointer"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path
                        d="M19.07 7.53l-9-6a3.24 3.24 0 0 0-3.92 0l-9 6a3.25 3.25 0 0 0-1.07 4.47c.5 1 1.5 1.6 2.57 1.6h1.35v7.2a1.8 1.8 0 0 0 1.8 1.8h8.6a1.8 1.8 0 0 0 1.8-1.8v-7.2h1.35a2.85 2.85 0 0 0 2.57-1.6 3.25 3.25 0 0 0-1.06-4.47z">
                    </path>
                </svg>
                <p class="text-gray-400 text-base text-sm">0</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 w-4 text-base text-sm cursor-pointer"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
                <path
                    d="M4.93 16.07l9 6a3.24 3.24 0 0 0 3.92 0l9-6a3.25 3.25 0 0 0 1.07-4.47c-.5-1-1.5-1.6-2.57-1.6h-1.35v-7.2a1.8 1.8 0 0 0-1.8-1.8h-8.6a1.8 1.8 0 0 0-1.8 1.8v7.2h-1.35a2.85 2.85 0 0 0-2.57 1.6 3.25 3.25 0 0 0 1.06 4.47z">
                </path>
            </svg>
            <div class="flex justify-between item-center gap-2"></div>
            <p class="text-gray-400 text-sm text-base cursor-pointer">Reply</p>
            <p class="text-gray-400 text-sm text-base cursor-pointer">Share></p>
        </div>
        <div class="sm:flex justify-start items-start gap-2 lg:mx-[10rem] mx-6 mt-4">
            <div class="bg-green-500 rounded-xl px-[4px] sm:w-100 w-12">
                <p class="text-gray-700 font-medium text-2xl">MB</p>
            </div>
            <div>
                <p class="text-green-400 font-medium">Jeff Carlton</p>
                <p class="text-gray-400 text-[12px]">16 days ago</p>
                <p class="text-gray-200 pt-2 text-sm text-base">Was in Italy recently, it's full of Bangladeshis. I have
                    mixed feeling about
                    people from South Asia migrating all over the world. We have a combined population closing in on 2
                    billion people and we are flooding the world since there are no jobs at home and the Western
                    countries are growing older. But this is also leading to a lot of racism against south asians
                    because of our large numbers. I wish South Asia is able to prosper and people don't have to migrate
                    for jobs and a good life. PS: I am an Indian who came back from California and live in India now.
                    Home is home</p>
            </div>
            <div class="flex justify-between items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 w-5 cursor-pointer" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 w-5 cursor-pointer" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 2l.55 9.93L12 12l-6.45 1.07L5 22l-2.55-9.93L1 12l6.45-1.07L5 2z"></path>
                </svg>
            </div>
        </div>
        <div class="flex justify-start items-start gap-5 lg:mx-[205px] sm:mx-[4rem] mx-6 mt-2">
            <div class="flex justify-start items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 w-4 text-base text-sm cursor-pointer"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path
                        d="M19.07 7.53l-9-6a3.24 3.24 0 0 0-3.92 0l-9 6a3.25 3.25 0 0 0-1.07 4.47c.5 1 1.5 1.6 2.57 1.6h1.35v7.2a1.8 1.8 0 0 0 1.8 1.8h8.6a1.8 1.8 0 0 0 1.8-1.8v-7.2h1.35a2.85 2.85 0 0 0 2.57-1.6 3.25 3.25 0 0 0-1.06-4.47z">
                    </path>
                </svg>
                <p class="text-gray-400 text-base text-sm">0</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 w-4 text-base text-sm cursor-pointer"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
                <path
                    d="M4.93 16.07l9 6a3.24 3.24 0 0 0 3.92 0l9-6a3.25 3.25 0 0 0 1.07-4.47c-.5-1-1.5-1.6-2.57-1.6h-1.35v-7.2a1.8 1.8 0 0 0-1.8-1.8h-8.6a1.8 1.8 0 0 0-1.8 1.8v7.2h-1.35a2.85 2.85 0 0 0-2.57 1.6 3.25 3.25 0 0 0 1.06 4.47z">
                </path>
            </svg>
            <div class="flex justify-between item-center gap-2"></div>
            <p class="text-gray-400 text-sm text-base cursor-pointer">Reply</p>
            <p class="text-gray-400 text-sm text-base cursor-pointer">Share></p>
        </div>
        <div class="sm:flex justify-start items-start gap-2 lg:mx-[10rem] sm:mx-[4rem] mx-4 lg:ml-[200px] mt-4">
            <div class="bg-green-500 rounded-xl px-[14px] sm:w-100 w-10">
                <p class="text-gray-700 font-medium text-3xl">J</p>
            </div>
            <div>
                <div class="flex justify-start item-start gap-2">
                    <p class="text-green-400 font-medium">Jeff Carlton</p>
                    <p class="bg-green-500 font-medium text-sm text-base pt-1 h-7 px-2 rounded-md cursor-pointer">
                        Official</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="w-6 h-6 text-gray-400 mt-1">
                        <circle cx="12" cy="4" r="2" />
                        <path d="M12 6v4" />
                        <path d="M10 8h4" />
                        <path d="M10 12h4v6h-4z" />
                        <path d="M8 18h8" />
                    </svg>
                    <div class="flex justify-between item-start cursor-pointer gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 w-4" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                        </svg>
                        <p class="text-gray-400 text-sm text-base mt-1">Make Boss</p>
                    </div>
                </div>
                <p class="text-gray-400 text-[12px]">16 days ago</p>
                <p class="text-gray-200 pt-2 text-sm text-base">Was in Italy recently, it's full of Bangladeshis. I have
                    mixed feeling about
                    people from South Asia migrating all over the world. We have a combined population closing in on 2
                    billion people and we are flooding the world since there are no jobs at home and the Western
                    countries are growing older. But this is also leading to a lot of racism against south asians
                    because of our large numbers. I wish South Asia is able to prosper and people don't have to migrate
                    for jobs and a good life. PS: I am an Indian who came back from California and live in India now.
                    Home is home</p>
            </div>
            <div class="flex justify-between items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 w-5 cursor-pointer" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 w-5 cursor-pointer" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 2l.55 9.93L12 12l-6.45 1.07L5 22l-2.55-9.93L1 12l6.45-1.07L5 2z"></path>
                </svg>
            </div>
        </div>
        <div class="flex justify-start items-start gap-5 lg:mx-[205px] sm:mx-[7rem] mx-6 mt-2">
            <div class="flex justify-start items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 w-4 text-base text-sm cursor-pointer"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path
                        d="M19.07 7.53l-9-6a3.24 3.24 0 0 0-3.92 0l-9 6a3.25 3.25 0 0 0-1.07 4.47c.5 1 1.5 1.6 2.57 1.6h1.35v7.2a1.8 1.8 0 0 0 1.8 1.8h8.6a1.8 1.8 0 0 0 1.8-1.8v-7.2h1.35a2.85 2.85 0 0 0 2.57-1.6 3.25 3.25 0 0 0-1.06-4.47z">
                    </path>
                </svg>
                <p class="text-gray-400 text-base text-sm">0</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 w-4 text-base text-sm cursor-pointer"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
                <path
                    d="M4.93 16.07l9 6a3.24 3.24 0 0 0 3.92 0l9-6a3.25 3.25 0 0 0 1.07-4.47c-.5-1-1.5-1.6-2.57-1.6h-1.35v-7.2a1.8 1.8 0 0 0-1.8-1.8h-8.6a1.8 1.8 0 0 0-1.8 1.8v7.2h-1.35a2.85 2.85 0 0 0-2.57 1.6 3.25 3.25 0 0 0 1.06 4.47z">
                </path>
            </svg>
            <div class="flex justify-between item-center gap-2"></div>
            <p class="text-gray-400 text-sm text-base cursor-pointer">Reply</p>
            <p class="text-gray-400 text-sm text-base cursor-pointer">Share></p>
        </div>
        <div class="sm:flex justify-start items-start gap-2 lg:mx-[10rem] mx-6 mt-4">
            <div class="bg-green-500 rounded-xl px-3 sm:w-100 w-10">
                <p class="text-gray-700 font-medium text-2xl">K</p>
            </div>
            <div>
                <p class="text-green-400 font-medium">Jeff Carlton</p>
                <p class="text-gray-400 text-[12px]">16 days ago</p>
                <p class="text-gray-200 pt-2 text-sm text-base">Was in Italy recently, it's full of Bangladeshis. I have
                    mixed feeling about
                    people from South Asia migrating all over the world. We have a combined population closing in on 2
                    billion people and we are flooding the world since there are no jobs at home and the Western
                    countries are growing older. But this is also leading to a lot of racism against south asians
                    because of our large numbers. I wish South Asia is able to prosper and people don't have to migrate
                    for jobs and a good life. PS: I am an Indian who came back from California and live in India now.
                    Home is home</p>
            </div>
            <div class="flex justify-between items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 w-5 cursor-pointer" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 w-5 cursor-pointer" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 2l.55 9.93L12 12l-6.45 1.07L5 22l-2.55-9.93L1 12l6.45-1.07L5 2z"></path>
                </svg>
            </div>
        </div>
        <div class="flex justify-start items-start gap-5 lg:mx-[205px] sm:mx-[4rem] mx-6 mt-2">
            <div class="flex justify-start items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 w-4 text-base text-sm cursor-pointer"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path
                        d="M19.07 7.53l-9-6a3.24 3.24 0 0 0-3.92 0l-9 6a3.25 3.25 0 0 0-1.07 4.47c.5 1 1.5 1.6 2.57 1.6h1.35v7.2a1.8 1.8 0 0 0 1.8 1.8h8.6a1.8 1.8 0 0 0 1.8-1.8v-7.2h1.35a2.85 2.85 0 0 0 2.57-1.6 3.25 3.25 0 0 0-1.06-4.47z">
                    </path>
                </svg>
                <p class="text-gray-400 text-base text-sm">0</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 w-4 text-base text-sm cursor-pointer"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
                <path
                    d="M4.93 16.07l9 6a3.24 3.24 0 0 0 3.92 0l9-6a3.25 3.25 0 0 0 1.07-4.47c-.5-1-1.5-1.6-2.57-1.6h-1.35v-7.2a1.8 1.8 0 0 0-1.8-1.8h-8.6a1.8 1.8 0 0 0-1.8 1.8v7.2h-1.35a2.85 2.85 0 0 0-2.57 1.6 3.25 3.25 0 0 0 1.06 4.47z">
                </path>
            </svg>
            <div class="flex justify-between item-center gap-2"></div>
            <p class="text-gray-400 text-sm text-base cursor-pointer">Reply</p>
            <p class="text-gray-400 text-sm text-base cursor-pointer">Share></p>
        </div>
    </div>
</template>
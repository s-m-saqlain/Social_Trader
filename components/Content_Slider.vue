<template>
    <div>
        <swiper :options="swiperOptions" ref="mySwiper">
            <swiper-slide v-for="(slide, index) in slides" :key="index">
                <div class="flex-container">
                    <div class="content" v-show="slide.showContent">
                        <p>This is some content.</p>
                    </div>
                    <div class="image" v-show="slide.showImage">
                        <img src="~/assets/images/banner.svg" alt="Placeholder Image" />
                    </div>
                </div>
            </swiper-slide>
        </swiper>

        <div class="buttons">
            <button @click="toggleContentImage(1)">Button 1</button>
            <button @click="toggleContentImage(2)">Button 2</button>
            <button @click="toggleContentImage(3)">Button 3</button>
            <button @click="toggleContentImage(4)">Button 4</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "~/assets/css/style.css";
import { Pagination } from "swiper/modules";

const swiperOptions = ref({
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    modules: [Pagination],
});

const slides = ref([
    { showContent: true, showImage: true },
    { showContent: true, showImage: true },
]);

const toggleContentImage = (buttonNumber) => {
    slides.value.forEach(slide => {
        switch (buttonNumber) {
            case 1:
                slide.showContent = !slide.showContent;
                slide.showImage = !slide.showImage;
                break;
            case 2:
                slide.showContent = !slide.showContent;
                slide.showImage = !slide.showImage;
                break;
            case 3:
                slide.showContent = !slide.showContent;
                slide.showImage = !slide.showImage;
                break;
            case 4:
                slide.showContent = !slide.showContent;
                slide.showImage = !slide.showImage;
                break;
        }
    });
};
</script>

<style scoped>
.flex-container {
    display: flex;
    flex-direction: column;
}

.content,
.image {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
}

.content {
    background-color: #f0f0f0;
}

.image img {
    max-width: 100%;
    height: auto;
}

.buttons {
    margin-top: 20px;
    display: flex;
    gap: 10px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
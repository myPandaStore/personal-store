<template>
	<div class="swiperbox">
		<Swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :centeredSlides="true" :pagination="{
			clickable: true
		}" :autoplay="{
	delay: 2500,
	disableOnInteraction: false
}" :navigation="true" :modules="modules" class="mySwiper">
			<swiper-slide v-for="item in props.list" :key="item.id">
				<img  alt="轮播图" v-webp="item.imgUrl"/>
			</swiper-slide>
		</Swiper>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


interface CarouselItem {
	id: number;
	imgUrl: string;
}

const modules = ref([Autoplay, Pagination, Navigation, A11y])
const props = defineProps<{
	list?: CarouselItem[],
}>()

</script>
<style></style>

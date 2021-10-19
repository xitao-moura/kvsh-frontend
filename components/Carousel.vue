<template>
    <div class="carousel">
        <swiper ref="mySwiper" class="carousel-telao">
            <swiper-slide v-for="slider in sliders.data" :key="slider.id" :style="{ background: `url(http://localhost:4001${slider.imagem.url})` }"></swiper-slide>
        </swiper>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                sliders: []
            }
        },
        methods: {
            async getSlider(){
                this.sliders = await this.$api.get('sliders')
            }
        },
        mounted(){
            this.getSlider()
        }
    }
</script>
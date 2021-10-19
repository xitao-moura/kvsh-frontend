<template>
    <div class="carousel">
        <swiper ref="mySwiper" class="carousel-telao">
            <swiper-slide v-for="slider in sliders" :key="slider.id" :style="{ background: `url(https://kvsh-api.musiclounge.com.br${slider.imagem.url})` }"></swiper-slide>
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
                this.sliders = this.sliders.data
                console.log(this.sliders)
            }
        },
        mounted(){
            this.getSlider()
        }
    }
</script>
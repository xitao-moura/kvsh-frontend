<template>
    <div class="ultimos-lancamentos" id="lancamentos">
        <h1>
            <b-img center fluid src="ultimos-lancametos.png"></b-img>
        </h1>
        <b-container>
            <b-img-lazy v-for="lancamento in lancamentos" :key="lancamento._id" v-if="lancamento.destaque" center fluid class="destaque" src="destaque-ultimos-lancametnos.png"></b-img-lazy>
        </b-container>
        <div class="carousel-background">
            <b-container>
                <div class="carousel-lancamentos">
                    <swiper :options="SwiperOptions" :breakpoints="SwiperOptions.breakpoints" :navigation="true" class="mySwiper">
                        <swiper-slide v-for="lancamento in lancamentos" :key="lancamento._id" v-if="!lancamento.destaque">
                                <a :href="lancamento.url" target="_blank">
                                <b-card
                                    :img-src="getImage(lancamento.imagem.url)"
                                    :img-alt="lancamento.titulo"
                                    img-top
                                    tag="article"
                                    style="max-width: 20rem;"
                                    class="mb-2"
                                >
                                    <b-card-text>
                                        {{ lancamento.titulo }}
                                    </b-card-text>
                                </b-card>
                            </a>
                        </swiper-slide>
                    </swiper>
                </div>
            </b-container>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            lancamentos: [],
            SwiperOptions: {
                slidesPerView: 3,
                spaceBetween: 200,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 2
                    },
                    300: {
                        slidesPerView: 1
                    }
                }
            }
        }
    },
    methods: {
        async getLancamentos(){
            this.lancamentos = await this.$api.get('lancamentos')
            this.lancamentos = this.lancamentos.data
        },
        getImage(img){
            return `https://kvsh-api.musiclounge.com.br${img}`
        }
    },
    mounted(){
        this.getLancamentos()
    }
}
</script>
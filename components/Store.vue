<template>
    <div class="store" id="store">
        <b-container>
            <h1>
                <!-- <b-img center fluid src="Store.png"></b-img> -->
                SStore
            </h1>
            <div class="carousel">
                <swiper :options="SwiperOptions" :breakpoints="SwiperOptions.breakpoints" :navigation="true" class="mySwiper">
                    <swiper-slide v-for="store in stores.data" :key="store.id">
                        <a href="">
                            <b-card
                                :img-src="getImage(store.imagem.url)"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2"
                            >
                                <b-card-text>
                                    {{ store.descricao }}
                                </b-card-text>
                            </b-card>
                        </a>
                    </swiper-slide>
                </swiper>
            </div>
        </b-container>
    </div>
</template>
<script>
export default {
    data(){
    return {
      SwiperOptions: {
        slidesPerView: 3,
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
      },
      stores: []
    }
  },
    methods: {
        async getStores(){
            this.stores = await this.$api.get('stores')
        },
        getImage(img){
            return `https://kvsh-api.musiclounge.com.br${img}`
        }
    },
    mounted(){
        this.getStores()
    }
}
</script>
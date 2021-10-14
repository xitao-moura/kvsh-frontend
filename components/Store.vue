<template>
    <div class="store" id="store">
        <b-container>
            <h1>
                <!-- <b-img center fluid src="Store.png"></b-img> -->
                SStore
            </h1>
            <div class="carousel">
                <swiper :options="SwiperOptions" :breakpoints="SwiperOptions.breakpoints" :navigation="true" class="mySwiper">
                    <swiper-slide>
                        <b-card
                            img-src="/store/store-1.jpg"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2"
                        >
                            <b-card-text>
                                Camiseta Save You Now Nephew x KVSH
                            </b-card-text>
                        </b-card>
                    </swiper-slide>
                    <swiper-slide>
                        <b-card
                            img-src="/store/store-2.jpg"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2"
                        >
                            <b-card-text>
                                Camiseta Steal Your Love Nephew x KVSH
                            </b-card-text>
                        </b-card>
                    </swiper-slide>
                    <swiper-slide>
                        <b-card
                            img-src="/store/store-3.jpg"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2"
                        >
                            <b-card-text>
                                Calça de Moletom Steal Your Love Nephew x KVSH
                            </b-card-text>
                        </b-card>
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
      }
    }
  }
}
</script>
<template>
    <div class="ultimos-lancamentos" id="lancamentos">
        <h1>
            <b-img center fluid src="ultimos-lancametos.png"></b-img>
        </h1>
        <b-container>
            <b-img-lazy center fluid class="destaque" src="destaque-ultimos-lancametnos.png"></b-img-lazy>
        </b-container>
        <div class="carousel-background">
            <b-container>
                <div class="carousel-lancamentos">
                    <swiper :options="SwiperOptions" :breakpoints="SwiperOptions.breakpoints" :navigation="true" class="mySwiper">
                        <swiper-slide>
                            <b-card
                                img-src="/lancamento-1.jpg"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2"
                            >
                                <b-card-text>
                                    KVSH, SCHILLIST - SICKO DROP
                                </b-card-text>
                            </b-card>
                        </swiper-slide>
                        <swiper-slide>
                            <b-card
                                img-src="lancamento-2.jpg"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2"
                            >
                                <b-card-text>
                                    OROCHI - AMOR DE FIM DE NOITE (KVSH REMIX)
                                </b-card-text>
                            </b-card>
                        </swiper-slide>
                        <swiper-slide>
                            <b-card
                                img-src="lancamento-3.jpg"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2"
                            >
                                <b-card-text>
                                    VINTAGE CULTURE, GILSONS KVSH - VARIAS QUEIXAS
                                </b-card-text>
                            </b-card>
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
  }
}
</script>
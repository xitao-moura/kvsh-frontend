<template>
    <b-container fluid class="videos" id="videos">
        <b-row>
            <b-col cols="10" offset="1" sm="6" lg="4" xs="8" offset-sm="3" offset-lg="1" offeset-xs="0">
                <div class="lollapalooza">
                    <p>Lollapalooza</p>
                    <p><span>aftermovie</span></p>
                    <b-row class="box">
                        <div class="d1">
                            <p>assista agora</br>no youtube</p>
                        </div>
                        <div class="d2">
                            <b-img-lazy src="icon-youtube.png"></b-img-lazy>
                        </div>
                    </b-row>
                </div>
            </b-col>
            <b-col cols="11" offset="1" lg="6" xs="4" offset-sm="1" offset-lg="0" class="bg-embed">
                <b-embed
                    type="iframe"
                    aspect="16by9"
                    src="https://www.youtube.com/embed/AgLjumQPhM4?rel=0"
                    allowfullscreen
                ></b-embed>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
    }
}
</script>
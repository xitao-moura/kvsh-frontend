<template>
    <b-row class="bio" id="bio">
        <b-container>
            <h1 class="d-block d-md-none">BBio</h1>
            <b-row class="d-block d-md-none">
                <b-col cols="12">
                    <b-img-lazy src="kvsh-bio.jpg" center fluid></b-img-lazy>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="2" md="5" class="box-1 d-none d-md-block">
                    <b-img-lazy :src="getImage(bio.imagem)" center fluid></b-img-lazy>
                </b-col>
                <b-col cols="12" md="7" class="box-2">
                    <h1 class="d-none d-md-block">BBio</h1>
                    <p>{{ bio.descricao }}</p>
                </b-col>
            </b-row>
        </b-container>
    </b-row>
</template>
<script>
    export default {
        data() {
            return {
                bio: {}
            }
        },
        methods: {
            async getSlider(){
                this.bio = await this.$api.get('bio')
                this.bio = this.bio.data
            },
            getImage(img){
                //console.log(img.url)
                return `https://kvsh-api.musiclounge.com.br/uploads/kvsh_bio_f4fd9161a8.jpg`
            }
        },
        mounted(){
            this.getSlider()
        }
    }
</script>
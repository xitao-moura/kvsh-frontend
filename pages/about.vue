<template>
    <div class="about" id="about">
        
            <b-col cols="12" class="topo">
                <div class="mask"></div>
            </b-col>
        <b-col cols="12" class="conteudo">
            <div class="titulo">Oi, eu sou<br/>o Kvsh</div>
            <b-container class="conteudo">
                <p>Luciano Ferreira, aka KVSH, is a Forbes Under 30 artist, considered one of the biggest names in Brazilian electronic music. With 540 million streams and 5.5 million monthly listeners on Spotify, he has performed at Rock in Rio, Lollapalooza, in addition to tours in the United States and Europe.</p>
                <br><p>Offstage, KVSH founded his own label, Lemon Drops, his own event, Festa Krush, and his official merchandise and apparel on sale at the KVSH Store.</p>
                <br><p>KVSH celebrates the global success of the single “Sicko Drop,” released in March, which went viral in more than 30 countries, including the United Kingdom, United States, Netherlands, surpassing 30 million plays on Spotify, 230 million views on Tik Tok, and 290,000 searches on Shazam.</p>
            </b-container>

            <!-- <b-container class="sociais">
                <ul>
                    <li v-for="social in sociais.socialNetworks" :key="social.id">
                        <a :href="social.url" target="_blank">
                            <b-img-lazy center :src="getImage(social.icon.url)"></b-img-lazy>
                        </a>
                    </li>
                </ul>
            </b-container> -->
        </b-col>
        <FacaParte/>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                about: {},
                sociais: []
            }
        },
        methods: {
            async getAbout(){
                this.about = await this.$api.get('about')
                this.about = this.about.data
                console.log(this.about)
            },
            getImage(img){
                return `https://api.kvsh.com.br${img}`
            },
            async getSociais(){
                this.sociais = await this.$api.get('global')
                this.sociais = this.sociais.data
            },
        },
        mounted(){
            this.getAbout()
            this.getSociais()
        }
    }
</script>
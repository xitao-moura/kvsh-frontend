<template>
  <div>
    <b-sidebar id="sidebar-1" shadow >
      <b-img-lazy center fluid class="sidebar-logo" src="/logo.png" alt="Kvsh Logo"></b-img-lazy>
      <div class="px-3 py-2">
        <ul>
          <li>
            <nuxt-link :to="{path: '/', hash: '#home'}" >HOME</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{path: '/', hash: '#store'}" >STORE</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{path: '/', hash: '#bio'}" >BIO</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{path: '/', hash: '#bio'}" >TOUR</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{path: '/', hash: '#lancamentos'}" >ÚLTIMOS LANÇAMENTOS</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{path: '/', hash: '#videos'}" >VÍDEOS</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{path: '/', hash: '#faca-parte-da-kvshgang'}" >FAÇA PARTE DA KVSHGANG</nuxt-link>
          </li>
        </ul>

        <b-container class="sociais">
            <ul>
                <li v-for="social in sociais.socialNetworks" :key="social.id">
                    <a :href="social.url" target="_blank">
                        <b-img-lazy center :src="getImage(social.icon.url)"></b-img-lazy>
                    </a>
                </li>
            </ul>
        </b-container>
      </div>
    </b-sidebar>
  </div>
</template>
<script>
export default {
    data(){
    return {
      sociais: []
    }
  },
    methods: {
        async getSociais(){
            this.sociais = await this.$api.get('global')
            this.sociais = this.sociais.data
        },
        getImage(img){
            return `http://localhost:4001${img}`
        }
    },
    mounted(){
        this.getSociais()
    }
}
</script>
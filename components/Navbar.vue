<template>
  <div>
    <b-navbar id="navbar" toggleable="md" type="dark">
      <b-container class="">
        <!-- <b-navbar-brand class="d-md-none">
          <img class="navbar-logo" src="/logo.png" alt="Kvsh Logo">
        </b-navbar-brand> -->
        <b-navbar-toggle v-b-toggle.sidebar-1 target="collapse-area" toggle-class="text-dark"></b-navbar-toggle>
        <!-- <b-collapse id="collapse-area" is-nav> -->
          <!-- <b-navbar-nav>
              <b-nav-item> -->
                  <!-- <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button> -->
                  <!-- <button v-b-toggle.sidebar-1 class="navbar-toggler toggler-example" type="button" ><span class="dark-teal-text"><i class="fas fa-bars fa-1x"></i></span></button> -->
              <!-- </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="d-md-block mx-auto">
            <b-nav-text>
              <img class="navbar-logo" src="/logo.png" alt="Kvsh Logo">
            </b-nav-text>
          </b-navbar-nav> -->

          <b-img-lazy center class="navbar-logo" src="/logo.png" alt="Kvsh Logo"></b-img-lazy>

            <div class="sociais d-sm-none d-xl-block">
              <ul>
                <li v-for="social in sociais.socialNetworks" :key="social.id">
                    <a :href="social.url" target="_blank">
                        <b-img-lazy center :src="getImage(social.icon.url)"></b-img-lazy>
                    </a>
                </li>
            </ul>
            </div>
            
        <!-- </b-collapse> -->
      </b-container>
    </b-navbar>
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
            return `https://kvsh-api.musiclounge.com.br${img}`
        }
    },
    mounted(){
        this.getSociais()
    }
}
</script>
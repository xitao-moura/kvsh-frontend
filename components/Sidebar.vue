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
                <li>
                    <a href="">
                        <b-img-lazy center src="social/instagram.png"></b-img-lazy>
                    </a>
                </li>
                <li>
                    <a href="">
                        <b-img-lazy center src="social/youtube.png"></b-img-lazy>
                    </a>
                </li>
                <li>
                    <a href="">
                        <b-img-lazy center src="social/tiktok.png"></b-img-lazy>
                    </a>
                </li>
                <li>
                    <a href="">
                        <b-img-lazy center src="social/facebook.png"></b-img-lazy>
                    </a>
                </li>
                <li>
                    <a href="">
                        <b-img-lazy center src="social/spotify.png"></b-img-lazy>
                    </a>
                </li>
                <li>
                    <a href="">
                        <b-img-lazy center src="social/soundcloud.png"></b-img-lazy>
                    </a>
                </li>
            </ul>
        </b-container>
      </div>
    </b-sidebar>
  </div>
</template>
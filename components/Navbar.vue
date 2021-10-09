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
            </div>
            
        <!-- </b-collapse> -->
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
export default {
  
}
</script>
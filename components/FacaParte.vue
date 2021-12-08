<template>
    <div class="faca-parte" id="faca-parte-da-kvshgang">
        <h1>
            <b-img center fluid src="faca-parte.png"></b-img>
        </h1>
        <b-container>
            <b-input-group
                class="mb-3"
            >
                <b-form-input placeholder="Digite seu melhor e-mail" v-model="email"></b-form-input>
                <b-input-group-append>
                    <b-button size="sm" text="Button" variant="success" @click="insertMailKvshGang">ENVIAR</b-button>
                </b-input-group-append>
            </b-input-group>
        </b-container>
        <b-container class="sociais">
            <ul>
                <li v-for="social in sociais.socialNetworks" :key="social.id">
                    <a :href="social.url" target="_blank">
                        <b-img-lazy center :src="getImage(social.icon.url)"></b-img-lazy>
                    </a>
                </li>
            </ul>
        </b-container>

        <vs-dialog width="550px" not-center v-model="dialogEmail">
        <template #header>
          <h4 class="not-margin">
            Atenção!
          </h4>
        </template>


        <div class="con-content">
          <p>
            {{ messageError }}
          </p>
        </div>

        <template #footer>
          <div class="con-footer">
            <vs-button @click="dialogEmail=false" transparent>
              Ok
            </vs-button>
          </div>
        </template>
      </vs-dialog>
    </div>
</template>
<script>
export default {
    data(){
    return {
      email: '',
      dialogEmail: false,
      messageError: '',
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
        },
        async insertMailKvshGang(){
            if(!this.email){
                this.messageError = 'Por favor, informe um email válido.'
                this.dialogEmail = true
                return false
            }

            await this.$api.post(`kvsh-gangs`, {
                email: this.email
            })
            .then( resp => {
                this.messageError = 'Email cadastrado com sucesso.'
                this.dialogEmail = true
                console.log(resp)
            })
            .catch( error => {
                this.messageError = 'Houve um erro ao salvar seu email. Por favor tente novamente.'
                this.dialogEmail = true
                console.log(error)
            })
        }
    },
    mounted(){
        this.getSociais()
    }
}
</script>
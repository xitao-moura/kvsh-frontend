export default function({ $axios }, inject) {
    const api = $axios.create({
        baseURL: 'https://kvsh-api.musiclounge.com.br/'
    })
    inject('api', api)
}
export default function({ $axios }, inject) {
    const api = $axios.create({
        baseURL: 'https://api.kvsh.com.br'
    })
    inject('api', api)
}
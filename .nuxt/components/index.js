export const Bio = () => import('../../components/Bio.vue' /* webpackChunkName: "components/bio" */).then(c => wrapFunctional(c.default || c))
export const Carousel = () => import('../../components/Carousel.vue' /* webpackChunkName: "components/carousel" */).then(c => wrapFunctional(c.default || c))
export const Contato = () => import('../../components/Contato.vue' /* webpackChunkName: "components/contato" */).then(c => wrapFunctional(c.default || c))
export const FacaParte = () => import('../../components/FacaParte.vue' /* webpackChunkName: "components/faca-parte" */).then(c => wrapFunctional(c.default || c))
export const Lancamentos = () => import('../../components/Lancamentos.vue' /* webpackChunkName: "components/lancamentos" */).then(c => wrapFunctional(c.default || c))
export const Navbar = () => import('../../components/Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const Sidebar = () => import('../../components/Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c))
export const Store = () => import('../../components/Store.vue' /* webpackChunkName: "components/store" */).then(c => wrapFunctional(c.default || c))
export const Tours = () => import('../../components/Tours.vue' /* webpackChunkName: "components/tours" */).then(c => wrapFunctional(c.default || c))
export const Videos = () => import('../../components/Videos.vue' /* webpackChunkName: "components/videos" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

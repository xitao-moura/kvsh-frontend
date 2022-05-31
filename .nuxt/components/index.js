export { default as Bio } from '../../components/Bio.vue'
export { default as Carousel } from '../../components/Carousel.vue'
export { default as Contato } from '../../components/Contato.vue'
export { default as FacaParte } from '../../components/FacaParte.vue'
export { default as Lancamentos } from '../../components/Lancamentos.vue'
export { default as Navbar } from '../../components/Navbar.vue'
export { default as Sidebar } from '../../components/Sidebar.vue'
export { default as Store } from '../../components/Store.vue'
export { default as Tours } from '../../components/Tours.vue'
export { default as Tracks } from '../../components/Tracks.vue'
export { default as Videos } from '../../components/Videos.vue'

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

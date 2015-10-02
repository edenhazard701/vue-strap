import './assets/style.css'
import 'prismjs'
import './js/showLanguage'

import affix from '../src/Affix.vue'
import container from './example/container.vue'
import headerDocs from './example/headerDocs.vue'
import alertDocs from './example/alertDocs.vue'
import accordionDocs from './example/accordionDocs.vue'

new Vue({
  el: '#wrapper',
  components: {
    affix,
    alertDocs,
    headerDocs,
    accordionDocs,
    container
  }
})


export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/globalComponents' },
    { src: '~/plugins/mixin' },
    { src: '~/plugins/TweenMax' },
    { src: '~/plugins/vue2-touch-events', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  styleResources: {
    scss: [
      '~/assets/css/setting.scss'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  server: {
    port: 3333,
    host: '0.0.0.0'
  },

  axios: {
    proxy: true,
  },

  proxy: {
    '/api':
      process.env.NODE_ENV !== 'production' 
        ? {
          target: 'http://localhost:3000',
          pathRewrite: { '^/api' : '/api/v1' }
        }
        : {
          target: 'http://twitter-trace-api.herokuapp.com',
          pathRewrite: { '^/api' : '/api/v1' }
        }
  },
}

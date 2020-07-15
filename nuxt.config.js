export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  // server: {
  //   host: '',
  // },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: '한끼요',
    script: [
      {
        src:
          'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js',
      },
    ],
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no',
      },
      // {
      //   hid: 'description',
      //   name: 'description',
      //   content: process.env.npm_package_description || '',
      // },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/rider-chicken.png' },
      {
        rel: 'stylesheet',
        href:
          'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['~assets/scss/colors.scss', '~assets/css/global.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: '~/plugins/vuex-persist', ssr: false }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  // proxy: {
  //   '/api': {
  //     target: 'https://hankkiyo.site/',
  //     // pathRewrite: {
  //     //   '^/api': '/',
  //     // },
  //   },
  // },
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  // build: {
  //   vendor: ['vuex-persist'],
  // },
  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },
}

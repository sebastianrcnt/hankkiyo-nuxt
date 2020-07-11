export { default as Modal } from '../../components/Modal.vue'

export const LazyModal = import('../../components/Modal.vue' /* webpackChunkName: "components/Modal'}" */).then(c => c.default || c)

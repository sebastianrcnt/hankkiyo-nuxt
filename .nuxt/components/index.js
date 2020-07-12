export { default as Modal } from '../../components/Modal.vue'
export { default as TopBar } from '../../components/TopBar.vue'

export const LazyModal = import('../../components/Modal.vue' /* webpackChunkName: "components/Modal'}" */).then(c => c.default || c)
export const LazyTopBar = import('../../components/TopBar.vue' /* webpackChunkName: "components/TopBar'}" */).then(c => c.default || c)

export const __DEV__ = process.env.NODE_ENV !== 'production'
export const BASE_URL = __DEV__ ? '/' : `/${process.env.PACKAGE_NAME}/`

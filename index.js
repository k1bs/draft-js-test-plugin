export default (config = {}) => {
  return {
    createPlugin: () => {
      return {
        config
      }
    }
  }
}

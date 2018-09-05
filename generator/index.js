module.exports = (api, opts, rootOpts) => {
  api.render('./templates/default', { ...opts });
}

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config
        .plugin('extract-css')
        .tap((args) => {
          args[0].filename = 'css/index.css';

          return args;
        });
    }
  },
};

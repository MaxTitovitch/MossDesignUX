const publicPath = process.env.NODE_ENV === 'production' ? __dirname + '/dist' : '/';

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath,
}

module.exports = {
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant']
    ],
  presets: [["@vue/app",{"useBuiltIns": "entry"}]],
};

const CracoAntDesignPlugin = require('craco-antd');

module.exports = {
  babel: {
    "presets": [
        [
          "@babel/preset-env",
          {
            "targets": {
              "chrome": "49",
              "ios": "10"
            }
          }
        ]
      ],
    
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          // '@primary-color': '#1DA57A',
        },
      },
    },
   
  ],
};

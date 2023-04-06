module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      development: {
        plugins: [
          [
            'module-resolver',
            {
              root: ['./src'],
              extensions: [
                '.js',
                '.jsx',
                '.ts',
                '.tsx',
                '.android.js',
                '.android.tsx',
                '.ios.js',
                '.ios.tsx',
              ],
              alias: {
                '@/': ['./src'],
                '@assets': ['./assets'],
              },
            },
          ],
          ["module:react-native-dotenv", {
            "moduleName": "@env",
            "path": ".env",
            "blacklist": null,
            "whitelist": null,
            "safe": false,
            "allowUndefined": true
          }]
        ],
      },
    },    
  };
};

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
                src: './src',
                assets: './assets',
              },
            },
          ],
        ],
      },
    },    
  };
};

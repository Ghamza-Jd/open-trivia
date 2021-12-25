module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          "&components": "./app/ui/components",
          "&screens": "./app/ui/screens",
          "&navigators": "./app/ui/navigators",
          "&models": "./app/models",
          "&services": "./app/services",
          "&repos": "./app/repos",
          "&env": "./app/environment"
        },
      },
    ],
  ],
};
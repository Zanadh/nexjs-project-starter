module.exports = {
  presets: [['next/babel', { 'preset-react': { runtime: 'automatic' } }]],
  plugins: [
    'babel-plugin-macros',
    ['styled-components', { ssr: true }],
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ts', '.tsx', '.web.ts', '.web.tsx', '.js', '.json'],
        alias: {
          pages: './src/pages',
          components: './src/components',
          styles: './src/styles',
          assets: './src/assets',
        },
      },
    ],
  ],
};

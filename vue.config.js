const { defineConfig } = require('@vue/cli-service');
const { VantResolver, VueUseComponentsResolver } = require('unplugin-vue-components/resolvers');
const Components = require('unplugin-vue-components/webpack');
const AutoImport = require('unplugin-auto-import/webpack');
const unpluginIcon = require('unplugin-icons/webpack');
const IconsResolver = require('unplugin-icons/resolver');
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');
const path = require('path');

const defaultClasses = 'prose prose-sm m-auto text-left';

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new WindiCSSWebpackPlugin({
        safelist: defaultClasses,
      }),
      unpluginIcon({
        compiler: 'vue3',
        autoInstall: true,
      }),
      Components({
        dts: './src/components.d.ts',
        extensions: ['vue', 'md'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        // imports 指定组件所在位置，默认为 src/components; 有需要也可以加上 view 目录
        dirs: ['src/components/'],
        resolvers: [VantResolver(), IconsResolver(), VueUseComponentsResolver()],
      }),
      AutoImport({
        dts: './src/auto-imports.d.ts',
        imports: ['vue', 'pinia', 'vue-router', 'vue-i18n', '@vueuse/core'],
        // Generate corresponding .eslintrc-auto-import.json file.
        // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(json5?|ya?ml)$/, // target json, json5, yaml and yml files
          type: 'javascript/auto',
          loader: '@intlify/vue-i18n-loader',
          include: [
            // Use `Rule.include` to specify the files of locale messages to be pre-compiled
            path.resolve(__dirname, 'src/locales'),
          ],
        },
      ],
    },
  },
});

# H5 模板

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vue Cli](https://cli.vuejs.org/zh/) - Vue.js 开发的标准工具
- 💪 [Typescript](https://www.typescriptlang.org/) - 当然！必不可少
- 🎉 [Vant 3](https://vant-contrib.gitee.io/vant/#/zh-CN) - 基于 Vue.js 3 的轻量、可靠的移动端 Vue 组件库
- 💡 [Vue Router 4](https://router.vuejs.org/zh/) - Vuejs 的官方路由
- 📦 [组件自动按需加载](https://github.com/antfu/unplugin-vue-components) - 自动按需注册组件, 无需 import
- 📥 [API 自动按需加载](https://github.com/antfu/unplugin-auto-import) - 无需手动 import 进行引入
- 🍍 [Pinia 状态管理](https://pinia.esm.dev/) - 你将会喜欢上的 Vue Store
- 🎨 [Windi CSS](https://github.com/windicss/windicss) - 下一代实用的原子 css 框架
- 😃 [icones](https://github.com/antfu/unplugin-icons) - 强大的图标库，各种图标集为你所用
- 🌍 [I18n 国际化开箱即用](./locales) - 想要翻译？是的，都可以！
- 👩‍🎨 [NProgress](https://github.com/rstacruz/nprogress) - 页面加载进度反馈
- 🔑 完整支持的代码风格规范和代码提交规范

## 已配置

### UI 框架

- [Windi CSS](https://github.com/windicss/windicss) (按需的 [TailwindCSS](https://tailwindcss.com/)) - 更轻，更快和和一系列额外的特性!
  - [Windi CSS Typography](https://windicss.org/plugins/official/typography.html)
- [Vant](https://vant-contrib.gitee.io/vant/#/zh-CN) - 基于 Vue.js 3 的轻量、可靠的移动端组件库

### Icons

- [🔍Icônes](https://icones.netlify.app/) - 使用任意的图标集
  - [unplugin-icons](https://github.com/antfu/unplugin-icons) - 自动按需引入你所需要的图标！

### 插件

- [Vue Router 4](https://router.vuejs.org/zh/) - Vuejs 的官方路由
- [Pinia](https://pinia.esm.dev) - 新一代的 Vue Store 状态管理
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - 自动按需加载组件
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - 自动按需加载 API
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - 国际化
- [VueUse](https://github.com/antfu/vueuse) - 实用的 Composition API 工具合集
- [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) - 浏览器适配 Viewport 布局

### 开发工具

- [TypeScript](https://www.typescriptlang.org/)

## 清单

使用此模板时，请尝试按照清单正确更新你自己的信息

- [ ] 在 `package.json` 中改变作者名
- [ ] 在 `.env` 中改变标题
- [ ] 在 `public` 目录下改变 favicon
- [ ] 整理 `README `并删除路由

### 开发

只需要执行以下命令就可以在 http://localhost:端口号 中看到,端口号默认为 5000

```bash
npm run serve
```

### 构建

构建该应用只需要执行以下命令

```bash
npm run build
```

然后你会看到用于发布的 `dist` 文件夹被生成。
只需要执行以下命令就可以在 http://localhost:8080 中看到

## 工程文件目录

```
├─project
│  ├─.husky ------------------------ 代码提交校验脚本
│  ├─locales ------------------------ i18n
│  ├─dist ------------------------ 打包生成的目录，包含js,image,ttf等
│  ├─public ------------------------ 项目公共资源文件
│  │  ├─manifest.json ------------------------ 原生功能配置文件
│  ├─src —— 业务代码
│  │  ├─assets --------------------- 图片文件资源目录
│  │  ├─styles --------------------- 样式文件目录
│  │  ├─components --------------------- 通用组件
│  │  │─router --------------------- 路由文件
│  │  │─store
│  │  ├─utils ------------------------ 工具类代码
│  │  ├─views ----------------- 页面代码
│  │  │  ├─home ----- 欢迎页 （推荐定义方式）
│  │  │     ├─index.vue ----- 页面入口文件
│  ├─package.json ------------------ npm的配置文件，里面包含依赖配置、Scripts配置等
│  ├─README.md ------------- 项目说明文件
```

### manifest.json

> 原生功能配置项，在项目工程根目录 pulic 文件夹内

```json5
{
  deviceType: '0x13', // 品类码
  index: 'index.html', // 入口文件url
}
```

## 代码管理

> 通过 Eslint + Prettier + Husky + Commitlint + commitizen + Lint-staged 规范前端工程代码

### 编码风格

- .editorconfig 配置统一编辑器配置
- [ESLint](https://eslint.org/) 配置为 [Airbnb Style](https://github.com/airbnb/javascript)
- [Stylelint](https://stylelint.io/)

### 提交代码

```bash
git add .
npm run commit
```

### changelog

> 通过工具`conventional-changelog`来自动生成 changelog

```bash
npm run changelog
```

### 版本管理`standard-version`

> 会根据`pacakage.json`中的`version`更新版本号，升级版本，打包 tag，并更新`changelog`。

```bash
// 当前版本v1.0.0
standard-version // output v1.1.0
// 或者
npm run release // 相当于运行standard-version

// -r 指定版本
standard-version -r major // output v2.0.0
standard-version -r minor // output v1.1.0
standard-version -r patch // output v1.0.1
standard-version -r 3.0.0 // output v3.0.0
```

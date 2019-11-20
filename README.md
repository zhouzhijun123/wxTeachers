# wx_teacher :blush:

> A Mpvue project :open_mouth:

### Build Setup :smirk:

``` bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
yarn

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 项目介绍：:smile:

#### 项目框架构成： *typescript+mpvue+flyio*

#### 项目目录

``` text
|— .awcache
|— build    一些用于项目编译打包的 node.js 脚本和 webpack 配置文件
|— config   包含了用于开发和生产环境下的不同配置
|— dist 由 src 编译后生成的可供微信小程序识别的目录
|   |— wx   页面及组件之类的均在这里面
|— node_modules
|— src  主要进行小程序功能编写的地方
|   |— component    组件存放位置
|   |— pages    小程序页面
|   |— utils
|   |— app.json 小程序的全局配置
|   |— app.ts
|   |— App.vue
|   |— main.ts  小程序入口文件
|   |— testData.json    测试数据
|   |— typings.d.ts 使 json 文件被 ts 识别
|   |— vue-shim.d.ts    使 vue 文件被 ts 识别
|— static   用于存放各种小程序本地静态资源
|— .babelrc
|— .editorconfig
|— .gitignore
|— .postcssrc.js
|— index.html
|— package-lock.json
|— package.json 项目的主配置文件，包含了项目的基本描述信息、项目所依赖的各种第三方库以及版本信息、以及可执行的脚本信息
|— package.swan.json
|— project.config.json  用于管理小程序项目的配置文件，记录了 appid、代码主目录、以及编译选项等等信息，在开发者工具中导入小程序项目时主要通过该文件读取和写入配置信息
|— project.swan.json
|— README.md
|— tsconfig.json
```

#### 项目页面组成：

- [**homgPage：**](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191120094758homePage.png) *应用主页*

- [**classesPage：**](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191120094812classesPage.png) *课程列表页，显式课程，点击对应课程项跳转到 VideoPage 页观看视频*

- [**playPage：**](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191120094826playPage.png) *直播课程页，直播课堂里的页面*

- [**subPlayPage：**](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191120094839subPlayPage.png) *直播课程主子页，在直播课堂里跳转后比较复杂的页面*

- [**cloudPage：**](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191120094817cloudPage.png) *手机教育云页*

- [**subCloudPage：**](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191120094832subCloudPage.png) *手机云教育主子页，在教育云里跳转后比较复杂的页面*

- **videoPage：** *视频页，观看视频、显式评论、提供评论，需要绑定用户的微信评论*

- **test：** *测试页*

#### 页面组件：

- [**topScrollImg：**](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191120180900topScrollImg.png) *顶部轮播图片*

- [**activityList：**](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191120180726activityList.png) *活动列表*

- [**gride：**](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191120180804gride.png) *九宫格*

- [**gride2：**](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191120180753grade2.png) *课本展示网格*

- [**gride3：**](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191120180814gride3.png) *教师介绍网格*

- [**staticImg：**](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191120180829staticImg.png) *顶部直播图片栏*

- [**staticImg2：**](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191120180844staticImg2.png) *顶部直播图片栏*

- [**videoList**](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191120180914videoList.png) *课程列表*

- [**userContend：**](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191120180907userContend.png) *用户评价区*

- [**bottomText：**](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191120180739bottomText.png) *页面底部文字*

# wxTeachers

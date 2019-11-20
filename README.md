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
|— **.awcache**<br />
|— **build**&emsp;*一些用于项目编译打包的 node.js 脚本和 webpack 配置文件*<br />
|— **config**&emsp;*包含了用于开发和生产环境下的不同配置*<br />
|— **dist**&emsp;*由 src 编译后生成的可供微信小程序识别的目录*<br />
|&emsp;&emsp;|— **wx**&emsp;*页面及组件之类的均在这里面*<br />
|— **node_modules**<br />
|— **src**&emsp;*主要进行小程序功能编写的地方*<br />
|&emsp;&emsp;|— **component**&emsp;*组件存放位置*<br />
|&emsp;&emsp;|— **pages**&emsp;*小程序页面*<br />
|&emsp;&emsp;|— **utils**<br />
|&emsp;&emsp;|— **app.json**&emsp;*小程序的全局配置*<br />
|&emsp;&emsp;|— **app.ts**<br />
|&emsp;&emsp;|— **App.vue**<br />
|&emsp;&emsp;|— **main.ts**&emsp;*小程序入口文件*<br />
|&emsp;&emsp;|— **testData.json**&emsp;*测试数据*<br />
|&emsp;&emsp;|— **typings.d.ts**&emsp;*使 json 文件被 ts 识别*<br />
|&emsp;&emsp;|— **vue-shim.d.ts**&emsp;*使 vue 文件被 ts 识别*<br />
|— **static**&emsp;*用于存放各种小程序本地静态资源*<br />
|— **.babelrc**<br />
|— **.editorconfig**<br />
|— **.gitignore**<br />
|— **.postcssrc.js**<br />
|— **index.html**<br />
|— **package-lock.json**<br />
|— **package.json**&emsp;*项目的主配置文件，包含了项目的基本描述信息、项目所依赖的各种第三方库以及版本信息、以及可执行的脚本信息*<br />
|— **package.swan.json**<br />
|— **project.config.json**&emsp;*用于管理小程序项目的配置文件，记录了 appid、代码主目录、以及编译选项等等信息，在开发者工具中导入小程序项目时主要通过该文件读取和写入配置信息*<br />
|— **project.swan.json**<br />
|— **README.md**<br />
|— **tsconfig.json**<br />

#### 项目页面组成：

- **homgPage：** *应用主页*

- **classesPage：** *课程列表页，显式课程，点击对应课程项跳转到 VideoPage 页观看视频*

- **playPage：** *直播课程页，直播课堂里的页面*

- **subPlayPage：** *直播课程主子页，在直播课堂里跳转后比较复杂的页面*

- **cloudPage：** *手机教育云页*

- **subCloudPage：** *手机云教育主子页，在教育云里跳转后比较复杂的页面*

- **videoPage：** *视频页，观看视频、显式评论、提供评论，需要绑定用户的微信评论*

- **test：** *测试页*

![homePage](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191120094758homePage.png)
![classesPage](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191120094812classesPage.png)
![cloudPage](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191120094817cloudPage.png)
![subCloudPage](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191120094832subCloudPage.png)
![playPage](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191120094826playPage.png)
![subPlayPage](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191120094839subPlayPage.png)

#### 页面组件：

- **topScrollImg：** *顶部轮播图片*

- **activityList：** *活动列表*

- **gride：** *九宫格*

- **gride2：** *课本展示网格*

- **gride3：** *教师介绍网格*

- **staticImg：** *顶部直播图片栏*

- **staticImg2：** *顶部直播图片栏*

- **userContend：** *用户评价区*

- **bottomText：** *页面底部文字*

# wxTeachers

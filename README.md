# :blush: wx_teacher

> :open_mouth: A Mpvue project

### :smile: Build Setup

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

### :smile: 项目介绍：

#### 项目框架构成： *typescript@\^3.3.3333+mpvue@\^2.0.0+flyio@\^0.6.14*
- **typescript:** *TypeScript 是 Javascript 的超集，实现以面向对象编程的方式使用 Javascrip，但最终还是编译为Javascript*
- **mpvue:** *mpvue 是一套定位于开发小程序的前端开发框架并提供了完整的 Vue.js 开发体验，其核心目标是提高开发效率，增强开发体验*
- **flyio:** *在小程序中使用请求与后台交互，只能使用原生的 wx.request，如果想要像 axio 一样使用三方包，只能使用 flyio*
- **依赖包版本号:**
    - *' **\~** ' 会匹配最近的小版本依赖包，比如 \~1.2.3 会匹配所有 1.2.x 版本，但是不包括 1.3.0*
    - *' **\^** ' 会匹配最新的大版本依赖包，比如 \^1.2.3 会匹配所有 1.x.x 的包，包括 1.3.0，但是不包括 2.0.0*
    - *' **\*** ' 会安装最新版本的依赖包*

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


### :mega: 数据流动方式
1. **testData.json** 提供测试数据
2. **遵循原则:** 本页页面数据由本页提供，跳转页数据由上一页决定
3. 跳转 **URL** 类似于 *跳转页面路径?id=所需数据所在的id值*<br />
    - 如：跳转到 playPage 页，且其数据 id 为 0 ==> {"destUrl": "../playPage/main?id=0"}
    - 数据存储方式：{ "playPage": ["0": {id 为 0 的数据}, "1": {...}, ...] }
4. 组件不存在数据，页面通过 **Prop** 传递数据
5. 评论区的内容要实时或刷新后**返回给 testData**，然后再重新渲染 userContend 组件

### :pencil: 项目零散知识点
1. **npm start** 会执行 scripts 里的 start 字段，若没有 start 字段则执行 node server.js
2. 当新建 page 或 component 时需要重新运行一下 **npm run dev** 
3. **'\*.vue'** 页面包含了 HTML、CSS、script 各个部分
    - **HTML:** template 标签下需要一个统一的父级元素，且不能使用 v-for 之类的能产生多个元素的语法
    - **CSS:** 提供了 scoped 来限制样式的范围
    - **script:** 我们采用了 ts 语法，可通过 &lt;script lang="ts" src="脚本文件路径"&gt;&lt;/script&gt; 引入脚本
4. **\@Prop:** 定义变量接收父组件传递来的参数，它的参数可以是类型变量或者对象或者数组
    - 如： @Prop(Number) propA!: number;
    - ! 和可选参数 ? 是相反的, 它告诉 TypeScript 我这里一定有值
5. **\@Component:** 声明注册组件
6. **this.\$root.\$mp.query:** 获取跳转时 URL 传入的参数对象
7. **e.mp.detail:** 获取事件触发时传递给监听函数的值对象
8. **e.target:** 指向的是触发事件监听的对象，即点击的是谁
9. **e.currentTarget:** 指向的是添加监听事件的对象，即这个事件在哪个组件上

# wxTeachers

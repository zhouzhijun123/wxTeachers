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
##### Vue 相关
1. **Vue 的作用**
    - 组件化，面向对象编程思想，能够重复利用，方便维护
    - 响应式原理，每一个组件（MODLE）都有一个watcher，watcher实时监听组件数据。当数据发生改变时，我们通过重新来渲染来实时显示UI界面
    - 根据第二点，对于数据的改变，我们可以通过修改MODLE，然后再让MODLE通知VIEW来进行重新渲染而无需直接在View的层面进行改变（也就是直接对DOM进行操作）。这样子可以减少开销！
2. **Vue 的生命周期**
    - 实例从创建到被销毁所经历的这一段时间叫做生命周期？？
    - 钩子函数是好比找了个代理，**监视事件是否发生**，如果发生了这个代理就执行你的事件处理方法，而这个代理就是钩子函数
    - [Vue 的钩子函数](https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_191121055135lifecycle.png)：
        + beforeCreadted：vue实例的挂载元素 $el 和数据对象 data 都为 undefined，还未初始化
        + created：vue 实例的数据对象 data 有了，$el 还没有
        + beforeMount：vue 实例的 $el 和 data 都初始化了，但还是虚拟的 DOM 节点，具体的 data.filter 还未替换
        + mounted：vue 实例挂载完成，data.filter 成功渲染
        + beforeUpdate：data 更新之前触发
        + updated：data 更新时触发
        + beforeDestroy：组件销毁之前触发
        + destroyed：组件销毁时触发，vue实例解除了事件监听以及和dom的绑定（无响应了），但DOM节点依旧存在
3. **'\*.vue'** 页面包含了 HTML、CSS、script 各个部分
    - **HTML:** template 标签下需要一个统一的父级元素，且不能使用 v-for 之类的能产生多个元素的语法
    - **CSS:** 提供了 scoped 来限制样式的范围
    - **script:** 我们采用了 ts 语法，可通过 &lt;script lang="ts" src="脚本文件路径"&gt;&lt;/script&gt; 引入脚本
4. **Vue 部分指令**
    - v-bind 主要用于属性绑定，简写为 :attr="attrValue"
    - v-on 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码，简写为 \@，如 \@eventName="handler"，有事件修饰符如下：
        + .stop 阻止事件继续传播 ==> &lt;div @click.stop="handler"&gt;阻止单击事件继续传播&lt;/div&gt;
        + .prevent 阻止默认事件的发生 ==> &lt;form @submit.prevent="onSubmit"&gt;提交事件不再重载页面&lt;/form&gt;
        + .capture 添加事件监听器时使用事件捕获模式，即内部元素触发的事件先在此处理，然后才交由内部元素进行处理
        + .self 将事件绑定到自身，只有自身才能触发
        + .once 设置事件只能触发一次
        + .passive 立即触发事件的默认行为，尤其能够提升移动端的性能，不要把 .passive 和 .prevent 一起使用，因为 .prevent 将会被忽略
    - v-for 指令把一个数组对应为一组元素，需要使用 v-for="item in items" 形式的特殊语法
    - v-if 指令用于条件性地渲染一块内容，只会在指令的表达式返回 truthy 值的时候被渲染
        + v-else
        + v-else-if
        + v-show 根据条件展示元素，带有 v-show 的元素始终会被渲染并保留在 DOM 中
        + 而 v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建
5. **class 绑定**
    - 对象语法 :class="{ className: check }" className 这个类是否存在取决于 check 的 truthiness，可有多个类，以逗号分隔
    - 当 className 由 CSS 模块提供时，应写成 :class="{ 'className': check }"，不带引号的由脚本提供，styly 绑定也是一样
    - 数组语法 :class="['className1', 'className2'...]"，以应用一个 class 列表
    - 三元运算符绑定类 :class="[check? 'className1':'className2']"
    - 用在组件上，class 将被添加到该组件的根元素上面，已存在的不会被覆盖
6. **样式绑定**
    - 对象语法 :style="{color: color, fontSize: fontSize+'rpx'}"
    - 数组语法 :style="[style1, style2, ...]"
    - 自动添加前缀，当使用需要添加浏览器引擎前缀的 CSS 属性时，Vue.js 会自动侦测并添加相应的前缀
    - 多重值 :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"

##### 小程序相关
1. **全局配置(app.json)**
    - **pages:** string[] ==> 页面路径，必填
    - **window:** Object ==> 全局的默认窗口表现
        + navigationBarBackgroundColor: HexColor ==> 导航栏背景颜色，如 #000000
        + navigationBarTextStyle: string ==> 导航栏标题颜色，仅支持 black / white
        + navigationBarTitleText: string ==> 导航栏标题文字内容
        + enablePullDownRefresh： boolean ==> 是否开启全局的下拉刷新
        + backgroundTextStyle: string ==> 下拉 loading 的样式，仅支持 dark / light
        + ......
    - tabBar: Object ==> 底部 tab 栏的表现
    - networkTimeout: Object ==> 网络超时时间
    - debug: boolean ==> 是否开启 debug 模式，默认关闭
    - functionalPages: boolean ==> 是否启用插件功能页，默认关闭
    - subpackages: Object[] ==> 分包结构配置
    - workers: string ==> Worker 代码放置的目录
    - requiredBackgroundModes: string[] ==> 需要在后台使用的能力，如「音乐播放」
    - plugins: Object ==> 使用到的插件
    - preloadRule: Object ==> 分包预下载规则
    - resizable: boolean ==> iPad 小程序是否支持屏幕旋转，默认关闭
    - navigateToMiniProgramAppIdList: string[] ==> 需要跳转的小程序列表
    - usingComponents: Object ==> 全局自定义组件配置
    - permission: Object ==> 小程序接口权限相关设置
    - sitemapLocation: String ==> 指明 sitemap.json 的位置
    - style: String ==> 指定使用升级后的weui样式
2. **使用 swiper**
    - 其中只可放置 swiper-item 组件，否则会导致未定义的行为
    - swiper 默认高度为 150px，需要动态计算高度或者结合 scroll-view，但 scroll-view 区域会导致无法下拉刷新
    - swiper-item 仅可放置在 swiper 里面，宽高自动设置为 100%
3. 

##### 开发相关
1. **npm start** 会执行 scripts 里的 start 字段，若没有 start 字段则执行 node server.js
2. 当新建 page 或 component 时需要重新运行一下 **npm run dev** 
3. **\@Prop:** 定义变量接收父组件传递来的参数，它的参数可以是类型变量或者对象或者数组
    - 如： @Prop(Number) propA!: number;
    - ! 和可选参数 ? 是相反的, 它告诉 TypeScript 我这里一定有值
4. **\@Component:** 声明注册组件
5. **组件使用:** 在小驼峰语法下把第一个大写的改成小写并在它的前面加 '-'
    - 组件 bottomText 使用时为 &lt;bottom-text&gt;
    - 组件 topScrollBar 使用时为 &lt;top-scrollBar&gt;
6. **this.\$root.\$mp.query:** 获取跳转时 URL 传入的参数对象
7. **e.mp.detail:** 获取事件触发时传递给监听函数的值对象
8. **e.target:** 指向的是触发事件监听的对象，即点击的是谁
9. **e.currentTarget:** 指向的是添加监听事件的对象，即这个事件在哪个组件上
10. **耦合：** 指两个及以上的体系或两种运动形式间通过相互作用而彼此影响以至联合起来的现象，做项目时不应让模块间耦合度太高，否则调试时比较麻烦

# wxTeachers

# wx_teacher

:blush:

> A Mpvue project

## Build Setup

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

## 项目介绍：

:smile:

### 项目框架构成： *typescript+mpvue+flyio*

### 项目页面组成：

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

### 页面组件：

- **topScrollImg：** *顶部轮播图片*

- **activityList：** *活动列表*

- **gride：** *九宫格*

- **gride2：** *课本展示网格*

- **gride3：** *教师介绍网格*

- **staticImg：** *顶部直播图片栏*

- **staticImg2：** *顶部直播图片栏*

- **userContend：** *用户评价区*

- **bottomText：** *页面底部文字*

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# wxTeachers

# react-tao

#### 项目介绍
仿淘票票APP的H5项目
访问地址：[https://dingwufu.github.io/react-tao/](https://dingwufu.github.io/react-tao/)

#### 软件架构
基于create-react-app搭建。技术栈为 react + typescript,使用mockjs构建dev数据。

#### 安装教程
```bash
# 克隆项目
git clone https://github.com/dingwufu/react-tao.git

# 跳转到项目根目录
cd react-tao

# 建议不要用 cnpm 安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 安装依赖
npm install

# 运行本地环境
npm run start
```

#### 代码规范

1. 函数命名使用小驼峰命名规则;html标签属性值使用中划线分隔(例：class="border-bottom");常量使用大写,下划线分隔;
2. 自定义组件文件夹名/文件名一律使用大驼峰命名；资源文件使用中划线/下划线命名规则
3. 优先使用ES6语法。声明变量只能使用let, 声明常量const


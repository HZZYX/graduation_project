## 1.编程式路由跳转到当前路由(参数不变)，多次执行会抛出 NavigationDuplicated 的警告错误

    --路由跳转有两种形式：声明式导航，编程式导航
    --声明式导航没有这类问题的，因为Vue-router底层已经处理好了

## 2. 为什么编程式导航进行路由跳转的时候，有这种警告错误呢？

    "vue-router": "^3.5.3",最新的vue-router,引入了Promise

    例：function push(){
        return new Promise((resolve,reject)=>{
            console.log("123");
        })
    }

## 3.postman测试接口
    --postman工具测试接口
    --服务器返回的数据code字段200，代表服务器返回数据成功
    --整个项目，接口前缀都有 /api 字样

## 4.axios二次封装
    为什么需要进行二次封装axios？
    请求拦截器、响应拦截器：
        请求拦截器，可以在发送请求之前处理一些业务
        响应拦截器，当服务器数据返回以后，可以处理一些事情

## 5.在项目中经常有 api 文件夹，用于存放axios相关文件

## 6.接口统一管理
    项目很小：完全可以在组件的生命周期函数中发送请求

    项目很大：axios.get('xxx')

## 7.跨域问题
    什么是跨域：协议、域名、端口号不同的请求，称之为跨域
    http://localhost:8080/#/home  ---前端项目本地服务器
    http://39.98.123.211          ---后台服务器

    常见解决跨域的问题方法：jsonp、cros、代理服务器

## 8.nprogress插件(进度条)的使用
    cnpm install --save nprogress   安装命令
    start: 进度条开始
    done: 进度条结束
    进度条颜色可以修改的，当然需要修改人家的样式

## 9.vuex 状态管理库

    9.1 vuex是什么？
    vuex是官方提供一个插件，状态管理库，集中式管理项目中组件公用的数据
    切记：并不是全部项目都需要Vuex,如果项目很小，完全不需要Vuex，如果
    项目很大，组件很多、数据很多，数据维护很费劲，使用vuex
    state、mutations、actions、getters、modules

    9.2 vuex基本使用
    
    9.3 Vuex实现模块式开发
    如果项目过大，组件过多，接口也多，数据也很多，可以让vuex实现模块式开发

    模拟state存储数据
    
## 10.防抖、节流
    节流：用户操作很频繁，但是把频繁的操作变为少量操作  (可以给浏览器有充裕的时间解析代码)

     防抖：用户操作很频繁，但是只是执行一次

    引入方式：是把lodach全部功能函数引入
    import _ from "lodash";
    按需引入：import throttle from "lodash/throttle";

## 11.路由跳转与传递参数
    1.1路由跳转：
        声明式导航：router-link
        编程式导航：puch|replace
        如果使用声明式导航router-link，可以实现路由的跳转与传递参数，但是需要注意，出现卡顿现象

        最好的解决方案：编程式导航+事件的委派
        利用事件委派存在一些问题：
            1.事件委派是把【h3、dt、dl、em...】的事件委派给父节点
            2.点击a标签的时候，才会进行路由跳转【怎么确定点击的一定是a标签呢？】
            3.即使你能确定点击的是a标签，如何区分是一级、二级、三级分类的标签
            4.如何获取参数呢？【跳转路由路径、传递参数....】
        
        解决方案：
            一级、二级、三级分类的a标签添加自定义属性
                【:data-catName="a1.catName"】
                【:data-catName="a2.catName"】
                【:data-catName="a3.catName"】

##  12mock.js(数据模拟)
    如果你想mock数据，需要用到一个插件mockjs
    安装命令：cnpm install --save mockjs
    
    使用步骤：
        1）在项目中src文件中创建mock文件夹
        2）第二步准备JSON数据(mock文件夹中创建相应的JSON文件) ---格式化一下，别留有空格(否则跑不起来)
        3）把mock数据需要的图片放置到public文件中【public文件夹在打包的时候，会把相应的资源原封不动打包到dist文件中】
        4）开始mock（虚拟数据了），通过mockjs模块实现
        5）MockServe.js文件在入口文件中引入(至少需要执行一次，才能模拟数据)

##  28路由懒加载
    当打包构建应用时，JavaScript 包会变得非常大，影响页面的加载。
    如果我们能把不同路由对应的组件分割成不同的代码块，然后路由被访问的时候加载对应的组件，这样就更加高效了
    ()=>import('@/views/Search')

##  29打包上线：npm run build
    项目打包后，代码都是经过压缩加密的，如果运行报错，输出的错误无法准确得知是哪里的代码报错
    有了map这个文件，就可以像未加密的代码一样，准确的·输出是哪一行一列的有错。
    所以该文件如果项目不需要是可以去掉
    vue.config.js配置
    productionSourceMap:false

##  30.购买服务器
        1.阿里云、腾讯云等等
        2.设置安全组，让服务器一些端口号打开
        3.利用xshell工具登录服务器

        linux指令
            1.  '~'     ==>     root的home目录
            2.  '/'     ==>     根目录 (根目录下只有root才能访问，别的别想访问)
            3.  cd      ==>     跳转目录
            4.  ls      ==>     查看
            5.  mkdir   ==>     创建目录
            6.  pwd   ==>       查看绝对路径
            7.  vim   ==>       编辑文件
            8.  wq   ==>        保存

##  了解Nginx反向代理
    1.为什么访问服务器的IP地址就可以访问到咱们的项目？
    http://82.156.11.187/
    刚刚在服务器上 ==> /root/jch/www/shangpinhui/dist

    2.项目的数据来自于http://39.98.123.211

    3.Nginx配置：
        1.xshell进入根目录/etc，ls查看，etc这个目录下有一个默认目录 nginx
        2.进入nginx目录，【如果没有安装过nginx，nginx下只有4、5个文件】
        3.如果想安装nginx，就在当前目录下(nginx)：yum install nginx
        4.安装完nginx服务器以后，你会发现在nginx目录下，多了一个nginx.conf文件，在这个文件中进行配置
        5.vim nginx.conf进行编辑，按insert进入编辑模式，按esc退出，主要添加如下两项

        解决第一个问题:
        location / {
            root    /root/jch/www/shangpihui/dist;
            index index.html;
            try_files $uri/ /index.html
        }
        解决第二个问题(反向代理，替咱们这台上线的服务器去别的服务器去要数据):
        location /api {
            proxy_pass http://39.98.123.211;
        }

        6.nginx服务器跑起来
            service nginx start


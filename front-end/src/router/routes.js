// 1. 定义路由组件.
// 也可以从其他文件导入
// import HelloWorld from "../components/HelloWorld.vue";
import About from "../components/About.vue";
import Test from "../views/Test.vue";
import ImgClass from "../views/ImgClass.vue";

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
export const routes = [
    // { path: '/', component: HelloWorld },
    {path: '/', component: About},
    {path: '/img_cls', component: ImgClass},
    {path: '/test', component: Test}
]
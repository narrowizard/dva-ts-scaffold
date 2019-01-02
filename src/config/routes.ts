// routes.ts
// 路由配置
const getRouters = () => ([
    {
        name: "Index",
        models: [],
        path: "/",
        exact: true,
        component: () => import("../routes/Home/Index"),
    },
    {
        name: "Some",
        models: [],
        path: "/",
        component: () => import("../routes/Some"),
    },
]);

export default getRouters;

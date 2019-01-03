import { IRouteInfo } from "@definitions/global";

// routes.ts
// 路由配置
const getRouters: () => IRouteInfo[] = () => ([
    {
        name: "Index",
        models: ["home"],
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

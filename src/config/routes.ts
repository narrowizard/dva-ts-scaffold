import { IDynamicRouteInfo, IRouterDataItem } from "@definitions/global";
import { DvaInstance } from "dva";
import dynamic from "dva/dynamic";
import React from "react";

let routerData: IRouterDataItem[];

const modelNotExisted = (app: DvaInstance, model: string) =>
    // eslint-disable-next-line
    !app._models
        .some(({ namespace }: { namespace: string }) => namespace === model.substring(model.lastIndexOf("/") + 1));

const dynamicWrapper = (app: DvaInstance, item: IDynamicRouteInfo) => {
    return dynamic({
        app,
        models: () => item.models.filter((m) => modelNotExisted(app, m)).map((m) => import(`../models/${m}`)),
        component: () => {
            return item.component().then((raw) => {
                if (!routerData) {
                    routerData = getRouters(app);
                }
                const component = raw.default || raw;
                const d = (props: any) => {
                    return React.createElement(component, {
                        ...props,
                        routerData,
                    });
                };
                return d;
            });
        },
    });
};

// routes.ts
// 路由配置
const getRouters: (app: DvaInstance) => IRouterDataItem[] = (app) => ([
    {
        name: "Index",
        path: "/",
        exact: true,
        component: dynamicWrapper(app, {
            models: ["home"],
            component: () => import("../routes/Home/Index"),
        }),
    },
    {
        name: "Some",
        path: "/",
        component: dynamicWrapper(app, {
            models: [],
            component: () => import("../routes/Some"),
        }),
    },
]);

export default getRouters;

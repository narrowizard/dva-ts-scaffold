import * as React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import * as H from 'history';
import dynamic from 'dva/dynamic';
import { DvaInstance } from 'dva';

import './index.less';

function RouterConfig({ history, app }: { history: H.History, app: DvaInstance }): JSX.Element {

    const Login = dynamic({
        app,
        models: () => [
        ],
        component: () => import('./routes/Login')
    });

    const Layout = dynamic({
        app,
        models: () => [
        ],
        component: () => import('./layouts/ManageLayout')
    });

    return (
        <Router history={history}>
            <Switch>
                <Redirect path="/" exact to="/layout/manager" />
                <Route path="/login" component={Login} />
                <Route path="/layout/manager" component={Layout} />
            </Switch>
        </Router>
    );
}

export default RouterConfig;

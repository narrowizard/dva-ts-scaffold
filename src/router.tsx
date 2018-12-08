import * as React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import * as H from 'history';
import dynamic from 'dva/dynamic';
import { DvaInstance } from 'dva';

import './index.less';
import IntlProvider from './components/IntlProvider/IntlProvider';

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
        <IntlProvider>
            <Router history={history}>
                <Switch>
                    <Redirect path="/" exact to="/layout/manager" />
                    <Route path="/login" component={Login} />
                    <Route path="/layout/manager" component={Layout} />
                </Switch>
            </Router>
        </IntlProvider>
    );
}

export default RouterConfig;

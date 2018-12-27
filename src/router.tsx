import * as React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import * as H from 'history';
import dynamic from 'dva/dynamic';
import { DvaInstance } from 'dva';

import IntlProvider from './components/IntlProvider/IntlProvider';

function RouterConfig({ history, app }: { history: H.History, app: DvaInstance }): JSX.Element {

    const Index = dynamic({
        app,
        models: () => [
        ],
        component: () => import('./routes/Home/Index')
    });

    const Layout = dynamic({
        app,
        models: () => [
        ],
        component: () => import('./routes/Some')
    });

    return (
        <IntlProvider>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/some" component={Layout} />
                </Switch>
            </Router>
        </IntlProvider>
    );
}

export default RouterConfig;

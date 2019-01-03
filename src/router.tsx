import * as React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import * as H from 'history';
import dynamic from 'dva/dynamic';
import { DvaInstance } from 'dva';

import IntlProvider from './components/IntlProvider/IntlProvider';
import getRouters from './config/routes';



function RouterConfig({ history, app }: { history: H.History, app: DvaInstance }): JSX.Element {

    const routes = getRouters();

    return (
        <IntlProvider>
            <Router history={history}>
                <Switch>
                    {
                        routes.map(item => (
                            <Route key={item.name} path={item.path} exact={item.exact} component={dynamic({
                                app,
                                models: () => item.models.map(m => import(`./models/${m}`)),
                                component: item.component
                            })} />
                        ))
                    }
                </Switch>
            </Router>
        </IntlProvider>
    );
}

export default RouterConfig;

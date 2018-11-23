import * as React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import * as H from 'history';
import { LayoutComponent } from './layouts/ManageLayout';
import { LoginComponent } from './routes/Login';
import './index.less';

function RouterConfig({ history }: { history: H.History }): JSX.Element {
    return (
        <Router history={history}>
            <Switch>
                <Redirect path="/" exact to="/layout/manager" />
                <Route path="/login" component={LoginComponent} />
                <Route path="/layout/manager" component={LayoutComponent} />
            </Switch>
        </Router>
    );
}

export default RouterConfig;

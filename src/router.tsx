import * as React from 'react';
import { Router, Route, Switch } from 'dva/router';
import * as H from 'history';
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }: { history: H.History }): JSX.Element {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={IndexPage} />
            </Switch>
        </Router>
    );
}

export default RouterConfig;

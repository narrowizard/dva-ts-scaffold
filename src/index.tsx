import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
import user from './models/user';

const app = dva({
    history: createHistory(),
    onError: (e) => {
        console.error(e.message);
    }
});

app.model(user);

app.router(require('./router').default);

app.start("#root");
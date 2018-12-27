import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
import home from './models/home';

const app = dva({
    history: createHistory(),
    onError: (e) => {
        console.error(e.message);
    }
});

app.model(home);

app.router(require('./router').default);

app.start("#root");
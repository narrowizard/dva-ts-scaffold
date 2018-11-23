import dva from 'dva';

const app = dva();

app.router(require('./router').default);

app.start("#app");
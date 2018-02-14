import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './components/App';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';
import NotFoundScreen from './components/NotFoundScreen';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: StartScreen},
    {path: '/game', component: GameScreen},
    {path: '/end', component: EndScreen},
    {path: '*', component: NotFoundScreen}
];

new Vue({
    el: '#app',
    render: h => h(App),
    router: new VueRouter({
        mode: 'history',
        routes
    })
});

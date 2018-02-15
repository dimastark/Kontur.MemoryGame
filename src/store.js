import Vue from 'vue';
import Vuex from 'vuex';

import sleep from './utils/sleep';
import newGame from './utils/new-game';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        score: undefined,
        cards: []
    },

    mutations: {
        newGame(state) {
            state.score = 0;
            state.cards = newGame();
        },

        flip(state, index) {
            let card = state.cards[index];

            if (card) {
                card.closed = !card.closed;
            }
        },

        openAll(state) {
            for (let card of state.cards) {
                card.closed = false;
            }
        },

        closeAll(state) {
            for (let card of state.cards) {
                card.closed = true;
            }
        },

        guess(state, cardCode) {
            for (let card of state.cards) {
                if (card.code === cardCode) {
                    card.removed = true;
                }
            }
        }
    },

    actions: {
        async newGame({commit}) {
            commit('newGame');
            commit('openAll');
            await sleep(5000);
            commit('closeAll');
        }
    }
});

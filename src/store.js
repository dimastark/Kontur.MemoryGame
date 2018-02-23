import Vue from 'vue';
import Vuex from 'vuex';

import newGame from './utils/new-game';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        score: undefined,
        current: undefined,
        lock: undefined,
        cards: [],

        timeout: null
    },

    mutations: {
        newGame(state) {
            state.score = 0;
            state.cards = newGame();
        },

        open(state, index) {
            if (!state.lock) {
                let card = state.cards[index];

                if (card) {
                    card.closed = false;
                    state.current = card;
                }
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

        acquire(state) {
            state.lock = true;
        },

        release(state) {
            state.lock = false;
        },

        remove(state, cards) {
            let ids = cards.map(c => c.id);

            for (let card of state.cards) {
                if (ids.includes(card.id)) {
                    card.removed = true;
                }
            }
        },

        updateScore(state, guessed) {
            let cards = state.cards.filter(c => c.removed !== guessed);
            state.score += 21 * (guessed ? 1 : -1) * cards.length;

            if (guessed && cards.length === 0) {
                router.push('end');
            }
        }
    },

    actions: {
        async newGame({commit, dispatch}) {
            commit('newGame');
            commit('openAll');
            await dispatch('closeAll', 5000);
        },

        async open({commit, dispatch, state}, index) {
            let previous = state.current;
            commit('open', index);
            let next = state.current;

            if (previous) {
                if (previous.code === next.code) {
                    commit('remove', [previous, next]);
                    commit('updateScore', true)
                } else {
                    await dispatch('closeAll', 1500);
                    commit('updateScore', false);
                }

                state.current = null;
            }
        },

        async closeAll({commit, state}, timeout) {
            commit('acquire');
            clearTimeout(state.timeout);

            state.timeout = setTimeout(() => {
                commit('closeAll');
                commit('release');
            }, timeout);
        }
    }
});

<template>
    <layout class="container">
        <header>
            <div class="restart-button" @click="newGame">
                <txt class="semibold">Начать заново</txt>
            </div>
            <div class="score-text">
                <txt>Очки: <span class="score">{{score}}</span></txt>
            </div>
        </header>
        <main class="cards-container">
            <card :key="card.id" v-for="card of cards" v-bind="card"></card>
        </main>
    </layout>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    import Txt from './Txt';
    import Card from './Card';
    import Layout from './Layout';

    export default {
        name: 'game-screen',
        computed: mapState([
            'score',
            'cards'
        ]),
        methods: mapActions([
            'newGame'
        ]),
        mounted() {
            this.$nextTick(this.newGame);
        },
        components: {
            Txt,
            Card,
            Layout
        }
    }
</script>

<style scoped>
    header {
        display: flex;

        width: 100%;
        max-width: 740px;
        margin-bottom: 15px;

        justify-content: space-between;
    }

    .restart-button {
        font-size: 14px;

        margin-left: 12px;

        cursor: pointer;

        opacity: .8;
        color: #fff;
    }

    .score-text {
        font-size: 14px;

        margin-right: 12px;

        opacity: .8;
    }

    .score {
        font-family: Krungthep, sans-serif;
    }

    .cards-container {
        display: flex;

        width: 100%;
        max-width: 740px;

        justify-content: center;
        flex-wrap: wrap;
    }
</style>

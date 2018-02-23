<template>
    <layout class="container">
        <img class="image" src="../assets/images/end-game.png" alt="end game"/>
        <txt class="header bold">
            Поздравляем!<br>
            Ваш итоговый счет: {{score}}
        </txt>
        <button-link to="/game">Еще раз</button-link>
    </layout>
</template>

<script>
    import {mapState} from 'vuex';

    import router from '../router';
    import ButtonLink from './ButtonLink';
    import Layout from './Layout';
    import Txt from './Txt';

    export default {
        name: 'end-screen',
        computed: mapState([
            'score'
        ]),
        mounted() {
            if (!Number.isFinite(this.score)) {
                router.push('/');
            }
        },
        components: {
            ButtonLink,
            Layout,
            Txt
        }
    }
</script>

<style scoped>
    .image {
        max-width: 503px;
        max-height: 262px;
    }

    .header {
        font-size: 24px;
        line-height: 35px;

        margin-top: 15px;
        margin-bottom: 40px;

        text-align: center;
    }
</style>

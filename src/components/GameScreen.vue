<template>
    <layout class="container">
        <img class="image" src="../assets/images/start-game.png" alt="start game"/>
        <txt class="header bold">memory game</txt>
        <button-link to="/game">Начать игру</button-link>
    </layout>
</template>

<script>
    import ButtonLink from './ButtonLink';
    import Layout from './Layout';
    import Txt from './Txt';

    export default {
        name: 'game-screen',
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
        font-size: 28px;

        margin-top: 20px;
        margin-bottom: 34px;

        text-transform: uppercase;
    }
</style>

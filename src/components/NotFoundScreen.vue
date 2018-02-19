<template>
    <layout class="container">
        <txt>404</txt>
    </layout>
</template>

<script>
    import Layout from './Layout';
    import Txt from './Txt';

    export default {
        name: 'not-found-screen',
        components: {
            Layout,
            Txt
        }
    }
</script>

<style scoped>
    .container {
        font-size: 100px;
    }
</style>

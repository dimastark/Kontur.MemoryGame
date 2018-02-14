<template>
    <router-link :to="to" class="link">
        <txt class="text"><slot/></txt>
    </router-link>
</template>

<script>
    import Txt from './Txt';

    export default {
        name: 'button-link',
        props: ['to'],
        components: {
            Txt
        }
    }
</script>

<style scoped>
    .link {
        padding: 10px 20px;

        text-decoration: none;

        opacity: .85;
        border-radius: 4px;
        background: #fff;
    }

    .text {
        font-size: 16px;

        color: #1c7430;
    }
</style>

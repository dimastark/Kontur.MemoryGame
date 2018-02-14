<template>
    <div class="container">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'layout'
    }
</script>

<style src="normalize.css/normalize.css"></style>

<style>
    @font-face {
        font-family: OpenSans-Bold;
        src: url(../assets/fonts/OpenSans-Bold.ttf);
    }

    @font-face {
        font-family: OpenSans-Semiold;
        src: url(../assets/fonts/OpenSans-Semibold.ttf);
    }

    html, body {
        width: 100%;
        height: 100%;
    }
</style>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;

        width: 100%;
        height: 100%;

        background: #227434;

        justify-content: center;
        align-items: center;
    }
</style>

<template>
    <p class="bold"><slot/></p>
</template>

<script>
    export default {
        name: 'txt'
    }
</script>

<style scoped>
    p {
        margin: 0;
        padding: 0;

        letter-spacing: -.25px;

        opacity: .85;
        color: #fff;
    }

    .bold {
        font-family: OpenSans-Bold, sans-serif;
    }

    .semibold {
        font-family: OpenSans-Semibold, sans-serif;
    }
</style>

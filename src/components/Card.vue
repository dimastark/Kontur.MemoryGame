<template>
    <main :class="[className, {disabled, removed}]">
        <div class="flipper">
            <div class="front" @click="closed && open(id)" :style="frontStyle"></div>
            <div class="back" @click="closed && open(id)" :style="backStyle"></div>
        </div>
    </main>
</template>

<script>
    import {mapActions} from 'vuex';

    import getCardStyle from '../utils/card-style';

    export default {
        name: 'card',
        props: [
            'id',
            'code',
            'closed',
            'removed'
        ],
        methods: {
            ...mapActions(['open'])
        },
        computed: {
            disabled() {
                return !this.closed;
            },

            className() {
                return `flip-${this.closed ? 'back' : 'front'}`;
            },

            frontStyle() {
                return getCardStyle(this.code);
            },

            backStyle() {
                return getCardStyle();
            }
        }
    }
</script>

<style scoped>
    .front, .back {
        width: 103px;
        height: 160px;
        margin: 10px;

        border-radius: 5px;
        background-position: 50% 50%;
        background-size: cover;

        backface-visibility: hidden;
    }

    :not(.disabled) ~ .front,
    :not(.disabled) ~ .back {
        cursor: pointer;
    }

    .removed {
        opacity: 0;
    }

    main {
        opacity: 1;
        
        perspective: 1000px;
        
        transition: opacity .5s ease .5s;
    }

    .flip-back .flipper {
        transform: rotateY(-180deg);
    }

    .flipper {
        position: relative;

        transition: .85s;

        transform-style: preserve-3d;
    }

    .front {
        z-index: 2;

        transform: rotateY(0deg);
    }

    .back {
        margin-top: -170px;

        transform: rotateY(-180deg);
    }
</style>

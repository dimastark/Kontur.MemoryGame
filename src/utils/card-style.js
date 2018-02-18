import range from 'lodash/range';

const cardsImages = range(0, 53).map(
    i => require(`../assets/images/cards/${i}.png`)
);

export default function (code = 0) {
    return {backgroundImage: `url(${cardsImages[code]})`};
}

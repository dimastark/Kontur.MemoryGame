import range from 'lodash/range';
import shuffle from 'lodash/shuffle';
import sampleSize from 'lodash/sampleSize';

export default function () {
    let cards = getRoundCards();

    return cards.map((code, index) => ({
        id: index,
        closed: true,
        removed: false,
        code
    }));
}

function getRoundCards() {
    let all = range(1, 53);
    let nine = sampleSize(all, 9);

    return shuffle(nine.concat(nine));
}

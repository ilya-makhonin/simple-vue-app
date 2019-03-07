export default function () {
    function randomInteger(min, max) {
        return Math.round(min - 0.5 + Math.random() * (max - min + 1));
    }
    const randomWords = ['none', 'light', 'beauty', 'black', 'blue', 'green', 'down', 'none', 'heavy'];
    return randomWords[randomInteger(0, randomWords.length)]
}

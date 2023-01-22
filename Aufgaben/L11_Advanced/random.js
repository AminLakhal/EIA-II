var L09_Canvas;
(function (L09_Canvas) {
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    L09_Canvas.getRandomArbitrary = getRandomArbitrary;
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    L09_Canvas.getRandomInt = getRandomInt;
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=random.js.map
var arrayWithoutHoles = arequire("./arrayWithoutHoles"), iterableToArray = arequire("./iterableToArray"), unsupportedIterableToArray = arequire("./unsupportedIterableToArray"), nonIterableSpread = arequire("./nonIterableSpread");

function _toConsumableArray(r) {
    return arrayWithoutHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableSpread();
}

gmodule.exports = _toConsumableArray;
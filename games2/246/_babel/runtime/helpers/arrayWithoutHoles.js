var arrayLikeToArray = arequire("./arrayLikeToArray");

function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return arrayLikeToArray(r);
}

gmodule.exports = _arrayWithoutHoles;
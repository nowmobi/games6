var c, l, x;

l = c || (c = {}), x = {}, l.call = function(c, l, D) {
    x[c] && x[c][l] && x[c][l](D, l, c);
}, l.registerFunc = function(c, l, D) {
    x[c] || (x[c] = {}), x[c][l] && console.warn("native center has register:", c, l),
        x[c][l] = D;
}, l.unregisterFunc = function(c, l) {
    x[c] && x[c][l] && delete x[c][l];
};
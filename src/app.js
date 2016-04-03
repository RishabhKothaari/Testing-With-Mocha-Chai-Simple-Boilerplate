var add = function() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(acc, cur) {
        return acc + cur;
    }, 0);
};

module.exports = { add: add };

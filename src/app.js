export function add(...args) {
    return args.reduce((acc, cur) => acc + cur, 0);
};

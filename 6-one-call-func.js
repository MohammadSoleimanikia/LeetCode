/**
 * @param {Function} fn
 * @return {Function}
 */
 //higher order function:use func as param and return a func 
 var once = function(fn) {
    // Closures
    let called=false;
    return function(...args){
        if (called){
            return undefined;
        }
        called=true;
        return fn(...args);

    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

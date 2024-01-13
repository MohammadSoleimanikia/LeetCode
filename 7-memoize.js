//A memoized function is a function that will never be called twice with the same 
//inputs. Instead it will return a cached value.

/**
 * @param {Function} fn
 * @return {Function}
 */
//memoization is same as caching
//memoize is a wrapper function
//memoization only apply to pure functions that always return same value.
//pure function like react functions and ... but functions like date is not pure

//decorator design pattern that add functionality to inside function in this case is caching
function memoize(fn) {
    //cache used to save functions returned values
    const cache={};
    return function(...args) {
        //args are array so it can't be key in cahce we convert it to string first
        const key=JSON.stringify(args);
        
        //search for key in object
        if(key in cache){
            return cache[key]
        }

        cache[key]=fn(...args);
        return cache[key];
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
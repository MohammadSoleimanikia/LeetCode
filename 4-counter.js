/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let reset=init;
    let base=init;
    return {
        increment:()=>{base++;
        return base;
        },
        decrement:()=>{base--;
        return base;
        },
        reset:()=>{base=reset;
        return base;
        }
    }
};


 const counter = createCounter(5)
 counter.increment(); // 6
  counter.reset(); // 5
 counter.decrement(); // 4
 counter.decrement(); // 4
 counter.decrement(); // 4
console.log(counter);
 
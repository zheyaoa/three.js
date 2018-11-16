(function(){
    var key = Math.random();
    console.log('[test] key:',key);

    function doMath(x){
        return x*x;
    }
    apiX = function(x){
        try{
            return doMath(x)
        }catch(err){
            return key;
        }
    }
})()

var key;

console.log(key == global.key);

Object.defineProperty(global,'key',{
    get:function(value){
        throw new Error();
        return value;
    }
})
let a = global.key;
key = new Error();
key = apiX(global.key);
console.log(key);
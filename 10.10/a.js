// function f() {
//     var n = 123;
//     function g() {
//         console.log('n is ' + n);
//         console.log('g is called');
//     }
//     return g;
// }
// var g2 = f();
// var g3 = f();
// g2();
// g3();

// function f(arg) {
//     var n = 123 + Number(arg);
//     return function ()  {
//         console.log('n is '+ n);
//         console.log('g is called');
//     }
// }
//
// var g2 = f(2);
// var g3 = f(3);
// g2();
// g3();

// function f(arg) {
//     var n = 123 + Number(arg);
//     function g() {
//         console.log('n is '+ n);
//         console.log('g is called');
//     }
//     n++;
//     function gg() {
//         console.log('n is '+n);
//         console.log('gg is called');
//     }
//     return [g,gg];
// }
//
// var g_and_gg = f(1);
// g_and_gg[0]();
// console.log('----');
// g_and_gg[1]();
// var myModule = {
//     sum:function sum(a,b) {
//         console.log( Number(a) + Number(b));
//     },
//     position:{x:2,y:3}
// };
//
// myModule.sum(3,3);
// console.log(myModule.position.x);

// var myModule = {};
// myModule.sum = function (a,b) {
//     console.log(Number(a) + Number(b));
// };
// myModule.position = {x:2,y:3};

// var sum = (function () {
//    var position = {x:2,y:3};
//    function sum_internal(a,b) {
//        console.log( Number(a) + Number(b));
//    }
//    return function (a,b) {
//        console.log('x = ',position.x);
//        return sum_internal(a,b);
//    }
// })();
//
// sum(3,4);

// var obj = (function () {
//     var position = {x:2,y:3};
//     function sum_internal(a,b) {
//         console.log(Number(a) + Number(b));
//     }
//
//     return {
//         sum:function (a,b) {
//             return sum_internal(a,b);
//         },
//         x:position.x
//     }
// })();
// obj.sum(3,4);
// console.log(obj.x);

// function myClass(x,y) {
//     return {show:function () {
//         console.log(x,y);
//     }}
// }
// var obj = myClass(3,2);
// obj.show();

// function counter_class(init) {
//     var cnt = init || 0;
//     return {
//         show:function () {
//             console.log(console.log(cnt));
//         },
//         up:function () {
//             cnt++;
//             return this;
//         },
//         down:function () {
//             cnt--;
//             return this;
//         }
//     }
// }
//
// var counter1 = counter_class();
// counter1.show();
//
// counter1.up();
// counter1.show();
//
// var counter2 = counter_class();
// counter2.up().up().up().show();

var sum = function (a,b) {
    Number(a) + Number(b)
};
console.log(sum(1,2));
// const sum = require('./sum');

// test('adds 1+2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// })



//To be is used with numbers strings and booleans
// test('two plus two is four',()=>{
//     expect(2+2).toBe(4);
// });



// //ToEqual is used with objects and arrays
// test('Object Assignment',()=>{
//     const data= {one:1};
//     data['two']=2;
//     expect(data).toEqual({one:1, two:2});
// })



// // Falsy
// test('null is falsy',()=>{
//     const n = null;
//     expect(n).toBeFalsy();
// })



// // Truthy
// test('test truthy',()=>{
//     const s=1;
//     expect(s).toBeTruthy();
// })

//toThrow for error handling

const myFunction=require('./sum');
test('Throws a valid input',()=>{
    expect(()=>{
        myFunction('Joy Kiboi')
    }).toThrow();
})
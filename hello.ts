import * as app from './app'; 
app.hello('oi!!!');
export let i = '2';
i = '1';
console.log(i);
let teste;
teste = '123';
console.log(teste);
teste = 10;
console.log(teste);
let call:(name:string)=>void;

call = (param)=>  {return param};
let value = call('teste');
console.log(value);


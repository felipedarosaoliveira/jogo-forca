/* interface Person{
  name:string;
}

function withUID<T extends Person>(obj: T) { 
  return Object.assign({}, obj, { uuid: 12 });
}
let value = withUID({ name: "POLY", surname: "Chack" }); // is valid */

let t:[string,number] ;
t = ['3',1];
t.push('1');
t.push(2);
t.push('3')
console.log(t);


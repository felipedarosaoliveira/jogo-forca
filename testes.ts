interface Person{
  name:string;
}

function withUID<T extends Person>(obj: T) { 
  return Object.assign({}, obj, { uuid: 12 });
}
let value = withUID({ name: "POLY", surname: "Chack" }); // is valid


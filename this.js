function sayHello (){
    console.log(this)
}

const sayHi = () => console.log(this);


sayHello();
sayHi();
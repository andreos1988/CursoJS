const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.values(obj))

//Class
class Animal {}
class Cachorro extends Animal {
    falar(){
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())
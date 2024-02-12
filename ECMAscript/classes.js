class details{
    constructor(uname,place){
        this.name=uname
        this.place=place

    }

    func(){
        console.log(`How are you ${this.name}`)
    }
}
const obj= new details("Manoj","Tuty")
const obj1= new details("Kumar","Chennai")
console.log(obj.name)
console.log(obj1.place)
obj1.func()
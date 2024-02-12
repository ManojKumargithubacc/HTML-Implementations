const statein="Mystate"
class details{
    constructor(uname,place,state){
        this.name=uname
        this.place=place
        this[statein]=state

    }

    func(){
        console.log(`How are you ${this.name}`)
    }
}
const obj=new details("Manoj","Tuty","TN")
console.log(obj[statein])

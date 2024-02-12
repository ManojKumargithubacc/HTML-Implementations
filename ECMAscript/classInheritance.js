class details{
    constructor(uname,place){
        this.name=uname
        this.place=place

    }
    func(){
        console.log(`How are you ${this.name} from ${this.place}`)
    }
}
//Class newDetails inherits the property of details
class newDetails extends details{
    constructor(uname,place){
        console.log("I am a child class")
        super(uname,place)

    }
}
const obj=new newDetails("Manoj","Tuty")
obj.func()
//If changes are made in child class it overrides the parent class
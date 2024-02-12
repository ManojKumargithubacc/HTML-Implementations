class details{
    constructor(uname,place){
        this.name=uname
        this.place=place

    }
static func1(){
    console.log("Hi static method")
}
    func(){
        console.log(`How are you ${this.name}`)
    }
}
details.func1()

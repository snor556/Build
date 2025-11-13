class rectangle{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
    getArea(){
        return this.height * this.width
    }
}

let rect1 = new rectangle(21,33);
console.log(rect1.height);
console.log(rect1.getArea())

//inheritance in class

class brand{
    constructor(brand){
        this.brand = brand;
    }
    tell(){
        return(this.brand);
    }
}

class model extends brand{ //extends is a keyword determining the use of inheritance
    
    constructor(brand,model){
        super(brand); // its used to inherit the properties and method of the parent class
        this.model = model
    }

    fullName(){
       return(`${this.model} of ${this.brand}`);
    }
}

let myCar = new model('tata','altroz');
console.log(myCar.fullName())
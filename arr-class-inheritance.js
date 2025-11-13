class Brand{
    constructor(brandName){
        this.brandName = brandName;
    }
}

class Model extends Brand{
    constructor(brandName,modelName){
        super(brandName);
        this.modelName = modelName;
    }
    myvehicle = ()=>{
        console.log(`vehicle is of ${this.modelName} and of ${this.brandName}`);
    }
}

let gaddi = new Model('tata','altroz');
gaddi.myvehicle();

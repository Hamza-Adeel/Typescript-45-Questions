// Q21).Intentional Error: If you haven’t received an array index error in one of your programs yet,
// try to make one happen. Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.

type Sutudent ={
    name:string,
    education:string,
    age:number,
    rollNo:number,
    dept:String,

};


let studentInfo :Sutudent= {
    name:"M.Suleman",
    education:"BS-AI",
    age:21,
    rollNo:12345678910,
    dept:"A-I"
}
console.log(studentInfo);

let gadgets : {[key:string]:any}={
    "laptop":{
        price:2000,
        model:"HP"
    },
    "Mobile":{
        price:2000,
        model:"Motorola"
    },
    "Airbuds":{
        price:2000,
        model:"Apple"
    }
}
console.log(gadgets);

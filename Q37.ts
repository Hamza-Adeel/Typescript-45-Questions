// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function make_shirt( size: string , message: string ="I love karachi"){
    console.log(`Making a ${size} size T-shirt with a message ${message}.`);
    
}
make_shirt( "Large");
make_shirt(' medium')
//try catch
//try{
//code causing error}
//catch(error)

try {
let result = 10/0;
console.log(result);
} catch(error){
    console.log((error as Error).stack);
}
finally {
 console.log("code executed")
}

//(error as Error).stack
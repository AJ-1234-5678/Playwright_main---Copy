//promise
//states  - pending, fulfilled/resolved, rejected (failure)
// functions -
//.then() - if promise success
// .catch() - if promise fails
//  .finally - 

//async 
//await
async function welcomefailure() {
    return Promise.reject("Failed to fetch message")
}

async function displayFailure() {

    try{
    const result = await welcomefailure();
 console.log(result);
} catch (error) {
console.error("Error occured: ", error);
} finally {
console.log("Async operation completed");
}
}
displayFailure();


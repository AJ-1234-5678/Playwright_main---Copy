//promise, async, await
//states - pending, fulfilled/resolved, rejected
//functions - .then(), .catch(), .finally()

async function welcomeSuccess(){ 

    return Promise.reject("Hello Promise"); // success 
}

async function displaySuccess(){ 
    try{
   const result = await welcomeSuccess();
   console.log(result);
} catch(error) {
    console.error("Error occurred:", error);
} finally {
    console.log("Async operation completed");
}
}
displaySuccess();
console.log("");

//click register
//enter credentials
//click login

let examplePromise = new Promise(function(resolve, reject) {
		// First set success to false so that only a successful
		// process will trigger a success
		success = false

    // Perform any long-running task
    // If task successful, set success = true

    if (success) {
        resolve("Success!")
    } else {
        reject("Failure!")
    }
});

examplePromise.then(function(value) {
    console.log(value)
})

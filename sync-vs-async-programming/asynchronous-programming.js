function asynchronousFunction() {
    console.log("Starting asynchronous operation...");

    // setTimeout to simulate a time-consuming asynchronous task
    setTimeout(() => {
        console.log("Asynchronous operation completed.");
    }, 3000); // 3 seconds delay

    console.log("This line does not wait for setTimeout to finish.");
}

console.log("Before asynchronous function call");
asynchronousFunction();
console.log("After asynchronous function call");

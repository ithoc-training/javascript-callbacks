function synchronousFunction() {
    console.log("Starting synchronous operation...");

    // A simple loop that simulates a blocking operation
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += i;
    }

    console.log("Finished long operation. Sum:", sum);
    console.log("This line waits until the loop is done.");
}

console.log("Before synchronous function call");
synchronousFunction();
console.log("After synchronous function call");

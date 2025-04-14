// 1. @typescript-eslint/no-floating-promises
async function fetchData() {
    return Promise.resolve('data');
}
fetchData(); // ❌ Promise not awaited or handled

// 2. @typescript-eslint/no-misused-promises
const button = document.querySelector('button');
button?.addEventListener('click', async () => {
    await fetchData(); // ❌ Async function used directly in event listener
});

// 3. @typescript-eslint/require-await
async function getValue() {
    return 42; // ❌ Async function without await
}

// 4. @typescript-eslint/return-await
async function getData() {
    return fetchData(); // ❌ Should use 'return await' for proper error handling
}

// 5. @typescript-eslint/strict-boolean-expressions
const input = '';
if (input) {
    console.log('Input is truthy'); // ❌ Non-boolean used in condition
}

// 6. @typescript-eslint/unbound-method
const log = console.log;
log('Unbound method'); // ❌ Method used without binding 'this'

// 7. @typescript-eslint/only-throw-error
function throwError() {
    throw 'An error occurred'; // ❌ Throwing a string instead of an Error object
}

// 8. @typescript-eslint/no-unsafe-return
function unsafeReturn(): any {
    const data: any = 'unsafe';
    return data; // ❌ Returning an 'any' type
}

// 9. @typescript-eslint/no-unsafe-assignment
const unsafeValue: any = getValue(); // ❌ Assigning 'any' type

// 10. @typescript-eslint/no-unsafe-call
const result = unsafeValue(); // ❌ Calling a value of type 'any'

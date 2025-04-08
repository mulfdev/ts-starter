// ❌ unused variable
const unused = 42;

// ❌ unsafe any
function unsafeCall(fn: any) {
    fn();
}

// ❌ missing await on promise
async function noAwait() {
    Promise.resolve(1);
}

// ❌ explicit any
function logMessage(msg: any) {
    console.log(msg);
}

// ❌ no-return-await
async function double(x: number): Promise<number> {
    return await Promise.resolve(x * 2);
}

// ❌ no-floating-promises
function floatingPromise() {
    Promise.reject('Oops!');
}

// ❌ non-null assertion
function maybeString(input?: string) {
    return input!.toUpperCase();
}

// ❌ prefer optional chaining
function optionalChaining(obj?: { nested?: { value?: number } }) {
    return obj && obj.nested && obj.nested.value;
}

// ❌ prefer const
let name = 'mulf';
name = 'mulf again';

// ❌ console.log (only allow warn/error)
console.log('test');

// ✅ okay code
async function properAsync() {
    const value = await Promise.resolve(42);
    console.warn(value);
}
console.log('ts-starter');

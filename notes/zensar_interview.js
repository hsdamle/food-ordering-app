/**
 * *************** ZENSAR INTERVIEW QUESTIONS ***************
 * 
 * 1. how to identify file type using input element in html5?
 * ==> <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
 * 
 * 2. primitive and non primitive data types in javascript
 * ==> i) Primitive data types: The predefined data types provided by JavaScript language are known as 
 * primitive data types. Primitive data types are also known as in-built data types. 
 * Primitive data type will always have a certain value.it cannot be null.
 * Below are the different primitive data types
 * - Number
 * - String
 * - Undefined
 * - BigInt
 * - Symbol
 * - Boolean
 * - Null
 * 
 *    ii) Non-primitive data types: The data types that are derived from primitive data types of 
 * the JavaScript language are known as non-primitive data types. It is also known as derived data types 
 * or reference data types.
 * Non primitive data types can be null.
 * Below are the different primitive data types
 * - Object
 * - Array (javascript does not support 2D array, but we can create array of array's)
 * 
 * 3. What is useMemo() hook?
 * ==> useMemo() hook is basically used to cache the result of any expensive calculations which
 *      happens on every component re-render.
 *  - useMemo(calcaulateFn, [dependencies]) takes two arguments
 *   i) calculateFn - This function contains the calcucation and returns the value. it does not have
 *      any arguments
 *   ii) [dependencie] - list of dependencies i.e if any of the dependecy value changes then only useMemo
 *      will call the calculateFn() otherwise it will return previously cached value.
 * 
 * 4. What is useCallback() hook
 * ==> useCallback() hook is basically used to cache a function definition between 
 * re-rendering of a component.
 * i) fn - The function value that you want to cache. It can take any arguments and return any values.
 *  React will return (not call!) your function back to you during the initial render
 * ii) [dependencie] - list of dependencies i.e if any of the dependecy value changes then only useMemo
 *      will retun the new function otherwise it will return previously cached function.
 * 
 * 5. Disadvantages of using React Context?
 * ==> Whenever the value of a Context is updated, all of the consumers of the Context get re-rendered.
 * This can cause performance issues in CPU Intensive applications. So React Context should all be used 
 * for data which changes less frequently like user auth token, time zone, locale etc.
 */
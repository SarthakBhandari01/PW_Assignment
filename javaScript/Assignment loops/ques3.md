# Do While Loop in JavaScript

A `do...while` loop is a control flow statement that executes a block of code at least once, and then repeatedly executes the block, or not, depending on a given boolean condition at the end of the block.

## Syntax

```javascript
do {
    // code block to be executed
} while (condition);
```

- The code block inside the `do` statement is executed once before the condition is tested.
- If the condition evaluates to `true`, the code block is executed again.
- This process repeats until the condition evaluates to `false`.

## Example

```javascript
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 5);
```

In this example, the code block inside the `do` statement will execute 5 times, printing the numbers 0 through 4 to the console.


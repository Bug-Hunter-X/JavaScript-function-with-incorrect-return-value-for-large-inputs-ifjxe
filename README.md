# JavaScript Function Bug

This repository demonstrates a subtle bug in a JavaScript function that incorrectly handles values greater than 100.

The function `foo` is intended to double the input value unless it is null (return 0) or greater than 100 (return 100). However, due to an incorrect condition, it returns 100 for all values greater than 100, instead of the expected doubled values. This is an edge-case issue.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected implementation.

## Bug Description:

The function's logic is flawed in handling values greater than 100. It should return x * 2 if x is within a certain range, not just return a constant value (100).

## Solution:

The solution corrects the conditional statement to accurately handle the range of inputs and produce the correct results as intended. 

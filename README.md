# Unexpected Null Return in Addition Function

This repository demonstrates a common JavaScript issue where a function unexpectedly returns null due to null input values. The `foo` function adds two numbers; however, it immediately returns null if either input is null. This behavior, while seemingly correct for null handling, might not always be the desired outcome depending on how the function is used.

## The Bug

The primary issue lies in the function's immediate return of `null` upon encountering a null value.  A more robust solution might involve either throwing an error or providing a default value for null inputs.

## The Solution

The solution file offers an improved version of the function that addresses this issue by providing a default value of 0 for any null inputs before performing the addition.  This ensures that the function always returns a numerical result.
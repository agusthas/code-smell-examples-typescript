# Divergent Change

### Explanation

A code smell where one class or module often change in different ways for different reasons.

### Reasons

One of the reasons for divergent modifications is poor program structure or "copy-paste" programming.

### Solution

- Split up the behaviour of the class.
- If different classes have the same behavior, consider combining the class through inheritance.

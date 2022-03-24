# Parallel Inheritance Hierarchies

### Explanation

A code smell where there's too many hierarchies, therefore making changes becoming harder and harder.

### Reasons

- When there exist too many hierarchies, therefore _extending_ one class can leads to _extending_ another unrelated class.

### Solution

- Reducing parallel class hierarchies by making an instance of one hierarchy refer to instances of another hiearchy.

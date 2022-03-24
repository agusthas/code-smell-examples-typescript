# Shotgun Surgery

### Explanation

A code smell where to make a modifications requires many small changes to many different classes or modules.

### Reasons

- When single responsibility has been split up to too many different classes or modules.
- Overzealous application of [Divergent Change](../divergent-change/README.md).

### Solution

- Move existing class behaviors into a single class.
- Move duplicate logic into a single method inside the class.

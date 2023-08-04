# saber-array

saber-array is an open-source JavaScript library that makes life of arrays easier.

## Installation

```
npm i saber-array
```

## Usage

```
const { getByProp, updateByProp, removeByProp } = require('saber-array')
```

## Built-in functions

- `getByProp()`

A function that return an object (or more) with specific value for a certain property in an array.

In the following example, we are using `getByProp()` to get the object with `id` equals `"123"` in an array called `arr`.

```
const currentUser = getByProp(arr, "id", "123")
```

- `updateByProp()`

A function that updates an object (or more) with specific value for a certain property in an array.

In the following example, we are using `updateByProp()` to update the object with `id` equals `"123"` in an array called `arr`.

```
updateByProp(arr, "id", "123", {
    username: "ahmed0saber"
})
```

- `removeByProp()`

A function that removes an object (or more) with specific value for a certain property in an array.

In the following example, we are using `removeByProp()` to remove the object with `id` equals `"123"` in an array called `arr`.

```
removeByProp(arr, "id", "123")
```

- `insertAt()`

A function that inserts an object at certain index in an array.

In the following example, we are using `insertAt()` to insert an object called `obj` at `index` equals `2` in an array called `arr`.

```
insertAt(arr, 2, obj)
```

- `shuffle()`

A function that shuffles an array.

In the following example, we are using `shuffle()` to shuffle an array called `arr`.

```
shuffle(arr)
```

- `removeDuplicates()`

A function that removes duplicate objects in an array.

In the following example, we are using `removeDuplicates()` to remove duplicates in an array called `arr`.

```
removeDuplicates(arr)
```

- `insertSorted()`

A function that inserts an object in an array in a sorted way depending on a certain property.

In the following example, we are using `insertSorted()` to insert an object called `obj` in an array called `arr` in a sorted way depending on a property called `"player_score"`.

```
insertSorted(arr, obj, "player_score")
```

## How to publish your own package

I highly recommend reading this simple article:

https://www.freecodecamp.org/news/how-to-create-and-publish-your-first-npm-package/

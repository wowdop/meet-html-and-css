# the **script** html tag

## Research

I'll do some searches on Google,

[html script tag w3](https://www.google.com/search?q=html+script+tag+w3)

and found

[HTML Script Tag](https://www.w3schools.com/tags/tag_script.asp)

and then searched for

[html mdn script tag](https://www.google.com/search?q=html+mdn+script+tag)

and found

[The Script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)

## Notes:

| **Attribute**          | **Value**       |
| ---------------------- | --------------- |
| <ins>async</ins>       | async           |
| <ins>crossorigin</ins> | anonymous       |
|                        | use-credentials |
| <ins>defer</ins>       | defer           |
| <ins>integrity</ins>   | _filehash_      |
| nomodule               | True            |
|                        | False           |
| <ins>src</ins>         | _URL_           |
| <ins>type</ins>        | _scripttype_    |

## Example list

Example 1

```javascript:
<script type="text/javascript">
var name = "Marian"
</script>
```

Example 2

```javascript:
<script type="text/javascript">
var a = 2
var b = 3
var sum = a + b
console.log(sum)
</script>
```

Example 3

```javascript:
<script type="text/javascript">
const callMyName = name => `Hello ${name} and welcome to JavaScript! Have fun with HTML and CSS!`
callMyName('Marian')
</script>
```

Example 4

```javascript:
<script type="text/javascript" src="js/example-4.js"></script>
```

Example 5

```javascript:
<script type="text/javascript" src="js/example-5.js"></script>
```

Example 5

```javascript:
<script type="text/javascript" src="js/example-6.js"></script>
<script>
addTwoNumbers(2, 5)
addTwoNumbers(10, 7)
addTwoNumbers()
</script>
```

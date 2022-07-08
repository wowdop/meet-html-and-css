# Meet the CSS tags

## Research

**For `box` properties - See general/box**

I did some searches on Google:

[overflow-x css](https://www.google.com/search?q=overflow-x+css)
and

[overflow-y css](https://www.google.com/search?q=overflow-y+css)
and

[overflow-style css](https://www.google.com/search?q=overflow-style+css)
and

[rotation css](https://www.google.com/search?q=rotation+css)
and

[rotation-point css](https://www.google.com/search?q=rotation-point+css)
and

And found

[CSS overflow-x in W3](https://www.w3schools.com/cssref/css3_pr_overflow-x.asp)
and

[CSS overflow-y in W3](https://www.w3schools.com/cssref/css3_pr_overflow-y.asp)
and

[CSS overflow-style in W3](https://www.w3schools.com/cssref/css3_pr_overflow-style.asp) -- **NOT SUPPORTED ANYMORE**
and

[CSS rotation in W3](https://www.w3schools.com/cssref/css3_pr_rotation.asp) -- **NOT SUPPORTED ANYMORE**
and

[CSS rotation-point in W3](https://www.w3schools.com/cssref/css3_pr_rotation-point.asp) -- **NOT SUPPORTED ANYMORE**
and

## Notes:

# overflow-x selector

The **overflow-x** property specifies whether to clip the content, add a scroll bar, or display overflow content of a block-level element, when it overflows at the left and right edges.

**Tip:** Use the **overflow-y** property to determine clipping at the top and bottom edges.

| Value   | Description                                                                                          |
| ------- | ---------------------------------------------------------------------------------------------------- |
| visible | The content is not clipped, and it may be rendered outside the left and right edges. This is default |
| hidden  | The content is clipped - and no scrolling mechanism is provided                                      |
| scroll  | The content is clipped and a scrolling mechanism is provided                                         |
| auto    | Should cause a scrolling mechanism to be provided for overflowing boxes                              |
| initial | Sets this property to its default value.                                                             |
| inherit | Inherits this property from its parent element.                                                      |

## Example list

### Example 1

```html:
<style>
.ex1 {
		background-color: lightskyblue;
		width: 40px;
		overflow-x: scroll;
	}

	.ex2 {
		background-color: lightskyblue;
		width: 40px;
		overflow-x: hidden;
	}

	.ex3 {
		background-color: lightskyblue;
		width: 40px;
		overflow-x: auto;
	}

	.ex4 {
		background-color: lightskyblue;
		width: 40px;
		overflow-x: visible;
	}
</style>


<h4>overflow-x: scroll:</h4>
<div class="ex1">
	Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
</div>

<h4>overflow-x: hidden:</h4>
<div class="ex2">
	Lorem ipsum dolor sit amet, consectetuer adipiscing elit..
</div>

<h4>overflow-x: auto:</h4>
<div class="ex3">
	Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
</div>

<h4>overflow-x: visible (default):</h4>
<div class="ex4">
	Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
</div>
```

# overflow-y selector

The **overflow-y** property specifies whether to clip the content, add a scroll bar, or display overflow content of a block-level element, when it overflows at the top and bottom edges.

**Tip:** Use the **overflow-x** property to determine clipping at the left and right edges.

| Value   | Description                                                                                 |
| ------- | ------------------------------------------------------------------------------------------- |
| visible | The content is not clipped, and it may be rendered outside the content box. This is default |
| hidden  | The content is clipped - and no scrolling mechanism is provided                             |
| scroll  | The content is clipped and a scrolling mechanism is provided                                |
| auto    | Should cause a scrolling mechanism to be provided for overflowing boxes                     |
| initial | Sets this property to its default value.                                                    |
| inherit | Inherits this property from its parent element.                                             |

## Example list

### Example 1

```html:
<style>
	.ex1-y {
		background-color: lightsteelblue;
		height: 40px;
		width: 200px;
		overflow-y: scroll;
	}

	.ex2-y {
		background-color: lightsteelblue;
		height: 40px;
		width: 200px;
		overflow-y: hidden;
	}

	.ex3-y {
		background-color: lightsteelblue;
		height: 40px;
		width: 200px;
		overflow-y: auto;
	}

	.ex4-y {
		background-color: lightsteelblue;
		height: 40px;
		width: 200px;
		overflow-y: visible;
	}
</style>

<h4>overflow-y: scroll:</h4>
<div class="ex1-y">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at
	erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam,
	consequat gravida libero rhoncus ut.
</div>

<h4>overflow-y: hidden:</h4>
<div class="ex2-y">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at
	erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam,
	consequat gravida libero rhoncus ut.
</div>

<h4>overflow-y: auto:</h4>
<div class="ex3-y">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at
	erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam,
	consequat gravida libero rhoncus ut.
</div>

<h4>overflow-y: visible (default):</h4>
<div class="ex4-y">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at
	erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam,
	consequat gravida libero rhoncus ut.
</div>
```

@mariateo

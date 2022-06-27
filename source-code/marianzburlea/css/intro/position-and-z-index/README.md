# Meet the CSS tags

## Research

I did some searches on Google:

[position css w3](https://www.google.com/search?q=position+css+w3)
and

[z-index css w3](https://www.google.com/search?q=z-index+css+w3)

And found

[CSS position in W3](https://www.w3schools.com/cssref/pr_position.asp)
and

[CSS z-index in W3](https://www.w3schools.com/cssref/z-index.asp)

## Notes:

### display

The <b>position</b> property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky)

#### Values:

| **Value**           | **Description**                                                                                                                                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <ins>static </ins>  | Default value. Elements render in order, as they appear in the document flow                                                                                                                                             |
| <ins>absolute</ins> | The element is positioned relative to its first positioned (not static) ancestor element                                                                                                                                 |
| <ins>fixed</ins>    | The element is positioned relative to the browser window                                                                                                                                                                 |
| <ins>relative</ins> | The element is positioned relative to its normal position, so "left:20px" adds 20 pixels to the element's LEFT position                                                                                                  |
| <ins>sticky</ins>   | A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed). |
| <ins>initial</ins>  | Sets this property to its default value.                                                                                                                                                                                 |
| <ins>inherit</ins>  | Inherits this property from its parent element.                                                                                                                                                                          |

## Example list

### Example 1 with position relative

```html:
<style>
	.box {
		display: inline-block;
		width: 100px;
		height: 100px;
		background: red;
		color: white;
	}

	#two {
		position: relative;
		top: 20px;
		left: 20px;
		background: blue;
	}
</style>

<div class="box" id="one">One</div>
<div class="box" id="two">Two</div>
<div class="box" id="three">Three</div>
<div class="box" id="four">Four</div>

```

### Example 2 with position absolute

```html:
<style>
	p {
		background: aqua;
		border: 3px solid blue;
		padding: 10px;
		margin: 10px;
	}

	.positioned {
		position: absolute;
		background: yellow;
		top: 30px;
		left: 30px;
	}
</style>

<h1>Absolute positioning</h1>

<p>I am a basic block level element. My adjacent block level elements sit on new lines below me.</p>

<p class="positioned">By default we span 100% of the width of our parent element, and we are as tall as our child content. Our total width and height is our content + padding + border width/height.</p>

<p>We are separated by our margins. Because of margin collapsing, we are separated by the width of one of our margins, not both.</p>
```

### Example 3 with position fixed

```html:
<style>
	#one {
		position: fixed;
		top: 80px;
		left: 10px;
		background: blue;
	}
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue tortor eget pulvinar lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam ac dolor augue. Pellentesque mi mi, laoreet et dolor sit amet, ultrices varius risus. Nam vitae iaculis elit. Aliquam mollis interdum libero. Sed sodales placerat egestas.</p>

<div class="box" id="one">One</div>
```

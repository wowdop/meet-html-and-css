# Meet the CSS tags

## Research

**For `other` properties - See general/other**

I did some searches on Google:

<!-- google -->

[calc() css](<https://www.google.com/search?q=calc()+css>)
and

[hsl css](https://www.google.com/search?q=hsl+css)
and

[hsla() css](<https://www.google.com/search?q=hsla()+css>)
and

[flex-flow css](https://www.google.com/search?q=flex-flow+css)
and

[flex-grow css](https://www.google.com/search?q=flex-grow+css)
and

[dropdowns css](https://www.google.com/search?q=dropdowns+css)
and

[counters css](https://www.google.com/search?q=counters+css)
and

[!important css](https://www.google.com/search?q=!important+css)
and

[box-sizing css](https://www.google.com/search?q=box-sizing+css)
and

[transform css](https://www.google.com/search?q=transform+css)
and

[mask-image css](https://www.google.com/search?q=mask-image+css)
and

<!-- w3 -->

And found

[CSS calc() in W3](https://www.w3schools.com/cssref/func_calc.asp)
and

[CSS hsl in W3](https://www.w3schools.com/colors/colors_hsl.asp)
and

[CSS hsla() in W3](https://www.w3schools.com/cssref/func_hsla.asp)
and

[CSS flex-flow in W3](https://www.w3schools.com/cssref/css3_pr_flex-flow.asp)
and

[CSS flex-grow in W3](https://www.w3schools.com/cssref/css3_pr_flex-grow.asp)
and

[CSS dropdowns in W3](https://www.w3schools.com/css/css_dropdowns.asp)
and

[CSS counters in W3](https://www.w3schools.com/css/css_counters.asp)
and

[CSS !important in W3](https://www.w3schools.com/css/css_important.asp)
and

[CSS box-sizing in W3](https://www.w3schools.com/css/css3_box-sizing.asp)
and

[CSS transform in W3](https://www.w3schools.com/cssref/css3_pr_transform.asp)
and

[CSS mask-image in W3](w3schools.com/css/css3_masking.asp)
and

## Notes:

# calc()

The **calc()** function performs a calculation to be used as the property value.

## Example list

### Example 1

```html:
<style>
	.calc {
		width: calc(100vw - 70vw);
		background-color: yellow;
	}
</style>

<div class="calc">This has a specific width</div>

```

# hsl()

HSL stands for hue, saturation, and lightness.

### Hue

Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, 240 is blue.

### Saturation

Saturation is a percentage value; 0% means a shade of gray and 100% is the full color.

### Lightness

Lightness is also a percentage; 0% is black, 100% is white.

## Example list

### Example 1

```html:
<style>
	.hsl {
		background-color: hsl(180, 50%, 50%);
	}
</style>

<div class="hsl">Look at this pretty color.</div>

```

# hsla()

The **hsla()** function define colors using the Hue-saturation-lightness-alpha model (HSLA).

HSLA color values are an extension of HSL color values with an alpha channel - which specifies the opacity of the color.

## Example list

### Example 1

```html:
<style>
	.hsla {
		background-color: hsla(120, 100%, 75%, 0.3);
	}
</style>

<div class="hsla">This is with <b>hsla()</b></div>
```

# flex-flow

The **flex-flow** property is a shorthand property for:

- flex-direction
- flex-wrap

**Note:** If the elements are not flexible items, the flex-flow property has no effect.

## Example list

### Example 1

```html:
<style>
	.flow {
		display: flex;
		flex-flow: row-reverse wrap;
	}
</style>

<div class="flow">
	<p>This is one</p>
	<p>This is two</p>
	<p>This is three</p>
</div>
```

# flex-grow

The **flex-grow** property specifies how much the item will grow relative to the rest of the flexible items inside the same container.

**Note:** If the element is not a flexible item, the flex-grow property has no effect.

## Example list

### Example 1

```html:
<style>
	.grow {
		display: flex;
	}

	.one {
		flex-grow: 1;
		background-color: darkseagreen;
	}

	.two {
		flex-grow: 3;
		background-color: rosybrown;
	}

	.three {
		flex-grow: 2;
		background-color: skyblue;
	}
</style>

<div class="grow">
	<p class="one">This is a paragraphs</p>
	<p class="two">This is another one</p>
	<p class="three">Yay</p>
</div>
```

# transform

The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.

## Example list

### Example 1

```html:
<style>

	.submenu {
		justify-content: center;
		display: flex;
	}

	#submenu {
		background-color: #eee;
		transition: 1s ease-in-out;
		width: 150px;
		display: flex;
		justify-content: center;
	}

	#submenu:hover {
		background-color: #fc3;
		transform: rotate(360deg) scale(2);
	}
</style>

<div class="submenu">
	<div id="submenu">Place mouse over</div>
</div>
```

# !important

The **!important** rule in CSS is used to add more importance to a property/value than normal.

In fact, if you use the !important rule, it will override ALL previous styling rules for that specific property on that element!

<b>Note:</b> It is good to know about the !important rule, you might see it in some CSS source code. However, do not use it unless you absolutely have to.

## Example list

### Example 1

```html:
<style>
	.mom-is-calling-me {
		background-color: purple;
	}

	#dad-is-calling-me {
		background-color: aquamarine;
	}

	p {
		background-color: #eecaca !important;
	}
	/* In this example the color of the paragraphs given by "class" & "id" is overwritten by the simple "p" tag property because it has "!important" attached to it. */
</style>

```

### Example 2

```html:
<style>
	.mom-is-calling-me-1 {
		background-color: purple !important;
	}

	#dad-is-calling-me-1 {
		background-color: aquamarine !important;
	}

	button {
		background-color: palegreen !important;
	}
	/* In this example the "p" tag loses as importance in front of the "id" & "class", therefore each keeps the color declared by their responsive property. */
</style>

```

<!--  -->

# box-sizing

The **box-sizing** property allows us to include the padding and border in an element's total width and height.

Width and height (default) of an element are calculated like this:

- width + padding + border = actual width of an element.
- height + padding + border = actual height of an element.

Therefore, when you set the width/height of an element, the element often appears bigger than you have set. That is because the element's border and padding are added to the element's specified width/height.

The **box-sizing** property allows us to include the padding and border in an element's total width and height.

If you set **box-sizing: border-box;** on an element, padding and border are included in the width and height.

Since the result of using the **box-sizing: border-box;** is so much better, many developers want all elements on their pages to work this way.

The code below ensures that all elements are sized in this more intuitive way. Many browsers already use **box-sizing: border-box;** for many form elements (but not all - which is why inputs and text areas look different at width: 100%;).

Applying this to all elements is safe and wise:

```css:
* {
  box-sizing: border-box;
}
```

## Example list

### Example 1

```html:
<style>
	.box {
		width: 300px;
		height: 100px;
		border: 1px solid blue;
		box-sizing: border-box;
		padding: 50px;
	}

	.div1 {
		width: 300px;
		height: 100px;
		border: 1px solid yellow;
	}

	.div2 {
		width: 300px;
		height: 100px;
		padding: 50px;
		border: 1px solid red;
	}
</style>

<div class="box">Look at me</div>

<div class="div1">This is 300x100</div>

<div class="div2">
	This is also 300x100, but it has padding added. Without
	<b>box-sizing: border-box;</b>, the sizes change
</div>
```

# counters

CSS **counters** are like "variables".

To work with CSS counters we'll use the following properties:

- counter-reset:
  - Creates or resets a counter.
- counter-increment:
  - Increments a counter value.
- content:
  - Inserts generated content.
- counter() or counters() function:
  - Adds the value of a counter to an element.

<b>Note:</b> To use a CSS counter, it must first be created with counter-reset.

<b>Note:</b> You can also nest counters and make them reset on diferent sections of the page.

<b>Note:</b>

## Example list

### Example 1

````html:
<style>
	div.example-one-of-counters {
  counter-reset: section;
  }

  p.example-one::before {
    counter-increment: section;
    content: "Section " counter(section) ": ";
  }
</style>

### Example 2

```html:
<style>
	 div.example-two-of-counters {
    counter-reset: section;
  }

  h2 {
    counter-reset: subsection;
  }

h2::before {
  counter-increment: section;
  content: "Chapter" counter(section) " ";
}

  h3::before {
  counter-increment: subsection;
  content: "Items" counter(subsection) " : ";
  }
</style>

````

# mask-image

The CSS **mask-image** property specifies a mask layer image.

The mask layer image can be a PNG image, an SVG image, a CSS gradient, or an SVG `<mask>` element.

**Note:** Most browsers only have partial support for CSS masking. You will need to use the -webkit- prefix in addition to the standard property in most browsers.

The numbers in the table below specify the first browser version that fully supports the property. Numbers followed by **-webkit-** specify the first version that worked with a prefix.

## Use an Image as the Mask Layer

To use a PNG or an SVG image as the mask layer, use a url() value to pass in the mask layer image.

The mask image needs to have a transparent or semi-transparent area. Black indicates fully transparent.

## Example list

### Example 1

```html:
<style>
	img {
		-webkit-mask-image: radial-gradient(
			circle,
			black 50%,
			rgba(0, 0, 0, 0.5) 50%
		);
		mask-image: radial-gradient(circle, black 50%, rgba(0, 0, 0, 0.5) 50%);
	}
</style>

<img
	src="../../../../public/image/peony.png"
	alt="Cinque Terre"
	width="250"
	height="300"
/>

```

@mariateo
@iulia-zburlea

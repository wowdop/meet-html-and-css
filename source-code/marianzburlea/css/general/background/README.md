# Meet the CSS tags

## Research

**For `background-color` and `background-image` properties - See intro/color-font-and-background**

<!-- google -->

I did some searches on Google:

[:background css](https://www.google.com/search?q=:background+css)
and

[:background-attachment css](https://www.google.com/search?q=:background-attachment+css)
and

[:background-position css](https://www.google.com/search?q=:background-position+css)
and

[:background-repeat css](https://www.google.com/search?q=:background-repeat+css)
and

[:background-clip css](https://www.google.com/search?q=:background-clip+css)
and

[:background-origin css](https://www.google.com/search?q=:background-origin+css)
and

[:background-size css](https://www.google.com/search?q=:background-size+css)

And found

<!-- w3 -->

[CSS :background selector in W3](https://www.w3schools.com/cssref/css3_pr_background.asp)
and

[CSS :background-attachment selector in W3](https://www.w3schools.com/cssref/pr_background-attachment.asp)
and

[CSS :background-position selector in W3](https://www.w3schools.com/cssref/pr_background-position.asp)
and

[CSS :background-repeat selector in W3](https://www.w3schools.com/cssref/pr_background-repeat.asp)
and

[CSS :background-clip selector in W3](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip)
and

[CSS :background-origin selector in W3](https://www.w3schools.com/cssref/css3_pr_background-origin.asp)
and

[CSS :background-size selector in W3](https://www.w3schools.com/cssref/css3_pr_background-size.asp)
and

## Notes:

# :background selector

The **background** property is a shorthand property for:

- background-color
- background-image
- background-position
- background-size
- background-repeat
- background-origin
- background-clip
- background-attachment

It does not matter if one of the values above are missing, e.g. **background:#ff0000 url(smiley.gif);** is allowed.

The background shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.

## Property Values

| Value Description     | CSS Demo                                                                               |
| --------------------- | -------------------------------------------------------------------------------------- |
| background-color      | Specifies the background color to be used                                              |
| background-image      | Specifies ONE or MORE background images to be used                                     |
| background-position   | Specifies the position of the background images                                        |
| background-size       | Specifies the size of the background images                                            |
| background-repeat     | Specifies how to repeat the background images                                          |
| background-origin     | Specifies the positioning area of the background images                                |
| background-clip       | Specifies the painting area of the background images                                   |
| background-attachment | Specifies whether the background images are fixed or scrolls with the rest of the page |
| initial               | Sets this property to its default value.                                               |
| inherit               | Inherits this property from its parent element.                                        |

## Example list

### Example 1

```html:
<style>
	.background {
		background: rgb(153, 203, 247);
	}

	.background-two {
		background: content-box radial-gradient(yellowgreen, skyblue);
		width: 100px;
		height: 80px;
	}

	.beach {
		background: url('https://i.picsum.photos/id/179/2048/1365.jpg?hmac=GJyDjrvfBfjPfJPqSBd2pX6sjvsGbG10d21blr5bTS8');
		width: 200px;
		height: 180px;
	}
</style>


<div class="background">This text only will have some background color.</div>

<div class="background-two">Here will be some weird gradient</div>

<div class="beach"></div>
```

# :background-attachment selector

The **background-attachment** property sets whether a background image scrolls with the rest of the page, or is fixed.

## Property Values

| Value   | Description                                                     |
| ------- | --------------------------------------------------------------- |
| scroll  | The background image will scroll with the page. This is default |
| fixed   | The background image will not scroll with the page              |
| local   | The background image will scroll with the element's contents    |
| initial | Sets this property to its default value.                        |
| inherit | Inherits this property from its parent element.                 |

## Example list

### Example 1

```html:
<style>
	.image {
		background-image: url('https://picsum.photos/id/1/200/300');
		background-attachment: fixed;
		width: 200px;
		height: 200px;
	}
</style>

<div class="image"></div>
```

# :background-position selector

The **background-position** property sets the starting position of a background image.

**Tip:** By default, a **background-image** is placed at the top-left corner of an element, and repeated both vertically and horizontally.

## Example list

### Example 1

```html:
<style>
	body {
		background-image: url('https://picsum.photos/id/1/200/300');
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-position: right bottom;
	}
</style>
```

# :background-repeat selector

The **background-repeat** property sets if/how a background image will be repeated.

By default, a **background-image** is repeated both vertically and horizontally.

**Tip:** The background image is placed according to the **background-position** property. If no **background-position** is specified, the image is always placed at the element's top left corner.

## Example list

### Example 1

```html:
<style>
	.image {
		background-image: url('https://picsum.photos/200/300?grayscale');
		background-repeat: no-repeat;
		height: 300px;
	}
</style>

<div class="image">Here lies some grey scaled image</div>

```

# :background-clip selector

The **background-clip** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.

If the element has no **background-image** or **background-color**, this property will only have a visual effect when the border has transparent regions or partially opaque regions (due to **border-style** or **border-image**); otherwise, the border masks the difference.

**Note:** Because the root element has a different background painting area, the **background-clip** property has no effect when specified on it.

**Note:** For documents whose root element is an HTML element: if the computed value of **background-image** on the root element is none and its **background-color** is transparent, user agents must instead propagate the computed values of the background properties from that element's first HTML `<body>` child element. The used values of that `<body>` element's background properties are their initial values, and the propagated values are treated as if they were specified on the root element. It is recommended that authors of HTML documents specify the canvas background for the `<body>` element rather than the HTML element.

## Values:

- border-box - The background extends to the outside edge of the border (but underneath the border in z-ordering).

- padding-box - The background extends to the outside edge of the padding. No background is drawn beneath the border.

- content-box - The background is painted within (clipped to) the content box.

- text - The background is painted within (clipped to) the foreground text.

## Example list

### Example 1

```html:
<style>
	.clip {
		border: 10px dotted black;
		padding: 15px;
		background: lightblue;
		background-clip: content-box;
	}
</style>

<div class="clip">This text is inside the styled element.</div>

```

# :background-origin selector

The **background-origin** property specifies the origin position (the background positioning area) of a background image.

**Note:** This property has no effect if **background-attachment** is "fixed".

## Example list

### Example 1

```html:
<style>
	.origin {
		border: 10px dashed black;
		padding: 25px;
		background: url('https://picsum.photos/200/300/?blur=2');
		background-repeat: no-repeat;
		background-origin: border-box;
    text-shadow: 2px 2px white;
	}
</style>

<strong>
	<div class="origin">This text is inside the styled element.</div>
</strong>

```

# :background-size selector

The **background-size** property specifies the size of the background images.

There are four different syntaxes you can use with this property: the keyword syntax (**"auto"**, **"cover"** and **"contain"**), the one-value syntax (sets the **width** of the image (**height** becomes **"auto"**), the two-value syntax (first value: width of the image, second value: height), and the multiple background syntax (separated with comma).

| Value      | Description                                                                                                                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| auto       | Default value. The background image is displayed in its original size                                                                                                                                         |
| length     | Sets the width and height of the background image. The first value sets the width, the second value sets the height. If only one value is given, the second is set to "auto".                                 |
| percentage | Sets the width and height of the background image in percent of the parent element. The first value sets the width, the second value sets the height. If only one value is given, the second is set to "auto" |
| cover      | Resize the background image to cover the entire container, even if it has to stretch the image or cut a little bit off one of the edges                                                                       |
| contain    | Resize the background image to make sure the image is fully visible                                                                                                                                           |
| initial    | Sets this property to its default value.                                                                                                                                                                      |
| inherit    | Inherits this property from its parent element.                                                                                                                                                               |

## Example list

### Example 1

```html:
<style>
	.image {
		background-image: url('https://picsum.photos/id/870/200/300?grayscale&blur=2');
		border: 2px solid black;
		padding: 32px;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		text-shadow: 2px 2px whitesmoke;
	}
</style>

<strong>
	<div class="image">Look at this text how it covers the image.</div>
</strong>
```

@mariateo

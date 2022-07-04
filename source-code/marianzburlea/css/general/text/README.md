# Meet the CSS tags

## Research

**For `color` and `font` properties - See general/color-and-font**

<!-- google -->

<!-- 1. the `direction` property -----
1. the `line-height` property --------------
1. the `text-decoration` property ----
1. the `text-indent` property
1. the `text-transform` property

1. the `letter-spacing` property
1. the `word-spacing` property

1. the `text-align` property
1. the `vertical-align` property
1. the `text-align-last` property

1. the `hanging-punctuation` property
1. the `punctuation-trim` property

1. the `text-justify` property
1. the `text-outline` property
1. the `text-overflow` property
1. the `text-shadow` property

1. the `word-break` property
1. the `word-wrap` property

1. the `unicode-bidi` property---------
1. the `white-space` property -->

I did some searches on Google:

[direction css](https://www.google.com/search?q=direction+css)
and

[line-height css](https://www.google.com/search?q=line-height+css)
and

[text-decoration css](https://www.google.com/search?q=text-decoration+css)
and

[text-indent css](https://www.google.com/search?q=text-indent+css)
and

[text-transform css](https://www.google.com/search?q=text-transform+css)
and

[letter-spacing css](https://www.google.com/search?q=letter-spacing+css)
and

[word-spacing css](https://www.google.com/search?q=word-spacing+css)
and

[text-align css](https://www.google.com/search?q=text-align+css)
and

[vertical-align css](https://www.google.com/search?q=vertical-align+css)
and

[text-align-last css](https://www.google.com/search?q=text-align-last+css)
and

[hanging-punctuation css](https://www.google.com/search?q=hanging-punctuation+css)
and

[punctuation-trim css](https://www.google.com/search?q=punctuation-trim+css)
and

[text-justify css](https://www.google.com/search?q=text-justify+css)
and

[outline css](https://www.google.com/search?q=outline+css)
and

[text-overflow css](https://www.google.com/search?q=text-overflow+css)
and

[text-shadow css](https://www.google.com/search?q=text-shadow+css)
and

[word-break css](https://www.google.com/search?q=word-break+css)
and

[word-wrap css](https://www.google.com/search?q=word-wrap+css)
and

[unicode-bidi css](https://www.google.com/search?q=unicode-bidi+css)
and

[white-space css](https://www.google.com/search?q=white-space+css)

And found

[CSS direction in W3](https://www.w3schools.com/cssref/pr_text_direction.asp)
and

[CSS line-height in W3](https://www.w3schools.com/cssref/pr_dim_line-height.asp)
and

[CSS text-decoration in W3](https://www.w3schools.com/cssref/pr_text_text-decoration.asp)
and

[CSS text-indent in W3](https://www.w3schools.com/cssref/pr_text_text-indent.asp)
and

[CSS text-transform in W3](https://www.w3schools.com/cssref/pr_text_text-transform.asp)
and

[CSS letter-spacing in W3](https://www.w3schools.com/cssref/pr_text_letter-spacing.asp)
and

[CSS word-spacing in W3](https://www.w3schools.com/cssref/pr_text_word-spacing.asp)
and

[CSS text-align in W3](https://www.w3schools.com/cssref/pr_text_text-align.ASP)
and

[CSS vertical-align in W3](https://www.w3schools.com/cssref/pr_pos_vertical-align.asp)
and

[CSS text-align-last in W3](https://www.w3schools.com/cssref/css3_pr_text-align-last.asp)
and

[CSS hanging-punctuation in W3](https://www.w3schools.com/cssref/css3_pr_hanging-punctuation.asp)
and

[CSS punctuation-trim in W3](Is-no-longer-available)
and

[CSS text-justify in W3](https://www.w3schools.com/cssref/css3_pr_text-justify.asp)
and

[CSS outline in W3](https://www.w3schools.com/cssref/pr_outline.asp)
and

[CSS text-overflow in W3](https://www.w3schools.com/cssref/css3_pr_text-overflow.asp)
and

[CSS text-shadow in W3](https://www.w3schools.com/cssref/css3_pr_text-shadow.asp)
and

[CSS word-break in w3](https://www.w3schools.com/cssref/css3_pr_word-break.asp)
and

[CSS word-wrap in w3](https://www.w3schools.com/cssref/css3_pr_word-wrap.asp)
and

[CSS unicode-bidi in w3](https://www.w3schools.com/cssref/pr_text_unicode-bidi.asp)
and

[CSS white-space in w3](https://www.w3schools.com/cssref/pr_text_white-space.asp)

## Notes:

# direction

The direction property specifies the text direction/writing direction within a block-level element.

Tip: Use this property together with the unicode-bidi property to set or return whether the text should be overridden to support multiple languages in the same document.

| Value   | Description                                             |
| ------- | ------------------------------------------------------- |
| ltr     | Text direction goes from left-to-right. This is default |
| rtl     | Text direction goes from right-to-left                  |
| initial | Sets this property to its default value.                |
| inherit | Inherits this property from its parent element.         |

## Example list

### Example 1

```html:
<style>
	.dir {
		direction: rtl;
	}
</style>

<div class="dir">This text is from right to left.</div>

```

# unicode-bidi

The unicode-bidi property is used together with the direction property to set or return whether the text should be overridden to support multiple languages in the same document.

## Property Values

| Value            | Description                                                                                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| normal           | The element does not open an additional level of embedding. This is default                                                                               |
| embed            | For inline elements, this value opens an additional level of embedding                                                                                    |
| bidi-override    | For inline elements, this creates an override. For block elements, this creates an override for inline-level descendants not within another block element |
| isolate          | The element is isolated from its siblings                                                                                                                 |
| isolate-override | -                                                                                                                                                         |
| plaintext        | -                                                                                                                                                         |
| initial          | Sets this property to its default value.                                                                                                                  |
| inherit          | Inherits this property from its parent element.                                                                                                           |

## Example list

### Example 1

```html:
<style>
	.embed {
		direction: rtl;
		unicode-bidi: embed;
	}
</style>

<div class="embed">Take a look at this funky text.</div>
```

# line-height

The **line-height** property specifies the height of a line.

**Note:** Negative values are not allowed.

## Property Values

| Value   | Description                                                                        |
| ------- | ---------------------------------------------------------------------------------- |
| normal  | A normal line height. This is default                                              |
| number  | A number that will be multiplied with the current font-size to set the line height |
| length  | A fixed line height in px, pt, cm, etc.                                            |
| %       | A line height in percent of the current font size                                  |
| initial | Sets this property to its default value.                                           |
| inherit | Inherits this property from its parent element.                                    |

## Example list

### Example 1

```html:
<style>
	.line {
		line-height: 50%;
		background-color: silver;
	}

	.height {
		line-height: 50px;
		background-color: honeydew;
	}
</style>

<div class="line">Look at this text. <b>line-height</b> is set to 50%</div>

<div class="height">This one has different <b>line-height</b></div>

```

# text-decoration

The text-decoration property specifies the decoration added to text, and is a shorthand property for:

- text-decoration-line (required)
- text-decoration-color
- text-decoration-style
- text-decoration-thickness

| Value                     | Description                                                                      |
| ------------------------- | -------------------------------------------------------------------------------- |
| text-decoration-line      | Sets the kind of text decoration to use (like underline, overline, line-through) |
| text-decoration-color     | Sets the color of the text decoration                                            |
| text-decoration-style     | Sets the style of the text decoration (like solid, wavy, dotted, dashed, double) |
| text-decoration-thickness | Sets the thickness of the decoration line                                        |
| initial                   | Sets this property to its default value.                                         |
| inherit                   | Inherits this property from its parent element.                                  |

## Example list

### Example 1

```html:
<style>
	.underline {
		text-decoration: underline;
	}

	.overline {
		text-decoration: overline;
	}

	.under-over {
		text-decoration: underline overline;
	}

	.through {
		text-decoration: line-through;
	}
</style>

<div class="underline">This text is underlined.</div>
<div class="through">This text has a line through.</div>
<div class="overline">This text is overlined.</div>
<div class="under-over">This text is underlined and overlined.</div>
```

# u

## Example list

### Example 1

```html:
<style>

</style>
```

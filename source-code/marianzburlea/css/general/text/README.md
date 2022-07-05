# Meet the CSS tags

## Research

**For `color` and `font` properties - See general/color-and-font**

<!-- google -->

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

# text-indent

The **text-indent** property specifies the indentation of the first line in a text-block.

**Note:** Negative values are allowed. The first line will be indented to the left if the value is negative.

| Value   | Description                                                             |
| ------- | ----------------------------------------------------------------------- |
| length  | Defines a fixed indentation in px, pt, cm, em, etc. Default value is 0. |
| %       | Defines the indentation in % of the width of the parent element         |
| initial | Sets this property to its default value.                                |
| inherit | Inherits this property from its parent element.                         |

## Example list

### Example 1

```html:
<style>
	.indent {
		text-indent: 2rem;
	}
</style>

<div class="indent">Look at this text how it is indented.</div>

```

# text-transform

## Property Values

| Value      | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| none       | No capitalization. The text renders as it is. This is default |
| capitalize | Transforms the first character of each word to uppercase      |
| uppercase  | Transforms all characters to uppercase                        |
| lowercase  | Transforms all characters to lowercase                        |
| initial    | Sets this property to its default value.                      |
| inherit    | Inherits this property from its parent element.               |

## Example list

### Example 1

```html:
<style>
	.capitalize {
		text-transform: capitalize;
	}

	.uppercase {
		text-transform: uppercase;
	}

	.lowercase {
		text-transform: lowercase;
	}
</style>
```

# letter-spacing

The **letter-spacing** property increases or decreases the space between characters in a text.

## Property Values

| Value   | Description                                                                                       |
| ------- | ------------------------------------------------------------------------------------------------- |
| normal  | Defines normal space between characters. This is default                                          |
| length  | Defines a length that is used as the space between characters (negative values are also allowed). |
| initial | Sets this property to its default value.                                                          |
| inherit | Inherits this property from its parent element.                                                   |

## Example list

### Example 1

```html:
<style>
	.letter {
		letter-spacing: 5px;
	}

	.spacing {
		letter-spacing: -1px;
	}
</style>

<div class="letter">
	This text has <b>letter-spacing</b> with the value of <b><i>5px</i></b>
</div>

<div class="spacing">
	This text has <b>letter-spacing</b> with the value of <b><i>-1px</i></b>
</div>
```

# word-spacing

The **word-spacing** property increases or decreases the white space between words.

**Note:** Negative values are allowed.

## Property Values

| Value   | Description                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------ |
| normal  | Defines normal space between words (0.25em) . This is default                                    |
| length  | Defines an additional space between words (in px, pt, cm, em, etc). Negative values are allowed. |
| initial | Sets this property to its default value.                                                         |
| inherit | Inherits this property from its parent element.                                                  |

## Example list

### Example 1

```html:
<style>

	.word {
		word-spacing: 10px;
	}

	.space {
		word-spacing: 0.6cm;
	}
</style>

<div class="word">
	This text has <b>word-spacing</b> with the value of <b><i>10px</i></b>
</div>
<div class="space">
	This text has <b>word-spacing</b> with the value of <b><i>0.6cm</i></b>
</div>
```

# text-align

The **text-align** property specifies the horizontal alignment of text in an element.

## Property Values

| Value   | Description                                                                              |
| ------- | ---------------------------------------------------------------------------------------- |
| left    | Aligns the text to the left                                                              |
| right   | Aligns the text to the right                                                             |
| center  | Centers the text                                                                         |
| justify | Stretches the lines so that each line has equal width (like in newspapers and magazines) |
| initial | Sets this property to its default value.                                                 |
| inherit | Inherits this property from its parent element.                                          |

## Example list

### Example 1

```html:
<style>
	.left {
		text-align: left;
	}

	.right {
		text-align: right;
	}

	.center {
		text-align: center;
	}

	.justify {
		text-align: justify;
	}
</style>
```

# vertical-align

The **vertical-align** property sets the vertical alignment of an element.

## Property Values

| Value       | Description                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------- |
| baseline    | The element is aligned with the baseline of the parent. This is default                            |
| length      | Raises or lower an element by the specified length. Negative values are allowed.                   |
| %           | Raises or lower an element by a percent of the "line-height" property. Negative values are allowed |
| sub         | The element is aligned with the subscript baseline of the parent                                   |
| super       | The element is aligned with the superscript baseline of the parent                                 |
| top         | The element is aligned with the top of the tallest element on the line                             |
| text-top    | The element is aligned with the top of the parent element's font                                   |
| middle      | The element is placed in the middle of the parent element                                          |
| bottom      | The element is aligned with the lowest element on the line                                         |
| text-bottom | The element is aligned with the bottom of the parent element's font                                |

## Example list

### Example 1

```html:
<style>
	img.a {
		vertical-align: baseline;
	}

	img.b {
		vertical-align: text-top;
	}

	img.c {
		vertical-align: text-bottom;
	}

	img.d {
		vertical-align: sub;
	}

	img.e {
		vertical-align: super;
	}
</style>

<p>
	An
	<img
		class="a"
		src="../../../../public/image/peony.png"
		width="9"
		height="9"
	/>
	image with a default alignment.
</p>

<h4>vertical-align: text-top:</h4>
<p>
	An
	<img
		class="b"
		src="../../../../public/image/peony.png"
		width="9"
		height="9"
	/>
	image with a text-top alignment.
</p>

<h4>vertical-align: text-bottom:</h4>
<p>
	An
	<img
		class="c"
		src="../../../../public/image/peony.png"
		width="9"
		height="9"
	/>
	image with a text-bottom alignment.
</p>

<h4>vertical-align: sub:</h4>
<p>
	An
	<img
		class="d"
		src="../../../../public/image/peony.png"
		width="9"
		height="9"
	/>
	image with a sub alignment.
</p>

<h4>vertical-align: sup:</h4>
<p>
	An
	<img
		class="e"
		src="../../../../public/image/peony.png"
		width="9"
		height="9"
	/>
	image with a super alignment.
</p>

```

# text-align-last

The **text-align-last** property specifies how to align the last line of a text.

Notice that the **text-align-last** property sets the alignment for all last lines within the selected element. So, if you have a `<div>` with three paragraphs in it, **text-align-last** will apply to the last line of EACH of the paragraphs. To use **text-align-last** on only the last paragraph in the container, you can use :last child.

**Note:** In Edge prior 79, the **text-align-last** property only works on text that has **"text-align: justify"**.

| Value   | Description                                                                                                                                           |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| auto    | Default value. The last line is justified and aligned left                                                                                            |
| left    | The last line is aligned to the left                                                                                                                  |
| right   | The last line is aligned to the right                                                                                                                 |
| center  | The last line is center-aligned                                                                                                                       |
| justify | The last line is justified as the rest of the lines                                                                                                   |
| start   | The last line is aligned at the beginning of the line (left if the text-direction is left-to-right, and right is the text-direction is right-to-left) |
| end     | The last line is aligned at the end of the line (right if the text-direction is left-to-right, and left is the text-direction is right-to-left)       |
| initial | Sets this property to its default value.                                                                                                              |
| inherit | Inherits this property from its parent element.                                                                                                       |

## Property value

## Example list

### Example 1

```html:
<style>
div.a {
  text-align: right; /* For Edge */
  -moz-text-align-last: right; /* For Firefox prior 58.0 */
  text-align-last: right;
}

div.b {
  text-align: justify; /* For Edge */
  -moz-text-align-last: center; /* For Firefox prior 58.0 */
  text-align-last: center;
}

div.c {
  text-align: justify; /* For Edge */
  -moz-text-align-last: justify; /* For Firefox prior 58.0 */
  text-align-last: justify;
}
</style>

<h4>text-align-last: right:</h4>
<div class="a">
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam
		at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
		diam, consequat gravida libero rhoncus ut.
	</p>
</div>

<h4>text-align-last: center:</h4>
<div class="b">
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam
		at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
		diam, consequat gravida libero rhoncus ut.
	</p>
</div>

<h4>text-align-last: justify:</h4>
<div class="c">
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam
		at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
		diam, consequat gravida libero rhoncus ut.
	</p>
</div>
```

# hanging-punctuation

**None of the major browsers support the hanging-punctuation property.**

The **hanging-punctuation** property specifies whether a punctuation mark may be placed outside the line box at the start or at the end of a full line of text.

| Value     | Description                                                                                                                                  |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| none      | No punctuation mark may be placed outside the line box at the start or at the end of a full line of text                                     |
| first     | Punctuation may hang outside the start edge of the first line                                                                                |
| last      | Punctuation may hang outside the end edge of the last line                                                                                   |
| allow-end | Punctuation may hang outside the end edge of all lines if the punctuation does not otherwise fit prior to justification                      |
| force-end | Punctuation may hang outside the end edge of all lines. If justification is enabled on this line, then it will force the punctuation to hang |
| initial   | Sets this property to its default value.                                                                                                     |
| inherit   | Inherits this property from its parent element.                                                                                              |

# punctuation-trim

**None of the major browsers support the hanging-punctuation property.**

The **hanging-punctuation** property specifies whether a punctuation mark may be placed outside the line box at the start or at the end of a full line of text.

# text-justify

The **text-justify** property specifies the justification method of text when text-align is set to "justify".

| Value           | Description                                        |
| --------------- | -------------------------------------------------- |
| auto            | The browser determines the justification algorithm |
| inter-word      | Increases/Decreases the space between words        |
| inter-character | Increases/Decreases the space between characters   |
| none            | Disables justification methods                     |
| initial         | Sets this property to its default value.           |
| inherit         | Inherits this property from its parent element.    |

## Example list

### Example 1

```html:
<style>
	div {
		text-align: justify;
		text-justify: inter-word;
	}
</style>

<div>
	In my younger and more vulnerable years my father gave me some advice that
	I've been turning over in my mind ever since. 'Whenever you feel like
	criticizing anyone,' he told me, 'just remember that all the people in this
	world haven't had the advantages that you've had.'
</div>

```

# outline

An **outline** is a line that is drawn around elements, outside the borders, to make the element "stand out".

The **outline** property is a shorthand property for:

- outline-width
- outline-style (required)
- outline-color
- If outline-color is omitted, the color applied will be the color of the text.

**Note:** Outlines differ from borders! Unlike border, the outline is drawn outside the element's border, and may overlap other content. Also, the outline is NOT a part of the element's dimensions; the element's total width and height is not affected by the width of the outline.

| Value         | Description                                     |
| ------------- | ----------------------------------------------- |
| outline-width | Specifies the width of outline                  |
| outline-style | Specifies the style of the outline              |
| outline-color | Specifies the color of the outline              |
| initial       | Sets this property to its default value.        |
| inherit       | Inherits this property from its parent element. |

## Example list

### Example 1

```html:
<style>
	.outline {
		outline: 3px dashed olive;
	}
</style>

<div class="outline">This text has some dotted outline.</div>

```

# text-shadow

The **text-shadow** property adds shadow to text.

This property accepts a comma-separated list of shadows to be applied to the text.

| Value       | Description                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------------------- |
| h-shadow    | Required. The position of the horizontal shadow. Negative values are allowed                             |
| v-shadow    | Required. The position of the vertical shadow. Negative values are allowed                               |
| blur-radius | Optional. The blur radius. Default value is 0                                                            |
| color       | Optional. The color of the shadow. Look at CSS Color Values for a complete list of possible color values |
| none        | Default value. No shadow                                                                                 |
| initial     | Sets this property to its default value.                                                                 |
| inherit     | Inherits this property from its parent element.                                                          |

## Example list

### Example 1

```html:
<style>
	.shadow {
		text-shadow: 2px 2px salmon;
	}
</style>

<div class="shadow">Look at this text that has an awesome shadow.</div>

```

# word-break

The word-break property specifies how words should break when reaching the end of a line.

| Value      | Description                                                                                                                |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| normal     | Default value. Uses default line break rules                                                                               |
| break-all  | To prevent overflow, word may be broken at any character                                                                   |
| keep-all   | Word breaks should not be used for Chinese/Japanese/Korean (CJK) text. Non-CJK text behavior is the same as value "normal" |
| break-word | To prevent overflow, word may be broken at arbitrary points                                                                |
| initial    | Sets this property to its default value.                                                                                   |
| inherit    | Inherits this property from its parent element.                                                                            |

## Example list

### Example 1

```html:
<style>
  p {
    width: 140px;
    border: 1px solid #000000;
  }

  p.a {
    word-break: normal;
  }

  p.b {
    word-break: keep-all;
  }

  p.c {
    word-break: break-all;
  }
</style>

<h3>word-break: normal (default):</h3>
<p class="a">
	Thisissomeveryveryverylong word. Words will break according to usual rules.
</p>

<h3>word-break: keep-all:</h3>
<p class="b">
	Thisissomeveryveryverylong word. This text will-break-at-hyphens.
</p>

<h3>word-break: break-all:</h3>
<p class="c">
	Thisissomeveryveryverylong word. This text will break at any character.
</p>

```

# text-overflow

The **text-overflow** property specifies how overflowed content that is not displayed should be signaled to the user. It can be clipped, display an ellipsis (...), or display a custom string.

Both of the following properties are required for text-overflow:

- white-space: nowrap;
- overflow: hidden;

| Value    | Description                                              |
| -------- | -------------------------------------------------------- |
| clip     | Default value. The text is clipped and not accessible    |
| ellipsis | Render an ellipsis ("...") to represent the clipped text |
| string   | Render the given string to represent the clipped text    |
| initial  | Sets this property to its default value.                 |
| inherit  | Inherits this property from its parent element.          |

## Example list

### Example 1

```html:
<style>
  .b {
  white-space: nowrap;
  width: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid #000000;
  }

  .c {
    white-space: nowrap;
    width: 50px;
    overflow: hidden;
    text-overflow: "----";
    border: 1px solid #000000;
  }
</style>

<h4>text-overflow: ellipsis:</h4>
<div class="b">Hello world!</div>

<h4>text-overflow: "----" (user defined string):</h4>
<div class="c">Hello world!</div>

```

# white-space

The **white-space** property specifies how white-space inside an element is handled.

| Value    | Description                                                                                                                                                                |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| normal   | Sequences of whitespace will collapse into a single whitespace. Text will wrap when necessary. This is default                                                             |
| nowrap   | Sequences of whitespace will collapse into a single whitespace. Text will never wrap to the next line. The text continues on the same line until a <br> tag is encountered |
| pre      | Whitespace is preserved by the browser. Text will only wrap on line breaks. Acts like the <pre> tag in HTML                                                                |
| pre-line | Sequences of whitespace will collapse into a single whitespace. Text will wrap when necessary, and on line breaks                                                          |
| pre-wrap | Whitespace is preserved by the browser. Text will wrap when necessary, and on line breaks                                                                                  |
| initial  | Sets this property to its default value.                                                                                                                                   |
| inherit  | Inherits this property from its parent element.                                                                                                                            |

## Example list

### Example 1

```html:
<style>
  .b {
  white-space: nowrap;
  width: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid #000000;
  }

  .c {
    white-space: nowrap;
    width: 50px;
    overflow: hidden;
    text-overflow: "----";
    border: 1px solid #000000;
  }
</style>


<h4>text-overflow: ellipsis:</h4>
<div class="b">Hello world!</div>

<h4>text-overflow: "----" (user defined string):</h4>
<div class="c">Hello world!</div>

```

# word-wrap

The **word-wrap** property allows long words to be able to be broken and wrap onto the next line.

## Property Values

| Value      | Description                                               |
| ---------- | --------------------------------------------------------- |
| normal     | Break words only at allowed break points. This is default |
| break-word | Allows unbreakable words to be broken                     |
| initial    | Sets this property to its default value.                  |
| inherit    | Inherits this property from its parent element.           |

## Example list

### Example 1

```html:
<style>
  .word-wrap {
    width: 150px;
    border: 1px solid #000000;
    word-wrap: break-word;
  }
</style>

<div class="word-wrap"> This div contains a very long word: thisisaveryveryveryveryveryverylongword. The long word will break and wrap to the next line.</div>

```

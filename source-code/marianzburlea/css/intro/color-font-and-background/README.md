# Meet the CSS tags

## Research

I found:
[CSS property Groups](https://www.script-tutorials.com/css-reference/#marquee)

I did some searches on Google:

[background-color css w3](https://www.google.com/search?q=background-color+css+w3)
and
[background-image css w3](https://www.google.com/search?q=background-image+css+w3)
and
[color css](https://www.google.com/search?q=color+css)
and
[font css](https://www.google.com/search?q=font+css)
and
[font css](https://www.google.com/search?q=font-size+css)
and
[font-family css](https://www.google.com/search?q=font-family+css)
and
[font-style css](https://www.google.com/search?q=font-style+css)
and
[font-weight css](https://www.google.com/search?q=font-style+css)

And found

[CSS background-color tag in W3](https://www.w3schools.com/cssref/pr_background-color.asp)
and
[CSS background-image tag in W3](https://www.w3schools.com/cssref/pr_background-image.asp)
and
[CSS colors tag in W3](https://www.w3schools.com/css/css_colors.asp)
and
[CSS font tag in W3](https://www.w3schools.com/cssref/pr_font_font.asp)
and
[CSS font-size tag in W3](https://www.w3schools.com/cssref/pr_font_font.asp)
and
[CSS font-family tag in W3](https://www.w3schools.com/cssref/pr_font_font-size.asp)
and
[CSS font-style tag in W3](https://www.w3schools.com/cssref/pr_font_font-style.asp)
and
[CSS font-weight tag in W3](https://www.w3schools.com/cssref/pr_font_weight.asp)

Also found

[CSS background-color property](https://www.script-tutorials.com/css-ref/background-color/)
and
[CSS background-image property](https://www.script-tutorials.com/css-ref/background-image/)
and
[CSS color property](https://www.script-tutorials.com/css-ref/color/)
and
[CSS font property](https://www.script-tutorials.com/css-ref/color/)
and
[CSS font-size property](https://www.script-tutorials.com/css-ref/color/)
and
[CSS font-family property](https://www.script-tutorials.com/css-ref/color/)
and
[CSS font-style property](https://www.script-tutorials.com/css-ref/color/)
and
[CSS font-weight property](https://www.script-tutorials.com/css-ref/color/)

## Notes:

### background-color

The background-color property sets the background color of an element.

The background of an element is the total size of the element, including padding and border (but not the margin).

<b>Note:</b> Use a background color and a text color that makes the text easy to read.

## Example list

### Example 1

```html:
<p style="background-color: red; color: white">
  Take a look at this paragraph! I made use of <b>style</b> attribute and gave
  it a background color red and the text has a white color.
</p>
```

### Example 2

```html:
<h1 style="background-color: blue; color: white">
  Take a look at this paragraph! I made use of <b>style</b> attribute and gave
  it a background color blue and the text has a white color.
</h1>
```

### Example 3

```html:
<div style="background-color: green; color: white">
  Take a look at this paragraph! I made use of <b>style</b> attribute and gave
  it a background color green and the text has a white color.
</div>
```

### background-image

The **background-image** property sets one or more background images for an element.

By default, a **background-image** is placed at the top-left corner of an element, and repeated both vertically and horizontally.

<b>Note:</b> The background of an element is the total size of the element, including padding and border (but not the margin).

<b>Note:</b> Always set a background-color to be used if the image is unavailable.

## Example list

### Example 1

```html:
<div
  style="
    background-image: url('/public/image/peony.png');
    width: 200;
    height: 250;
    background-color: purple;
  "
></div>
```

### Example 2

```html:
<div
  style="
    background-image: url('/public/image/rose.png');
    width: 100;
    height: 150;
    background-color: blue;
  "
></div>
```

### Example 3

```html:
<div
  style="
    background-image: url('https://picsum.photos/200/300/?blur');
    width: 200;
    height: 250;
    background-color: green;
  "
></div>
```

---

### height

The <b>height</b> property sets the height of an element.

The <b>height</b> of an element does not include padding, borders, or margins!

If <b>height</b>: auto; the element will automatically adjust its height to allow its content to be displayed correctly.

If <b>height</b> is set to a numeric value (like pixels, (r)em, percentages) then if the content does not fit within the specified height, it will overflow. How the container will handle the overflowing content is defined by the overflow property.

<b>Note:</b> The <b>min-height</b> and <b>max-height</b> properties override the <b>height</b> property.

#### Values:

| **Value**          | **Description**                                       |
| ------------------ | ----------------------------------------------------- |
| <ins>auto</ins>    | default value. The browser calculates the width.      |
| <ins>length</ins>  | defines the width in px, cm, etc.                     |
| <ins>%</ins>       | defines the width in percent of the containing block. |
| <ins>initial</ins> | sets this property to its default value.              |
| <ins>initial</ins> | inherits this property from its parent element.       |

## Example list

### Example 1

```html:
p {
  height: 100px;
}
```

### Example 1

```html:
div {
  height: 200vw;
}
```

### Example 1

```html:
table {
  height: auto;
}
```

### width

The <b>width</b> property sets the width of an element.

The <b>width</b> of an element does not include padding, borders, or margins!

Note: The <b>min-width</b> and <b>max-width</b> properties override the <b>width</b> property.

#### Values:

| **Value**          | **Description**                                       |
| ------------------ | ----------------------------------------------------- |
| <ins>auto</ins>    | default value. The browser calculates the width.      |
| <ins>length</ins>  | defines the width in px, cm, etc.                     |
| <ins>%</ins>       | defines the width in percent of the containing block. |
| <ins>initial</ins> | sets this property to its default value.              |
| <ins>initial</ins> | inherits this property from its parent element.       |

## Example list

### Example 1

```html:
img {
  width: 50%;
}
```

### Example 2

```html:
body {
  max-width: 350px;
}
```

### Example 3

```html:
table {
  width: 14rem;
}
```

### Color and Font

The **color** property sets the color for and element's text content and its decorations. In reality this could be easily called text-color.This is an uniform color, for more variations you can use **gradient**.
By default, a **color**'s value is black.

The **font** property is a shorthand property for:

- font-style
- font-variant
- font-weight
- font-size/line-height
- font-family.

The **font-size** and **font-family** values are required. If one of the other values is missing, their default value are used.

The **font-size** property sets the size of a font.

The **font-family** property specifies the font for an element.

There are two types of font family names:

- **family-name**: The name of a font-family, like "times", "courier", "arial", etc.
- **generic-family**: The name of a generic-family, like "serif", "sans-serif", "cursive", "fantasy", "monospace".

<b>Note:</b> It starts with the font you want, and always ends with a generic family, to let the browser pick a similar font in the generic family, if no other fonts are available.

The **font-weight** property sets how thick or thin characters in text should be displayed: normal, bol.

The **font-style** property specifies the font style for a text: normal, italic,oblique, initial or inherit.

## Example list

### Example 1 - Color and Font - External CSS

```HTML & CSS (CSS part from the external file):
h1 {
  color: orangered;
  text-align: center;
  font: 200;
  font-style: normal;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serifß;
  font-weight: bold;
}

.old-version-lyrics {
  color: forestgreen;
  font: 100;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

#i-go-to-the-right {
  text-align: right;
  font-style: oblique;
}
```

HTML File with the import of the CSS file:

```
<link rel="stylesheet" href="color-and-font-style.css" />

<h1>Tags approached in this example:</h1>
...
```

Visit the <ins>**`color-and-font/color-and-font-external.html`**</ins> & <ins>**`color-and-font/color-and-font-style.css`**</ins> files to find out more about the <ins>**`CSS`**</ins> style properties that tell the website how to display the code written inside the HTML page.

### Example 2 - Color and Font - Inline CSS

````HTML & CSS (style written inside the tag):
```
h1
  style="
    color: orangered;
    text-align: center;
    font: 200;
    font-style: normal;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    font-weight: bold;
  ">
  ...
````

Visit the <ins>**`color-and-font/color-and-font-inline.html`**</ins> file to find out more about the <ins>**`CSS`**</ins> style properties that tell the website how to display the code written inside the HTML page.

### Example 3 - Color and Font - Internal CSS

```HTML & CSS (written inside the Style tag, that is located in the Header of the page):
style>
  h1 {
    color: orangered;
    text-align: center;
    font: 200;
    font-style: normal;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serifß;
    font-weight: bold;
  }
...

```

Visit the <ins>**`color-and-font/color-and-font-internal.html`**</ins> file to find out more about the <ins>**`CSS`**</ins> style properties that tell the website how to display the code written inside the HTML page.

@iulia-zburlea
@MariaTeo

```

```

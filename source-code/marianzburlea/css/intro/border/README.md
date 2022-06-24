# Meet the CSS tags

<!-- BORDER README -->

## Research

I found:
[CSS property Groups](https://www.script-tutorials.com/css-reference/#marquee)

I did some searches on Google:

[border css](https://www.google.com/search?q=border+css)
and
[border-color css](https://www.google.com/search?q=border-color+css)
and
[border-width css](https://www.google.com/search?q=border-width+css)
and
[border-style css](https://www.google.com/search?q=border-style+css)
and
[border-radius css](https://www.google.com/search?q=border+radius+css)

And found

[CSS border tag in W3](https://www.w3schools.com/cssref/pr_border.asp)
and
[CSS border-color tag in W3](https://www.w3schools.com/cssref/pr_border-color.asp)
and
[CSS border-width tag in W3](https://www.w3schools.com/cssref/pr_border-width.asp)
and
[CSS border-style tag in W3](https://www.w3schools.com/cssref/pr_border-style.asp)
and
[CSS border-radius tag in W3](https://www.w3schools.com/cssref/css3_pr_border-radius.asp)

Also found

[CSS border property](https://www.script-tutorials.com/css-ref/border/)
and
[CSS border-color property](https://www.script-tutorials.com/css-ref/border-color/)
and
[CSS border-width property](https://www.script-tutorials.com/css-ref/border-width/)
and
[CSS border-style property](https://www.script-tutorials.com/css-ref/border-style/)
and
[CSS border-radius property](https://www.script-tutorials.com/css-ref/border-radius/)

## Notes:

### Border

Border tags presented in this section:

- &lt;border&gt;
- &lt;border-color&gt;
- &lt;border-width&gt;
- &lt;border-style&gt;
- &lt;border-radius&gt;

The **border** CSS property is a shorthand property for setting the individual border property values in a single place in the style sheet.
Border can be used to set the values for one or more of:

- border-width,
- border-style,
- border-color.

**border-color**:

- Specifies the color of the border.
- Default value is the color of the text.
- Border color can be assigned for all four sides or individually:
  - top border,
  - right border,
  - bottom border,
  - left border.
- Borders can also be transparent.

**border-width**:

- Specifies the width of the border:
  - thin,
  - medium,
  - thick.
- Default value is "medium".
- Border width can be assigned for all four sides or individually:
  - top border,
  - right border,
  - bottom border,
  - left border.

**border-style**:

- Specifies the style of the border:
  - dotted,
  - solid,
  - double,
  - dashed,
  - groove,
  - ridge,
  - inset,
  - outset,
  - hidden (the same as "none"),
  - none (specifies no border).
- Default value is "none".

**border-radius**:

- Defines the radius of the element's corners.
- Is a **length** or a **percentage** denoting a radius to use for the border in each corner of the border. It is used only in the one-value syntax.

- In case you want to apply different corner radius, the order is like this:
  - If you have 4 values:
    - First value applies to top-left corner,
    - Second value applies to top-right corner,
    - Third value applies to bottom-right corner,
    - Fourth value applies to bottom-left corner.
  - If you have 3 values:
    - First value applies to top-left corner,
    - Second value applies to top-right and bottom-left corners,
    - Third value applies to bottom-right corner.
  - If you have 2 values:
    - First value applies to top-left and bottom-right corners,
    - The second value applies to top-right and bottom-left corners.
  - If you have 1 value:
    - The value applies to all four corners, which are rounded equally.

<b>Note:</b> This property allows you to add rounded corners to elements!

## Example list

### Example 1

```HTML & CSS:

h1 {
  border-color: blue;
  border-width: thin;
  border-style: groove;
  border-radius: 32px 8px 20px 12px;
}

ul {
  gap: 32px;
  border-color: rgb(68, 68, 57);
  border-width: medium;
  border-style: dotted;
  border-radius: 16px 8px 24px;
}
...
```

```
...
<link rel="stylesheet" href="./border-style.css" />
...
<div id="container">
	<div>
		<p class="intro">
			In a lost land of tropical forests, on top of the only mountain in the
			region, trapped inside an old volcanic crater system, lived the last ever
			group of large, ferocious dinosaurs. For thousands and thousands of years
			they had survived all the changes on Earth, and now, led by the great
			Ferocitaurus, they were planning to come out of hiding and to dominate the
			world once more.
		</p>

		<p class="first-part">
    ...
```

Visit the <ins>**`border/border-external.html`**</ins> file to find out more about the <ins>**`CSS`**</ins> style tags that tell the website how to display the code written inside the HTML page.

### Example 2

```HTML & CSS:
...
style>
	h1,
	h2 {
		text-align: center;
	}

	h1 {
		border-color: blue;
		border-width: thin;
		border-style: groove;
		border-radius: 32px 8px 20px 12px;
	}
...
/style>
```

```
<h1>Tags to be used in these example:</h1>
<ul>
...
```

Visit the <ins>**`border/border-internal.html`**</ins> file to find out more about the <ins>**`CSS`**</ins> style tags that tell the website how to display the code written inside the HTML page.

### Example 3

```HTML & CSS:
...
h1
	style="
		text-align: center;
		border-color: blue;
		border-width: thin;
		border-style: groove;
		border-radius: 32px 8px 20px 12px;
	"
>
	Tags to be used in these example:
...
ul
	style="
		gap: 32px;
		border-color: rgb(68, 68, 57);
		border-width: medium;
		border-style: dotted;
		border-radius: 16px 8px 24px;
	"
>
...
```

Visit the <ins>**`border/border-inline.html`**</ins> file to find out more about the <ins>**`CSS`**</ins> style tags that tell the website how to display the code written inside the HTML page.

@iulia-zburlea

# Meet the CSS tags

<!-- BORDER README -->

## Research

I found:
[CSS property Groups](https://www.script-tutorials.com/css-reference/#marquee)

I did some searches on Google:

[margin and padding css](https://www.google.com/search?q=margin+and+padding+css)

And found

[CSS padding tag in W3](https://www.w3schools.com/cssref/pr_padding.asp)
and
[CSS margin tag in W3](https://www.w3schools.com/cssref/pr_margin.asp)
and

Also found

[CSS padding property](https://www.script-tutorials.com/css-ref/padding/)
and
[CSS margin property](https://www.script-tutorials.com/css-ref/margin/)
and

## Notes:

### Margin and Padding

<mark><b>Margin</b></mark>

The margin CSS property sets the margin for all four sides.
It is a shorthand to avoid setting each side separately with the other margin properties:

- margin-top,
- margin-right,
- margin-bottom,
- margin-left.

If the margin property has 4 values, the values order is:

- top margin,
- right margin,
- bottom margin,
- left margin.

If the margin property has 3 values, the values order is:

- top margin,
- right and left margin,
- bottom margin.

If the margin property has 2 valvalues, the values order isues:

- top and bottom margins,
- right and left margins.

<b>Note:</b>

- Negative values are also allowed.
- Default value is 0.

<b>Note:</b> The margin can be defined in:

- px, pt, cm, etc.
- % : specifies a margin in percent of the width of the containing element.

<mark><b>Padding</b></mark>

The padding CSS property sets the required padding space on all sides of an element.
The padding area is the space between the content of the element and its border.

The padding property is a shorthand to avoid setting each side separately:

- padding-top,
- padding-right,
- padding-bottom,
- padding-left.

It is a shorthand to avoid setting each side separately with the other margin properties:

- margin-top,
- margin-right,
- margin-bottom,
- margin-left.

<b>Note:</b> Negative values are not allowed.

If the padding property has 4 values, the values order is:

- top margin,
- right margin,
- bottom margin,
- left margin.

If the padding property has 3 values, the values order is:

- top margin,
- right and left margin,
- bottom margin.

If the padding property has 2 valvalues, the values order isues:

- top and bottom margins,
- right and left margins.

<b>Note:</b> The margin can be defined in:

- px, pt, cm, etc.
- %.

<mark><b>Difference between margin and padding:</b></mark>

<b>Note:</b>

- <b>Padding</b> creates extra space within an element,
- <b>Margin</b> creates extra space around an element.

## Example list

### Example 1

```HTML & CSS:

```

    h1 {

margin: auto;
}

h1, h2 {
text-align: center;
}

.example-one {
margin: 30px 20px 5px 45px;
padding: 30px 20px 5px 45px;
border-width: thick;
border-style: solid;
border-radius: 8px;
border-color: aquamarine;
}
...

```

```

    <link rel="stylesheet" href="margin-and-padding-style.css" />

    <h1>Short Moral Stories for Kids</h1>

    <h2>The Boy Who Cried Wolf</h2>

     <div class="example-one">
     ...

```

```

Visit the <ins>**`margin-and-padding/margin-and-padding-external.html`**</ins> file to find out more about the <ins>**`CSS`**</ins> style tags that tell the website how to display the code written inside the HTML page.

### Example 2

```HTML & CSS:

```

    <style>
    h1 {
    	margin: auto;
    }

    h1,
    h2 {
    	text-align: center;
    }

    .example-one {
    	margin: 30px 20px 5px 45px;
    	padding: 30px 20px 5px 45px;
    	border-width: thick;
    	border-style: solid;
    	border-radius: 8px;
    	border-color: aquamarine;
    }

...

```

```

    <h1>Short Moral Stories for Kids</h1>

    <h2>The Boy Who Cried Wolf</h2>
    ...

```

```

Visit the <ins>**`margin-and-padding/margin-and-padding-internal.html`**</ins> file to find out more about the <ins>**`CSS`**</ins> style tags that tell the website how to display the code written inside the HTML page.

### Example 3

```HTML & CSS:

```

    <h1 style="margin: auto; text-align: center">
    Short Moral Stories for Kids
    </h1>

    <h2 style="text-align: center">
    The Boy Who Cried Wolf
    </h2>

    <div
    style="
    margin: 30px 20px 5px 45px;
    padding: 30px 20px 5px 45px;
    border-width: thick;
    border-style: solid;
    border-radius: 8px;
    border-color: aquamarine;
    "
    class="example-one"

    >
    ...

```

```

Visit the <ins>**`margin-and-padding/margin-and-padding-inline.html`**</ins> file to find out more about the <ins>**`CSS`**</ins> style tags that tell the website how to display the code written inside the HTML page.

@iulia-zburlea

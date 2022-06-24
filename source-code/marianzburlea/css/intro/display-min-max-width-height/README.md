# Meet the CSS tags

## Research

I did some searches on Google:

[display css w3](https://www.google.com/search?q=display+css+w3)
and

[min-width css w3](https://www.google.com/search?q=min-width+css+w3)
and

[max-width css w3](https://www.google.com/search?q=max-width+css+w3)
and

[min-height css w3](https://www.google.com/search?q=min-height+css+w3)
and

[max-height css w3](https://www.google.com/search?q=max-height+css+w3)

And found

[CSS display in W3](https://www.w3schools.com/cssref/pr_display.asp)
and

[CSS min-width in W3](https://www.w3schools.com/cssref/pr_min-width.asp)
and

[CSS max-width in W3](https://www.w3schools.com/cssref/pr_max-width.asp)
and

[CSS min-height in W3](https://www.w3schools.com/cssref/pr_min-height.asp)
and

[CSS max-height in W3](https://www.w3schools.com/cssref/pr_max-height.asp)

## Notes:

### display

The <b>width</b> property sets the width of an element.

The <b>width</b> of an element does not include padding, borders, or margins!

Note: The <b>min-width</b> and <b>max-width</b> properties override the <b>width</b> property.

#### Values:

| **Value**                     | **Description**                                                                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <ins>inline </ins>            | Displays an element as an inline element (like <span>). Any height and width properties will have no effect                                             |
| <ins>block</ins>              | Displays an element as a block element (like <p>). It starts on a new line, and takes up the whole width                                                |
| <ins>contents</ins>           | Makes the container disappear, making the child elements children of the element the next level up in the DOM                                           |
| <ins>flex</ins>               | Displays an element as a block-level flex container                                                                                                     |
| <ins>grid</ins>               | Displays an element as a block-level grid container                                                                                                     |
| <ins>inline-block</ins>       | Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values |
| <ins>inline-flex</ins>        | Displays an element as an inline-level flex container                                                                                                   |
| <ins>inline-grid</ins>        | Displays an element as an inline-level flex container                                                                                                   |
| <ins>inline-table</ins>       | The element is displayed as an inline-level table                                                                                                       |
| <ins>list-item</ins>          | Let the element behave like a &lt;li&gt; element                                                                                                        |
| <ins>run-in</ins>             | Displays an element as either block or inline, depending on context                                                                                     |
| <ins>table</ins>              | Let the element behave like a &lt;table&gt; element                                                                                                     |
| <ins>table-caption</ins>      | Let the element behave like a <caption> element                                                                                                         |
| <ins>table-column-group</ins> | Let the element behave like a <colgroup> element                                                                                                        |
| <ins>table-header-group</ins> | Let the element behave like a <thead> element                                                                                                           |
| <ins>table-footer-group</ins> | Let the element behave like a <tfoot> element                                                                                                           |
| <ins>table-row-group</ins>    | Let the element behave like a <tbody> element                                                                                                           |
| <ins>table-cell</ins>         | Let the element behave like a <td> element                                                                                                              |
| <ins>table-column</ins>       | Let the element behave like a <col> element                                                                                                             |
| <ins>table-row</ins>          | Let the element behave like a <tr> element                                                                                                              |
| <ins>none</ins>               | The element is completely removed                                                                                                                       |
| <ins>initial</ins>            | Sets this property to its default value                                                                                                                 |
| <ins>inherit</ins>            | Inherits this property from its parent element                                                                                                          |

## Example list

### Example 1

```html:
<div class="flex">
	<p>Take a look at this example</p>
	<p>
		There are two paragraphs here displayed in a column, with a background
		color.
	</p>
</div>
```

### Example 2

```html:
<div>
	This text is inside a div and
	<p class="inline">this text is in a <b>p</b> tag</p>
</div>
```

### Example 3

```html:
<div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. <p style="display: none">HELLO WORLD!</p> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
</div>
```

### Example 4

```html:
<div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. <p style="display:| block">HELLO WORLD!</p> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
</div>
```

### Example 1

```html:
<div class="flex">
	<p>Take a look at this example</p>
	<p>
		There are two paragraphs here displayed in a column, with a background
		color.
	</p>
</div>
```

### min-width

The <b>width</b> property sets the width of an element.

The <b>width</b> of an element does not include padding, borders, or margins!

Note: The <b>min-width</b> and <b>max-width</b> properties override the <b>width</b> property.

## Example list

### Example 1

```html:
<div class="flex">
	<p>Take a look at this example</p>
	<p>
		There are two paragraphs here displayed in a column, with a background
		color.
	</p>
</div>
```

### max-width

The **max-width** property defines the maximum width of an element.

If the content is larger than the maximum width, it will automatically change the height of the element.

If the content is smaller than the maximum width, the **max-width** property has no effect.

Note: This prevents the value of the width property from becoming larger than max-width. The value of the max-width property overrides the width property.

## Example list

### Example 1

```html:
<div class="max-width">
	<p>Take a look at this example</p>
	<p>
		This is a very long paragraph and since we added a max-width, it takes the
		height as much as this element is and the width is fixed.
	</p>
</div>
```

### max-height

The **max-height** property defines the maximum height of an element.

If the content is larger than the maximum height, it will overflow. How the container will handle the overflowing content is defined by the overflow property.

If the content is smaller than the maximum height, the **max-height** property has no effect.

Note: This prevents the value of the height property from becoming larger than max-height. The value of the max-height property overrides the height property.

## Example list

### Example 1

```html:
	.max-height {
		max-height: 100px;
		background-color: thistle;
	}
```

### min-height

The **min-height** property defines the minimum height of an element.

If the content is smaller than the minimum height, the minimum height will be applied.

If the content is larger than the minimum height, the **min-height** property has no effect.

Note: This prevents the value of the height property from becoming smaller than min-height.

## Example list

### Example 1

```html:
	.min-height {
		min-height: 200px;
		background-color: wheat;
	}
```

@MariaTeo

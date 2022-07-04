# Meet the CSS tags

## Research

**For `border` and `outline` properties - See general/border-and-outline**

<!-- google -->

I did some searches on Google:

[border in css](https://www.google.com/search?q=border+in+css)
and

[border sides in css](https://www.google.com/search?q=border+sides+in+css)
and

And found

<!-- w3 -->

[CSS borders in W3](https://www.w3schools.com/css/css_border.asp)
and

[CSS border-individual sides in W3](https://www.w3schools.com/css/css_border_sides.asp)
and

Also Found

<!-- other -->

[border property](https://www.script-tutorials.com/css-ref/border/)
and

[border-top property](https://www.script-tutorials.com/css-ref/border-top/)
and

[border-right property](https://www.script-tutorials.com/css-ref/border-right/)
and

[border-bottom property](https://www.script-tutorials.com/css-ref/border-bottom/)
and

[border-left property](https://www.script-tutorials.com/css-ref/border-left/)
and

## Notes:

# CSS border

The CSS border properties allow you to specify the style, width, and color of an element's border.

The **border** CSS property is a shorthand property for setting:

- border-width,
- border-style,
- border-color.

Like all shorthand properties, a missing value for one of the longhand properties is set to the corresponding initial value.

<b>Note:</b>

- The border-image can't be set using this shorthand, but can be reset to its initial value, that is none.
- this property only accepts one value for each property, leading to the same border for all four edges.

## Example list

### Examples

```html:
  <style>
    img {
      border: 4px groove forestgreen;
    }

    h1 {
      border: 4px double steelblue;
    }
  </style>
```

<!--  -->

# CSS border-top property, CSS border-right property, CSS border-bottom property & CSS border-left property

In CSS, there are also properties for specifying each of the borders:

- top,
- right,
- bottom,
- left.

The **border-top** CSS property is a shorthand that sets the values of:

- border-top-color,
- border-top-style,
- border-top-width.
  These properties describe the top border of elements.

The **border-right** CSS property is a shorthand that sets the values of:

- border-right-color,
- border-right-style,
- border-right-width.
  These properties describe the right border of elements.

The **border-bottom** CSS property is a shorthand that sets the values of:

- border-bottom-color,
- border-bottom-style,
- border-bottom-width.
  These properties describe the bottom border of elements.

The **border-left** CSS property is a shorthand that sets the values of:

- border-left-color,
- border-left-style,
- border-left-width.
  These properties describe the left border of elements.

## Example list

### Examples

```html:
  <style>
    .border-part-one {
        border-top: 6px solid goldenrod;
        border-right: 4px dotted magenta;
        border-bottom: 12px double maroon;
        border-left: 8px dashed lightseagreen;
      }
  </style>
```

<!--  -->

@iulia-zburlea

# Meet the CSS tags

## Research

**For `margin` properties - See general/margin**

I did some searches on Google:

[margin-bottom css](https://www.google.com/search?q=margin-bottom+css)
and

[margin-top css](https://www.google.com/search?q=margin-top+css)
and

[margin-left css](https://www.google.com/search?q=margin-bottom+css)
and

[margin-right css](https://www.google.com/search?q=margin-right+css)
and

And found

[CSS margin-bottom in W3](https://www.w3schools.com/cssref/pr_margin-bottom.asp)
and

[CSS margin-top in W3](https://www.w3schools.com/cssref/pr_margin-top.asp)
and

[CSS margin-left in W3](https://www.w3schools.com/cssref/pr_margin-left.asp)
and

[CSS margin-right in W3](https://www.w3schools.com/cssref/pr_margin-right.asp)
and

## Notes:

# margin-bottom selector

The **margin-bottom** property sets the bottom margin of an element.

**Note:** Negative values are allowed.

Top and bottom margins of elements are sometimes collapsed into a single margin that is equal to the largest of the two margins.

## Example list

### Example 1

```html:
<style>
	.bottom {
		margin-bottom: 40px;
		border: 1px solid blueviolet;
	}
</style>

<div class="bottom">This text has some bottom margin of <i>40px</i></div>

```

# margin-top selector

The **margin-top** property sets the top margin of an element.

**Note:** Negative values are allowed.

Top and bottom margins of elements are sometimes collapsed into a single margin that is equal to the largest of the two margins.

## Example list

### Example 1

```html:
<style>
	.top {
		margin-top: 50px;
	}

	.both {
		margin: 50px 0;
	}
</style>

<div class="top">This text has some top margin.</div>

<div class="both">
	This text has both top and bottom margin using only one line that looks like
	this: <b> margin: 50px 0;</b>
</div>
```

# margin-left selector

The **margin-left** property sets the left margin of an element.

**Note:** Negative values are allowed.

## Example list

### Example 1

```html:
<style>
	.left {
		margin-left: 50px;
	}

</style>

<div class="left">This text has left margin</div>

```

# margin-right selector

The **margin-right** property sets the right margin of an element.

**Note:** Negative values are allowed.

## Example list

### Example 1

```html:
<style>
	.right {
		margin-right: 50px;
	}

	.right-wrap {
		border: 1px solid cadetblue;
		display: flex;
	}
</style>

<div class="right-wrap">
	<div class="right">This text has right margin</div>
	<div>
		You can see that now, as both these elements are inside a flex element. This
		is not the best practice when it comes to adding gap inbetween elements.
	</div>
</div>
```

@mariateo

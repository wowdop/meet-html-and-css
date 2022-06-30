# Meet the CSS tags

## Research

I did some searches on Google:

[:active css](https://www.google.com/search?q=:active+css)
and

[:hover css](https://www.google.com/search?q=:hover+css)
and

[:visited css](https://www.google.com/search?q=:visited+css)
and

[:link css](https://www.google.com/search?q=:link+css)
and

[disabled selector in css](https://www.google.com/search?q=disabled+selector+in+css)
and

And found

[CSS :active selector in W3](https://www.w3schools.com/cssref/sel_active.asp)
and

[CSS :hover selector in W3](https://www.w3schools.com/cssref/sel_hover.asp)
and

[CSS :visited selector in W3](https://www.w3schools.com/cssref/sel_visited.asp)
and

[CSS :link selector in W3](https://www.w3schools.com/cssref/sel_link.asp)
and

[CSS :disabled selector in W3](https://www.w3schools.com/cssref/sel_disabled.asp)
and

Also Found

[CSS disabled property](https://www.script-tutorials.com/css-ref/disabled/)
and

## Notes:

# :active selector

The **:active** selector is used to select and style the active link.

A link becomes active when you click on it.

**Tip:** The :active selector can be used on all elements, not only links.

**Tip:** Use the <b>:link</b> selector to style links to unvisited pages, the **:visited** selector to style links to visited pages, and the **:hover** selector to style links when you mouse over them.

**Note:** <b>:active</b> MUST come after **:hover** (if present) in the CSS definition in order to be effective!

## Example list

### Example 1

```html:
<style>
	.active:active {
		background-color: brown;
		color: aliceblue;
	}
</style>

<a class="active" href="active-hover-visited.html">:active page</a>

```

# :hover selector

The **:hover** selector is used to select elements when you mouse over them.

**Tip:** The **:hover** selector can be used on all elements, not only on links.

**Tip:** Use the **:link** selector to style links to unvisited pages, the **:visited** selector to style links to visited pages, and the **:active** selector to style the active link.

**Note:** **:hover** MUST come after **:link** and **:visited** (if they are present) in the CSS definition, in order to be effective!

## Example list

### Example 1

```html:
<style>
	.hover:hover {
		color: darkorange;
	}

	.hover:active {
		background-color: yellowgreen;
	}
</style>


<a class="active" href="active-hover-visited.html">:active page</a>
```

# :visited selector

The **:visited** selector is used to select visited links.

**Tip:** Use the **:link** selector to style links to unvisited pages, the **:hover** selector to style links when you mouse over them, and the **:active** selector to style links when you click on them.

Browsers limits the styles that can be set for **a:visited** links, due to security issues.

Allowed styles are:

- color
- background-color
- border-color (and border-color for separate sides)
- outline color
- column-rule-color
- the color parts of fill and stroke

All other styles are inherited from **a:link**.

## Example list

### Example 1

```html:
<style>
	.visited:visited {
		color: salmon;
	}
</style>


<a class="visited" href="#">
	Check out :disabled, :enabled and :checked properties
</a>
```

# :link selector

The **:hover** selector is used to select elements when you mouse over them.

**Tip:** The **:hover** selector can be used on all elements, not only on links.

**Tip:** Use the **:link** selector to style links to unvisited pages, the **:visited** selector to style links to visited pages, and the **:active** selector to style the active link.

**Note:** **:hover** MUST come after **:link** and **:visited** (if they are present) in the CSS definition, in order to be effective!

## Example list

### Example 1

```html:
<style>
.link:link {
		background-color: rgb(176, 232, 176);
	}

	.link:hover {
		background-color: rgb(35, 176, 35);
		color: white;
	}

	.link:active {
		background-color: coral;
		color: bisque;
	}
</style>


<a class="link" href="#"> I am a link</a>

```

# :disabled selector

The <mark>**:disabled**</mark> selector matches every disabled element.
<b>Note:</b> The ** :disabled ** selector is **mostly used** on form elements.

An element is disabled if it can't:

- be activated: selected, clicked on or accept text input,
- accept focus.

The element also has an enabled state, in which it can be activated or accept focus.

# :enabled selector

The <mark>**:enabled**</mark> selector matches every enabled element.
<b>Note:</b>
The ** :enabled ** selector is mostly used on form elements.

An element is disabled if it can:

- be activated: selected, clicked on or accept text input,
- accept focus.

The element also has a disab led state, in which it can't be activated or accept focus.

# :checked selector

The <mark>**:checked**</mark> selector represents any element that is checked or toggled to an "ON" state:

- radio: `<input type="radio">` (represents all radio buttons on the page that are checked),
- checkbox: `<input type="checkbox">` (represents all radio buttons on the page that are checked),
- option: `<option> in a <select>`(represents all select's options on the page that are selected).

<b>Note:</b>
The user can change this state by clicking on the element, or selecting a different value, in which case the **:checked** pseudo-class no longer applies to this element, but will apply to the relevant one.

aamna defe

## Example list

### Example 1

```html:

```

Visit the <ins>**`../css-selectors/index.html`**</ins> file to find out more about the <ins>**`CSS`**</ins> style tags that tell the website how to display the code written inside the HTML page.

### Example 2

```html:

```

Visit the <ins>**`../css-selectors/index.html`**</ins> file to find out more about the <ins>**`CSS`**</ins> style tags that tell the website how to display the code written inside the HTML page.
@iulia-zburlea
@mariateo

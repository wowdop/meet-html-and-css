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

[:first-child css](https://www.google.com/search?q=:first-child+css)
and

[:nth-child() css](<https://www.google.com/search?q=:nth-child()+css>)
and

[:first-of-type css](https://www.google.com/search?q=%3Afirst-of-type+css)
and

[:only-of-type css](https://www.google.com/search?q=%3Aonly-of-type+css)
and

[:nth-of-type css](https://www.google.com/search?q=%3Anth-of-type+css)
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

[CSS :first-child selector in W3](https://www.w3schools.com/cssref/sel_firstchild.asp)
and

[CSS :nth-child() selector in W3](https://www.w3schools.com/cssref/sel_nth-child.asp)
and

[CSS :first-of-type selector in W3](https://www.w3schools.com/cssref/sel_first-of-type.asp)
and

[CSS :only-of-type selector in W3](https://www.w3schools.com/cssref/sel_only-of-type.asp)
and

[CSS :nth-of-type selector in W3](https://www.w3schools.com/cssref/sel_nth-of-type.asp)
and

Also Found

[CSS disabled property](https://www.script-tutorials.com/css-ref/disabled/)
and

[CSS enabled property](https://www.script-tutorials.com/css-ref/enabled/)
and

[CSS checked property](https://www.script-tutorials.com/css-ref/checked/)
and

[CSS :first-of-type property](https://www.script-tutorials.com/css-ref/first-of-type/)
and

[CSS :only-of-type property](https://www.script-tutorials.com/css-ref/only-of-type/)
and

[CSS :nth-of-type property](https://www.script-tutorials.com/css-ref/nth-of-type/)
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

# ::before selector

The **::before** selector inserts something before the content of each selected element(s).

Use the content property to specify the content to insert.

Use the **::after** selector to insert something after the content.

## Example list

### Example 1

```html:
<style>
	.before::before {
		content: ' ';
		display: block;
		position: absolute;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: green;
		left: 10px;
	}

	.before {
		padding-left: 16px;
	}
</style>

<div class="before">
	I will add a circle using the <b>::before</b> property.
</div>
```

# ::after selector

The **::after** selector inserts something after the content of each selected element(s).

Use the content property to specify the content to insert.

Use the **::before** selector to insert something before the content.

## Example list

### Example 1

```html:
<style>
	.after::after {
		content: 'REMEMBER ME';
		background-color: yellow;
		color: red;
	}
</style>

<div class="after">
	This is a reminder, so after me it will be some colourful text to express
	that.
</div>
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

## Example list for the **:disabled** & **:enabled** properties

### Example

```html & css:
<style>
	input:enabled {
		background-color: cornsilk;
	}

	input:disabled {
		background-color: paleturquoise;
	}

	... button:enabled {
		background-color: green;
	}

	button:disabled {
		background-color: red;
	}
</style>
...
```

```
	<form action="">
			First Name:
			<input type="text" value="Zuper" />
			<br />

			Last Name:
			<input type="text" value="Human" />
			<br />

			Country:
			<input type="text" value="Imagination Country" disabled />
			<br />

			Password:
			<input type="password" name="psw" value="type your password" disabled />
			<br />

			E-mail:
			<input type="email" name="user-email" value="email@gmail.com" disabled />
		</form>
```

Visit the <ins>**`../css-selectors/disabled-enabled-checked.html`**</ins> file to find out more about the <ins>**`CSS`**</ins> style properties that tell the website how to display the code written inside the HTML page.

# :checked selector

The <mark>**:checked**</mark> selector represents any element that is checked or toggled to an "ON" state:

- radio: `<input type="radio">` (represents all radio buttons on the page that are checked),
- checkbox: `<input type="checkbox">` (represents all radio buttons on the page that are checked),
- option: `<option> in a <select>`(represents all select's options on the page that are selected).

<b>Note:</b>
The user can change this state by clicking on the element, or selecting a different value, in which case the **:checked** pseudo-class no longer applies to this element, but will apply to the relevant one.

## Example list for the **:checked** property

### Example

```html & css:
<style>
	input:checked {
		height: 15px;
		width: 15px;
	}
</style>
```

```html:
<form action="">
	Female
	<input type="radio" checked="checked" name="gender" value="female" />

	Male
	<input type="radio" checked="checked" name="gender" value="male" />

	Others
	<input type="radio" checked="checked" name="gender" value="Others" />
	<br />
	<p>Select the languages you speak/understand:</p>
	<input type="checkbox" checked="checked" name="language" value="English" />
	I am speaking English.

	<br />

	<input type="checkbox" checked="checked" name="language" value="French" />
	Je parle Française.
	<br />

	<input type="checkbox" checked="checked" name="language" value="Italian" />
	Io parlo Italiano.
</form>
```

# :first-child selector

The **:first-child** selector is used to select the specified selector, only if it is the first child of its parent.

## Example list

### Example 1

```html:
<style>
	p:first-child {
		background-color: seagreen;
		color: aliceblue;
	}
</style>

  <div>
    <p>Here lies some text</p>
    <p>Being spread across</p>
    <p>Multiple paragraphs</p>
    <p>Only the first child has style.</p>
  </div>
```

Visit the <ins>**`../css-selectors/disabled-enabled-checked.html`**</ins> file to find out more about the <ins>**`CSS`**</ins> style properties that tell the website how to display the code written inside the HTML page.

<!--  -->

# :first-of-type selector

The **:first-of-type** selector represents the first sibling of its type in the list of children of its parent element.

The **:first-of-type** selector matches every element that is the first child, of a particular type, of its parent.

<b>Note:</b> This is the same as :nth-of-type(1).

## Example list

### Example

```html:

<style>
	p:first-of-type {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 30px;
		color: deeppink;
		background-color: greenyellow;
	}

	div:first-of-type {
		background-color: yellow;
	}
</style>

<div>
	<p>The Boy Who Cried Wolf</p>
	<p>The Golden Touch</p>
	<p>The Fox and the Grapes</p>
	<p>The Proud Rose</p>
	<p>THe Milkmade and Her Pail</p>
	<p>A Wise Old Owl</p>
</div>

```

Visit the <ins>**`../css-selectors/first-only-nth-of-type.html`**</ins> file to find out more about the <ins>**`CSS`**</ins> style properties that tell the website how to display the code written inside the HTML page.

# :only-of-type selector

The **:only-of-type** selector selector represents any element that has no siblings of the given type.

The **:only-of-type** selector matches every element that is the only child of its type, of its parent.

## Example list

### Example

```html:
<style>
	h1:only-of-type,
	p:only-of-type {
		color: mediumspringgreen;
		background-color: chocolate;
	}
</style>

<h1>Selectors sha la la</h1>

<div>
	<p>The Golden Egg</p>
</div>

```

Visit the <ins>**`../css-selectors/first-only-nth-of-type.html`**</ins> file to find out more about the <ins>**`CSS`**</ins> style properties that tell the website how to display the code written inside the HTML page.

# :nth-of-type selector

The **:nth-of-type(n)** selector matches every element that is the nth child, of the same type (tag name), of its parent.

<b>n</b> can be a number, a keyword (odd or even), or a formula (like an + b).

<b>Note:</b> Look at the :nth-child() selector to select the element that is the nth child, regardless of type, of its parent.

This is a more flexible and useful selector if you want to ensure you're selecting the same type of tag no matter where it is inside the parent element, or what other different tags appear before it.

## Example list

### Example

```html:
<style>
	div:nth-of-type(3) {
		background-color: rgb(95, 142, 216);
		color: white;
	}

	li:nth-of-type(3) {
		background-color: black;
		color: rgb(81, 180, 210);
	}

	:nth-of-type(4) {
		background-color: rgba(113, 47, 255, 0.843);
		color: aliceblue;
	}
</style>

```

Visit the <ins>**`../css-selectors/first-only-nth-of-type.html`**</ins> file to find out more about the <ins>**`CSS`**</ins> style properties that tell the website how to display the code written inside the HTML page.

<!--  -->

@iulia-zburlea
@mariateo

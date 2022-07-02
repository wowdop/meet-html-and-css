# Meet the CSS tags

## Research

<!-- google -->

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

[:only-child css](https://www.google.com/search?q=:only-child+css)
and

[:nth-child() css](<https://www.google.com/search?q=:nth-child()+css>)
and

[:nth-last-child() css](<https://www.google.com/search?q=:nth-last-child()+css>)
and

[:last-child css](<https://www.google.com/search?q=:last-child()+css>)
and

[:first-of-type css](https://www.google.com/search?q=%3Afirst-of-type+css)
and

[:only-of-type css](https://www.google.com/search?q=%3Aonly-of-type+css)
and

[:nth-of-type css](https://www.google.com/search?q=%3Anth-of-type+css)

and
[:nth-of-type css](https://www.google.com/search?q=%3Anth-of-type+css)

and
[:nth-last-of-type css](https://www.google.com/search?q=%3Anth-last-of-type+css)

and
[:last-of-type css](https://www.google.com/search?q=%3Alast-of-type+css)

and
[:first-letter css](https://www.google.com/search?q=%3Afirst-letter+css)

and
[:focus css](https://www.google.com/search?q=%3Afocus+css)

and
[:root css](https://www.google.com/search?q=%3Aroot+css)

and
[:selection css](https://www.google.com/search?q=%3Aselection+css)

and
[:empty css](https://www.google.com/search?q=%3Aempty+css)

and
[:target css](https://www.google.com/search?q=%3Atarget+css)

and
[:lang css](https://www.google.com/search?q=%3Alang+css)

and
[:not() css](<https://www.google.com/search?q=%3Anot()+css>)

And found

<!-- w3 -->

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

[CSS :only-child selector in W3](https://www.w3schools.com/cssref/sel_only-childsp)
and

[CSS :nth-last-child() selector in W3](https://www.w3schools.com/cssref/sel_nth-last-child.asp)
and

[CSS :last-child selector in W3](https://www.w3schools.com/cssref/sel_last-child.asp)
and

[CSS :first-of-type selector in W3](https://www.w3schools.com/cssref/sel_first-of-type.asp)
and

[CSS :only-of-type selector in W3](https://www.w3schools.com/cssref/sel_only-of-type.asp)
and

[CSS :nth-of-type() selector in W3](https://www.w3schools.com/cssref/sel_nth-of-type.asp)
and

[CSS :nth-last-of-type() selector in W3](https://www.w3schools.com/cssref/sel_nth-last-of-type.asp)
and

[CSS :last-of-type selector in W3](https://www.w3schools.com/cssref/sel_last-of-type.asp)
and

[CSS :first-letter selector in W3](https://www.w3schools.com/cssref/sel_first-letter.asp)
and

[CSS :focus selector in W3](https://www.w3schools.com/cssref/sel_focus.asp)
and

[CSS :root selector in W3](https://www.w3schools.com/cssref/sel_root.asp)
and

[CSS :selection selector in W3](https://www.w3schools.com/cssref/sel_selection.asp)
and

[CSS :s=empty selector in W3](https://www.w3schools.com/cssref/sel_s=empty.asp)
and

[CSS :target selector in W3](https://www.w3schools.com/cssref/sel_target.asp)
and

[CSS :lang selector in W3](https://www.w3schools.com/cssref/sel_lang.asp)
and

[CSS :not() selector in W3](<https://www.w3schools.com/cssref/sel_not().asp>)
and

Also Found

<!-- other -->

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
[CSS :nth-last-of-type property](https://www.script-tutorials.com/css-ref/nth-last-of-type/)

and
[CSS :last-of-type property](https://www.script-tutorials.com/css-ref/last-of-type/)

and
[CSS :first-letter](https://www.script-tutorials.com/css-ref/first-letter/)

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

The **:disabled** selector matches every disabled element.
<b>Note:</b> The ** :disabled ** selector is **mostly used** on form elements.

An element is disabled if it can't:

- be activated: selected, clicked on or accept text input,
- accept focus.

The element also has an enabled state, in which it can be activated or accept focus.

# :enabled selector

The **:enabled** selector matches every enabled element.
<b>Note:</b>
The ** :enabled ** selector is mostly used on form elements.

An element is disabled if it can:

- be activated: selected, clicked on or accept text input,
- accept focus.

The element also has a disab led state, in which it can't be activated or accept focus.

## Example list for the **:disabled** & **:enabled** properties

### Example

```html:
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

The **:checked** selector represents any element that is checked or toggled to an "ON" state:

- radio: `<input type="radio">` (represents all radio buttons on the page that are checked),
- checkbox: `<input type="checkbox">` (represents all radio buttons on the page that are checked),
- option: `<option> in a <select>`(represents all select's options on the page that are selected).

<b>Note:</b>
The user can change this state by clicking on the element, or selecting a different value, in which case the **:checked** pseudo-class no longer applies to this element, but will apply to the relevant one.

## Example list for the **:checked** property

### Example

```html:
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

# :only-child selector

The **:only-child** selector matches every element that is the only child of its parent

## Example list

### Example 1

```html:
<style>
	.only-child:only-child {
		background-color: olive;
		color: wheat;
	}
</style>

<div>
	<p class="only-child">We are practicing CSS selectors.</p>
	<p class="only-child">using <b>:only-child</b> selector</p>
	<p class="only-child">Let's see how it works</p>
	<p class="only-child">There are 4 children in this parent</p>
</div>

<br />

<div>
	<p class="only-child">This is only one child, in this parent.</p>
</div>

```

# :nth-child() selector

The **:nth-child(n)** selector matches every element that is the nth child of its parent.

<i>n</i> can be a number, a keyword (odd or even), or a formula (like an + b).

**Tip:** Look at the **:nth-of-type()** selector to select the element that is the **nth** child, of the same type (tag name), of its parent.

**Odd** and **even** are keywords that can be used to match child elements whose index is **odd** or **even** (the index of the first child is 1).

## Example list

### Example 1

```html:
<style>
  .nth-child:nth-child(1) {
		background-color: tomato;
		color: yellow;
	}

	.odd:nth-child(odd) {
		background-color: royalblue;
		color: whitesmoke;
	}
</style>

  <div>
    <p class="nth-child">
      This is child number 1 that will be selected and styled in CSS using the
      <i><b>:nth-child</b></i> CSS selector.
    </p>
    <p class="nth-child">This is child number 2</p>
    <p class="nth-child">This is child number 3</p>
    <p class="nth-child">This is child number 4</p>
  </div>

  <div>
    <p class="odd">There are more children here</p>
    <p class="odd">And only the odd number</p>
    <p class="odd">Has a style in CSS</p>
    <p class="odd">It works the same for the even number</p>
    <p class="odd">If you use the selector: <b>:nth-child(even)</b>.</p>
  </div>
```

# :last-child selector

The **:last-child** selector matches every element that is the last child of its parent.

**Tip:** **p:last-child** is equal to **p:nth-last-child(1)**.

## Example list

### Example 1

```html:
<style>
	.last-child:last-child {
		background-color: darkmagenta;
		color: chartreuse;
	}
</style>

<div>
	<p class="last-child">
		The first paragraph gets the style from <b>:first-child</b>
	</p>
	<p class="last-child">There are multiple paragraphs here</p>
	<p class="last-child">The last one will have</p>
	<p class="last-child">Different background color and text color</p>
</div>

```

# :nth-las-child() selector

The **:nth-last-child(n)** selector matches every element that is the **nth** child, regardless of type, of its parent, counting from the last child.

<i>n</i> can be a number, a keyword, or a formula.

**Tip:** Look at the **:nth-last-of-type()** selector to select the element that is the **nth** child, of a specified type, of its parent, counting from the last child.

## Example list

### Example 1

```html:
<style>
	.nth-last-child:nth-last-child(3) {
		background-color: powderblue;
		color: indigo;
	}
</style>

<div>
	<p class="nth-last-child">This is an example</p>
	<p class="nth-last-child">Using <b>:nth-last-child</b></p>
	<p class="nth-last-child">There are multiple children</p>
	<p class="nth-last-child">And the style will be different</p>
	<p class="nth-last-child">Counting from the last child</p>
	<p class="nth-last-child">Look at this</p>
	<p class="nth-last-child">This is the result</p>
</div>

```

Visit the <ins>**`../css-selectors/first-child-only-child-nth-child-last-child-nth-last-child.html`**</ins> file to find out more about the <ins>**`CSS`**</ins> style properties that tell the website how to display the code written inside the HTML page.

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

# :nth-of-type() selector

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

# :nth-last-of-type() selector

The **:nth-last-of-type()** selector matches every element that is the **nth child**, of a particular type, of its parent, counting from the last child.

<b>n</b> can be a number, a keyword (odd or even), or a formula.

<b>Note:</b> Look at the :nth-last-child() selector to select the element that is the nth child, regardless of type, of its parent, counting from the last child.

## Example list

### Example

```html:
<style>

	p:nth-last-of-type(2) {
		background-color: rgb(221, 33, 33);
	}

	p:nth-last-of-type(odd) {
		background-color: rgb(206, 201, 201);
	}

	p:nth-last-of-type(even) {
		background-color: rgb(219, 247, 195);
	}
</style>

```

Visit the <ins>**`../css-selectors/first-only-nth-of-type.html`**</ins> file to find out more about the <ins>**`CSS`**</ins> style properties that tell the website how to display the code written inside the HTML page.

# :last-of-type selector

The **:last-of-type** selector matches every element that is the last child, of a particular type, of its parent.

<b>Note:</b> This is the same as :nth-last-of-type().

This is a more flexible and useful selector if you want to ensure you're selecting the same type of tag no matter where it is inside the parent element, or what other different tags appear before it.

## Example list

### Example

```html:
<style>
p:last-of-type,
	div:last-of-type {
		border-width: 4px;
		border-style: double;
		border-color: red;
	}

</style>

```

Visit the <ins>**`../css-selectors/first-only-nth-of-type.html`**</ins> file to find out more about the <ins>**`CSS`**</ins> style properties that tell the website how to display the code written inside the HTML page.

<!-- 1st letter. 1st line-->

# :first-letter selector

The **:first-letter** selector is used to add a style to the first letter of the specified selector.

The **:first-letter** selects the first letter of the first line of a block.

<b>Note: </b> The following properties can be used with :first-letter:

    - font properties:
    	- font,
    	- font-style,
    	- font-variant,
    	- font-weight,
    	- font-size,
    	- line-height,
    	- font-family.
    - color properties
    - background properties:
    	- background-color,
    	- background-image,
    	- background-position,
    	- background-repeat,
    	- background-size,
    	- background-attachment.
    - margin properties:
    	- margin,
    	- margin-top,
    	- margin-right,
    	- margin-bottom,
    	- margin-left.
    - padding properties
    	- padding,
    	- padding-top,
    	- padding-right,
    	- padding-bottom,
    	- padding-left.
    - border properties:
    	- border,
    	- border-style,
    	- border-color,
    	- border-width.
    - text-decoration,
    - text-shadow,
    - text-transform,
    - letter-spacing,
    - word-spacing
    - line-height,
    - float,
    - vertical-align (only if float is none)
    - clear.

## Example list

### Example

```html:
<style>
	p::first-letter {
			font-family: 'Smooch', cursive;
			font-size: 16px;
			color: white;
			font-weight: bold;
			border-width: 2px;
			border-color: brown;
			border-style: solid;
			background-color: blue;
		}
</style>

```

Visit the <ins>**`../css-selectors/first-letter-and-line.html`**</ins> file to find out more about the <ins>**`CSS`**</ins> style properties that tell the website how to display the code written inside the HTML page.

# :first-line selector

The **:first-line** selector is used to add a style to the first line of the specified selector.

The **:first-line** selector applies styles only to the first line of an element.

A **first line** has only meaning in a block-container box, therefore the ::first-line pseudo-element has only an effect on elements with a display value of block, inline-block, table-cell or table-caption. In all other cases, ::first-line has no effect.

<b>Note: </b> The following properties can be used with :first-line:

    - font properties:

    	- font,
    	- font-style,
    	- font-variant,
    	- font-weight,
    	- font-size,
    	- line-height,
    	- font-family.
    - color properties
    - background properties:
    			- background-color,
    			- background-image,
    			- background-position,
    			- background-repeat,
    			- background-size,
    			- background-attachment.
    - word-spacing
    - letter-spacing
    - text-decoration
    - text-shadow
    - text-transform
    - line-height
    - clear.

## Example list

### Example

```html:
<style>
	p::first-line {
		font-family: 'La Belle Aurore', cursive;
		font-size: 14px;
		color: rgb(2, 2, 2);
		font-weight: lighter;
		word-spacing: 4px;
		background-color: rgb(191, 191, 216);
	}
</style>

```

Visit the <ins>**`../css-selectors/first-letter-and-line.html`**</ins> file to find out more about the <ins>**`CSS`**</ins> style properties that tell the website how to display the code written inside the HTML page.

# :root selector

The **:root** selector matches the document's root element.

In **HTML**, the root element is always the html element.

## Example list

### Example

```html:
<style>
	:root {
		background-color: darkblue;
		color: mintcream;
	}
</style>
```

# ::selection selector

The **::selection** selector matches the portion of an element that is selected by a user.

Only a few CSS properties can be applied to the **::selection** selector: color, background, cursor, and outline.

## Example list

### Example

```html:
<style>
	.selection::selection {
		color: white;
		background-color: brown;
	}
</style>

<p class="selection">Select this whole text and watch how it all changes.</p>
```

# :focus selector

The **:focus** selector is used to select the element that has focus.

**Tip:** The **:focus** selector is allowed on elements that accept keyboard events or other user inputs.

## Example list

### Example

```html:
<style>
	.focus:focus {
		background-color: brown;
		color: aquamarine;
		border-radius: 4px;
	}
</style>

<button class="focus">
	This is a button with <b>:focus</b> selector style
</button>
```

# :empty selector

The **:empty** selector matches every element that has no children (including text nodes).

## Example list

### Example

```html:
<style>
	.empty:empty {
		background-color: brown;
		height: 30px;
	}
</style>

<div class="empty"></div>
```

# :target selector

URLs with an # followed by an anchor name link to a certain element within a document. The element being linked to is the target element.

The **:target** selector can be used to style the current active target element.

## Example list

### Example

```html:
<style>
	:target {
		border: 2px solid #88e9a0;
		background-color: #d3ccee;
	}
</style>

<table border="2" cellpadding="10" cellspacing="10">
	<tr>
		<td>
			<p><a href="#article1">Jump to Article content 1</a></p>
		</td>
		<td>
			<p><a href="#article2">Jump to Article content 2</a></p>
		</td>
	</tr>
	<tr>
		<td>
			<p id="article1"><b>Article content 1...</b></p>
		</td>
		<td>
			<p id="article2"><b>Article content 2...</b></p>
		</td>
	</tr>
</table>
```

# :lang() selector

The **:lang()** selector is used to select elements with a lang attribute with the specified value.

**Note:** The lang attribute value is most often a two-letter language code, like lang="fr" (for French), or two language codes combined, like lang="fr-ca" (for Canadian French).

## Example list

### Example

```html:
<style>
	p:lang(ro) {
		background-color: blue;
		color: yellow;
		border: 2px solid red;
	}

	p:lang(it) {
		background-color: green;
		color: white;
		border: 2px solid blue;
	}
</style>

<p>Look here!</p>

<p lang="ro">Vezi aici!</p>

<p lang="it">Vedere qui!</p>
```

# :not() selector

The **:not(selector)** selector matches every element that is NOT the specified element/selector.

## Example list

### Example

```html:
<style>
	p {
  color: #000000;
	}

	:not(p) {
		color: #ff0000;
	}
</style>

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

<div>This is some text in a div element.</div>
```

@iulia-zburlea
@mariateo

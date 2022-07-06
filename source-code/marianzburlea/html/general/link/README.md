# the **style** html tag

## Research

I did some research on Google,

[html link tag w3](https://www.google.com/search?q=link+html+tag+example+w3)

and found

[HTML Link tag](https://www.w3schools.com/tags/tag_link.asp)

[html link tag mdn](https://www.google.com/search?q=link+html+tag+example+mdn)

and found

[HTML MDn link tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)

## Notes

The `<link>` HTML element specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.

`<link>` tag goes inside the `<head>` tag.

### Simple example

```html:
<link href="main.css" rel="stylesheet">
```

This simple example provides the path to the stylesheet inside an **href** attribute, and a **rel** attribute with a value of stylesheet. The **rel** stands for "relationship", and is probably one of the key features of the `<link>` element — the value denotes how the item being linked to is related to the containing document.

### Attributes

| Attribute                 | Value                                           |
| ------------------------- | ----------------------------------------------- |
| <ins>as</ins>             | audio, document, embed,                         |
|                           | fetch, font, image, object,                     |
|                           | script, style, track, video, worker             |
| <ins>crossorigin</ins>    | anonymous, use-credentials                      |
| <ins>disabled</ins>       | boolean                                         |
| <ins>fetchpriority</ins>  | high, low, auto                                 |
| <ins>href</ins>           | _URL_                                           |
| <ins>hreflang</ins>       | https://datatracker.ietf.org/doc/html/rfc5646   |
| <ins>imagesizes</ins>     | auto                                            |
| <ins>imagesrcset</ins>    | _URL_                                           |
| <ins>media</ins>          |                                                 |
| <ins>prefetch</ins>       |                                                 |
| <ins>referrerpolicy</ins> | no-referrer, no-referrer-when-downgrade, origin |
|                           | origin-when-cross-origin, unsafe-url            |
| <ins>rel</ins>            | no-referrer, no-referrer-when-downgrade, origin |
| <ins>sizes</ins>          | pixels                                          |
| <ins>title</ins>          | word                                            |
| <ins>type</ins>           | word                                            |
| <ins>methods </ins>       |                                                 |
| <ins>target </ins>        | word                                            |
| <ins>type</ins>           | word                                            |

### Usage

- including a stylesheet
- providing alternative stylesheets
- providing icons for different usage contexts
- conditionally loading resources with media queries
- stylesheet load events
- Preload examples

### Link types

In HTML, link types indicate the relationship between two documents, in which one links to the other using an <a>, <area>, <form>, or <link> element.

For more details, please take a look at the website below:
https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types

## Example list

### Example 1

```html:
<link rel="stylesheet" href="style-experiment-1.css" />
```

### Example 1

```html:
<link rel="icon" type="image/png" href="/public/image/logo-rocket-plume.svg" />
```

### Example 1

```html:
<head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia" />

	<style>
		body {
			font-family: 'Sofia', sans-serif;
		}
	</style>
</head>
```

### Example 1

````html:
<link
	href="mobile.css"
	rel="stylesheet"
	media="screen and (max-width: 600px)"
/>
```

### Example 1

```html:
<link
	rel="stylesheet"
	type="text/css"
	href="style-experiment-5.css"
	hreflang="en-us"
/>
````

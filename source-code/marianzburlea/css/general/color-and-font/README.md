# Meet the CSS tags

## Research

**For `color` and `font` properties - See general/color-and-font**

I did some searches on Google:

[color-profile css](https://www.google.com/search?q=color-profile+css)
and

[opacity css](https://www.google.com/search?q=opacity+css)
and

[rendering-intent css](https://www.google.com/search?q=rendering-intent+css)
and

[font css](https://www.google.com/search?q=font+css)
and

[font-family css](https://www.google.com/search?q=font-family+css)
and

[font-style css](https://www.google.com/search?q=font-style+css)
and

[font-variant css](https://www.google.com/search?q=font-variant+css)
and

[@font-face css](https://www.google.com/search?q=@font-face+css)
and

[font-size-adjust css](https://www.google.com/search?q=font-size-adjust+css)
and

[font-size css](https://www.google.com/search?q=font-size+css)
and

[font-stretch css](https://www.google.com/search?q=font-stretch+css)
and

And found

[CSS Opacity / Transparency in W3](https://www.w3schools.com/css/css_image_transparency.asp)
and

[font property](https://www.w3schools.com/css/css_font.asp)
and

[font-family property](https://www.w3schools.com/cssref/pr_font_font-family.asp)
and

[font-style property](https://www.w3schools.com/cssref/pr_font_font-style.asp)
and

[font-variant property](https://www.w3schools.com/cssref/pr_font_font-variant.asp)
and

[@font-face property](https://www.w3schools.com/cssref/css3_pr_font-face_rule.asp)
and

[font-size-adjust property](https://www.w3schools.com/cssref/css3_pr_font-size-adjust.asp)
and

[font-size property](https://w3schools.com/cssref/pr_font_font-size.asp)
and

[font-stretch property](https://www.w3schools.com/cssref/css3_pr_font-stretch.asp)
and

Also Found

[color-profile property](https://www.w3.org/TR/css3-iccprof#icc-color)
and

[color-profile property](https://www.script-tutorials.com/css-ref/color-profile/)
and

[opacity property](https://www.script-tutorials.com/css-ref/opacity/)
and

[rendering-intent property](https://www.script-tutorials.com/css-ref/rendering-intent/)
and

[rendering-intent property](https://www.cssportal.com/css-properties/rendering-intent.php/)
and

## Notes:

# font selector

Choosing the right font has a huge impact on how the readers experience a website.

The right font can create a strong identity for your brand.

Using a **font** that is easy to read is important. The **font** adds value to your text. It is also important to choose the correct color and text size for the font.

**In CSS there are five generic font families:**

- Serif fonts have a small stroke at the edges of each letter. They create a sense of formality and elegance.
- Sans-serif fonts have clean lines (no small strokes attached). They create a modern and minimalistic look.
- Monospace fonts - here all the letters have the same fixed width. They create a mechanical look.
- Cursive fonts imitate human handwriting.
- Fantasy fonts are decorative/playful fonts.

| Generic Font Family | Examples of Font Names              |
| ------------------- | ----------------------------------- |
| Serif               | Times New Roman, Georgia, Garamond  |
| Sans-serif          | Arial, Verdana, Helvetica           |
| Monospace           | Courier New, Lucida Console, Monaco |
| Cursive             | Brush Script MT,Lucida, Handwriting |
| Fantasy             | Copperplate, Papyrus                |

In CSS, we use the font-family property to specify the font of a text.

# font-family selector

**Note:** If the font name is more than one word, it must be in quotation marks, like: **"Times New Roman"**.

**Tip:** The **font-family** property should hold several font names as a "fallback" system, to ensure maximum compatibility between browsers/operating systems. Start with the font you want, and end with a generic family (to let the browser pick a similar font in the generic family, if no other fonts are available). The font names should be separated with comma.

The **font-family** property specifies the font for an element.

The **font-family** property can hold several font names as a "fallback" system. If the browser does not support the first font, it tries the next font.

## There are two types of font family names:

- family-name - The name of a font-family, like "times", "courier", "arial", etc.
- generic-family - The name of a generic-family, like "serif", "sans-serif", "cursive", "fantasy", "monospace".

Start with the font you want, and always end with a generic family, to let the browser pick a similar font in the generic family, if no other fonts are available.

**Note:** Separate each value with a comma.

**Note:** If a font name contains white-space, it must be quoted. Single quotes must be used when using the "style" attribute in HTML.

## Example list

### Example 1

```html:
<style>
	.serif {
		font-family: serif;
	}

	.sans-serif {
		font-family: sans-serif;
	}

	.monospace {
		font-family: monospace;
	}

	.cursive {
		font-family: cursive;
	}

	.fantasy {
		font-family: fantasy;
	}
</style>
```

# font-style selector

The **font-style** property specifies the font style for a text.

| Value   | Description                                               |
| ------- | --------------------------------------------------------- |
| normal  | The browser displays a normal font style. This is default |
| italic  | The browser displays an italic font style                 |
| oblique | The browser displays an oblique font style                |
| initial | Sets this property to its default value.                  |
| inherit | Inherits this property from its parent element.           |

## Example list

### Example 1

```html:
<style>
	.italic {
		font-style: italic;
	}

	.oblique {
		font-style: oblique;
	}
</style>
```

# font-variant selector

In a **small-caps** font, all lowercase letters are converted to uppercase letters. However, the converted uppercase letters appears in a smaller font size than the original uppercase letters in the text.

The **font-variant** property specifies whether or not a text should be displayed in a small-caps font.

| Value      | Description                                         |
| ---------- | --------------------------------------------------- |
| normal     | The browser displays a normal font. This is default |
| small-caps | The browser displays a small-caps font              |
| initial    | Sets this property to its default value.            |
| inherit    | Inherits this property from its parent element.     |

## Example list

### Example 1

```html:
<style>
	.small-caps {
		font-variant: small-caps;
	}
</style>
```

# @font-face selector

With the **@font-face rule**, web designers do not have to use one of the "web-safe" fonts anymore.

In the **@font-face** rule you must first define a name for the font (e.g. myFirstFont), and then point to the font file.

To use the font for an HTML element, refer to the name of the font (myFirstFont) through the **font-family** property.

You need to download a file with a font that you desire and place it usually in **public/font** .

## Example list

### Example 1

```html:
<style>
	@font-face {
		font-family: Branda;
		src: url('../../../../public/font/Branda-yolq.ttf');
	}

	.branda {
		font-family: Branda;
	}
</style>

<div class="branda">
	This is some text that is styled using <b>@font-face</b>
</div>
```

# font-size-adjust selector

The **font-size-adjust** property gives you better control of the font size when the first selected font is not available.

When a font is not available, the browser uses the second specified font. This could result in a big change for the font size. To prevent this, use the **font-size-adjust** property.

All fonts have an **"aspect value"** which is the **size-difference** between the lowercase letter "x" and the uppercase letter "X".

When the browser knows the "aspect value" for the first selected font, the browser can figure out what **font-size** to use when displaying text with the second choice font.

## Property Values

| Value   | Description                                     |
| ------- | ----------------------------------------------- |
| number  | Defines the aspect value to use                 |
| none    | Default value. No font size adjustment          |
| initial | Sets this property to its default value.        |
| inherit | Inherits this property from its parent element. |

## Example list

### Example 1

```html:
<style>
  <style>
	.adjust {
		font-family: Verdana;
		font-size-adjust: 2%;
	}
</style>

<div class="adjust">I want to adjust the size of this text to 2%</div>

```

# font-size selector

The **font-size** property sets the size of a font.

| Value    | Description                                                       |
| -------- | ----------------------------------------------------------------- |
| medium   | Sets the font-size to a medium size. This is default              |
| xx-small | Sets the font-size to an xx-small size                            |
| x-small  | Sets the font-size to an extra small size                         |
| small    | Sets the font-size to a small size                                |
| large    | Sets the font-size to a large size                                |
| x-large  | Sets the font-size to an extra large size                         |
| xx-large | Sets the font-size to an xx-large size                            |
| smaller  | Sets the font-size to a smaller size than the parent element      |
| larger   | Sets the font-size to a larger size than the parent element       |
| length   | Sets the font-size to a fixed size in px, cm, etc.                |
| %        | Sets the font-size to a percent of the parent element's font size |
| initial  | Sets this property to its default value.                          |
| inherit  | Inherits this property from its parent element.                   |

## Example list

### Example 1

```html:
<style>
	.number {
		font-size: 16px;
	}

	.large {
		font-size: large;
	}

	.percentage {
		font-size: 50%;
	}
</style>

<div class="number">The font size is a number</div>
<div class="large">The font size is set to large</div>
<div class="percentage">The font size is a percentage</div>

```

# font-stretch selector

The **font-stretch** property allows you to make text narrower (condensed) or wider (expanded).

**Note:** Some fonts provide additional faces; condensed faces and expanded faces. For these fonts, you can use the **font-stretch** property to select a normal, condensed, or expanded font face.

**Note:** This property has no effect if the selected font does not offer condensed or expanded faces!

## Property Values

| Value           | Description                                                                       |
| --------------- | --------------------------------------------------------------------------------- |
| ultra-condensed | Makes the text as narrow as it gets                                               |
| extra-condensed | Makes the text narrower than condensed, but not as narrow as ultra-condensed      |
| condensed       | Makes the text narrower than semi-condensed, but not as narrow as extra-condensed |
| semi-condensed  | Makes the text narrower than normal, but not as narrow as condensed               |
| normal          | Default value. No font stretching                                                 |
| semi-expanded   | Makes the text wider than normal, but not as wide as expanded                     |
| expanded        | Makes the text wider than semi-expanded, but not as wide as extra-expanded        |
| extra-expanded  | Makes the text wider than expanded, but not as wide as ultra-expanded             |
| ultra-expanded  | Makes the text as wide as it gets                                                 |
| initial         | Sets this property to its default value.                                          |
| inherit         | Inherits this property from its parent element.                                   |

## Example list

### Example 1

```html:
<style>

	.ultra-condensed {
		font-stretch: ultra-condensed;
	}

	.extra-condensed {
		font-stretch: extra-condensed;
	}

	.condensed {
		font-stretch: condensed;
	}

	.semi-condensed {
		font-stretch: semi-condensed;
	}

	.expanded {
		font-stretch: expanded;
	}

	.semi-expanded {
		font-stretch: semi-expanded;
	}

	.extra-expanded {
		font-stretch: extra-expanded;
	}

	.ultra-expanded {
		font-stretch: ultra-expanded;
	}

	.ultra-condensed,
	.extra-condensed,
	.condensed,
	.semi-condensed,
	.expanded,
	.semi-expanded,
	.extra-expanded,
	.ultra-expanded {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
</style>
```

# color properties: <mark>opacity</mark> property

The **opacity** CSS property specifies the transparency of an element, the degree to which the background behind the element is overlaid.

The value applies to the element as a whole, including its contents, even though the value is not inherited by child elements. Thus, an element and its contained children all have the same opacity relative to the element's background, even if the element and its children have different opacities relative to one another.

Using this property with a value different than 1 places the element in a new stacking context.

This property is defined like this:

- Initial: 1.0
- Applies to: all elements
- Media: visual
- Computed Value: the specified value, clipped in the range [0,1]
- Animatable: yes, as a number

Values: <number>
<number> is a number in the range 0.0 to 1.0, both included, representing the opacity of the channel, that is the value of its alpha channel. Any value outside the interval, though valid, is clamped to the nearest limit in the range.

Value:

- 0 : The element is fully transparent (that is, invisible).
- 0 - 1 (any number in between): the element is translucent (that is, background can be seen)
- 1: The element is fully opaque (solid). This is the default value.

Ex.:

- a value of 0.5 lets you see the background through the "hbox"
- The code:
  hbox {
  opacity: 0.5;
  }

The <b>opacity</b> property can be used in many ways:

- Transparent hover effect (mixed with <b>hover</b> effect):

```
<style>
	img {
		opacity: 0.5;
	}

	img:hover {
		opacity: 1.0;
	}
</style>
```

- Transparent Box:
  When using the opacity property to add transparency to the background of an element, all of its child elements inherit the same transparency. This can make the text inside a fully transparent element hard to read:

  ```
  <style>
  	div {
  		opacity: 0.3;
  	}
  </style>
  ```

- Transparency using RGBA
  If you do not want to apply opacity to child elements, like in our example above, use RGBA color values.

  Ex.: Green background with 30% opacity

  ```
  	<style>
  		div {
  			background: rgba(76, 175, 80, 0.3)
  		}
  	</style>
  ```

<b>Note:</b>

- An RGBA color value is specified with: rgba(red, green, blue, alpha).

- The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).

## Example list

### Example 1

```html:
		img {
			opacity: 0.3;
		}

		img:hover {
			opacity: 1.0;
		}


		.part-one {
			background-image: url(https://picsum.photos/200/300?random=1);
			opacity: 0.2;
		}

		.part-one:hover {
			opacity: 1.0;
		}

		.transparent-box {
			margin: 24px;
			background-color: aliceblue;
			border: 1px dotted brown;
			border-radius: 16px;
			opacity: 0.6;
		}

```

# ICC Color Profile: 'color-profile' property

<b>Note:</b> ICC profile is a set of data that characterizes a color input or output device, or a color space, according to standards promulgated by the International Color Consortium (ICC).

The **color-profile** property permits specification of a source color profile other than the default.

Syntax:
color-profile: auto | sRGB | <name> | <uri> | inherit;

Ex.:

- Use the specified profile, even if the image contains an embedded profile
- The code:
  ```
  IMG {
  	color-profile: url("http://example.com/profiles/eg.icm")
  }
  ```

<b>Note:</b> ICM files mostly belong to Windows by Microsoft Corporation. ICM Image Colour Matching is a colour profile file used by programs and devices that allows for consistency in colour when a file travels through different media. As a result, a scanned image, displayed on a monitor and printed will retain the same colour space instead of each phase applying its own interpretation.

This property is defined like this:

- Name: color-profile
- Value:

  - auto
    This is a default behaviour, unless there are other specified values.
  - sRGB
    The source profile is assumed to be sRGB. This differs from auto in that it overrides an embedded profile inside an image.
  - <name>
    A name corresponding to a defined color profile that is in the user agent's color profile description database. The user agent searches the color profile description database for a color profile description entry whose name descriptor matches <name> and uses the last matching entry that is found. If a match is found, the corresponding profile overrides an embedded profile inside an image. If no match is found, then the embedded profile inside the image is used.
  - <uri>
    The location of a standard ICC profile resource. Just like specifying sRGB, it overrides an embedded profile

    - Ex.: use the specified profile, even if the image contains an embedded profile
    - The Code:
      ```
      IMG {
      	color-profile: "http://www.colors.corp/images/profiles/mah314.icm"
      }
      ```

  - inherit

- Initial: auto
- Applies to: all elements
- Inherited: yes
- Percentages: N/A
- Media: visual
- Computed value: specified value

<b>Note:</b>

- SVG defines an 'color-profile' rule which permits the author to set both <b>color-profile,</b> and <b>rendering-intent</b>.
- The editor expects to include the 'color-profile' rule in a future draft of this document.

# color properties: rendering-intent property

The **rendering-intent** property permits the specification of a color profile rendering intent other than the default.

The behavior of values other than auto and inherit are defined by the International Color Consortium standard.

This property is defined like this:

- Name: rendering-intent
- Value:

  - auto
    This is the default behavior.
    Otherwise, the user agent should use the current profile (based on the <b>color-profile</b> style) and force the intent, overriding any intent that may be stored in the profile itself.
  - perceptual
  - relative-colorimetric
  - saturation
  - absolute-colorimetric
  - inherit

- Initial: auto
- Applies to: all elements
- Inherited: yes
- Percentages: N/A
- Media: visual
- Computed value: specified value.

Syntax:
rendering-intent: auto | perceptual | relative-colorimetric | saturation | absolute-colorimetric | inherit;

Ex.:
.class {
rendering-intent: saturation ;
}

<b>Note: </b>

- According to <a href="https://developer.mozilla.org/en-US/docs/Web/API/SVGRenderingIntent">MDN </a> and other sources this feature is no longer recommended.
- Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes.
- Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision.
- Be aware that this feature may cease to work at any time.
- It is good to know about it, but don't dwell on it too much.

@mariateo
@iulia-zburlea

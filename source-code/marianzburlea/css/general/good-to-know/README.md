# Meet the CSS tags

## Research

**For `good-to-know` properties - See general/good-to-know**

I did some searches on Google:

<!-- google -->

[cursor css](https://www.google.com/search?q=cursor+css)
and

[@keyframes css](https://www.google.com/search?q=@keyframes+css)
and

[animation css](https://www.google.com/search?q=animation+css)
and

[transition property css](https://www.google.com/search?q=transition+property+in+css)
and

[transition-property property css](https://www.google.com/search?q=transition-property+property+in+css)
and

[transition-property property css](https://www.google.com/search?q=transition-duration+property+in+css)
and

[transition-timing-function property css](https://www.google.com/search?q=transition-timing-function+property+in+css)
and

[transition-delay property css](https://www.google.com/search?q=transition-delay+property+in+css)
and

[transform property css](https://www.google.com/search?q=transform+property+in+css)
and

[@media property css](https://www.google.com/search?q=@media+property+in+css)

<!-- w3 -->

And found

[CSS cursor in W3](https://www.w3schools.com/cssref/pr_class_cursor.asp)
and

[CSS @keyframes in W3](https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp)
and

[CSS animation in W3](https://www.w3schools.com/css/css3_animations.asp) (where you can find out about `animation-name`, `animation-duration`,`animation-timing-function`,`animation-delay`,`animation-iteration-count`,`animation-direction`,`animation-play-state`)
and

[CSS transitions in W3](https://www.w3schools.com/css/css3_transitions.asp)
and

[CSS transition in W3](https://www.w3schools.com/cssref/css3_pr_transition.asp)
and

[CSS transition-property in W3](https://www.w3schools.com/cssref/css3_pr_transition-property.asp)
and

[CSS transition-duration in W3](https://www.w3schools.com/cssref/css3_pr_transition-duration.asp)
and

[CSS transition-timing-function in W3](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp)
and

[CSS transition-delay in W3](https://www.w3schools.com/cssref/css3_pr_transition-delay.asp)
and

[CSS transform in W3](https://www.w3schools.com/cssref/css3_pr_transform.asp)
and

[CSS transform examples in W3](<https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_transform&preval=rotate(45deg)>)
and

[@media property](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)

And also found

<!-- others -->

[transition property](https://www.script-tutorials.com/css-ref/transition/)
and

[transition-property property](https://www.script-tutorials.com/css-ref/transition-property/)
and

[transition-duration property](https://www.script-tutorials.com/css-ref/transition-property/)
and

[transition-timing-function property](https://www.script-tutorials.com/css-ref/transition-property/)
and

[transition-delay property](https://www.script-tutorials.com/css-ref/transition-property/)
and

[transition-timing-function property](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
and

[transform property](https://www.script-tutorials.com/css-ref/transform/)

## Notes:

# cursor

The **cursor** property specifies the mouse cursor to be displayed when pointing over an element.

### Property Values

| Value         | Description                                                                           |
| ------------- | ------------------------------------------------------------------------------------- |
| alias         | The cursor indicates an alias of something is to be created                           |
| all-scroll    | The cursor indicates that something can be scrolled in any direction                  |
| auto          | Default. The browser sets a cursor                                                    |
| cell          | The cursor indicates that a cell (or set of cells) may be selected                    |
| context-menu  | The cursor indicates that a context-menu is available                                 |
| col-resize    | The cursor indicates that the column can be resized horizontally                      |
| copy          | The cursor indicates something is to be copied                                        |
| crosshair     | The cursor render as a crosshair                                                      |
| default       | The default cursor                                                                    |
| e-resize      | The cursor indicates that an edge of a box is to be moved right (east)                |
| ew-resize     | Indicates a bidirectional resize cursor                                               |
| grab          | The cursor indicates that something can be grabbed                                    |
| grabbing      | The cursor indicates that something can be grabbed                                    |
| help          | The cursor indicates that help is available                                           |
| move          | The cursor indicates something is to be moved                                         |
| n-resize      | The cursor indicates that an edge of a box is to be moved up (north)                  |
| ne-resize     | The cursor indicates that an edge of a box is to be moved up and right (north/east)   |
| nesw-resize   | Indicates a bidirectional resize cursor                                               |
| ns-resize     | Indicates a bidirectional resize cursor                                               |
| nw-resize     | The cursor indicates that an edge of a box is to be moved up and left (north/west)    |
| nwse-resize   | Indicates a bidirectional resize cursor                                               |
| no-drop       | The cursor indicates that the dragged item cannot be dropped here                     |
| none          | No cursor is rendered for the element                                                 |
| not-allowed   | The cursor indicates that the requested action will not be executed                   |
| pointer       | The cursor is a pointer and indicates a link                                          |
| progress      | The cursor indicates that the program is busy (in progress)                           |
| row-resize    | The cursor indicates that the row can be resized vertically                           |
| s-resize      | The cursor indicates that an edge of a box is to be moved down (south)                |
| se-resize     | The cursor indicates that an edge of a box is to be moved down and right (south/east) |
| sw-resize     | The cursor indicates that an edge of a box is to be moved down and left (south/west)  |
| text          | The cursor indicates text that may be selected                                        |
| URL           | A comma separated list of URLs to custom cursors.                                     |
| vertical-text | The cursor indicates vertical-text that may be selected                               |
| w-resize      | The cursor indicates that an edge of a box is to be moved left (west)                 |
| wait          | The cursor indicates that the program is busy                                         |
| zoom-in       | The cursor indicates that something can be zoomed in                                  |
| zoom-out      | The cursor indicates that something can be zoomed out                                 |

**Note:** Always specify a generic cursor at the end of the list, in case none of the URL-defined cursors can be used

## Example list

### Example 1

```html:
<style>
	.alias {
		cursor: alias;
	}

	.pointer {
		cursor: pointer;
	}

	.not-allowed {
		cursor: not-allowed;
	}

	.grabbing {
		cursor: grabbing;
	}
</style>

<p class="alias">alias</p>
<p class="not-allowed">not-allowed</p>
<p class="pointer">pointer</p>
<p class="grabbing">grabbing</p>

```

# @keyframes, animation, animation-name, animation-duration, animation-delay, animation-iteration-count, animation-direction, animation-timing-function

The **@keyframes** rule specifies the animation code.

The animation is created by gradually changing from one set of CSS styles to another.

During the animation, you can change the set of CSS styles many times.

Specify when the style change will happen in percent, or with the keywords **"from"** and **"to"**, which is the same as 0% and 100%. 0% is the beginning of the animation, 100% is when the animation is complete.

**Tip:** For best browser support, you should always define both the 0% and the 100% selectors.

**Note:** Use the **animation** properties to control the appearance of the animation, and also to bind the animation to selectors.

**Note:** The **!important** rule is ignored in a keyframe

**Note:** The **animation-duration** property defines how long an animation should take to complete. If the **animation-duration** property is not specified, no animation will occur, because the default value is 0s (0 seconds).

It is also possible to use percent. By using percent, you can add as many style changes as you like.

The **animation-delay** property specifies a delay for the start of an animation.

Negative values are also allowed. If using negative values, the animation will start as if it had already been playing for N seconds.

The **animation-iteration-count** property specifies the number of times an animation should run.

The animation-direction property specifies whether an animation should be played forwards, backwards or in alternate cycles.

#### The animation-direction property can have the following values:

- normal - The animation is played as normal (forwards). This is default
- reverse - The animation is played in reverse direction (backwards)
- alternate - The animation is played forwards first, then backwards
- alternate-reverse - The animation is played backwards first, then forwards

The **animation-timing-function** property specifies the speed curve of the animation.

The **animation-timing-function** property can have the following values:

- ease - Specifies an animation with a slow start, then fast, then end slowly (this is default)
- linear - Specifies an animation with the same speed from start to end
- ease-in - Specifies an animation with a slow start
- ease-out - Specifies an animation with a slow end
- ease-in-out - Specifies an animation with a slow start and end
- cubic-bezier(n,n,n,n) - Lets you define your own values in a cubic-bezier function

## Example list

### Example 1

```html:
<style>
div {
		width: 100px;
		height: 100px;
		background: red;
		position: relative;
		animation: move-around 5s infinite;
	}

	@keyframes move-around {
		0% {
			top: 0px;
			left: 0px;
			background: red;
		}
		25% {
			top: 0px;
			left: 100px;
			background: blue;
		}
		50% {
			top: 100px;
			left: 100px;
			background: yellow;
		}
		75% {
			top: 100px;
			left: 0px;
			background: green;
		}
		100% {
			top: 0px;
			left: 0px;
			background: red;
		}
	}

	.delay {
		width: 100px;
		height: 100px;
		background-color: red;
		position: relative;
		animation-name: delay;
		animation-duration: 4s;
		animation-delay: 2s;
		animation-iteration-count: infinite;
	}

	@keyframes delay {
		0% {
			background-color: red;
			left: 0px;
			top: 0px;
		}
		25% {
			background-color: yellow;
			left: 200px;
			top: 0px;
		}
	}
</style>

<div></div>

<div class="delay">This one is delayed</div>

```

# @media

The **@media** rule is used in media queries to apply different styles for different media types/devices.

Media queries can be used to check many things, such as:

- width and height of the viewport
- width and height of the device
- orientation (is the tablet/phone in landscape or portrait mode?)
- resolution

Using media queries are a popular technique for delivering a tailored style sheet (responsive web design) to desktops, laptops, tablets, and mobile phones.

You can also use media queries to specify that certain styles are only for printed documents or for screen readers (mediatype: print, screen, or speech).

In addition to media types, there are also media features. Media features provide more specific details to media queries, by allowing to test for a specific feature of the user agent or display device. For example, you can apply styles to only those screens that are greater, or smaller, than a certain width.

## Example list

### Example 1

```html:
<style>
	    .wrap {
      width: 150px;
      border: 4px dashed maroon;
	  }

    @media screen and (min-width: 768px) {
      .wrap {
        width: 250px;
        border: 8px ridge midnightblue;
        padding: 15px;
      }
    }

    @media screen and (min-width: 900px) {
      .wrap {
        width: 350px;
        border: 16px groove cornflowerblue;
        padding: 20px;
      }
    }
</style>

<p class="wrap">
	This is a paragraph, as soon as you resize the browser you will see different
	styles applied. Go ahead and have fun!
</p>

```

# transition

CSS transitions allow you to change property values smoothly, over a given duration.

To create a **transition** effect, <b>you must specify two things</b>:

- the CSS property you want to add an effect to.
- the duration of the effect.

<b>Note:</b> If the duration part is not specified, the transition will have no effect, because the default value is 0.

CSS **transition** property is a shorthand property for setting the four transition properties into a single property:

- transition-property:
  - Specifies the name of the CSS property the transition effect is for
- transition-duration:
  - Specifies how many seconds or milliseconds a transition effect takes to complete.
- transition-timing-function:
  - Specifies the speed curve of the transition effect.
- transition-delay:
  - Specifies a delay (in seconds) for the transition effect.

<b>Note:</b> Always specify the transition-duration property, otherwise the duration is 0s, and the transition will have no effect.

## Example list

### Example 1

```html:
<style>
	.transition-ex-1 {
		background-image: url('https://picsum.photos/seed/picsum/200/300');
		background-repeat: no-repeat;
		background-size: cover;
		width: 200px;
		height: 200px;
		transition: width, height;
		transition-duration: 0.2s;
	}
	.transition-ex-1:hover {
		width: 300px;
		height: 400px;
	}

	input[type='text'] {
		width: 150px;
		transition: width 0.35s ease-in-out;
	}

	input[type='text']:focus {
		width: 300px;
	}
</style>

```

# transition-property

The **transition-property** property specifies the name of the CSS property the transition effect is for (the transition effect will start when the specified CSS property changes).

<b>Note:</b>

- A transition effect could typically occur when a user hover over an element.
- Always specify the transition-duration property, otherwise the duration is 0, and the transition will have no effect.

The transition-property property can have the following values:

- none:
  - No property will get a transition effect.
- all:
  - Default value. All properties will get a transition effect.
- property:
  - Defines a comma separated list of CSS property names the transition effect is for.
- initial:
  - Sets this property to its default value.
- inherit:

  - Inherits this property from its parent element.

- ease (default):

## Example list

### Example 1

```html:
<style>
	.transition-ex-3 {
		background-image: url('https://picsum.photos/seed/picsum/200/300');
		background-repeat: no-repeat;
		background-size: cover;

		width: 100px;
		height: 100px;

		transition-property: width, height;
		transition-duration: 2s;
	}

	.transition-ex-3:hover {
		width: 200px;
		height: 200px;
	}
</style>

```

# transition-duration

The **transition-duration** property specifies how many seconds (s) or milliseconds (ms) a transition effect takes to complete.

## Example list

### Example 1

```html:
<style>
		.transition-ex-3 {
		background-image: url('https://picsum.photos/seed/picsum/200/300');
		background-repeat: no-repeat;
		background-size: cover;

		width: 100px;
		height: 100px;

		transition-property: width, height;
		transition-duration: 2s;
	}

	.transition-ex-3:hover {
		width: 200px;
		height: 200px;
	}
</style>

```

# transition-timing-function

The **transition-timing-function** property specifies the speed curve of the transition effect.

This property allows a transition effect to change speed over its duration.

The transition-timing-function property can have the following values:

- ease (default):
  - specifies a transition effect with a slow start, then fast, then end slowly.
- linear:
  - specifies a transition effect with the same speed from start to end.
- ease-in:
  - specifies a transition effect with a slow start.
- ease-out:
  - specifies a transition effect with a slow end.
- ease-in-out:
  - specifies a transition effect with a slow start and end.
- step-start:
  - equivalent to steps(1, start).
- step-end:
  - equivalent to steps(1, end).
- steps(int,start|end): steps( n, <jumpterm>)

  - specifies a stepping function, with two parameters.
    - The first parameter specifies the number of intervals in the function. It must be a positive integer (greater than 0).
    - The second parameter, which is optional, is either the value "start" or "end", and specifies the point at which the change of values occur within the interval. If the second parameter is omitted, it is given the value "end".

- cubic-bezier(n,n,n,n):
  - lets you define your own values in a cubic-bezier function.

## Example list

### Example 1

```html:
<style>
	.transition-ex-4 {
		background-image: url('https://picsum.photos/id/1002/200/300');
		background-repeat: no-repeat;
		background-size: cover;

		width: 100px;
		height: 100px;

		transition-property: width, height;
		transition-duration: 2s;
		/* transition-timing-function: linear; */

		/* transition-timing-function: ease; */
		/* transition-timing-function: ease-in; */
		/* transition-timing-function: ease-in-out; */
		/* transition-timing-function: ease-out; */

		/* transition-timing-function: steps(5); */
		/* transition-timing-function: steps(5, start); */
		/* transition-timing-function: steps(5, end); */
		/* transition-timing-function: step-start; */
		/* transition-timing-function: step-end; */

		/* transition-timing-function: cubic-bezier(0, 0, 1, 1); */
		/* transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95); */

		/* you can combine more transitions in one */
		transition-timing-function: ease, step-start;
	}
</style>

```

# transition-delay

The **transition-delay** property specifies when the transition effect will start.

<b>Note:</b> The **transition-delay** is defined in seconds (s) or milliseconds (ms).

## Example list

### Example 1

```html:
<style>
	.transition-ex-5 {
		background-image: url('https://picsum.photos/id/237/200/300');
		background-repeat: no-repeat;
		background-size: cover;

		width: 100px;
		height: 100px;

		transition-property: width, height;
		transition-duration: 5s;
		transition-delay: 0.5s;
	}

	.transition-ex-5:hover {
		width: 200px;
		height: 200px;
	}
</style>

```

# transform

The **transform** property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.

The **transform** property property can have the following values:

- none:

  - defines that there should be no transformation/

- matrix(n,n,n,n,n,n):
  - defines a 2D transformation, using a matrix of six values.
- matrix3d (n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n):

  - Defines a 3D transformation, using a 4x4 matrix of 16 values.

- translate(x,y):
  - Defines a 2D translation.
- translate3d(x,y,z):
  - Defines a 3D translation.
- translateX(x):
  - Defines a translation, using only the value for the X-axis.
- translateY(y):
  - Defines a translation, using only the value for the Y-axis.
- translateZ(z):

  - Defines a 3D translation, using only the value for the Z-axis.

- scale(x,y):
  - Defines a 2D scale transformation.
- scale3d(x,y,z):
  - Defines a 3D scale transformation.
- scaleX(x):
  - Defines a scale transformation by giving a value for the X-axis.
- scaleY(y):
  - Defines a scale transformation by giving a value for the Y-axis.
- scaleZ(z):

  - Defines a 3D scale transformation by giving a value for the Z-axis.

- rotate(angle):
  - Defines a 2D rotation, the angle is specified in the parameter.
- rotate3d(x,y,z,angle):
  - Defines a 3D rotation.
- rotateX(angle):
  - Defines a 3D rotation along the X-axis.
- rotateY(angle):
  - Defines a 3D rotation along the Y-axis.
- rotateZ(angle):

  - Defines a 3D rotation along the Z-axis.

- skew(x-angle,y-angle):
  - Defines a 2D skew transformation along the X- and the Y-axis.
- skewX(angle):
  - Defines a 2D skew transformation along the X-axis.
- skewY(angle):

  - Defines a 2D skew transformation along the Y-axis.

- perspective(n):
  - Defines a perspective view for a 3D transformed element.

## Example list

### Example 1

```html:
<style>
	.transform-ex-6-1 {
		background-image: url('https://picsum.photos/id/237/200/300');
		background-repeat: no-repeat;
		background-size: cover;

		width: 150px;
		height: 80px;
		transform: rotate(30deg);
	}

	.transform-ex-6-2 {
		width: 150px;
		height: 80px;
		background-color: rgb(0, 187, 255);
		transform: skewY(30deg);
	}

	.transform-ex-6-3 {
		width: 150px;
		height: 80px;
		background-color: rgb(0, 255, 123);
		transform: scaleY(1.5);
	}
</style>

```

<!--  -->

@mariateo
@iulia-zburlea

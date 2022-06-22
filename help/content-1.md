[Back to project](../README.md)

## First Big Project

View and practice the next introduction to CSS so you can be ready to meet the rest of the HTML tags later on.

CSS is used for defining the styles for web pages. It describes the look and formatting of a document which is written in a markup language. It provides an additional feature to HTML. It is generally used with HTML to change the style of web pages and user interfaces.

**Ways to use CSS to style your HTML pages:**

1. Using the
   <mark>**style** attribute</mark>
   inside any HTML elements (inline)

   - it is used to apply unique style to a single element and you make use of the _style_ attribute using this syntax:

     `<h1 style="color:green">I am green! WOW!</h1>`

     \*<small> This way the header (h1) has now a green color.
     </small>

1. Using the
   <mark>**style** HTML tag</mark>
   inside the `<head>` section (internal)

   - it is used to apply style to a single HTML page (the page you are working on)
   - you make use of the **style** element inside the `<head>` section like in the following syntax:

     ```
     <head>
         <style>
            p {
              color: green;
            }
         </style>
     </head>
     ```

     \*<small>
     This makes all the **p** elements to have the color green inside that page only.
     </small>

1. Using the
   <mark>**style** file that is external</mark>
   and it is linked in a **link** HTML tag (external)

   - create an `css-style.css` file inside the `source-code` folder or the folder that contains the page/pages you are applying the css styles, populate it with minimal css structure and content.
   - link the `css-style.css` file inside the `page-in-work.html` you are applying it using this syntax:

     `<link rel="stylesheet" href="css-style.css">`

     \*<small>
     If you feel confused, take a look again at the **README** file inside `marianzburlea/html/general/link`
     </small>

   - the link `css-style.css` must be added inside the `<head>` section of the page.

**You can use these ways to select the TAG you want to apply the CSS style:**

1. Using the <mark>**type**</mark> attribute:

   - Example: If you want to target the **h2** tag

     ```
     h2 {
      color: blue;
     }
     ```

1. Using the <mark>**class**</mark> attribute

   - Example: If you want to target the html tag that has the class: **test-me**

     ```
     .test-me {
         color: blue;
     }
     ```

1. Using the <mark>**id**</mark> attribute

   - Example: If you want to target the html tag that has the id: **ini-mini**

     ```
     #ini-mini {
         color: blue;
     }
     ```

     \*All ids must have a unique value

**There are quite a few rules that you need to keep in mind:**

- <mark>Cascade</mark>, <mark>Specificity</mark> and <mark>Inheritance</mark>:

  - **Cascade** at a very simple level.

    - This means that the origin, the cascade layer, and the order of CSS rules matter.
    - When two rules from the same cascade layer apply and both have equal specificity, the one that is defined last in the stylesheet is the one that will be used.
    - See the example below:

      ```
      h1 {
         color: red;
      }

      h1 {
         color: blue;
      }
      ```

      \*There are two rules that could be applied for the **h1**. Both the rules are from the same source, have an identical element selector, and therefore, carry the same specificity, but the last one in the source order wins.

  - **Specifity**

        - If multiple style blocks have different selectors that configure the same property with different values and target the same element, specificity decides the property value that gets applied to the element.
        - Specificity is basically a measure of how specific a selector's selection will be:
          - An element selector is less specific: it will select all elements of that type that appear on a page, so it has less weight.
          - A class selector is more specific: it will select only the elements on a page that have a specific class attribute value, so it has more weight.
        - See the example below:

          ```
          .main-heading {
             color: red;
          }

          h1 {
             color: blue;
          }

          <h1 class="main-heading">
          This is my heading.
          </h1>
          ```

          \*In this example we can see that **h1** element has a class as well and it takes the color red from the class. If you have more **h1** elements, they all get the color blue, but only the element that has the class ".main-heading" will get color red.

  - **Inheritance**

    - Inheritance is the mechanism by which certain properties are passed on from a parent element down to its children, in the same fashion as genetics: if parents have green eyes, their children will probably also have green eyes.
    - CSS has an inheritance mechanism because otherwise CSS rules would be redundant.
    - Without inheritance, it would be necessary to specify styles like font family, font size, and text color individually — for every single element type. The code would become bloated and repetitive.
    - Using inheritance, you can specify the font properties for the html or body elements and the styles will be inherited by all other elements.
    - See Example:

    ```
      body{
         color: pink
      }

      span {
         color: red
      }

      .change-me-here{
         color: green
      }
    ```

  ```
     <body>
         <p>
         This is a main example for the Inheritance.
         </p>

         <p>
         This is another example of how to change the
         <span>color of the child</span>,
         but with the use of another tag.
         </p>

         <p class="change-me-here">
         This is yet another example of a changing in color for the child by using the class of the tag.
         </p>
     </body>
  ```

    <!-- - When you reach a moment of good understanding, after enough discover, trial and error with experimental css files, create an `README.md` file to make use of all the recent discoveries and summarise your experience.

### Mimimum tags knowledge to build a website

#### Top tags used to style your html pages for your web site

##### Must Know CSS properties

1. the `<color>` tag
1. the `<background-color>` tag
1. the `<background-image>` tag
1. the `<display>` tag
1. the `<height>` tag
1. the `<width>` tag
1. the `<min-width>` tag
1. the `<min-height>` tag
1. the `<max-height>` tag
1. the `<max-width>` tag
1. the `<margin>` tag
1. the `<padding>` tag
1. the `<border>` tag
1. the `<border-color>` tag
1. the `<border-width>` tag
1. the `<border-style>` tag
1. the `<border-radius>` tag
1. the `<font>` tag
1. the `<font-family>` tag
1. the `<font-style>` tag
1. the `<font-weight>` tag
1. the `<position>` tag
1. the `<z-index>` tag

   ##### CSS Selectors

1. the `<:active>` tag
1. the `<:hover>` tag
1. the `<:visited>` tag

1. the `<:enabled>` tag
1. the `<:disabled>` tag
1. the `<:checked>` tag

1. the `<:before>` tag
1. the `<:after>` tag

1. the `<:first-child>` tag
1. the `<:only-child>` tag
1. the `<:nth-child()>` tag
1. the `<:last-child>` tag
1. the `<:nth-last-child()>` tag

1. the `<:first-of-type>` tag
1. the `<:only-of-type>` tag
1. the `<:nth-of-type>` tag
1. the `<:nth-last-of-type>` tag
1. the `<:last-of-type>` tag

1. the `<:first-letter>` tag
1. the `<:first-line>` tag

1. the `<:root>` tag
1. the `<:selection>` tag
1. the `<:focus>` tag
1. the `<:empty>` tag
1. the `<:target>` tag
1. the `<:lang>` tag
1. the `<:link>` tag
1. the `<:not()>` tag

   ##### Animation Properties

1. the `<@keyframes>` tag
1. the `<animation>` tag
1. the `<animation-name>` tag
1. the `<animation-duration>` tag
1. the `<animation-timing-function>` tag
1. the `<animation-delay>` tag
1. the `<animation-iteration-count>` tag
1. the `<animation-direction>` tag
1. the `<animation-play-state>` tag

1. ##### Backgound Properties

1. the `<backgroung>` tag
1. the `<background-attachment>` tag
1. the `<background-color>` tag - See Must Know Tags
1. the `<background-image>` tag - See Must Know Tags
1. the `<background-position>` tag
1. the `<background-repeat>` tag
1. the `<background-clip>` tag
1. the `<background-origin>` tag
1. the `<background-size>` tag

   ##### Border and Outline Properties

1. the `<border>` tag - See Must Know Tags
1. the `<border-bottom>` tag
1. the `<border-bottom-color>` tag
1. the `<border-bottom-style>` tag
1. the `<border-bottom-width>` tag
1. the `<border-color>` tag - See Must Know Tags
1. the `<border-left>` tag
1. the `<border-left-color>` tag
1. the `<border-left-style>` tag
1. the `<border-left-width>` tag
1. the `<border-right>` tag
1. the `<border-right-color>` tag
1. the `<border-right-style>` tag
1. the `<border-right-width>` tag
1. the `<border-style>` tag - See Must Know Tags
1. the `<border-top>` tag
1. the `<border-top-color>` tag
1. the `<border-top-style>` tag
1. the `<border-top-width>` tag
1. the `<border-width>` tag - See Must Know Tags
1. the `<outline>` tag
1. the `<outline-color>` tag
1. the `<outline-style>` tag
1. the `<outline-width>` tag
1. the `<border-bottom-left-radius>` tag
1. the `<border-bottom-right-radius>` tag
1. the `<border-image>` tag
1. the `<border-image-outset>` tag
1. the `<border-image-repeat>` tag
1. the `<border-image-slice>` tag
1. the `<border-image-source>` tag
1. the `<border-image-width>` tag
1. the `<border-radius>` tag - See Must Know Tags
1. the `<border-top-left-radius>` tag
1. the `<border-top-right-radius>` tag
1. the `<box-decoration-break>` tag
1. the `<box-shadow></box-shadow>` tag

   ##### Box Properties

1. the `<overflow-x>` tag
1. the `<overflow-y>` tag
1. the `<overflow-style>` tag
1. the `<rotation>` tag
1. the `<rotation-point>` tag

   ##### Color Properties

1. the `<color-profile>` tag
1. the `<opacity>` tag
1. the `<rendering-intent>` tag

   ##### Content and Paged Media Properties

1. the `<bookmark-label>` tag
1. the `<bookmark-level>` tag
1. the `<bookmark-target>` tag
1. the `<float-offset>` tag
1. the `<hyphenate-after>` tag
1. the `<hyphenate-before>` tag
1. the `<hyphenate-character>` tag
1. the `<hyphenate-lines>` tag
1. the `<hyphenate-resources>` tag
1. the `<hyphens>` tag
1. the `<image-resolution>` tag
1. the `<marks>` tag
1. the `<string-set>` tag

   ##### Dimension Properties

1. the `<height>` tag - See Must Know Tags
1. the `<width>` tag - See Must Know Tags

1. the `<min-heigth>` tag - See Must Know Tags
1. the `<max-heigth>` tag - See Must Know Tags
1. the `<min-width>` tag - See Must Know Tags
1. the `<max-width>` tag - See Must Know Tags

   ##### Flexible Box Properties

1. the `<box-align>` tag
1. the `<box-direction>` tag
1. the `<box-flex>` tag
1. the `<box-flex-group>` tag
1. the `<box-lines>` tag
1. the `<box-ordinal-group>` tag
1. the `<box-orient>` tag
1. the `<box-pack>` tag

   ##### Font Properties

1. the `<font>` tag - See Must Know Tags
1. the `<font-family>` tag - See Must Know Tags
1. the `<font-style>` tag - See Must Know Tags
1. the `<font-variant>` tag
1. the `@font-face` tag
1. the `<font-size-adjust>` tag
1. the `<font-stretch>` tag

   ##### Generated Content Properties

1. the `<content>` tag
1. the `<counter-increment>` tag
1. the `<counter-reset>` tag
1. the `<quotes>` tag
1. the `<crop>` tag
1. the `<move-to>` tag
1. the `<page-policy>` tag

   ##### Grid Properties

1. the `<grid-columns>` tag
1. the `<grid-rows>` tag

   ##### Hyperlink Properties

1. the `<target>` tag
1. the `<target-name>` tag
1. the `<target-new>` tag
1. the `<target-position>` tag

   ##### Linebox Properties

1. the `<alignment-adjust>` tag
1. the `<alignment-baseline>` tag

1. the `<baseline-shift>` tag
1. the `<dominant-baseline>` tag

1. the `<drop-initial-before-align>` tag
1. the `<drop-initial-after-adjust>` tag
1. the `<drop-initial-size>` tag
1. the `<drop-initial-value>` tag

1. the `<inline-box-align>` tag

1. the `<line-stacking>` tag
1. the `<line-stacking-ruby>` tag
1. the `<line-stacking-shift>` tag
1. the `<line-stacking-strategy>` tag

1. the `<text-height>` tag

   ##### List Properties

1. the `<list-style>` tag
1. the `<list-style-image>` tag
1. the `<list-style-position>` tag
1. the `<list-style-type>` tag

   ##### Margin Properties

1. the `<margin>` tag - See Must Know Tags
1. the `<margin-bottom>` tag
1. the `<margin-top>` tag
1. the `<margin-left>` tag
1. the `<margin-right>` tag

   ##### Marquee Properties

1. the `<marque-direction>` tag
1. the `<marque-play-count>` tag
1. the `<marque-speed>` tag
1. the `<marque-style>` tag

   ##### Multi-column Properties

1. the `<columns>` tag
1. the `<column-count>` tag
1. the `<column-fill>` tag
1. the `<column-width>` tag
1. the `<column-span>` tags
1. the `<column-gap>` tag

1. the `<column-rule>` tag
1. the `<column-rule-color>` tag
1. the `<column-rule-style>` tag
1. the `<column-rule-width>` tag

   ##### Padding Properties

1. the `<padding>` tag - See Must Know Tags
1. the `<padding-bottom>` tag
1. the `<padding-top>` tag
1. the `<padding-left>` tag
1. the `<padding-right>` tag

   ##### Paged Media Properties

1. the `<page>` tag

1. the `<fit>` tag
1. the `<size>` tag

1. the `<fit-position>` tag
1. the `<image-orientation>` tag

   ##### Positioning Properties

1. the `<position>` tag

1. the `<bottom>` tag
1. the `<top>` tag
1. the `<left>` tag
1. the `<right>` tag

1. the `<display>` tag
1. the `<visibility>` tag
1. the `<overflow>` tag

1. the `<float>` tag
1. the `<clear>` tag

1. the `<clip>` tag
1. the `<clip-path>` tag

1. the `<cursor>` tag
1. the `<z-index>` tag

   ##### Print Properties

1. the `<orphans>` tag
1. the `<widows>` tag

1. the `<page-break-before>` tag
1. the `<page-break-inside>` tag
1. the `<page-breakafter>` tag

   ##### Ruby Properties

1. the `<ruby-align>` tag
1. the `<ruby-position>` tag
1. the `<ruby-overhang>` tag

   ##### Speech Properties

1. the `<mark>` tag
1. the `<mark-before>` tag
1. the `<mark-after>` tag

1. the `<rest>` tag
1. the `<rest-before>` tag
1. the `<rest-after>` tag

1. the `<voice-balance>` tag
1. the `<voice-duration>` tag
1. the `<voice-pitch>` tag
1. the `<voice-range>` tag
1. the `<voice-rate>` tag
1. the `<voice-stress>` tag
1. the `<voice-volume>` tag

1. the `<phonemes>` tag

   ##### Table Properties

1. the `<border-spacing>` tag
1. the `<border-collapse>` tag
1. the `<empty-cells>` tag

1. the `<table-layout>` tag
1. the `<caption-side>` tag

   ##### Text Properties

1. the `<color>` tag - See Must Know Tags

1. the `<direction>` tag
1. the `<line-height>` tag
1. the `<text-decoration>` tag
1. the `<text-indent>` tag
1. the `<text-transform>` tag

1. the `<letter-spacing>` tag
1. the `<word-spacing>` tag

1. the `<text-align>` tag
1. the `<vertical-align>` tag
1. the `<text-align-last>` tag

1. the `<hanging-punctuation>` tag
1. the `<punctuation-trim>` tag

1. the `<text-justify>` tag
1. the `<text-outline>` tag
1. the `<text-overflow>` tag
1. the `<text-shadow>` tag

1. the `<text-wrap>` tag
1. the `<word-break>` tag
1. the `<word-wrap>` tag

1. the `<unicode-bidi>` tag
1. the `<white-space>` tag

   ##### 2D/3D Transform Properties

1. the `<tranform>` tag
1. the `<tranform-origin>` tag
1. the `<tranform-style>` tag
1. the `<perspective>` tag
1. the `<perspective-origin>` tag
1. the `<backface-visibility>` tag

   ##### Transition Properties

1. the `<trasition>` tag
1. the `<transition-property>` tag
1. the `<transition-duration>` tag
1. the `<transition-timing-function>` tag
1. the `<transition-delay>` tag

   ##### User-interface Properties

1. the `<appearance>` tag
1. the `<box-sizing>` tag
1. the `<icon>` tag
1. the `<nav-down>` tag
1. the `<nav-index>` tag
1. the `<nav-left>` tag
1. the `<nav-right>` tag
1. the `<nav-up>` tag
1. the `<outline-offset>` tag
1. the `<resize>` tag

   ##### Other Properties

1. the `<align-items>` tag
1. the `<calc>` tag
1. the `<flex-direction>` tag
1. the `<flex-flow>` tag
1. the `<flex-grow>` tag
1. the `<flex-shrink>` tag
1. the `<flex-wrap>` tag
1. the `<hsl>` tag
1. the `<hsla>` tag
1. the `<justify-content>` tag
1. the `<@media>` tag
1. the `<opacity>` tag
1. the `<rotateX>` tag
1. the `<rotateY>` tag
1. the `<rotateZ>` tag
1. the `<scaleX>` tag
1. the `<scaleY>` tag
1. the `<scaleZ>` tag
1. the `<translate>` tag
1. the `<translateX>` tag
1. the `<translateY>` tag
1. the `<translateZ>` tag
1. the `<translate3d>` tag
1. the `<url>` tag

<!--
Reference link no. 1:
https://lucidar.me/en/web-dev-class/lesson-2-09-most-used-css-properties/

Reference link no. 2:
 https://developer.mozilla.org/en-US/docs/Learn/CSS

Reference link no. 3:
 https://webplatform.github.io/docs/tutorials/inheritance_and_cascade/


Reference link no. 4:
https://www.script-tutorials.com/css-reference/#marquee

 -->

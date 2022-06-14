# the **style** html tag

## Research

I did some research on Google,

[html style tag w3](https://www.google.com/search?q=style+html+tag+example+w3)

and found

[HTML Script tag](https://www.w3schools.com/tags/tag_style.asp)

[html style tag mdn](https://www.google.com/search?q=style+html+tag+example+mdn)

and found

[HTML MDn Script tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)

## Notes

The style attribute specifies an inline style for an element.

The style attribute will override any style set globally, e.g. styles specified in the <style> tag or in an external style sheet.

## Example list

Example 1

```html:
<style>
  h1 {
    color: yellowgreen;
    text-align: center;
  }
  h2 {
    font-size: 1rem;
    text-decoration: underline overline;
  }
  p {
    border: 2px dotted seagreen;
    background-color: wheat;
    color: brown;
  }
</style>
```

Example 2

```html:
<style>
  .page-title {
    font-size: 2rem;
    text-decoration: underline;
  }

  .explanation {
    color: blueviolet;
    font-size: 1.5rem;
  }

  .anna-background {
    border-top-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background-color: darkseagreen;
    padding: 1rem;
    border: 1px dotted darkolivegreen;
  }
</style>
```

Example 3

```html:
<style>
  .fun-title {
    text-shadow: 3px 3px gray;
    font-size: 3rem;
    color: darkslategrey;
    text-align: center;
    padding: 1rem;
  }
  .description {
    font-style: 2rem;
    padding: 1rem;
    background-color: chocolate;
    color: bisque;
    border: 8px groove sienna;
  }

  .footer {
    width: 100%;
    position: absolute;
    bottom: -140px;
    text-align: center;
    font-size: 10px;
    background-color: lightblue;
    padding: 0.5rem;
  }
  img {
    width: 1rem;
    height: 1rem;
  }
  p {
    color: violet;
    text-shadow: 1px 1px whitesmoke;
  }
</style>
```

Example 4

```html:
<style>
  h2 {
    color: red;
  }
  p {
    color: blue;
  }
</style>
<style>
  h2 {
    color: green;
  }
  p {
    color: pink;
  }
</style>
```

Example 5

```html:
<style>
  div {
    background-image: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJvcGljYWwlMjBiZWFjaHxlbnwwfHwwfHw%3D&w=1000&q=80");
    width: 100%;
    height: 300px;
    background-position: center;
    background-size: no-repeat;
  }
  p {
    font-style: italic;
    text-align: center;
    padding-top: 1rem;
  }
</style>
```

### Contributors

@mariateo
@marianzburlea

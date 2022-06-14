# the **section** html tag

## Research

I did some research on Google,

[html section tag w3](https://www.google.com/search?q=section+html+tag+example+w3)

and found

[HTML Section tag](https://www.w3schools.com/tags/tag_section.asp)

[html section tag mdn](https://www.google.com/search?q=section+html+tag+example+mdn)

and found

[HTML MDn section tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)

## Notes

<section> is a generic sectioning element, and should only be used if there isn't a more specific element to represent it.

Also consider these cases:

- If the contents of the element represent a standalone, atomic unit of content that makes sense syndicated as a standalone piece (e.g. a blog post or blog comment, or a newspaper article), the <article> element would be a better choice.
- If the contents represent useful tangential information that works alongside the main content, but is not directly part of it (like related links, or an author bio), use an <aside>.
- If the contents represent the main content area of a document, use <main>.
- If you are only using the element as a styling wrapper, use a <div>. An unwritten rule is that a <section> should logically appear in the outline of a document.

## Example list

Example 1

```html:
<section>
  <h1>What is fresh in the market?</h1>
  <h2>Come join us today!</h2>
  <p>
    We have fresh veggies and meat just for you! Come check out our market
    everyday at 10am.
  </p>
</section>

<section>
  <h1>The Shard</h1>
  <h2>Book in an evening slot</h2>
  <p>
    If you fancy heights and seeing the city light at night, the Shard is the
    best place you can book to enjoy the landscape.
  </p>
</section>
```

Example 2

```html:
<section>
  <a href="https://wowdop.com">WoW DoP website</a>
  <a href="section-experiment-1.html">Section experiment 1</a>
</section>

<section>
  <a href="../style/style-experiment-3.html">Style experiment 3</a>
  <a href="https://www.facebook.com">Facebook</a>
</section>
```

Example 3

```html:
<section>
  <button>Click me cuz I do nothing</button>
  <button class="next">Next? 🤓</button>
  <button>Hover next to me</button>
  <button class="on-hover">BOO!!! 👻</button>
</section>
```

Example 4

```html:
<section>
  <h2>This is an article about cakes</h2>
  <p>
    The base is usually eggs and flour, but let's find out the secret ingredient
    into making them magic
  </p>
</section>

<section>
  <h2>House for sale</h2>
  <p>In the local area.</p>
  <p>Send an email for more details</p>
</section>

<section>
  <h2>Help wanted</h2>
  <p>Chef assistant needed to start ASAP</p>
</section>

<section>
  <h3>More info</h3>
  <a href="/contact">Contact details</a>
  <a href="/address">Address</a>
  <a href="/open">Terms and conditions</a>
</section>
```

Example 5

```html:
<section>
  <h1>Section with some styling</h1>
  <p>
    Adding <b>style</b> tag so that we can play around with the content and make
    it look more appealing.
  </p>
</section>
```

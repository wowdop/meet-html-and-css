# the **section** html tag

## Research

I did some research on Google,

[nav html tag example w3](https://www.google.com/search?q=nav+html+tag+example+w3)

and found

[HTML Nav tag](https://www.w3schools.com/tags/tag_nav.asp)

and then searched

[nav html tag example mdn](https://www.google.com/search?q=nav+html+tag+example+mdn)

and found

[HTML mdn nav tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)

## Notes

The `<nav>` tag defines a set of navigation links. It represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents.

Notice that NOT all links of a document should be inside a `<nav>` element. The `<nav>` element is intended only for major block of navigation links.

Common examples of navigation sections are menus, tables of contents, and indexes.

## Example list

Example 1

```html:
<nav>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/marianzburlea/html">Html page</a>
    </li>
    <li>
      <a href="/marianzburlea">Profile</a>
    </li>
  </ul>
</nav>
```

Example 2

```html:
<nav class="nav-wrap">
  <ol>
    <li class="nav-item"><a href="#">Houses</a></li>
    <li class="nav-item"><a href="#">Villa</a></li>
    <li class="nav-item">Villa Mella</li>
  </ol>
</nav>

<section>
  <h1>Villa Mella</h1>
  <p>
    This mega villa has an amazing yard spread over 700 square meters. It has
    its own private forest as well with the access to one side of the river.
  </p>
</section>
```

Example 3

```html:
<nav>
  <ol class="top-nav" type="I">
    <li>
      <a href="/marianzburlea">Main page</a>
    </li>
    <li>
      <a href="/marianzburlea/html">HTML</a>
    </li>
    <li>
      <a href="/marianzburlea/html/general">General</a>
    </li>
  </ol>
</nav>

<section>
  <h1>Practice using <i>nav</i> and <i>section</i> tags</h1>
  <p>
    The content that appears here is not that important, it is more important if
    you understand how to use it.
  </p>
</section>

<nav>
  <ol type="1">
    <li>
      <a href="/marianzburlea">Contact</a>
    </li>
    <li>
      <a href="/marianzburlea/html">Learn more</a>
    </li>
    <li>
      <a href="/marianzburlea/html/general">Try it yourself</a>
    </li>
    <li>
      <a href="/marianzburlea/html/general">Practice, practice, practice</a>
    </li>
  </ol>
</nav>
```

Example 4

```html:
<table border="1">
  <tr>
    <td>
      <h1>Moving to the sea side</h1>
    </td>

    <td>
      <p>Websites for what to buy</p>
    </td>
  </tr>

  <tr>
    <td>
      <p>
        I did not plan this change in my life, and I just decided to move to the
        sea side. I don't plan on coming back and I am not going to take too
        much with me
      </p>
    </td>

    <td>
      <nav>
        <ul>
          <li><a href="/cat">Cat</a></li>
          <li><a href="/blanket">Blanket</a></li>
          <li><a href="/tent">Pillows</a></li>
          <li><a href="#">Survival kit</a></li>
          <li><a href="#">Tent</a></li>
          <li><a href="#">Knives</a></li>
        </ul>
      </nav>
    </td>
  </tr>
</table>
```

Example 5

```html:
<nav>
  <h2>Navigation links included in the text</h2>
  <p>
    You are on the home page. If you click <a href="/blog">my blog</a>, you can
    see more examples of mine. If you click
    <a
      href="https://pbs.twimg.com/media/EJHRAwpVUAAYyH2?format=jpg&name=900x900"
      >here</a
    >
    you might get lucky enough to play a game. if not, then try
    <a href="https://slither.io">this</a> one 🤓.
  </p>
</nav>
```

### Contributors

@mariateo
@marianzburlea

# Meet the article tag

## Research

I'll do some searches on Google,

[html article tag w3](https://www.google.com/search?q=html+article+tag+w3)

and found

[HTML Script Tag](https://www.w3schools.com/tags/tag_article.asp)

and then searched for

[html mdn article tag](https://www.google.com/search?q=html+mdn+article)

and found

[The Script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)

## Notes:

Articles can contain articles and usually have a title and a body, with an optional footer.

## Example list

### Example 1

```html:
<article>
  <h2>The nice title</h2>

  <p>
    with a big body to display small amount of text or large amount of data.
  </p>

  <footer>
    This message was created on
    <time datetime="2022-06-14 14:10:00">Tue 14 Jun 14:10</time>
    by @marianzbulea
  </footer>
</article>

```

### Example 2

```html:
<article>
  <h2>Vegan burrito</h2>

  <section>
    <h3>Ingredients:</h3>

    <ul>
      <li>a good appetite</li>
      <li>time to enjoy</li>
      <li>willingness to go through it</li>
    </ul>
  </section>

  <footer>
    This message was created on
    <time datetime="2022-06-14 14:10:00">Tue 14 Jun 14:10</time>
    by @marianzbulea
  </footer>
</article>

```

### Example 3

```html:
<article>
  <h2>Today is a sunny day</h2>

  <section>
    <h3>The weather forecast for the next 3 days</h3>

    <article>
      <h4>Wednesday</h4>

      <p>hot</p>

      <footer>
        This message was created on
        <time datetime="2022-06-14 14:10:00">Tue 14 Jun 14:10</time>
        by @the-weather-man
      </footer>
    </article>
    <article>
      <h4>Thursday</h4>

      <p>super hot</p>

      <footer>
        This message was created on
        <time datetime="2022-06-14 14:10:00">Tue 14 Jun 14:20</time>
        by @the-weather-man
      </footer>
    </article>
    <article>
      <h4>Friday</h4>

      <p>really hot</p>

      <footer>
        This message was created on
        <time datetime="2022-06-14 14:10:00">Tue 14 Jun 14:30</time>
        by @the-weather-man
      </footer>
    </article>
  </section>

  <footer>
    This message was created on
    <time datetime="2022-06-14 14:10:00">Tue 14 Jun 14:10</time>
    by @marianzbulea
  </footer>
</article>

```

### Example 4

Find more about how articles can present data about the temperature of all our plantes in the solar system.

```html:
<article>
  <h2>Solar System Weather</h2>

  <section>
    <h3>Planets are quite interesting</h3>

    <article>
      <h4>Rank: 1</h4>

      <p>Planet name: Venus</p>

      <footer>
        864 degrees Fahrenheit
        <sub>(462 degrees Celsius)</sub>
      </footer>
...
```

visit the <ins>**`article/article-experiment-4.html`**</ins> to see how we structured the data.

### Example 5

```html:
<article>
  <h2>Solar System Weather</h2>

  <section>
    <h3>Planets are quite interesting</h3>

    <article>
      <h4>Rank: 1</h4>

      <p>Planet name: Venus</p>

      <footer>
        864 degrees Fahrenheit
        <sub>(462 degrees Celsius)</sub>
      </footer>
...
```

visit the <ins>**`article/article-experiment-5.html`**</ins> file to find out how we made use of the article tag to display data about a "new way of learning".

@marianzburlea

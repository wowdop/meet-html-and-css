# Meet the audio and video tag

## Research

I'll do some searches on Google,

[html audio tag w3](https://www.google.com/search?q=html+audio+tag+w3)

and found

[HTML audio tag](https://www.w3schools.com/tags/tag_audio.asp)

and then searched for

[html video tag w3](https://www.google.com/search?q=html+video+tag+w3)

and found

[HTML video tag](https://www.w3schools.com/tags/tag_video.asp)

## Notes:

Audio and video are quite wide spread.

### Audio tag optional attributes

| Attribute           | Value    |
| ------------------- | -------- |
| <ins>autoplay</ins> | autoplay |
| <ins>controls</ins> | controls |
| <ins>loop</ins>     | loop     |
| <ins>muted</ins>    | muted    |
| <ins>preload</ins>  | auto     |
|                     | metadata |
|                     | none     |
| <ins>src</ins>      | _URL_    |

### Video tag optional attributes

| Attribute           | Value    |
| ------------------- | -------- |
| <ins>autoplay</ins> | autoplay |
| <ins>controls</ins> | controls |
| <ins>height</ins>   | _pixels_ |
| <ins>loop</ins>     | loop     |
| <ins>muted</ins>    | muted    |
| <ins>poster</ins>   | _URL_    |
| <ins>preload</ins>  | auto     |
|                     | metadata |
|                     | none     |
| <ins>src</ins>      | _URL_    |
| <ins>width</ins>    | _pixels_ |

## Example list

### Example 1

```html:
<audio src="asset/bluesy-vibes.mp3" controls></audio>
<audio src="asset/your-intro.mp3" controls></audio>
```

### Example 2

```html:
<h1>List of songs</h1>

<h2>Recent songs</h2>
<ul>
  <li>
    <audio src="asset/bluesy-vibes.mp3" controls></audio>
  </li>

  <li>
    <audio src="asset/your-intro.mp3" controls></audio>
  </li>
</ul>
```

### Example 3

```html:
<h2>Recent songs</h2>
<ul>
  <li>
    <audio controls>
      <source  src="asset/bluesy-vibes.mp3" type="audio/mp4"></source>
    </audio>
  </li>
</ul>
```

### Example 4

```html:
<video
  width="640"
  height="360"
  controls
  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
></video>
```

### Example 5

```html:
<ul>
  <li>
    <video
      width="480"
      height="270"
      controls
    >
      <source
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      ></source>
    </video>
  </li>

  <li>
    <video
      width="480"
      height="270"
      controls
    >
      <source
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      ></source>
    </video>
  </li>

  <li>
    <video
      width="480"
      height="270"
      controls
    >
      <source
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
      ></source>
    </video>
  </li>
</ul>
```

# the **media** html tag

## Research for img

I'll do some searches on Google,

[html img tag w3](https://www.google.com/search?q=html+img+tag+w3)

and found

[HTML img Tag](https://www.w3schools.com/tags/tag_img.asp)

and then searched for

[html mdn img tag](https://www.google.com/search?q=html+mdn+img+tag)

and found

[The img element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

## Notes:

| **Attribute**             | **Value**                  |
| ------------------------- | -------------------------- |
| <ins>src</ins>            | URL                        |
| <ins>alt</ins>            | text                       |
| <ins>width</ins>          | pixels                     |
| <ins>height</ins>         | pixels                     |
| <ins>crossorigin</ins>    | anonymous, use-credentials |
| <ins>ismap</ins>          | ismap                      |
| <ins>loading</ins>        | eager, lazy                |
| <ins>longdesc</ins>       | URL                        |
| <ins>referrerpolicy</ins> | no-referrer, origin        |
| <ins>sizes</ins>          | sizes                      |
| <ins>srcset</ins>         | srcset                     |

Images are not technically inserted into a web page; images are linked to web pages. The `<img>` tag creates a holding space for the referenced image.

The `<img>` tag has two required attributes:

src - Specifies the path to the image
alt - Specifies an alternate text for the image, if the image for some reason cannot be displayed

Note: Also, always specify the width and height of an image. If width and height are not specified, the page might flicker while the image loads.

## Example list

### Example 1

```html:
<img
  src="https://picsum.photos/seed/picsum/200/300"
  alt="A pretty random picture"
  width="200"
  height="250"
/>
```

### Example 2

```html:
<img
  src="https://picsum.photos/200/300?grayscale"
  alt="A pretty random picture"
  width="200"
  height="250"
/>
```

### Example 3

```html:
<img
  src="https://picsum.photos/200/300?grayscale"
  alt="A pretty random picture"
  width="200"
  height="250"
/>
```

## Research for svg

I'll do some searches on Google,

[html svg tag w3](https://www.google.com/search?q=html+svg+tag+w3)

and found

[HTML svg Tag](https://www.w3schools.com/tags/tag_svg.asp)

and then searched for

[html mdn svg tag](https://www.google.com/search?q=html+mdn+svg+tag)

and found

[The svg element](https://developer.mozilla.org/en-US/docs/Web/SVG)

## Notes:

SVG images and their related behaviors are defined in XML text files, which means they can be searched, indexed, scripted, and compressed. Additionally, this means they can be created and edited with any text editor or with drawing software.

Compared to classic bitmapped image formats such as JPEG or PNG, SVG-format vector images can be rendered at any size without loss of quality and can be easily localized by updating the text within them, without the need of a graphical editor to do so.

The Html `<text>` tag is used to define the single-line text field on a web page. This is the only tag that is being accepted inside the `<svg>` tag.

## Example list

### Example 1

```html:
<svg width="400" height="100">
  <rect
    width="400"
    height="100"
    style="fill: rgb(92, 150, 106); stroke-width: 8; stroke: rgb(164, 75, 75)"
  />
</svg>
```

### Example 2

```html:
<svg class="logo">
  <text fill="#c23d66" font-size="25" font-family="Verdana" x="22" y="38">
    SVG
  </text>
</svg>
```

## Research for embed

I'll do some searches on Google,

[html embed tag w3](https://www.google.com/search?q=html+embed+tag+w3)

and found

[HTML embed Tag](https://www.w3schools.com/tags/tag_embed.asp)

and then searched for

[html mdn embed tag](https://www.google.com/search?q=html+mdn+embed+tag)

and found

[The embed element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed)

## Notes:

The `<embed>` tag defines a container for an external resource, such as a web page, a picture, a media player, or a plug-in application.

You can use the object-position property to adjust the positioning of the embedded object within the element's frame, and the object-fit property to control how the object's size is adjusted to fit within the frame.

**Suggestion**

- to display a picture, it is better to use the `<img>` tag.

- to display HTML, it is better to use the `<iframe>` tag.

- to display video or audio, it is better to use the `<video>` and `<audio>` tags.

| **Attribute**     | **Value**  |
| ----------------- | ---------- |
| <ins>src</ins>    | URL        |
| <ins>type</ins>   | media_type |
| <ins>width</ins>  | pixels     |
| <ins>height</ins> | pixels     |

## Example list

### Example 1

```html:
<embed
  src="../../../../public/image/html.jpeg"
  alt="An image that was embeded and it represent the HTML logo"
  width="100"
  height="100"
  type="image/jpeg"
/>

```

### Example 2

```html:
<table>
  <tr>
    <td bgcolor="red">
      <embed
        src="../../../../public/image/logo-rocket-plume.svg"
        alt="An image that was embeded and it represent the Plum Rocket logo"
        type="image/jpeg"
        width="100"
        height="100"
      />
      <p>Boost your career</p>
    </td>
  </tr>
</table>
```

### Example 3

```html:
<embed src="../style/index.html" width="100%" height="300" type="text/html" />
```

### Example 4

```html:
<embed
  class="single-page"
  src="../style/style-experiment-1.html"
  type="text/html"
  width="100%"
  height="200"
/>
```

### Example 5

```html:
<embed
  src="../../../../public/video/remove-bg.mp4"
  width="100%"
  height="300"
  type="video/webm"
/>
```

### Example 6

```html:
<embed
    src="../../../../public/video/realtime-edit.mp4"
    type="video/webm"
    width="500"
    height="200"
  />

<div>
  <h3>
    This video is representing how multiple people can work in the same time
    on Figma.
  </h3>

  <p>
    This allows people to become more efficient and the design can be finished
    earlier.
  </p>

  <p>
    It is also an advantage as this allows all the team members to access the
    design any time and see real time updates as long as they are connected to
    the internet.
  </p>
</div>
```

## Research for figure

I'll do some searches on Google,

[html figure tag w3](https://www.google.com/search?q=html+figure+tag+w3)

and found

[HTML figure Tag](https://www.w3schools.com/tags/tag_figure.asp)

and then searched for

[html mdn figure tag](https://www.google.com/search?q=html+mdn+figure+tag)

and found

[The figure element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure#attributes)

## Notes:

Usually a `<figure>` is an image, illustration, diagram, code snippet, etc., that is referenced in the main flow of a document, but that can be moved to another part of the document or to an appendix without affecting the main flow.

Being a sectioning root, the outline of the content of the `<figure>` element is excluded from the main outline of the document.
A caption can be associated with the `<figure>` element by inserting a `<figcaption>` inside it (as the first or the last child). The first `<figcaption>` element found in the figure is presented as the figure's caption.

The figure, its caption, and its contents are referenced as a single unit.

## Example list

### Example 1

```html:
<figure>
  <img
    src="https://picsum.photos/200/300/?blur"
    alt="This will always be a random image with blur"
  />
  <figcaption>This is a lovely blurred picture</figcaption>
</figure>
```

For more details check <ins>figure-experiment-1.html</ins>

### Example 2

```html:
<figure>
  <blockquote>
    If debugging is the process of removing software bugs, then programming must
    be the process of putting them in.
  </blockquote>
  <figcaption><cite>Edsger Dijkstra:</cite></figcaption>
</figure>
```

For more details check <ins>figure-experiment-2.html</ins>

### Example 3

```html:
<figure>
  <p>
    Hold fast to dreams <br />
    For if dreams die <br />
    Life is a broken-winged bird <br />
    That cannot fly. <br />
    Hold fast to dreams <br />
    For when dreams go <br />
    Life is a barren field <br />
    Frozen with snow.
  </p>
  <figcaption><cite>Dreams</cite>, by Langston Hughes</figcaption>
</figure>
```

For more details check <ins>figure-experiment-3.html</ins>

## Research for picture

I'll do some searches on Google,

[html picture tag w3](https://www.google.com/search?q=html+picture+tag+w3)

and found

[HTML picture Tag](https://www.w3schools.com/tags/tag_picture.asp)

and then searched for

[html mdn picture tag](https://www.google.com/search?q=html+mdn+picture+tag)

and found

[The picture element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture#attributes)

## Notes:

The `<picture>` tag gives web developers more flexibility in specifying image resources.

The most common use of the `<picture>` element will be for art direction in responsive designs. Instead of having one image that is scaled up or down based on the viewport width, multiple images can be designed to more nicely fill the browser viewport.

The `<picture>` element contains two tags: one or more `<source>` tags and one `<img>` tag.

The browser will look for the first `<source>` element where the media query matches the current viewport width, and then it will display the proper image (specified in the srcset attribute). The `<img>` element is required as the last child of the `<picture>` element, as a fallback option if none of the source tags matches.

Tip: The `<picture>` element works "similar" to `<video>` and `<audio>`. You set up different sources, and the first source that fits the preferences is the one being used.

## Example list

### Example 1

```html:
<picture>
  <source
    media="(min-width:650px)"
    srcset="../../../../public/image/peony.png"
  />
  <source
    media="(min-width:465px)"
    srcset="../../../../public/image/flower.png"
    style="width: 100px; height: 200px"
  />
  <img src="../../../../public/image/rose.png" alt="rose" style="width: auto" />
</picture>
```

### Contributors

@mariateo

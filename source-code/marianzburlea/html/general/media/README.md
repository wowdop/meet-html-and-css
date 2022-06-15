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

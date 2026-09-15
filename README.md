# odin-recipes
repos 
<a href="../index.html">Home</a>
 <ul>
    <li><a href="recipes/yourrecipe.html">Recipe Title 1</a></li>
    <li><a href="recipes/yourrecipe.html">Recipe Title 2</a></li>
    <li><a href="recipes/yourrecipe.html">Recipe Title 3</a></li>
  </ul>
<!-- index.html -->

<head>
  <link rel="stylesheet" href="styles.css">
</head>
* {
  color: purple;
* {
  color: purple;
}
/* styles.css */

div {
  color: white;
}
<!-- index.html -->

<div class="alert-text">Please agree to our terms of service.</div>
/* styles.css */

.alert-text {
  color: red;
}
<!-- index.html -->

<div id="title">My Awesome 90's Page</div>
/* styles.css */

#title {
  background-color: red;
}
.read {
  color: white;
  background-color: black;
  /* several unique declarations */
}

.unread {
  color: white;
  background-color: black;
  /* several unique declarations */
}
.read,
.unread {
  color: white;
  background-color: black;
}

.read {
  /* several unique declarations */
}

.unread {
  /* several unique declarations */
}
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>
.subsection.header {
  color: red;
}
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection" id="preview">
    This is where a preview for a post might go.
  </p>
</div>
.subsection.header {
  color: red;
}

.subsection#preview {
  color: blue;
}
<!-- index.html -->

<div class="ancestor">
  <div class="contents">
    <div class="contents"></div>
  </div>
</div>

<div class="contents"></div>
/* styles.css */

.ancestor .contents {
  /* some declarations */
}
p {
  /* hex example: */
  color: #1100ff;
}
img {
  height: auto;
  width: 500px;
}
<head>
  <style>
    div {
      color: white;
      background-color: black;
    }

    p {
      color: red;
    }
  </style>
</head>
<body>
  ...
</body>
<body>
  <div style="color: white; background-color: black;">...</div>
</body>

p {
  /* rgb example: */
  color: rgb(100, 0, 127);
}

p {
  /* hsl example: */
  color: hsl(15, 82%, 56%);
}

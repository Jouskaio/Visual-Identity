module.exports = {
  context: {
    classname: "language-css",
    content: " \
    .a-titleH3 { \n \
      font-size: var(--FontSizeL); \n \
      font-family: Fugue, sans-serif; \n \
      color: var(--CText); \n \
      margin-bottom: 16px; \n \
    } "
  },
  preview: {
    stylesheets: ["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/dark.min.css"],
    scripts: [
      "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js"
      ]
  },
  notes: "Don't forget to add the assets in your code manually with the library asked to render your code (not working on fractal)"
}
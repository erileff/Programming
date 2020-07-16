# CSS

## Custom Properties (Variables)

Entities defined by CSS authors that contain specific values to be reused throughout the document.

```css
:root {
  --main-bg-color: brown;
}
```

```css
element {
  background-color: var(--main-bg-color);
}
```

Custom properties can be inherited by child elements.

Can use regular CSS before variables to ensure what the page will look like if an error occurs. Here, the variable is trying to set text color to 16px, which is invalid, but because of the first `p` the color will show as blue instead of the browser's default.

```scss
:root {
  --text-color: 16px;
}

p {
  color: blue;
}

p {
  color: var(--text-color);
}
```

### Values in JavaScript

```css
element.style.getPropertyValue("--my-var");
```

## Positioning

### Relative Position

When position is set to `relative`, you can specify how CSS should move it relative to its current position in the normal flow of the page. It pairs with `left`, `right`, `top`, and `bottom`, which say how many units to move it *away* from where it's normally positioned.

```css
p {
  position: relative;
  bottom: 10px;
}
```

This moves the paragraph 10px away from the bottom.

### Absolute Position

`absolute` locks the element in place relative to its parent container. It removes the element from the normal flow of the document, so surrounding items ignore it. It is locked relative to its closest positioned ancestor, so if you forget to add a position rule to the parent item (i.e. `position: relative`), the browser will ultimately default to the body tag.

### Fixed Position

`fixed` locks the element relative to the browser window; the element won't move when the user scrolls.
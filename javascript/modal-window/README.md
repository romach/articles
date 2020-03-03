# Implement modal window

[**Demo**](https://romach.github.io/examples/javascript/modal-window/demo.html) | [**Source code**](https://github.com/romach/examples/tree/master/javascript/modal-window)

## Markup for modal window

Markup for our modal window have following structure:

```
.modal
  .modal-shadow
    .modal-window
      .modal-header
      .modal-content
      .modal-footer
```

- `<div class="modal">` - root element for modal window
- `<div class="modal-shadow">` - layer that will darken content behind modal window
  - we need that this element have:
    - 100% height and width - we will use position fixed and zero coordinates for all four sides
    - background color - black with opacity - so we can see content behind shadow
- `<section class="modal-window">` - window with content
  - `modal-window`  has three sections - header, main content and footer with buttons

## Class for modal window

We use class to create instances of modal windows.

In class constructor we will create DOM element, add HTML markup to it with `insertAdjacentHTML()` method and append created element to body with `document.body.appendChild()` method
# Custom JSX Renderer (Using Babel)

As a college student passionate about web development, I built this minimal custom JSX renderer to better understand how JSX transforms into a virtual DOM (VDOM) using a simple `h()` function. The VDOM is then rendered into real DOM elements using a `render()` function. Babel is used to transform JSX into function calls.

## Features

✅ Converts JSX into Virtual DOM (VDOM) structure ✅ Transforms VDOM into real DOM elements ✅ Supports basic attributes and child elements ✅ Uses Babel for JSX transformation

---

## Installation & Setup

### **1️⃣ Add Babel to Your Project**

If you are using a browser environment, include Babel via CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.5/babel.min.js"></script>
    <script src="renderer.js"></script>
```

### **2️⃣ Set Up the JSX Renderer**

Create a new JavaScript file (e.g., `renderer.js`) and define the `h()` and `render()` functions:

```js
/** @jsx h */ // Tells Babel to use `h()` instead of React.createElement

// Hyperscript Generator
function h(nodeName, attributes, ...args) {
    const children = args.length ? [].concat(...args) : null;
    return { nodeName, attributes, children };
}

// Render Virtual DOM to Real DOM
function render(vnode) {
    if (typeof vnode === "string") return document.createTextNode(vnode);
    let domNode = document.createElement(vnode.nodeName);
    Object.keys(vnode.attributes || {}).forEach(attr => domNode.setAttribute(attr, vnode.attributes[attr]));
    (vnode.children || []).forEach(child => domNode.appendChild(render(child)));
    return domNode;
}
```

### **3️⃣ Include `renderer.js` and Write JSX Code (Inside an HTML File)**

Use the `<script type="text/babel">` tag to write JSX inside your HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom JSX Renderer</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.5/babel.min.js"></script>
</head>
<body>
    <script type="text/babel">
        /** @jsx h */
        
        const vdom = <div id="app"><h1>Hello, World!</h1><p>This is a custom JSX Renderer.</p></div>;
        document.body.appendChild(render(vdom));
    </script>
</body>
</html>
```

---

## How It Works

1️⃣ **JSX to Virtual DOM (VDOM)**

- JSX is transformed into `h()` function calls by Babel.
- Example:
  ```jsx
  <div id="app">Hello!</div>
  ```
  Transforms into:
  ```js
  h("div", { id: "app" }, "Hello!")
  ```

2️⃣ **Virtual DOM to Real DOM**

- The `render()` function recursively converts VDOM objects into real DOM elements.

---

## Example VDOM Representation

If you create:

```jsx
const vdom = <div><h1>Title</h1><p>Paragraph</p></div>;
```

It is transformed into:

```js
{
    nodeName: "div",
    attributes: null,
    children: [
        { nodeName: "h1", attributes: null, children: ["Title"] },
        { nodeName: "p", attributes: null, children: ["Paragraph"] }
    ]
}
```

---

## Notes

- This is a minimal JSX renderer and does not include advanced React-like features such as component state, event handling, or diffing.
- It is useful for learning how JSX transformation and virtual DOM rendering work internally.
---

## Contact & Support

I'm a college student exploring frontend development, and I'd love to hear your thoughts or help with any issues!

For any questions, help, or feedback, feel free to reach out:
📧 Email: abhay.goel0674@gmail.com



🚀 **Happy Coding!**


The DOM is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of nodes, where each node corresponds to an element or a piece of text in the document.

JavaScript can be used to manipulate the DOM by creating, modifying, and deleting elements and their attributes, as well as changing the text and styles of elements.

Here are some basic examples of how to use JavaScript to manipulate the DOM:

- To select an element, you can use the `document.getElementById()` method, which takes the id of the element as an argument and returns the element as an object. For example, `document.getElementById("my-element")` returns the element with the id "my-element".

- To create a new element, you can use the `document.createElement()` method, which takes the tag name of the element as an argument and returns a new element object. For example, `document.createElement("p")` creates a new `<p>` element.

- To add an element to the DOM, you can use the `appendChild()` method, which takes the element to be added as an argument. For example, `document.body.appendChild`(newElement) adds the new element to the end of the body.

- To change the text of an element, you can use the `innerHTML` property, which gets or sets the HTML content within an element. For example, `element.innerHTML = "Hello, World!"` changes the text of the element to `"Hello, World!"`

- To change the style of an element, you can use the style property, which gets or sets the inline style of an element. For example, `element.style.color = "red"` changes the text color of the element to red.

- To remove an element from the DOM, you can use the `removeChild()` method, which takes the element to be removed as an argument. For example, `parent.removeChild`(element) removes the element from the parent.

[Modzilla DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
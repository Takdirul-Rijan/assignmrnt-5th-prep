### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer: getElementById("id"): Finds one element by id.

getElementsByClassName("class"): Finds many elements by class, gives HTMLCollection.

querySelector("css"): Finds first match using CSS selector. This method allows us to use any valid CSS selector to find an element. It can select by id, class, or any other CSS selector like attributes, pseudo-classes, etc.

querySelectorAll("css"): It selects all elements that match the CSS selector means finds all match using CSS selector, gives NodeList.

2. How do you **create and insert a new element into the DOM**?

Answer:
let div = document.createElement("div");
div.innerText = "Hello";
document.body.appendChild(div);

3. What is **Event Bubbling** and how does it work?

Answer: When we click child element, the event goes up to parent, then grandparent, and so on.
For example: If we click a button inside a div, first the button’s event runs, then the div’s event runs, then the body, then document. This bubble keeps moving up unless we stop it with stopPropagation().
Click child → runs child handler → then parent → then body → then document.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer: Instead of adding event to every child, we add one event to parent, and check which child was clicked. Saves code, works for new elements too.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer: preventDefault(): stop default action (like link open, form submit).

stopPropagation(): stop event from going up (stop bubbling).

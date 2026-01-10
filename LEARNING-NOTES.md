# 🍽️ Restaurant Ordering App — Development Notes & Lessons

This project is a **practice restaurant ordering app** built using **vanilla HTML, CSS, and JavaScript**.  
The purpose was to learn how to **think like a developer**, structure code cleanly, and manage UI through state—without frameworks.

---

## 1. Project Philosophy

The project was built in this order:

1. HTML structure (static layout)
2. CSS layout and styling
3. State modelling
4. Rendering logic
5. Event handling
6. Edge cases and polish

> Never start JavaScript logic before the UI exists.

---

## 2. State-Driven UI (Core Concept)

The single source of truth for the app is:

```js
orderIdsArray
```

All UI is **derived from state**, not manually manipulated.

**Rule:**  
State changes → render functions run → DOM updates

This prevents UI drift and duplicated logic.

---

## 3. Application Data Flow

```
User Interaction
      ↓
State Mutation (orderIdsArray)
      ↓
Render Coordinator
      ↓
HTML Generation / Calculation
      ↓
DOM Update
```

DOM updates only occur inside render functions.

---

## 4. Separation of Responsibilities

### Generate Functions (Pure)
- Return strings or values
- No DOM access
- No side effects

Examples:
- `generateMenuItemsHtml(menuArray)`
- `generateOrderItemHtml(id)`
- `generateOrderListHtml(orderIds)`
- `calculateOrderTotal(orderIds)`

---

### Render Functions (DOM Only)
- Insert generated HTML
- Show or hide sections
- Never fetch data or calculate values

Examples:
- `renderMenuHtml()`
- `renderOrdersHtml(orderIds)`
- `renderOrderTotal(total)`

---

### Event Handlers (Interaction Only)
- Read user intent
- Update state
- Trigger render

Examples:
- Click `+` → push ID → render
- Click `remove` → splice ID → render
- Submit payment → clear state → render → show confirmation

---

## 5. Why `map()` + `join()` Instead of `forEach()`

Use `map()` when:
- Transforming data
- Returning a value

```js
array.map(...).join('')
```

Avoid `forEach()` for rendering because:
- It returns nothing
- Encourages side effects
- Makes logic harder to test

---

## 6. `reduce()` — The Accumulator Rule

When using `reduce()`:

> Every branch must return the accumulator.

Correct logic:
- Item exists → add price
- Item missing → return total unchanged

Never:
- Return nothing
- Return `0` inside the reducer

---

## 7. Event Delegation

Instead of attaching listeners to each button:
- Attach one listener to a parent
- Use `closest()` to determine intent

Benefits:
- Works with dynamically rendered elements
- Fewer listeners
- Cleaner, scalable logic

---

## 8. `data-*` Attributes for Identity

Menu buttons store IDs using `data-id` attributes.  
This creates a clean bridge between UI and data without DOM traversal hacks.

---

## 9. Modal & Form Handling (Native Approach)

- Use `<dialog>` for modals
- Prevent default form submission
- Use `FormData` for inputs
- Reset form after success

Form submission is **interaction flow**, not state rendering.

---

## 10. Confirmation UI Logic

**Correct model:**
- CSS: hidden by default
- JS: explicitly show/hide

Avoid:
```js
element.style.display = ''
```

Use:
- `'block'` to show
- `'none'` to hide

---

## 11. Single Responsibility Principle (SRP)

SRP is **not per DOM element**.

SRP means:
> One reason to change.

`renderOrdersHtml()` handles:
- Order visibility
- Order list
- Order total
- Hiding confirmation when a new order starts

That is one responsibility: syncing **order UI state**.

---

## 12. Ternaries Are Not Always Appropriate

If you only want to act sometimes:

❌ Bad:
```js
condition ? doThing() : ''
```

✅ Good:
```js
if (condition) doThing()
```

---

## 13. DOM Query Patterns

**Store in a variable when:**
- Used multiple times
- It’s a core UI element
- Naming improves clarity

**Inline query when:**
- Used once
- Intent is obvious

Consistency matters more than rigid rules.

---

## 14. Debugging Lessons

- CSS can silently override JS
- `display: none` beats empty inline styles
- Inspect the DOM before guessing
- One incorrect selector can break everything

---

## 15. Final Architecture Summary

✔ State-driven UI  
✔ Pure generator functions  
✔ One render coordinator  
✔ Event delegation  
✔ No frameworks  
✔ Predictable flow  

---

## 16. What This Project Trained

- Thinking in **data → UI**
- Avoiding DOM spaghetti
- Debugging CSS/JS interactions
- Writing maintainable vanilla JS
- Preparing for frameworks later

---

## Status

This app is **feature-complete** and structurally sound.  
Future work should focus on polish, not architecture.


## z-index

- `z-index` controls the **stacking order** of elements.
- Higher `z-index` values appear **on top** of lower values.
- Only works on **positioned elements** (`position: relative`, `absolute`, `fixed`, `sticky`).

---

## Example

```html
<div class="box box1">Box 1</div>
<div class="box box2">Box 2 (higher z-index)</div>
.box {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50px;
    left: 50px;
}
.box1 {
    background: red;
    z-index: 1;
}
.box2 {
    background: blue;
    z-index: 2; /* Box 2 will appear above Box 1 */
}

```
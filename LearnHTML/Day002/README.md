# Learn HTML

### 块级元素 (Block level element)

​	Example:

```html
<p> Hello World! </p>
```



### 内联元素 (Inline element)

​	Example:

```html
<p> Hello <em>World</em>!</p>
```

### Block level element 与 Inline element 的区别

> - Block level elements form a visible block on a page — they will appear on a new line from whatever content went before it, and any content that goes after it will also appear on a new line. Block level elements tend to be structural elements on the page that represent e.g. paragraphs, lists, navigation menus, footers, etc. A block level element wouldn't be nested inside an inline element, but it might be nested inside another block level element.
> - 块级元素会在页面中分割出一块可见区域，并且会生成新的一行。
> - 块级元素通常是页面上的结构元素，例如 **段落 ，列表 ， 导航菜单** 
> - 块级元素不会嵌套在内联元素中，但是可能会嵌套在另一个块级元素内

> ​	
>
> - Inline elements are those that are contained within block level elements and surround only small parts of the document’s content, not entire paragraphs and groupings of content. An inline element will not cause a new line to appear in the document: they would normally appear inside a paragraph of text, for example an \<a> element (hyperlink) or emphasis elements such as  \<em> or \<strong>. 
> - 内联元素包含在块级元素中，只占一小部分而不是整个段落。
> - 内联元素不会在文档中显示新行

###  空元素 (Empty element)

​	Example:

```html
<img src="#">
```

---


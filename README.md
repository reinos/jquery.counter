# jquery.hideItems [![Build Status](https://api.travis-ci.org/reinos/jquery.hideItems.png?branch=master)](https://travis-ci.org/reinos/jquery.hideItems)

**jquery.hideItems** is a jQuery plugin that hide and/or show specific items of a list of elements.

## Installation

* [npm](http://npmjs.org/)

```bash
npm install jquery.eqHeight
```

* [Bower](http://bower.io)

```bash
bower install jquery.hideItems
```

* [Download](https://github.com/reinos/jquery.hideItems/archive/master.zip)

### Put hideItems in your page

Please note that you have to include hideItems after jQuery.

```html
<script src="http://code.jquery.com/jquery.min.js"></script>

<!-- put hideItems after jQuery -->
<script src="jquery.stickyfooter.js"></script>
```

### Use hideItems in your page

Using stickyFooter is simple.
You have to specify a CSS3 selector for element.

Say your HTML looks like this:

```html
<div class="hideItems"
	<ul class="items">
	    <li>Items 1</li>
	    <li>Items 2</li>
	    <li>Items 3</li>
	    <li>Items 4</li>
	</ul>
	<div class="more"></div>
</div>
```

A simple hideItems setup for the above HTML would be:

```html
<script>
$(document).ready(function() {
    $(".hideItems").hideItems();
});
</script>
```

#### Options

##### moreClass
The class that trigger the plugin to show more items

```javascript
$(".hideItems").eqHeight({
    moreClass: "more"
});
```

##### listClass
The class that holds the list
```javascript
$(".hideItems").eqHeight({
    listClass: "items"
});
```

##### visible
The number of items that are visible

```javascript
$(".hideItems").eqHeight({
    visible: 2
});
```

##### autoClose
Auto close other lists

```javascript
$(".hideItems").eqHeight({
    autoClose: true
});
```

##### toggle
Toggle between lists items. By setting to false, the list stay open even when you open another list.

```javascript
$(".hideItems").eqHeight({
    toggle: true
});
```
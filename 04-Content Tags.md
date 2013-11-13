# Content Tags
Content tags are the meat and potatoes of your MuCow. They are what
actually place things into Muse output. Each of these areas

## HTML Content
Because MuCows are written in XML, you will need to use `<![CDATA[]]>`
to wrap any HTML content you are inserting into the page. For example,
if you want to place an image in the `<pageItemHTML>` tag, you'll
need to do the following:

	<pageItemHTML>
	<![CDATA[
	<img src="http://example.com/logo.jpg" alt="My Logo">
	]]>
	</pageItemHTML>

*Note that for any HTML elements, you can use the HTML class `actAsDiv`
to indicate that you want that element to be a block level element.*
This is especially useful with things like `<img>` or `<iframe>`
content which is not block by default

## Parameters
Parameters are indicated by using `{param_PARAMNAME}`. They will be
replaced at runtime with the current value of that parameter option.

## `<headHTML>`
HTML in this field will be added to the page `<head>` at output time.
Only one copy of the code will be output, even if there are multiple
instances of this widget on a page.

## `<bodyBeginHTML>`
HTML in this field will be added right after the `<body>` open. Only one
copy of the code will be output, even if there are multiple instances
of this widget on a page.

## `<pageItemHTML>`
HTML in this field will be added where the page item is positioned on the
page.

## `<bodyEndHTML>`
HTML in this field will be added right before the close of the `</body>`
element. Only one copy of the code will be output, even if there are
multiple instances of this widget on a page. **Note that jQuery is loaded
prior to this code, so jQuery can be used by any scripts in this area.**

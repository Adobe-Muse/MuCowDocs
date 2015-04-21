# Etiquetas de contenido
Etiquetas de contenido son la carne y las patatas de su MuCow. Ellas son lo que realmente pone las cosas en cada una de estas áreas en la salida de Muse. 

## Contenido HTML
Debido a que el archivo MuCows esta escritos en XML, tendrá que envolver o escribir cualquier contenido HTML dentro de `<![CDATA[]]>`. Por ejemplo, si usted quiere poner una imagen en la etiqueta `<pageItemHTML>` tendrá que hacer lo siguiente:

	<pageItemHTML>
	<![CDATA[
	<img src="http://example.com/logo.jpg" alt="My Logo">
	]]>
	</pageItemHTML>

*Tenga en cuenta que para cualquier elemento HTML, puede utilizar la clase HTML actAsDiv para indicar que desea que el elemento sea un elemento de bloque*. Esto es especialmente útil con cosas como `<img>` o `<iframe>`. Ya que este tipo de contenido no se bloquean por defecto

## Parameters
Los parámetros se indican mediante el uso de `{param_NOMBREDELPARAMETRO}`.  Estos serán reemplazados en tiempo de ejecución con el valor actual de las opciónes establecidas del parámetro.

## `<headHTML>`
El código HTML de este campo se agregará en la etiqueta `<head>` de Muse en el momento de la salida. Sólo una copia del código se dará igual, incluso si hay varias instancias de este widget en una página.

## `<bodyBeginHTML>`
El código HTML de este campo se agregará en la etiqueta `<body>` de Muse en el momento de la salida. Sólo una copia del código se dará igual, incluso si hay varias instancias de este widget en una página.

## `<pageItemHTML>`
HTML in this field will be added where the page item is positioned on the
page.

## `<bodyEndHTML>`
HTML in this field will be added right before the close of the `</body>`
element. Only one copy of the code will be output, even if there are
multiple instances of this widget on a page. **Note that jQuery is loaded
prior to this code, so jQuery can be used by any scripts in this area.**

## `<pageItemPosterHTML>`
HTML in this field will be used while generating the in-app preview of the
widget. This is especially useful for items that will not load due to
restrictions on URLs that can load the content, or on items which have a
bandwidth limit. **This will only be available in MuCows that use format
version 2 or above.**

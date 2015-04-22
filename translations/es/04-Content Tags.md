# Etiquetas de contenido
Etiquetas de contenido son la carne y las patatas de su MuCow. Ellas son las que realmente ponen las cosas en cada una de las áreas en la salida de Muse. 

## Contenido HTML
Debido a que el archivo MuCows esta escritos en XML, tendrá que envolver o escribir cualquier contenido HTML dentro de `<![CDATA[]]>`. Por ejemplo, si usted quiere poner una imagen en la etiqueta `<pageItemHTML>` tendrá que hacer lo siguiente:

	<pageItemHTML>
	<![CDATA[
	<img src="http://example.com/logo.jpg" alt="My Logo">
	]]>
	</pageItemHTML>

*Tenga en cuenta que para cualquier elemento HTML, puede utilizar la clase HTML actAsDiv para indicar que desea que el elemento sea un elemento de bloque*. Esto es especialmente útil con cosas como `<img>` o `<iframe>`. Ya que este tipo de contenido no se bloquean por defecto

## Parameters
Los parámetros se indican mediante el uso de `{param_NOMBREDELPARAMETRO}`.  Estos serán reemplazados en tiempo de ejecución con el valor actual de las opciones establecidas del parámetro.

## `<headHTML>`
El código HTML de este campo se agregará en la etiqueta `<head>` de Muse en el momento de la salida. Estos artículos sólo se incluirán una vez si el HTML en la salida coincide exactamente, incluso si hay varias instancias de este widget en una página.

## `<bodyBeginHTML>`
El código HTML de este campo se agregará en la etiqueta `<body>` de Muse en el momento de la salida. Estos artículos sólo se incluirán una vez si el HTML en la salida coincide exactamente, incluso si hay varias instancias de este widget en una página.

## `<pageItemHTML>`
El código HTML añadido en esta sección se reflejara en la posición en que sea colocado dentro de Muse. **Normalmente aquí debe de ir el código HTML que compone su widget**.

## `<bodyEndHTML>`
El código HTML añadido en esta sección se reflejara exactamente antes de la etiqueta de cierre `</body>` dentro de Muse. **Esta sección es ideal para incluir script jQuery o código Javascript**.

## `<pageItemPosterHTML>`
El HTML en este campo se utilizará para generar la vista previa del widget. Esto es especialmente útil para los artículos que no se cargan debido a las restricciones en las direcciones URL que pueden cargar el contenido o en artículos que tienen un límite de ancho de banda.  **Esto solo esta disponible en MuCows que utilizan el formato de la versión 2 o superior..**

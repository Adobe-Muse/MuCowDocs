# HTMLWidget

la etiqueta `<HTMLWidget>` es la etiqueta de nivel superior de todos los archivos MuCow.

## Ejemplo

	<?xml version="1.0" encoding="UTF-8"?>
	<HTMLWidget name="My Widget" formatNumber="2"
			localization="none" creator="Mi nombre" 
			defaultWidth="50" defaultHeight="50" 
			isResizable="true">
		<!--
			... El contenido va aquí ...
		-->
	</HTMLWidget>

## Atributos
| Nombre | Valores | Descripción |
|---|---|---|
| name | String | **Obligatorio**. El nombre del widget. Se mostrará en el cuadro Opciones de diálogo y también en la tira de control |
| formatNumber | 3&nbsp;(Muse&nbsp;2014.3+) <br> 2&nbsp;(Muse&nbsp;2014.0+) <br> 1&nbsp;(Muse&nbsp;7.0+) | **Obligatorio**. El número de formato del archivo. Las versiones actuales de Muse apoyan los tres valores de formato 3, 2, 1. |
| localization | `none` <br> `stringTable` | **Obligatorio**. El tipo de [localización][1] para este widget |
| termsURL | URL | La URL a una página de 'Términos de Uso'. Si no está vacío, un enlace a esta URL aparecerá en las opciones de diálogo . Si especifica términos URL, no especifique los términos del texto |
| termsText | String | Texto HTML que aparesera en 'Términos de uso' del cuadro de diálogo. El texto puede incluir enlaces a direcciones URL. Si especifica los términos del texto, no especifique términos URL |
| creator | String | Indica el nombre o dirección de email de la persona o empresa que creó el widget |
| defaultWidth | Number | Indica la anchura inicial para el elemento de página HTML |
| defaultHeight | Number | Indica la altura inicial para el elemento de página HTML |
| isResizable | Boolean | Indica si el elemento de la página puede ser cambiado de tamaño por el usuario. *El valor por defecto es verdadero* (true) |
| minWidth | Number | Indica la anchura mínima permitida para el elemento de la página. |
| maxWidth | Number | Indica la anchura máxima permitida para el elemento de la página. Al establecer este valor significa que el widget ya no puede ser un elemento de página 100% de ancho (full width). |
| minHeight | Number | Indica la altura mínima permitida para el elemento de la página. |
| maxHeight | Number | Indica la altura máxima permitida para el elemento de página. |

## Etiquetas hijos

El `<HTMLWidget>` **debe contener al menos una [etiqueta de contenido][2]** y puede contener opcionalmente un `<parameters>` que especificará los parámetros para el widget y una etiqueta de `<stringTable>` para la localización. La etiqueta `<parameters>` puede contener cualquier número de las [etiquetas de parámetro][3]. Consulte la sección [localización][1] para obtener más información acerca de la etiqueta `<stringTable>`.

 [1]: ./05-Localization.md
 [2]: ./04-Content%20Tags.md
 [3]: ./03-Parameter%20Tags.md

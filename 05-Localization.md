# Localization

Las etiquetas de localización le permiten mostrar el idioma del widget basado en el idioma en que se este utilizando Muse en ese momento. Usted puede utilizar esto para hacer más fácil la personalización del Widget para los usuarios que utilizan Muse en otros idiomas.

## `<stringTable>`

Esta es la etiqueta principal para permitir la traducción de su widget a otros idiomas. Para que este elemento pueda tener algún efecto, necesitará establecer el atributo de `localization` dentro de `stringTable`.

Un `<stringTable>` debe contener al menos una etiqueta `<locale>` pero puede contener tantas como sean necesarias.

### Ejemplos

	<stringTable>
		<locale name="en_US">
			<string keyString="kBlinkWidget" translation="Blinking Text"/>
			<string keyString="kUserText" translation="Text:"/>
		</locale>
		<locale name="fr_FR">
			<string keyString="kBlinkWidget" translation="Texte Clignotant"/>
			<string keyString="kUserText" translation="Texte :"/>
		</locale>
	</stringTable>

## `<locale>`

Este es un escenario que ha traducido sus propiedades. Esto deben coincidir con uno de los códigos de idioma disponibles en Muse.

Una etiqueta `<locale>` debe contener una etiqueta hijo `<string>` para cada valor de cadena traducida a utilizar en el widget.

### Atributos necesarios
| Nombre | Valores | Descripción |
|---|---|---|
| name | Any Muse Locale | Se utiliza para darle el valor al atributo name dentro de locale |

### Ejemplos

Ingles (US)

	<locale name="en_US">

Francés

	<locale name="fr_FR">

Japones

	<local name="jp_JP">

## `<string>`

Un String es el contenido real traducido que Muse mostrara al usuario final. Estas contendrán un atributo `keystring` y un atributo de `translation`. El atributo `keystring` sera el mismo en todos los lugares y es lo que coloca en el lugar de la cadena real. Vea la sección de ejemplos para obtener más información.

### Atributos necesarios
| Nombre | Valores | Descripción |
|---|---|---|
| keyString | String | La clave que se intercambia al traducir las cadenas |
| translation | String | La cadena traducida para este idioma |

### Ejemplos


	<parameters>
		<text name="userText" label="kUserText" defaultValue="Hello World!"/>
	</parameters>
	
	<stringTable>
		<locale name="en_US">
			<string keyString="kUserText" translation="Text:"/>
		</locale>
		<locale name="fr_FR">
			<string keyString="kUserText" translation="Texte:"/>
		</locale>
	</stringTable>

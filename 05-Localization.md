# Localization

The localization tags enable you to localize your widget based on the
language of Muse. You can use this to make it easier for others users
who use Muse in different languages to customize the MuCow.

## `<stringTable>`

This is the primary method at the moment for enabling translation of
your widget to other languages. For this element to have any effect,
you'll need to make sure to set the `localization` attribute to
`stringTable`.

A `<stringTable>` must contain at least 1 `<locale>` tag, but can
contain as many as needed.

### Examples

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

This is a locale that you have translated your properties to. These
should match one of the language codes available in Muse.

A `<locale>` tag should contain a `<string>` tag as a child for each
translated string value to be used in the widget.

### Required Attributes
| Name | Values | Description |
|---|---|---|
| name | Any Muse Locale | The locale that these `<string>` tags are for |

### Examples

English (US)

	<locale name="en_US">

French

	<locale name="fr_FR">

Japanese

	<local name="jp_JP">

## `<string>`

A string is the actual translated content that Muse will show in to
the end user. It will contain a `keyString` and a `translation`
attribute. The `keyString` attribute will be the same across the
locales, and is what you will put in the place of the real string.
See the examples section for more information.

### Required Attributes
| Name | Values | Description |
|---|---|---|
| keyString | String | The key that will be swapped out when translating the strings |
| translation | String | The translated string for this locale |

### Examples


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

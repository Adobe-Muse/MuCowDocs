# HTMLWidget

The `<HTMLWidget>` tag is the top level tag of all MuCow files.

## Example

	<?xml version="1.0" encoding="UTF-8"?>
	<HTMLWidget name="My Widget" formatNumber="2"
			localization="none" creator="My Name" 
			defaultWidth="50" defaultHeight="50" 
			isResizable="true">
		<!--
			... Content Goes Here ...
		-->
	</HTMLWidget>

## Attributes
| Name | Values | Description |
|---|---|---|
| name | String | **Required.** The name of the widget. Will be displayed in the options dialog, and also in the control strip |
| formatNum | 3&nbsp;(Muse&nbsp;2014.3+) <br> 2&nbsp;(Muse&nbsp;2014.0+) <br> 1&nbsp;(Muse&nbsp;7.0+) | **Required.** The format number of this file. Current Muse versions support format 3 and below. |
| localization | `none` <br> `stringTable` | **Required.** The type of [localization][1] for this widget |
| termsURL | URL | The URL to a 'Terms of Use' page. A link to this URL will appear in options dialog if non-empty. If you specify termsURL, do not specify termsText |
| termsText | String | HTML text to appear in a 'Terms of Use' dialog. Text may include links to URLs. If you specify termsText, do not specify termsURL |
| creator | String | Indicates the name or email address of the person or company who created this HTML widget file |
| defaultWidth | Number | Indicates the initial width for the HTML page item |
| defaultHeight | Number | Indicates the initial height for the HTML page item |
| isResizable | Boolean | Indicates if the page item should be user resizable. *Default value is true* |
| minWidth | Number | Indicates the minimum allowable width for the page item. |
| maxWidth | Number | Indicates the maximum allowable width for the page item. Setting this value means the widget can no longer be a 100% width page item. |
| minHeight | Number | Indicates the minimum allowable height for the page item. |
| maxHeight | Number | Indicates the maximum allowable height for the page item. |

## Child Tags

The `<HTMLWidget>` **must contain at least 1 [content tag][2]** and
can optionally contain a `<parameters>` tag, which will specify the
parameters for the widget and a `<stringTable>` tag for localization.
The `<parameters>` tag can contain any number of the [parameter
tags][3]. Check the [localization][1] section for more information
about the `<stringTable>` tag.

 [1]: ./05-Localization.md
 [2]: ./04-Content%20Tags.md
 [3]: ./03-Parameter%20Tags.md
# Content Tags
Content tags are the meat and potatoes of your MuCow. They are what
actually place things into Muse output. Each of these areas can be 
used to add content to the resulting output HTML.

Content tags can be global, as the only content generated, or as optional
content written as a condition of a Boolean or List option value. 

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
content which is not block by default.

## Parameters
Parameters are indicated by using `{param_PARAMNAME}`. They will be
replaced at runtime with the current value of that parameter option.

## `<documentReadyJS>`
Javascript in this field will be added to the page's document ready 
handler. Any content added to this field is wrapped in its own function
to avoid co-mingling with other script content.

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

## `<pageItemPosterHTML>`
HTML in this field will be used while generating the in-app preview of the
widget. This is especially useful for items that will not load due to
restrictions on URLs that can load the content, or on items which have a
bandwidth limit. **This will only be available in MuCows that use format
version 2 or above.**

## Global vs. Conditional content
The `<trueVal>`, `<falseVal>`, and `<value>` tags (children of `<bool>` and
`<list>` tags) can have child content tags.  Content tags on this level are 
generated based on the condition of the value selected at runtime and are
in contrast to global content tags which are always generated regardless of
what a list item was selected or if a checkbox was checked. 

Widget authors need to be careful of using conditionals because MuCows can 
have either a conditional content or global content and each condition will
write code that essentially trumps other conditions.  Mixing conditional value
requires some sort of javascript or web-service to  build the html when there
is more than one conditional value in a widget.

Starting with format version 4, however, conditional content can be "built-up".
This means that conditions can generate the code specific for that option 
without the need to worry about the code for one condition stepping on the
code generated from another condition. 

Also starting with version 4: conditional content is no longer exclusive to
the output -- meaning that you can have have global content that includes 
conditional content.  

To enable this feature, you'll need to add the following to your 
HTMLWidget tag:

    supportsGlobalAndOptionContentTags="true"

which will enable you to write code that resembles the following:
```xml
<parameters>
    <bool name="incEMail" defaultValue="true">
        <trueVal value="true">
            <pageItemHTML>
                <![CDATA[<p><a href="mailto:info@adobe.com">info@adobe.com</a></p>]]>
            </pageItemHTML>
        </trueVal>
        <falseVal value="false"/>
    </bool>
    <bool name="incCoAddr" defaultValue="true">
        <trueVal value="true">
            <pageItemHTML>
                <![CDATA[<p>345 Park Ave<br/>San Jose, CA 95110</p>]]>
            </pageItemHTML>
        </trueVal>
        <falseVal value="false"/>
    </bool>
</parameters>
<pageItemHTML>
    <!CDATA[<p>Contact Us:<br/>1-800-866-8006</p>]>
</pageItemHTML>
```

This allows for each conditional item to generate a snippet of HTML for output 
without the need to write complex javascript tests to modify the document at runtime.

Also new with version 4 is the conditional tags now support all 4 content tags. 
Version 3 and below only supported "pageItemHTML" content to be generated from
conditional elements.  Version 4 will support "pageItemHTML", "bodyBeginHTML", 
"bodyEndHTML" and "headHTML" content tags.

```xml
<parameters>
    <bool name="addAutoComplete" defaultValue="true">
        <trueVal value="true">
            <headHTML>
            <![CDATA[<script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
                <script>
                    $(function() {
                        var tags = [
                            "Adobe",
                            "Microsoft",
                            "Apple",
                            "Oracle"
                        ];
                        // add autocomplete to every text input field
                        $("input[type='text']").autocomplete({
                            source: tags
                        });
                    });
                </script>
            ]]>
            </headHTML>
        </trueVal>
        <falseVal value="false"/>
    </bool>
</parameters>
```

Also starting with V4, only one of the `<bool>` tags are required to have content tags.  
Previous versions would require both `<trueVal>` and `<falseVal>` to have a `<pageItem>`
tag if one of them had it but this is no longer the case.  An empty content tag is 
automatically created for you if you omit one of them.

# Getting Started
Welcome to the Muse Configurable Options Widget (MuCow) documentation. Here you
will learn more about making your own HTML embed widgets that can be placed in
Muse and will include a set of user-facing configurable options. This format
will allow you to create content not currently available in Muse, and easily
share it with others in the community. Note that this feature allows you to
create **HTML embed widgets** &mdash; not "standard" widgets like Slideshows
and Accordion widgets for example.

On this site, you'll find documentation for the format itself, some examples
that will help you get started, and resources for distributing your final MuCow
and getting noticed. Hopefully this will be your one-stop-shop for writing
widgets in Muse. We'll also do our best to include recommendations for the best
ways to create, debug, and optimize your widget, as well as some good ways to
share it with the community.

Here are some common questions people have. If you don't see your question
here, feel free to ask it in the [forums][1] and others can help you out.

## What is a MuCow?
A MuCow is an Adobe Muse Configurable Options Widget. It is a extension format
that allows you, the user, to write your very own widgets for Muse. With this
widget, you can include a set of user configurable options that enable you to
change your behavior based on parameters to your script. A MuCow itself is
written in a simple XML format, and saved as a .mucow file format.

## How can I make one?
Simply open up your favorite text or XML editor, and follow the documentation
here. Once you're done, save it as a .mucow file, and place it into Muse.

## How do I place it?
Adding a MuCow into Muse is done in the same manner in which an image, Flash,
or Edge Animate file are added. Simply use the "File > Place" menu item, or
the keyboard shortcut CTRL/CMD + D.

## Where can I share it?
The recommended way to share your MuCow with others is by adding it to a
library, exporting the library, and submitting it to the [Adobe Muse
Exchange][2]. You may also submit the .mucow file if you'd like it to be used
as an example by others who want to create their own. If you do choose to
include both, simply place the files into a .zip folder, and upload that
instead. To learn more about creating user library items please refer to
[the help page for the library panel][3].

## Can I use jQuery?

**Yes**. You can use the version of jQuery we use by placing all script content
in [`<bodyEndHTML>`][4] tag. You can also check out our [jQuery Tutorial][5].

 [1]: http://forums.adobe.com/community/muse
 [2]: http://muse.adobe.com/exchange
 [3]: http://helpx.adobe.com/en/muse/tutorials/organizing-reusing-elements-using-library-panel.html
 [4]: ./04-Content%20Tags.md
 [5]: ./06-Tutorials.md
 
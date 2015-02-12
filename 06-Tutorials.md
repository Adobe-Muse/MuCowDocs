# Tutorials
In this section, you'll find tutorials related to accomplishing common
tasks you're likely to do with a MuCow. These will hopefully give you
an idea of how to accomplish what you need, and, as always, feel free
to ask any questions in the [forums][1].

## Using jQuery

[jQuery][2] is a very common thing for people to want to use, and we
will automatically load in jQuery when a Muse page loads. **You should
not load your own version of jQuery**. This will increase load times,
and cause issues with Muse exported code. Instead, if you include your
JavaScript in the [`<bodyEndHTML>`][3] you will be able to use the
version of jQuery we load.

Combining this with things like the [built-in ID parameter][4] allows
you to directly manipulate the page item you'd like using standard
jQuery functionality. For example, if I wanted to increment a counter
every time the user clicked on the page item, it might look something
like this.

	<?xml version="1.0" encoding="UTF-8"?>
	<HTMLWidget name="Example" formatNumber="1" localization="none" creator="Adobe Muse Team">
		<parameters>
			<builtIn name="itemUID"/>
		</parameters>
		<pageItemHTML>
	<![CDATA[
			You've clicked on this item <span class="count">0</span> times.
	]]>
		</pageItemHTML>
		<bodyEndHTML>
	<![CDATA[
			<script type="text/javascript">
				$("#{param_itemUID}").data('clickCount', 0).on('click', function () {
						$(this).data('clickCount', $(this).data('clickCount') + 1);
						$(this).find('.count').text($(this).data('clickCount'));
					});
			</script>
	]]>
		</bodyEndHTML>
	</HTMLWidget>

 [1]: http://forums.adobe.com/community/muse
 [2]: http://jquery.com
 [3]: ./04-Content%20Tags.md
 [4]: ./03-Parameter%20Tags.md
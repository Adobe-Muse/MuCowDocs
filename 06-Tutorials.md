# Tutoriales
En esta sección encontrarás tutoriales relacionados con el cumplimiento de las tareas comunes que puedes hacer con un MuCow. Estas te darán una idea de cómo lograr lo que usted necesita y, como siempre, no dude preguntar sobre cualquier duda que tenga en los [forums][1].

## Usando jQuery

[jQuery][2]  es algo muy común y tenemos muy buenas noticias al respecto para usted, Muse cargara automáticamente una versión de la librería jQuery, así que usted no tendrá necesidad de hacerlo ya que esto aumentaría los tiempos de carga y le causara problemas con muse. Así que solo debe centrarse a escribir código Javascript dentro de [`<bodyEndHTML>`][3] mientras nosotros cargamos jQuery por usted.

Combinando esto con cosas como el [built-in ID parameter][4] que le permite manipular directamente el elemento de página en donde desea utilizar la funcionalidad estándar de jQuery. Por ejemplo, si quiere incrementar un contador cada vez que el usuario hace clic en el elemento de página, podría ser algo como esto.

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
<?php global $config; ?>

<footer>
	<?php
	$network = $config['network'];
	$now = Carbon\Carbon::now();

	echo '<div id="network-links">';
	foreach( $network as $id => $link ) {
		if( $id !== 0 ) {
			echo ' | ';
		}
		echo '<a href="' . $link['url'] . '" title="' . $link['name'] . '">' . $link['name'] . '</a>';
	}
	echo '</div>
<div id="dynamic-time">built: ' . $now->format('l, jS') . ' of ' . $now->format('F Y H:i') . '</div>
<div id="copyright"><a href="https://github.com/IE-Dev/ie-dev.github.io/fork">Fork on GitHub</a> | &copy; Ian Everall 2022 - ' . date('Y') . '</div>';
	?>
</footer>

<script src="js/vendor/modernizr-3.11.2.min.js"></script>
<script src="dist/app.js"></script>

</body>

</html>

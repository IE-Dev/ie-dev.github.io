<?php global $config;

$engines = [];
foreach( $config['search_engines'] as $engine => $enabled ) {
	if($enabled) {
		$engines[] = $engine;
	}
}

$engines = implode(',', $engines);

?>


<div id="dynamic-search" class="input-group" data-engines="<?php echo $engines; ?>"></div>

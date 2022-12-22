<?php

global $config;

echo '<div class="panel">
	<div class="panel-outer">
		<div class="panel-inner">';

include_once "partials/header.php";
include_once "partials/search_bar.php";

$columns = $config['columns'];

function outputContent($content): void {
	switch($content['type']) {
		case 'title':
			echo '<h2>' . $content['value'] . '</h2>';
			break;

		case 'text':
			echo '<li class="text">' . $content['value'] . '</li>';
			break;

		case 'link':
			echo '<li class="link"><a href="' . $content['url'] . '" title="' . $content['name'] . '">' . $content['name'] . '</a></li>';
			break;

		default:
			break;
	}
}

function outputColumn($columns, $id): void {
	if( !empty($columns[$id]) && is_array($columns[$id]) ) {
		$isLink = false;
		foreach($columns[$id] as $content) {
			if($isLink === false && $content['type'] === 'link') {
				echo '<ul>';
				$isLink = true;
			}
			outputContent( $content );
			if($isLink === true && $content['type'] !== 'link') {
				echo '</ul>';
				$isLink = false;
			}
		}
		if($isLink === true) {
			echo '</ul>';
			$isLink = false;
		}
	} else {
		echo '';
	}
}

echo '<div class="columns">';

foreach($columns as $name => $value) {
	echo '<div class="column ' . $name . '">';
	outputColumn( $columns, $name );
	echo '</div>';
}

echo '</div>';
echo '</div>
		<div class="panel-image"></div>
	</div>
</div>';

<?php

global $config;

//echo print_r($config, 1);

if($config['header']['custom']) {
	echo '<header>
		<h1>' . $config['header']['content'] . '</h1>
	</header>';
} else {
	echo '<header>
		<div id="dynamic-welcome">Welcome</div>
	</header>';
}

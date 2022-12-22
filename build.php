<?php

use Symfony\Component\Yaml\Yaml;
use Symfony\Component\Yaml\Exception\ParseException;

include('vendor/autoload.php');

$cwd = getcwd();

$yaml_config = file_get_contents($cwd . '/config.yml');

try {
	$config = Yaml::parse($yaml_config);
} catch (ParseException $exception) {
	die('Unable to parse the YAML string:' . $exception->getMessage());
}

ob_start();

	include_once "src/php/header.php";
	include_once "src/php/content.php";
	include_once "src/php/footer.php";

$page = ob_get_contents();
ob_end_clean();

$file = $cwd . '/index.html';
$fw = fopen($file, "w");
fputs($fw,$page, strlen($page));
fclose($fw);

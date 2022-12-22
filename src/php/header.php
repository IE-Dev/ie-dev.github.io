<!doctype html>
<html class="no-js" lang="en">

<head>
	<meta charset="utf-8">
	<title>IE-Dev Start Page</title>
	<meta name="description" content="a custom start page for Ian Everall">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<meta property="og:title" content="IE-Dev Start Page">
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://ie-dev.github.io/">
	<meta property="og:image" content="/image/icon.png">

	<meta name="theme-color" content="#6f36ca">

	<link rel="icon" href="/image/favicon.ico" sizes="any">
	<link rel="icon" href="/image/icon.svg" type="image/svg+xml">
	<link rel="apple-touch-icon" href="/image/icon.png">

	<style>
		<?php
		$cwd = getcwd();
		echo file_get_contents( $cwd . '/dist/main.css' );
		?>
	</style>
	<link rel="stylesheet" href="css/vendor/normalize.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,400&family=Source+Sans+Pro:ital,wght@0,900;1,900&display=swap" rel="stylesheet">
</head>

<body>

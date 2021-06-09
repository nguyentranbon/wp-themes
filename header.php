<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package hazo
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php the_field('script_head', 'option'); ?>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<?php
	$custom_logo_id = get_theme_mod('custom_logo');
	$image = wp_get_attachment_image_src($custom_logo_id, 'full');
	printf(
		'<a href="%1$s" title="%2$s"><img src="%3$s"></a>',
		get_bloginfo('url'),
		get_bloginfo('description'),
		$image[0]
	);
	?>
	<?php
	wp_nav_menu(array(
		'theme_location'  => 'menu-1',
		'container'       => '__return_false',
		'fallback_cb'     => '__return_false',
		'items_wrap'      => '%3$s',
		'depth'           => 2,

	));
	?>
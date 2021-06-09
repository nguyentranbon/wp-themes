<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package hazo
 */

get_header();
?>
<?php the_title() ?>
	<?php
    while (have_posts()) :
        the_post();
        the_content();
    endwhile; ?>
<?php
get_footer();

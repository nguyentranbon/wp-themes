<?php

/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package hazo
 */
?>
Tiêu đề: <?php the_title() ?>
Đường dẫn: <?php the_permalink() ?>
Mô tả ngắn: <?php echo excerpt(30) ?>
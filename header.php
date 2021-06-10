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

	<header id="header">
		<div class="header__body">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 d-lg-block d-none">
						<div class="header__body-logo">
							<?php
								$custom_logo_id = get_theme_mod('custom_logo');
								$image = wp_get_attachment_image_src($custom_logo_id, 'full');
								printf(
									'<a href="%1$s" title="%2$s"><img src="%3$s" alt="logo"></a>',
									get_bloginfo('url'),
									get_bloginfo('description'),
									$image[0],
								);
							?>
						</div>
					</div>
					<div class="col-lg-9 d-lg-block d-none">
						<div class="header__body-form">
							<div class="row">
								<div class="col-lg-6">
									<form action="<?php echo get_home_url() ?>" class="search-form">
										<input type="text" name="s" placeholder="<?php _e('Tìm kiếm', 'hazo') ?>...">
										<input type="hidden" name="post_type" value="product">
										<button type="submit">
											<i class="search-icon icon"></i>
										</button>
									</form>
								</div>
								<div class="col-lg-3">
									<div class="header__body-cart">
										<a href="<?php echo get_permalink(wc_get_page_id('cart')); ?>" class="header__body-item">
											<?php global $woocommerce; ?>
											<div class="">
												<i class="cart-icon icon"></i>
												<span class="count"><?php echo $woocommerce->cart->cart_contents_count;?></span>
											</div>
											<div class="cart-txt">
												<strong><?php _e('Giỏ hàng của bạn', 'hazo') ?></strong>
												<span><?php _e('Vận chuyển toàn quốc', 'hazo') ?></span>
											</div>

										</a>
									</div>
								</div>
								<div class="col-lg-3">
									<a href="<?php echo get_permalink(wc_get_page_id('myaccount')); ?>" class="header__body-account text-dark">
										<div class="account-item d-flex align-items-center">
											<div class="">
												<i class="user-ion icon"></i>
											</div>
											<div class="ml-2">
												<strong><?php _e('Tài khoản', 'hazo') ?></strong>
												<div class="account">
													<?php if (is_user_logged_in()) {
														$current_user = wp_get_current_user(); ?>
														<span><?php _e('Xin chào', 'hazo') ?>, <?php echo $current_user->display_name  ?></span>
													<?php } else { ?>
														<span><?php _e('Đăng nhập / Đăng ký', 'hazo') ?></span>
													<?php } ?>
												</div>
											</div>

										</div>
									</a>
								</div>
							</div>
						</div>
						<div class="header-contact">
							<?php if(get_field('h1_content', 'option')) { ?>
								<a href="tel:<?php the_field('h1_link', 'option') ?>">
									<i class="icon phone-icon"></i>
									<?php _e('Hotline', 'hazo') ?>:
									<span><?php the_field('h1_content', 'option') ?></span>
								</a>
							<?php } ?>
							<?php if(get_field('h2_content', 'option')) { ?>
								<a href="mailto:<?php the_field('h2_email', 'option') ?>" class="header-email">
									<i class="icon email-icon"></i>
									<?php the_field('h2_content', 'option') ?>
								</a>
							<?php } ?>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="header__bottom header__navbar d-lg-block d-none">
			<div class="container relative">
				<ul class="header__navbar-menu d-flex justify-content-center align-items-center">
					<?php
					wp_nav_menu(array(
						'theme_location'  => 'menu-1',
						'container'       => '__return_false',
						'fallback_cb'     => '__return_false',
						'items_wrap'      => '%3$s',
						'depth'           => 2,

					));
					?>
				</ul>
			</div>
		</div>

	</header>


<template lang="pug">
header.header.header--main(data-aos="fade-down" data-aos-delay="100")
		.header__container
			.header__left
				router-link.header__logo(to="/")
					img(src="@/assets/images/00_logo/plutus_mark.png" srcset="@/assets/images/00_logo/plutus_mark@2x.png" alt="logo")
					| plutus.art
				ul.header__nav.for-desktop
					li
						
						router-link.header__link(to="/explore")
							| Explore
					
					li
						router-link.header__link(to="/collections")
							| Collections
					li
						router-link.header__link(to="/rewards")
							| Rewards
			.header__right.for-desktop
				.header__switch.js-switch
					svg-icon(name='moon')
					svg-icon(name='moon_f')
				a.button.js-connect(href="" target="_blank")
					.button__inner
						| Connect wallet
				a.header__profile.js-profile.is-hidden(href="" target="_blank")
					.header__icon
						img(src="@/assets/images/meta-6.png")
					.header__text
						|
			.header__burger.js-burger.for-mobile
				svg-icon(name='menu')
				svg-icon(name='close')
.nav.for-mobile
		ul.nav__list.for-mobile
			li
				router-link.nav__link(to="/explore")
					| Explore
			
			li
				router-link.nav__link(to="/collections")
					| Collections
			li
				router-link.nav__link(to="/rewards")
					| Rewards
		.nav__themes
			.nav__themes-left
				.nav__switch.js-switch
					svg-icon(name='moon')
					svg-icon(name='moon_f')
				.nav__themes-text.for-mobile
					| Dark mode
			label.nav__themes-check.js-switch.for-mobile
				//input(type="checkbox")
				span
		a.button.button--full.js-connect(href="" target="_blank")
			.button__inner
				| Connect wallet
		a.header__profile.js-profile.is-hidden(href="" target="_blank")
			.header__icon
				img(src="@/assets/images/meta-6.png")
			.header__text
				|

</template>

<script>
import SvgIcon from "@/components/SvgIcon";
import vars from "@/helpers";
import $ from 'jquery'

import gsap from 'gsap';

export default {
	name: "HeaderComponent",
	components: {SvgIcon},
	data() {
		return {
			main: this.$route.path === '/' ? '/' : false
		}
	},
	mounted() {
		
		const button = vars.$document.find('.js-switch');
		let themeLocal = localStorage.getItem('theme');
		const hours = new Date().getHours()
		const isDayTime = hours > 6 && hours < 20;
		
		const dark = () => {
			vars.$html.addClass('is-white');
			vars.$html.find('.nav__themes-text').text('Dark mode');
			localStorage.setItem('theme', 'dark');
			
			gsap.timeline().to(vars.$body.find('main'), 0.5, {
				autoAlpha: 0,
				immediateRender: false,
			}).call(() => {
				vars.$document.find('.content').removeClass('is-hidden');
			}).from(vars.$body.find('main'), 0.5, {
				autoAlpha: 0,
				clearProps: true,
			})
		}
		
		const light = () => {
			vars.$html.removeClass('is-white');
			vars.$html.find('.nav__themes-text').text('Light mode');
			localStorage.setItem('theme', 'white');
			
			gsap.timeline().to(vars.$body.find('main'), 0.5, {
				autoAlpha: 0,
				immediateRender: false
			}).call(() => {
				vars.$document.find('.content').removeClass('is-hidden');
			}).from(vars.$body.find('main'), 0.5, {
				autoAlpha: 0,
				clearProps: true,
			})
		}
		
		if (isDayTime) {
			light();
		} else {
			dark();
		}
		
		if (themeLocal === 'dark') {
			dark();
		} else {
			light();
		}
		
		button.on('click', () => {
			console.log('click')
			if (!vars.$html.hasClass('is-white')) {
				console.log('dark')
				dark();
				
			} else {
				console.log('light')
				light();
			}
		});
		
		function openMenu() {
			return new Promise((resolve) => {
				$('.js-burger').addClass('is-disabled').attr('disabled', true);
				
				vars.lockScroll(true, $('.nav'), 'nav');
				
				$('.nav').addClass('is-menu-opened');
				vars.$header.addClass('is-menu-opened');
				// vars.$nav.removeClass('is-hidden');
				
				setImmediate(() => {
					vars.$body.css('padding-right', `${vars.getScrollbarWidth()}px`);
					vars.$nav.css('right', `${vars.getScrollbarWidth()}px`);
				});
				
				setTimeout(() => {
					vars.$nav.addClass('is-active');
					$('.js-burger').removeClass('is-disabled').attr('disabled', false);
					
					resolve();
				}, 100);
			});
		}
		
		function closeMenu() {
			return new Promise((resolve) => {
				$('.js-burger').addClass('is-disabled').attr('disabled', true);
				
				vars.lockScroll(false, $('.nav'), 'nav');
				vars.$body.css('padding-right', '');
				$('.nav').css('right', '');
				
				$('.nav').removeClass('is-menu-opened');
				vars.$header.removeClass('is-menu-opened');
				$('.header__menu').removeClass('is-active');
				
				setTimeout(() => {
					// vars.$nav.addClass('is-hidden');
					$('.js-burger').removeClass('is-disabled').attr('disabled', false);
					
					resolve();
				}, 500);
			});
		}
		
		function toggleMenu(event) {
			console.log(event)
			event.preventDefault();
			event.stopPropagation();
			
			if ($(event.currentTarget).hasClass('is-active')) {
				$(event.currentTarget).removeClass('is-active');
				closeMenu();
			} else {
				$(event.currentTarget).addClass('is-active');
				openMenu();
			}
		}
		
		vars.$header = $('.header');
		
		$('.js-burger').on('click.header', toggleMenu);
		
		$('.nav__link').on('click', () => {
			closeMenu();
			$('.js-burger').removeClass('is-active');
		})
		
		vars.$document
				.on('click.nav', (e) => {
					console.log(e)
					let $container = $('.header__menu');
					
					if ($container.is(e.target) && $container.has(e.target).length === 0 && $container.hasClass('is-active')) {
						closeMenu();
						$('.js-burger').removeClass('is-active');
					}
				})
				.on('keyup.header', (e) => {
					if ((e.key === 'Escape' || e.key === 'Esc') && $('.header__menu').hasClass('is-active')) {
						closeMenu();
						$('.js-burger').removeClass('is-active');
					}
				});
	},
}
</script>

<style lang="scss">
@import "Style";
</style>
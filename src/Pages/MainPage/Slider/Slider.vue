<template lang="pug">
section.section.section--slider(data-aos="fade-up" data-aos-delay="100")
		.section__container.section__container--slider
			.slider.swiper
				.swiper-wrapper
					.swiper-slide
						.slider__item
							.slider__left
								.slider__question
									span
										| 📎
									| did you know?
								.slider__title.title.title--md
									| Trading fees are 20% lower than OpemSea.
							.slider__right
								.slider__text
									| and when you also earn rewards for trading on Plutus. why would you want to trade anywhere else?
								a.slider__button(href="")
									| Connect wallet
				.slider__nav.slider__nav--prev
					svg-icon(name='chevron_left_white')
				.slider__nav.slider__nav--next
					svg-icon(name='chevron_right_white')


</template>

<script>
import SvgIcon from "@/components/SvgIcon";
import Swiper from 'swiper/swiper-bundle.min';
import $ from 'jquery';
export default {
	name: "SliderComponent",
	components: {SvgIcon},
	mounted() {
		if ($('.slider').length) {
			setTimeout(() => {
				new Swiper('.slider', {
					slidesPerView: 1,
					spaceBetween: 0,
					loop: true,
					navigation: {
						nextEl: '.slider__nav--next',
						prevEl: '.slider__nav--prev',
					},
				});
			}, 1000)
		}
	}
}
</script>

<style lang="scss">
@import "Styles";
</style>
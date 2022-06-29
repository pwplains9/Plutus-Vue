<template lang="pug">
.explore
		.explore__top
			
			.explore__people
				.explore__people-image
					img(src="@/assets/images/image.png")
				.explore__people-info
					.explore__people-title
						| daizong.eth
					.explore__people-content
						.explore__people-number
							| 0x99303Bd..e5707
						.explore__people-copy
							svg-icon(name="copy")
						.explore__people-copy
							svg-icon(name="external")
			.explore__infos
				.explore__icon
					svg-icon(name="share")
					| Share
				.explore__icon
					svg-icon(name="massage")
					| Chat
		.explore__center
			.explore__left.for-desktop
				.filter
					.filter__back
						svg-icon(name='arrow_left')
						| Filters
					
					
					.filter__activitys
						.filter__activitys-item.is-select
							| Listed
						.filter__activitys-item
							| Unlisted
						
					.filter__collections
						.filter__collections-button
							span
								svg-icon(name='list')
								| Collection
							svg-icon(name='chevron_down').arrow
						.filter__collections-list
							.card-collections
								.card-collections__image
									img(src="@/assets/images/plug/01_image/@2x/pattern_1@2x.jpg" alt="image")
								.card-collections__content
									.card-collections__title
										| Terraforms
										svg-icon(name='verified_f')
									.card-collections__numbers
										.card-collections__time
											span
												| 24h:
											| 12,757.22
										.card-collections__floor
											span
												| floor:
											| 0.49
							.card-collections
								.card-collections__image
									img(src="@/assets/images/plug/01_image/@2x/pattern_1@2x.jpg" alt="image")
								.card-collections__content
									.card-collections__title
										| Terraforms
										svg-icon(name='verified_f')
									.card-collections__numbers
										.card-collections__time
											span
												| 24h:
											| 12,757.22
										.card-collections__floor
											span
												| floor:
											| 0.49
							.card-collections
								.card-collections__image
									img(src="@/assets/images/plug/01_image/@2x/pattern_2@2x.jpg" alt="image")
								.card-collections__content
									.card-collections__title
										| Terraforms
										svg-icon(name='verified_f')
									.card-collections__numbers
										.card-collections__time
											span
												| 24h:
											| 12,757.22
										.card-collections__floor
											span
												| floor:
											| 0.49
							.card-collections
								.card-collections__image
									img(src="@/assets/images/plug/01_image/@2x/pattern_3@2x.jpg" alt="image")
								.card-collections__content
									.card-collections__title
										| Terraforms
										svg-icon(name='verified_f')
									.card-collections__numbers
										.card-collections__time
											span
												| 24h:
											| 12,757.22
										.card-collections__floor
											span
												| floor:
											| 0.49
							.card-collections
								.card-collections__image
									img(src="@/assets/images/plug/01_image/@2x/pattern_4@2x.jpg" alt="image")
								.card-collections__content
									.card-collections__title
										| Terraforms
										svg-icon(name='verified_f')
									.card-collections__numbers
										.card-collections__time
											span
												| 24h:
											| 12,757.22
										.card-collections__floor
											span
												| floor:
											| 0.49
							.card-collections
								.card-collections__image
									img(src="@/assets/images/plug/01_image/@2x/pattern_2@2x.jpg" alt="image")
								.card-collections__content
									.card-collections__title
										| Terraforms
										svg-icon(name='verified_f')
									.card-collections__numbers
										.card-collections__time
											span
												| 24h:
											| 12,757.22
										.card-collections__floor
											span
												| floor:
											| 0.49
							.card-collections
								.card-collections__image
									img(src="@/assets/images/plug/01_image/@2x/pattern_3@2x.jpg" alt="image")
								.card-collections__content
									.card-collections__title
										| Terraforms
										svg-icon(name='verified_f')
									.card-collections__numbers
										.card-collections__time
											span
												| 24h:
											| 12,757.22
										.card-collections__floor
											span
												| floor:
											| 0.49
							.card-collections
								.card-collections__image
									img(src="@/assets/images/plug/01_image/@2x/pattern_4@2x.jpg" alt="image")
								.card-collections__content
									.card-collections__title
										| Terraforms
										svg-icon(name='verified_f')
									.card-collections__numbers
										.card-collections__time
											span
												| 24h:
											| 12,757.22
										.card-collections__floor
											span
												| floor:
											| 0.49
						.filter__collections-more
							| Load more
			
			
			.explore__right
				.title.title--md.for-mobile Explore
				.explore__filters
					.explore__filter.is-current(data-index="1")
						| Owned
					.explore__filter(data-index="2")
						| Activity
					.explore__filter(data-index="3")
						| Offers
					.explore__filter(data-index="4")
						| Collections
				.explore__content
					.explore__info
						.explore__title.for-desktop
							| Items
						.explore__subright
							.explore__search
								.explore__search-icon
									svg-icon(name='search')
								input(placeholder="Name, Token ID..")
							.explore__select
								| Recent activity
								svg-icon(name='chevron_down')
						.explore__icon.js-filter.for-mobile
							svg-icon(name='filter')
					.explore__items.is-active(data-tab="1")
						OwnedComponent
					.explore__items.is-hidden(data-tab="2")
						ActivityComponent
					.explore__items.is-hidden(data-tab="3")
						OfferComponent
					.explore__items.is-hidden(data-tab="4")
						CollectionsComponent

</template>

<script>
import $ from 'jquery'
import SvgIcon from "@/components/SvgIcon";
import vars from "@/helpers";
import gsap from "gsap";
import ActivityComponent from "@/Pages/ProfilePage/Activity";
import OwnedComponent from "@/Pages/ProfilePage/Owned";
import OfferComponent from "@/Pages/ProfilePage/Offers";
import CollectionsComponent from "@/Pages/ProfilePage/Collections";
export default {
	name: "ProfileComponent",
	components: {CollectionsComponent, OfferComponent, OwnedComponent, ActivityComponent, SvgIcon},
	mounted() {
		if($('.explore__filter').length) {
			$('.explore__filter').on('click', (event) => {
				const $this = $(event.currentTarget);
				
				console.log(event)
				vars.$document.find('.explore__filter').removeClass('is-current')
				$this.addClass('is-current');
				
				$('.explore__title').text($this.text())
				
				if($this.attr('data-index') === '2') {
					$('.filter__buy, .filter__price').addClass('is-hidden');
					// $('.filter__activitys').removeClass('is-hidden');
				} else {
					$('.filter__buy, .filter__price').removeClass('is-hidden');
					// $('.filter__activitys').addClass('is-hidden');
				}
				
				vars.$document.find(`.explore__items`).addClass('is-hidden')
				vars.$document.find(`.explore__items[data-tab="${$this.attr('data-index')}"]`).removeClass('is-hidden')
			})
		}
		
		if($('.js-filter').length) {
			
			let popup = $('.popup-filter');
			let popupContent = popup.find('.popup-filter__content');
			
			$('.js-filter').on('click', () => {
				
				gsap.timeline().from(popup, 0.5, {
					autoAlpha: 0,
					clearProps:true,
					onStart: () => {
						popup.removeClass('is-hidden')
					}
				}).call(() => {
					
					popupContent.removeClass('is-hidden')
				})
						.from(popupContent, 0.5, {
							yPercent: 100,
						})
			})
			
			$('.popup-filter__close, .popup-filter__bg').on('click', () => {
				gsap.timeline().to(popupContent, 0.5, {
					yPercent: 100,
					clearProps:true,
					onComplete: () => {
						popupContent.addClass('is-hidden')
					}
				}).call(() => {
				
				
				})
						.to(popup, 0.5, {
							autoAlpha: 0,
							clearProps:true,
							onComplete: () => {
								popup.addClass('is-hidden')
							}
						})
			})
		}
	}
}
</script>

<style lang="scss">
@import "Styles";
</style>
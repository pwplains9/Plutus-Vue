<template lang="pug">
.explore
		.explore__left.for-desktop
			.filter
				.filter__back
					svg-icon(name='arrow_left')
					| Explore
				.filter__buy
					| Buy now
					label.filter__buy-check
						input(type="checkbox")
						span
				.filter__price
					.filter__input.filter__input--1
						input(type="text")
					.filter__input.filter__input--2
						input(type="text")
					.filter__icon
						svg-icon(name='ethereum')
				.filter__activitys.is-hidden
					.filter__activitys-item.is-select
						| Mint
					.filter__activitys-item
						| Transfer
					.filter__activitys-item
						| Sale
					.filter__activitys-item
						| List
					.filter__activitys-item
						| Offer
					.filter__activitys-item
						| Cancel listing
					.filter__activitys-item
						| Cancel offer
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
					| Items
				.explore__filter(data-index="2")
					| Activity
			.explore__content
				.explore__info
					.explore__title.for-desktop
						| Items
					.explore__select
						| Recent activity
						svg-icon(name='chevron_down')
					.explore__icon.js-filter.for-mobile
						svg-icon(name='filter')
				.explore__items.is-active(data-tab="1")
					.item-collections
						a.item-collections__top(href="")
							.item-collections__image
								img(src="@/assets/images/plug/01_image/@2x/picture_1@2x.jpg")
							.item-collections__name
								| Moonbird
								svg-icon(name='verified_f')
							.item-collections__title
								| Guest “The Undead”
						.item-collections__bottom
							.item-collections__price
								.item-collections__money
									| 0.61 ETH
								.item-collections__connect
									| connect
							.item-collections__more
								svg-icon(name='more')
					.item-collections
						a.item-collections__top(href="")
							.item-collections__image
								img(src="@/assets/images/plug/01_image/@2x/picture_2@2x.jpg")
							.item-collections__name
								| Moonbird
							.item-collections__title
								| Guest “The Undead”
						.item-collections__bottom
							.item-collections__price
								.item-collections__money
									| 0.61 ETH
								.item-collections__connect
									| connect
							.item-collections__more
								svg-icon(name='more')
					.item-collections
						a.item-collections__top(href="")
							.item-collections__image
								img(src="@/assets/images/plug/01_image/@2x/picture_3@2x.jpg")
							.item-collections__name
								| Moonbird
							.item-collections__title
								| Guest “The Undead”
						.item-collections__bottom
							.item-collections__price
								.item-collections__money
									| 0.61 ETH
								.item-collections__connect
									| connect
							.item-collections__more
								svg-icon(name='more')
					.item-collections
						a.item-collections__top(href="")
							.item-collections__image
								img(src="@/assets/images/plug/01_image/@2x/picture_4@2x.jpg")
							.item-collections__name
								| Moonbird
							.item-collections__title
								| Guest “The Undead”
						.item-collections__bottom
							.item-collections__price
								.item-collections__money
									| 0.61 ETH
								.item-collections__connect
									| connect
							.item-collections__more
								svg-icon(name='more')
					.item-collections
						a.item-collections__top(href="")
							.item-collections__image
								img(src="@/assets/images/plug/01_image/@2x/picture_4@2x.jpg")
							.item-collections__name
								| Moonbird
							.item-collections__title
								| Guest “The Undead”
						.item-collections__bottom
							.item-collections__price
								.item-collections__money
									| 0.61 ETH
								.item-collections__connect
									| connect
							.item-collections__more
								svg-icon(name='more')
					.item-collections
						a.item-collections__top(href="")
							.item-collections__image
								img(src="@/assets/images/plug/01_image/@2x/picture_3@2x.jpg")
							.item-collections__name
								| Moonbird
							.item-collections__title
								| Guest “The Undead”
						.item-collections__bottom
							.item-collections__price
								.item-collections__money
									| 0.61 ETH
								.item-collections__connect
									| connect
							.item-collections__more
								svg-icon(name='more')
					.item-collections
						a.item-collections__top(href="")
							.item-collections__image
								img(src="@/assets/images/plug/01_image/@2x/picture_2@2x.jpg")
							.item-collections__name
								| Moonbird
							.item-collections__title
								| Guest “The Undead”
						.item-collections__bottom
							.item-collections__price
								.item-collections__money
									| 0.61 ETH
								.item-collections__connect
									| connect
							.item-collections__more
								svg-icon(name='more')
					.item-collections
						a.item-collections__top(href="")
							.item-collections__image
								img(src="@/assets/images/plug/01_image/@2x/picture_1@2x.jpg")
							.item-collections__name
								| Moonbird
							.item-collections__title
								| Guest “The Undead”
						.item-collections__bottom
							.item-collections__price
								.item-collections__money
									| 0.61 ETH
								.item-collections__connect
									| connect
							.item-collections__more
								svg-icon(name='more')
				.explore__items.is-hidden(data-tab="2")
					.explore__activ-item
						.explore__col.explore__col--1
							.explore__activ-image
								img(src="@/assets/images/image.png")
							.explore__activ-content
								.explore__activ-text
									| CloneX
								.explore__activ-info
									| 12 minutes ago
						.explore__col.explore__col--2
							.explore__activ-content
								.explore__activ-text.explore__activ-text--offer
									| Offer
								.explore__activ-info
									| type
						.explore__col.explore__col--3
							.explore__activ-content
								.explore__activ-text
									| C1D736g4
								.explore__activ-info
									| from
						.explore__col.explore__col--4
							.explore__activ-content
								.explore__activ-text
									| 19,275 items
								.explore__activ-info
									| to
						.explore__col.explore__col--5
							.explore__activ-content
								.explore__activ-text
									| 7 minutes ago
								.explore__activ-info
									| expiring
						.explore__col.explore__col--6
							.explore__activ-content
								.explore__activ-icon
									img(src="@/assets/images/ethereum.png")
								.explore__activ-text
									| 12.0117
								.explore__activ-info
									| 16% below floor
						.explore__col.explore__col--7
							.button.button--buy
								.button__inner
									| Buy
					.explore__activ-item
						.explore__col.explore__col--1
							.explore__activ-image
								img(src="@/assets/images/image.png")
							.explore__activ-content
								.explore__activ-text
									| CloneX
								.explore__activ-info
									| 12 minutes ago
						.explore__col.explore__col--2
							.explore__activ-content
								.explore__activ-text.explore__activ-text--list
									| list
								.explore__activ-info
									| type
						.explore__col.explore__col--3
							.explore__activ-content
								.explore__activ-text
									| C1D736g4
								.explore__activ-info
									| from
						.explore__col.explore__col--4
							.explore__activ-content
								.explore__activ-text
									| 19,275 items
								.explore__activ-info
									| to
						.explore__col.explore__col--5
							.explore__activ-content
								.explore__activ-text
									| 7 minutes ago
								.explore__activ-info
									| expiring
						.explore__col.explore__col--6
							.explore__activ-content
								.explore__activ-icon
									img(src="@/assets/images/ethereum.png")
								.explore__activ-text
									| 12.0117
								.explore__activ-info
									| 16% below floor
						.explore__col.explore__col--7
					.explore__activ-item
						.explore__col.explore__col--1
							.explore__activ-image
								img(src="@/assets/images/image.png")
							.explore__activ-content
								.explore__activ-text
									| CloneX
								.explore__activ-info
									| 12 minutes ago
						.explore__col.explore__col--2
							.explore__activ-content
								.explore__activ-text.explore__activ-text--offer
									| Offer
								.explore__activ-info
									| type
						.explore__col.explore__col--3
							.explore__activ-content
								.explore__activ-text
									| C1D736g4
								.explore__activ-info
									| from
						.explore__col.explore__col--4
							.explore__activ-content
								.explore__activ-text
									| 19,275 items
								.explore__activ-info
									| to
						.explore__col.explore__col--5
							.explore__activ-content
								.explore__activ-text
									| 7 minutes ago
								.explore__activ-info
									| expiring
						.explore__col.explore__col--6
							.explore__activ-content
								.explore__activ-icon
									img(src="@/assets/images/ethereum.png")
								.explore__activ-text
									| 12.0117
								.explore__activ-info
									| 16% below floor
						.explore__col.explore__col--7
							.button.button--buy
								.button__inner
									| Buy
					.explore__activ-item
						.explore__col.explore__col--1
							.explore__activ-image
								img(src="@/assets/images/image.png")
							.explore__activ-content
								.explore__activ-text
									| CloneX
								.explore__activ-info
									| 12 minutes ago
						.explore__col.explore__col--2
							.explore__activ-content
								.explore__activ-text.explore__activ-text--list
									| list
								.explore__activ-info
									| type
						.explore__col.explore__col--3
							.explore__activ-content
								.explore__activ-text
									| C1D736g4
								.explore__activ-info
									| from
						.explore__col.explore__col--4
							.explore__activ-content
								.explore__activ-text
									| 19,275 items
								.explore__activ-info
									| to
						.explore__col.explore__col--5
							.explore__activ-content
								.explore__activ-text
									| 7 minutes ago
								.explore__activ-info
									| expiring
						.explore__col.explore__col--6
							.explore__activ-content
								.explore__activ-icon
									img(src="@/assets/images/ethereum.png")
								.explore__activ-text
									| 12.0117
								.explore__activ-info
									| 16% below floor
						.explore__col.explore__col--7
					.explore__activ-item
						.explore__col.explore__col--1
							.explore__activ-image
								img(src="@/assets/images/image.png")
							.explore__activ-content
								.explore__activ-text
									| CloneX
								.explore__activ-info
									| 12 minutes ago
						.explore__col.explore__col--2
							.explore__activ-content
								.explore__activ-text.explore__activ-text--offer
									| Offer
								.explore__activ-info
									| type
						.explore__col.explore__col--3
							.explore__activ-content
								.explore__activ-text
									| C1D736g4
								.explore__activ-info
									| from
						.explore__col.explore__col--4
							.explore__activ-content
								.explore__activ-text
									| 19,275 items
								.explore__activ-info
									| to
						.explore__col.explore__col--5
							.explore__activ-content
								.explore__activ-text
									| 7 minutes ago
								.explore__activ-info
									| expiring
						.explore__col.explore__col--6
							.explore__activ-content
								.explore__activ-icon
									img(src="@/assets/images/ethereum.png")
								.explore__activ-text
									| 12.0117
								.explore__activ-info
									| 16% below floor
						.explore__col.explore__col--7
							.button.button--buy
								.button__inner
									| Buy
					.explore__activ-item
						.explore__col.explore__col--1
							.explore__activ-image
								img(src="@/assets/images/image.png")
							.explore__activ-content
								.explore__activ-text
									| CloneX
								.explore__activ-info
									| 12 minutes ago
						.explore__col.explore__col--2
							.explore__activ-content
								.explore__activ-text.explore__activ-text--list
									| list
								.explore__activ-info
									| type
						.explore__col.explore__col--3
							.explore__activ-content
								.explore__activ-text
									| C1D736g4
								.explore__activ-info
									| from
						.explore__col.explore__col--4
							.explore__activ-content
								.explore__activ-text
									| 19,275 items
								.explore__activ-info
									| to
						.explore__col.explore__col--5
							.explore__activ-content
								.explore__activ-text
									| 7 minutes ago
								.explore__activ-info
									| expiring
						.explore__col.explore__col--6
							.explore__activ-content
								.explore__activ-icon
									img(src="@/assets/images/ethereum.png")
								.explore__activ-text
									| 12.0117
								.explore__activ-info
									| 16% below floor
						.explore__col.explore__col--7
					.explore__activ-footer
						a.button.button--transparent.button--load.for-mobile(href="")
							.button__inner
								| Load more

</template>

<script>
import $ from 'jquery'
import SvgIcon from "@/components/SvgIcon";
import vars from "@/helpers";
import gsap from "gsap";
export default {
	name: "ExploreComponent",
	components: {SvgIcon},
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
					$('.filter__activitys').removeClass('is-hidden');
				} else {
					$('.filter__buy, .filter__price').removeClass('is-hidden');
					$('.filter__activitys').addClass('is-hidden');
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
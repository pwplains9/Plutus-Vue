<template lang="pug">
.popup.popup--1.is-hidden(data-popup="connect")
		.popup__bg
		.popup__inner.popup__inner--1
			.popup__close.popup__close--1
				svg-icon(name='close')
			.popup__title
				| Connect wallet
			.popup__description
				| Connect with one of our available wallet providers or create a new one
			.popup__items
				.popup__item(@click="this.connectWallet")
					.popup__left
						.popup__social
							img(src="@/assets/images/meta-1.png")
						.popup__text
							| Metamask
					.popup__stext.popup__stext--blue
						| Popular
				.popup__item
					.popup__left
						.popup__social
							img(src="@/assets/images/meta-2.png")
						.popup__text
							| Coinwallet
					.popup__right
						|
				.popup__item
					.popup__left
						.popup__social
							img(src="@/assets/images/meta-3.png")
						.popup__text
							| Phantom
					.popup__stext
						| Solana
				.popup__item
					.popup__left
						.popup__social
							img(src="@/assets/images/meta-4.png")
						.popup__text
							| Glow
					.popup__stext
						| Solana
				.popup__item.is-disabled
					.popup__left
						.popup__social
							img(src="@/assets/images/meta-5.png")
						.popup__text
							| Trust
					.popup__stext
						| Mobile only
			.popup__footer
				a.button.button--transparent.button--load(href="")
					.button__inner
						| Load more
	
.popup.popup--2.is-hidden(data-popup="profile")
		.popup__bg
		.popup__inner.popup__inner--2
			.popup__close.popup__close--2
				svg-icon(name='close')
			.popup__top
				.popup__profile
					.popup__icon
						img(src="@/assets/images/meta-6.png")
					span
						| {{userTitle}}
				.popup__massage
					.popup__icon.popup__icon--none
						svg-icon(name='massage')
			.popup__navs
				a.popup__link(href="")
					.popup__icon
						svg-icon(name='album')
					| My Items
				a.popup__link(href="")
					.popup__icon
						svg-icon(name='wave')
					| Activity
				a.popup__link(href="")
					.popup__icon
						svg-icon(name='tag')
					| Offers
				a.popup__link(href="")
					.popup__icon
						svg-icon(name='sparcle')
					| My Collections
			.popup__import
				.popup__icon
					svg-icon(name='file-download')
				| Import Listings
			.popup__info
				.popup__tabs
					.popup__ntabs.is-active(data-tab="1")
						| Your wallet
					.popup__ntabs(data-tab="2")
						| #[span 0x…Aa3Ggf]
						svg-icon(name='copy')
				.popup__external
					svg-icon(name='external')
			.popup__content
				.popup__tab.is-active
					.popup__elem
						.popup__left
							.popup__icon
								img(src="@/assets/images/ethereum.png")
							.popup__name
								| ETH
						.popup__price
							| 0.00426
					.popup__elem
						.popup__left
							.popup__icon
								img(src="@/assets/images/ethereum_classic.png")
							.popup__name
								| ETH
						.popup__price
							| 0.00426
					.popup__convert
						| Convert ETH/WETH
				.popup__tab.is-hidden
					.popup__elem
						.popup__left
							.popup__icon
								img(src="@/assets/images/ethereum.png")
							.popup__name
								| ETH
						.popup__price
							| 0.00426
					.popup__elem
						.popup__left
							.popup__icon
								img(src="@/assets/images/ethereum_classic.png")
							.popup__name
								| ETH
						.popup__price
							| 0.00426
					.popup__convert
						| Convert ETH/WETH
			.popup__stitle
				| Rewards to Collect
			a.popup__elem(href="")
				.popup__left
					.popup__icon
						svg-icon(name='case')
					| Listing & Trading
				.popup__price
					| 12
			a.popup__elem(href="")
				.popup__left
					.popup__icon
						svg-icon(name='stack')
					| Staking
				.popup__price
					| 63
			.popup__convert
				| Putus Rewards
			.popup__disconect
				| Disconect
.popup-filter.is-hidden
		.popup-filter__bg
		.popup-filter__content.is-hidden
			.popup-filter__title
				| Filter
			.popup-filter__close
				svg-icon(name='close')
			.filter
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
			.popup-filter__button.popup-filter__button--apply
				| Apply Filter
			.popup-filter__button.popup-filter__button--reset
				| Reset

</template>

<script>
import $ from 'jquery'
import SvgIcon from "@/components/SvgIcon";
import axios from 'axios';
import Web3 from 'web3/dist/web3.min.js'
import Web3Token from 'web3-token'
const web3 = new Web3(window.ethereum);
export default {
	name: "PopupsComponent",
	components: {SvgIcon},
	data() {
		return {
			userTitle: false,
		}
	},
	mounted() {
		if($('.js-connect').length) {
			
			$('.js-connect').on('click', (e) => {
				e.preventDefault();
				document.querySelector('[data-popup="connect"]').classList.remove('is-hidden');
			})
			
			$('.popup__close--1').on('click', (e) => {
				e.preventDefault();
				document.querySelector('[data-popup="connect"]').classList.add('is-hidden');
			})
			
			$('.popup__close--2').on('click', (e) => {
				e.preventDefault();
				document.querySelector('[data-popup="profile"]').classList.add('is-hidden');
			})
			
			document.querySelectorAll('.js-profile').forEach(item => {
				item.addEventListener('click', (e) => {
					e.preventDefault();

					document.querySelector('[data-popup="profile"]').classList.remove('is-hidden');
				})
			})
		}
	},
	methods: {
		async connectWallet () { // Ran when button clicked
			await window.ethereum.request({ method: 'eth_requestAccounts'});
			
			const address = (await web3.eth.getAccounts())[0];
			
			// generating a token with 1 day of expiration time
			const token = await Web3Token.sign(msg => web3.eth.personal.sign(msg, address), '1d');
			// Store Token
			console.log(window.ethereum)
			await this.connectToken(token)
			
			this.userTitle = window.ethereum.selectedAddress;
			
			if(this.userTitle) {
				document.querySelector('[data-popup="connect"]').classList.add('is-hidden');
				document.querySelector('[data-popup="profile"]').classList.remove('is-hidden');
			}
			
			localStorage.setItem('user', this.userTitle)
			$('.js-connect').addClass('is-hidden')
			$('.js-profile').removeClass('is-hidden')
			$('.header__text').text(this.userTitle);
		},
		async connectToken (token) {
			try {
				const { data } = await axios('http://localhost:8080/wallet/connect', { method: 'POST', headers: { 'Authorization': token } })
				this.user = data.value
				this.token = token
				this.loggedIn = true
			} catch (e) {
				console.log(`Auth Error ${e}`)
			}
		},
		
		async fetchUser () {
			if (this.token && this.token !== '') {
				const { data } = await axios('http://localhost:8080/wallet/user', { headers: { 'Authorization': this.token } })
				this.user = data
				this.loggedIn = true
			}
		},
	}
}
</script>

<style lang="scss">
@import "Styles";
</style>
<template lang="pug">
section.section.top-collections
		.top-collections__content(data-aos="fade-up" data-aos-delay="100")
			.top-collections__items
				.top-collections__item.top-collections__item--top.for-desktop
					.top-collections__col.top-collections__col--first
						.top-collections__text.top-collections__text--bold
							| #
							svg-icon(name='expand_more_white')
					.top-collections__col.top-collections__col--2
						.top-collections__text.top-collections__text--padding.top-collections__text--bold
							| Collection
					.top-collections__col.top-collections__col--3
						.top-collections__text.top-collections__text--bold
							| Floor
					.top-collections__col.top-collections__col--4
						.top-collections__text.top-collections__text--bold
							| 24h Vol
					.top-collections__col.top-collections__col--5
						.top-collections__text.top-collections__text--bold
							| Total Vol
					.top-collections__col.top-collections__col--6
						.top-collections__text.top-collections__text--bold
							| Owners
					.top-collections__col.top-collections__col--7
						.top-collections__text.top-collections__text--bold
							| Items
				
				.top-collections__item(v-for="item in data")
					.top-collections__col.top-collections__col--1
						.top-collections__text
							| {{item.number}}
					.top-collections__col.top-collections__col--2.top-collections__col--image
						.top-collections__image
							//img(src="../images/02_table/@2x/00@2x.jpg" alt="image")
							img(:src='require(`@/assets${item.image}`)' :alt='item.image')
						.top-collections__text.top-collections__text--title
							| {{item.title}}
					.top-collections__col.top-collections__col--voll.for-mobile
						.top-collections__text.top-collections__text--voll
							| 24h Vol
					.top-collections__col.top-collections__col--3
						.top-collections__text.top-collections__text--bold.for-mobile
							| Floor
						.top-collections__text
							| {{item.text1}}
					
					.top-collections__col.top-collections__col--4
						.top-collections__text.top-collections__text--red(v-if="item.down")
							| {{item.text2}}
						.top-collections__text.top-collections__text--green(v-if="item.up")
							| {{item.text2}}
						.top-collections__text.top-collections__text--last
							| {{item.text3}}
					.top-collections__col.top-collections__col--5
						.top-collections__text
							| {{item.text4}}
						.top-collections__text.top-collections__text--voll.for-mobile
							| Total Vol
					.top-collections__col.top-collections__col--6
						.top-collections__text
							| {{item.text5}}
						.top-collections__text.top-collections__text--voll.for-mobile
							| Owners
					.top-collections__col.top-collections__col--7
						.top-collections__text
							| {{item.text6}}
						.top-collections__text.top-collections__text--voll.for-mobile
							| Items
			
</template>

<script>
import SvgIcon from "@/components/SvgIcon";

export default {
	name: "CollectionsComponent",
	components: {SvgIcon},
	data() {
		return {
			data: [
				{
					down: true,
					number: 1,
					image: '/images/02_table/@2x/00@2x.jpg',
					title: 'Terraforms',
					text1: '0.67 ETH',
					text2: '-7.55%',
					text3: '27,721.33 ETH',
					text4: '3,109,346 ETH',
					text5: '2,179',
					text6: '2,179'
				},
				{
					up: true,
					number: 2,
					image: '/images/02_table/@2x/01@2x.jpg',
					title: 'Meebits',
					text1: '5.55 ETH',
					text2: '+9.55%',
					text3: '5,585.19 ETH',
					text4: '2,899,050 ETH',
					text5: '6,107',
					text6: '19,999'
				},
				{
					up: true,
					number: 3,
					image: '/images/02_table/@2x/02@2x.jpg',
					title: 'dotdotdot',
					text1: '0.175 ETH',
					text2: '+169.40%',
					text3: '4,451.32 ETH',
					text4: '724,851 ETH',
					text5: '2,676',
					text6: '4,870'
				},
				{
					up: true,
					number: 4,
					image: '/images/02_table/@2x/03@2x.jpg',
					title: 'Bored Ape Yacht Club',
					text1: '104.9 ETH',
					text2: '+16.13%',
					text3: '664.46 ETH',
					text4: '30,496 ETH',
					text5: '6,358',
					text6: '10,000'
				},
				{
					up: true,
					number: 5,
					image: '/images/02_table/@2x/04@2x.jpg',
					title: 'World Of Women',
					text1: '22 ETH',
					text2: '+89.04%',
					text3: '352.01 ETH',
					text4: '18,758 ETH',
					text5: '12,031',
					text6: '18,461'
				},
				{
					down: true,
					number: 6,
					image: '/images/02_table/@2x/05@2x.jpg',
					title: '13.1 ETH',
					text1: '-45.60%',
					text2: '135.14 ETH',
					text3: '3,329 ETH',
					text4: '5,268',
					text5: '5,268',
					text6: '10,000'
				},
				{
					up: true,
					number: 7,
					image: '/images/02_table/@2x/06@2x.jpg',
					title: 'Bored Ape CHemistry Club',
					text1: '12.985 ETH',
					text2: '+1.85%',
					text3: '99.82 ETH',
					text4: '7,302 ETH',
					text5: '5,604',
					text6: '10,000'
				},
				{
					up: true,
					number: 8,
					image: '/images/02_table/@2x/07@2x.jpg',
					title: 'CryptoPunks V1',
					text1: '31 ETH',
					text2: '+100.00%',
					text3: '82 ETH',
					text4: '2,038 ETH',
					text5: '834',
					text6: '3'
				},
				{
					down: true,
					number: 9,
					image: '/images/02_table/@2x/08@2x.jpg',
					title: 'Bored Ape Kennel Club',
					text1: '10.8 ETH',
					text2: '-66.72%',
					text3: '42.41 ETH',
					text4: '6,909 ETH',
					text5: '651',
					text6: '2,369'
				},
				{
					down: true,
					number: 10,
					image: '/images/02_table/@2x/09@2x.jpg',
					title: 'Mutant Ape Yacht Club',
					text1: '8.2 ETH',
					text2: '-53.12%',
					text3: '33.83 ETH',
					text4: '6,772 ETH',
					text5: '5,508',
					text6: '9,596'
				}
			]
		}
	}
}
</script>

<style lang="scss">
@import "Styles";
</style>
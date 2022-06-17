<template lang="pug">
section.section--team
		.section__container.section__container--team
			.title.title--sm
				| Plutus.art Docs
			.docs
				.docs__content
					a.docs__item(href="#")
						.docs__inner
							.docs__image
								img(src="@/assets/images/image.png")
							.docs__title
								| Guides
							.docs__description
								| Learn how to use all the features
					a.docs__item(href="#")
						.docs__inner
							.docs__image
								img(src="@/assets/images/image.png")
							.docs__title
								| Guides
							.docs__description
								| Learn how to use all the features
					a.docs__item(href="#")
						.docs__inner
							.docs__image
								img(src="@/assets/images/image.png")
							.docs__title
								| Guides
							.docs__description
								| Learn how to use all the features

</template>

<script>
export default {
	name: "DocsComponent"
}
</script>

<style lang="scss">
@import "Styles";
</style>
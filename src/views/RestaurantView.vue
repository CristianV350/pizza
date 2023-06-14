<template>
<main class="main">
		<div class="container">
			<section class="menu">
				<div class="section-heading">
					<h2 class="section-title restaurant-title">{{ restaurant.name }}</h2>
					<div class="card-info">
						<div class="rating">
							4.5
						</div>
						<div class="price">От {{ restaurant.price }} ₽</div>
						<div class="category">{{ restaurant.kitchen }}</div>
					</div>
					<!-- /.card-info -->
				</div>
				<div class="cards cards-menu">
          <product-card-component v-for="(food, index) in foods" :key="index" :food="food">
          </product-card-component>
				</div>
				<!-- /.cards -->
			</section>
		</div>
		<!-- /.container -->
	</main>
</template>

<script>
import partners from "../../db/partners.json";
import ProductCardComponent from "@/components/ProductCardComponent.vue";
import { generateSlug } from "@/utils/utils";

export default{
	props: {
		id: {
			type: String,
			required: true
		}
	},
  	components: { ProductCardComponent },
  	computed: {
	restaurant() {
		return partners.find(partner => generateSlug(partner.name) == this.id)
	},
    foods() {
      return require('../../db/' + this.restaurant.products)
    }
  },
}
</script>
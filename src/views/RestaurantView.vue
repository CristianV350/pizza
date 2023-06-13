<template>
<main class="main">
		<div class="container">
			<section class="menu">
				<div class="section-heading">
					<h2 class="section-title restaurant-title">Пицца Плюс</h2>
					<div class="card-info">
						<div class="rating">
							4.5
						</div>
						<div class="price">От 900 ₽</div>
						<div class="category">Пицца</div>
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
import json from "../../db/db.json";
import ProductCardComponent from "@/components/ProductCardComponent.vue";

export default{
  components: { ProductCardComponent },
  props: {
    restaurant: {
      type: String,
      required: true
    }
  },
  computed: {
    foods() {
      return json.db[this.restaurant]
    }
  },
}
</script>
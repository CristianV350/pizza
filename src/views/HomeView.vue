<template>
  <main class="main">
    <div class="container">
      <section class="container-promo">
        <section class="promo pizza">
          <h1 class="promo-title">Онлайн-сервис <br />доставки еды на дом</h1>
          <p class="promo-text">
            Блюда из любимого ресторана привезет курьер в перчатках, маске и с
            антисептиком
          </p>
        </section>
        <!-- <section class="promo kebab">
					<h1 class="promo-title">Шашлыки на майские <br> со скидкой 35%</h1>
					<p class="promo-text">
						Закажите шашлыки в любом ресторане до 10 мая и получите скидку по промокоду OMAGAD
					</p>
				</section>
				<section class="promo vegetables">
					<h1 class="promo-title">Скидка 20% на всю еду <br> по промокоду LOVE.JS</h1>
					<p class="promo-text">
						Блюдо из ресторана привезут вместе с двумя подарочными книгами по фронтенду
					</p>
				</section>
				<section class="promo sushi">
					<h1 class="promo-title">Сеты со скидкой до 30% <br> в ресторанах</h1>
					<p class="promo-text">
						Скидки на сеты до 30 мая по промокоду DADADA
					</p>
				</section> -->
      </section>
      <section class="restaurants">
        <div class="section-heading">
          <h2 class="section-title">Рестораны</h2>
          <label class="search">
            <input
              type="text"
              class="input input-search"
              placeholder="Поиск блюд и ресторанов"
            />
          </label>
        </div>
        <div class="cards cards-restaurants">
          <card-component
            v-for="(partner, index) in partners"
            :key="index"
            :partner="partner"
          />
        </div>
        <!-- /.cards -->
      </section>
    </div>
    <!-- /.container -->
  </main>
</template>

<script>
// @ is an alias to /src
import partners from "../../db/partners.json";
import CardComponent from "@/components/CardComponent.vue";
import { generateSlug } from "@/utils/utils";

export default {
  name: "HomeView",
  components: {CardComponent},
  computed: {
    partners() {
      return partners
    }
  },
  methods: {
    generateName(name) {
      return generateSlug(name)
    }
  }
};
</script>

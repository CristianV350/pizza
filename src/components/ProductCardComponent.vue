<template>
    <div class="card card-restaurant">
        <img :src="generateImage(food.image)" alt="image" class="card-image" />
        <div class="card-text">
            <div class="card-heading">
                <h3 class="card-title card-title-reg">{{ food.name }}</h3>
            </div>
            <!-- /.card-heading -->
            <div class="card-info">
                <div class="ingredients">{{ food.description }}
                </div>
            </div>
            <!-- /.card-info -->
            <div class="card-buttons">
                <button class="button button-primary button-add-cart" @click="addToCart">
                    <span class="button-card-text">В корзину</span>
                    <span class="button-cart-svg"></span>
                </button>
                <strong class="card-price-bold">{{ food.price }} ₽</strong>
            </div>
        </div>
        <!-- /.card-text -->
    </div>
    <!-- /.card -->
</template>

<script>
import { EventBus } from "@/utils/EventBus";
import { generateSlug } from "@/utils/utils";

export default {
  props: {
    food: {
      type: Object,
      required: true,
      default: () => {}
    },
  },
  methods: {
    generateName(name) {
        return generateSlug(name)
    },
    generateImage(path) {
        return require('@/' + path)
    },
    addToCart() {
        // logic for add to cart
        EventBus.emit('toggle-cart-modal')
    }
  }
};
</script>
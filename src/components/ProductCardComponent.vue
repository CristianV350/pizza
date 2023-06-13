<template>
    <div class="card card-restaurant">
        <img :src="generateImage(partner.image)" alt="image" class="card-image" />
        <div class="card-text">
            <div class="card-heading">
                <h3 class="card-title card-title-reg">{{ product.name }}</h3>
            </div>
            <!-- /.card-heading -->
            <div class="card-info">
                <div class="ingredients">{{ partner.description }}
                </div>
            </div>
            <!-- /.card-info -->
            <div class="card-buttons">
                <button class="button button-primary button-add-cart">
                    <span class="button-card-text">В корзину</span>
                    <span class="button-cart-svg"></span>
                </button>
                <strong class="card-price-bold">{{ partner.price }} ₽</strong>
            </div>
        </div>
        <!-- /.card-text -->
    </div>
    <!-- /.card -->
</template>

<script>
import { generateSlug } from "@/utils/utils";

export default {
  props: {
    partner: {
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
    }
  }
};
</script>
<template>
  <router-link
    :to="{ name: 'category', params: { id: generateName(partner.name) } }"
    class="card card-restaurant"
  >
    <img :src="generateImage(partner.image)" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">{{ partner.name }}</h3>
        <span class="card-tag tag">{{ partner.time_of_delivery }} мин</span>
      </div>
      <div class="card-info">
        <div class="rating">{{ partner.stars }}</div>
        <div class="price">От {{ partner.price }} ₽</div>
        <div class="category">{{ partner.kitchen }}</div>
      </div>
    </div>
  </router-link>
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

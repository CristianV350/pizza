<template>
  <div class="container">
    <modal-auth v-show="showAuthModal"></modal-auth>
    <modal-cart v-show="showCartModal"></modal-cart>
    <header-component />
    <main>
      <router-view />
    </main>
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import ModalAuth from "./components/ModalAuth.vue";
import ModalCart from "./components/ModalCart.vue";
import { EventBus } from '@/utils/EventBus'

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    ModalAuth,
    ModalCart
  },
  data() {
    return {
      showCartModal: false,
      showAuthModal: false,
    }
  },
  created() {
    EventBus.on('toggle-cart-modal', this.toggleCartModal)
    EventBus.on('toggle-auth-modal', this.toggleAuthModal)
  },
  methods: {
    toggleCartModal() {
      this.showCartModal = !this.showCartModal
    },
    toggleAuthModal() {
      this.showAuthModal = !this.showAuthModal
    }
  }
};
</script>

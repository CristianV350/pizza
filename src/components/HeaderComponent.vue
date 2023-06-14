<template>
  <header class="header">
    <router-link :to="{ name: 'home' }" class="logo">
      <img src="@/img/icon/logo.svg" alt="Logo" />
    </router-link>
    <label class="address">
      <input
        type="text"
        class="input input-address"
        placeholder="Адрес доставки"
      />
    </label>
    <div class="buttons">
      <span class="user-name"></span>
      <button class="button button-primary button-auth" @click="toggleAuth">
        <span class="button-auth-svg"></span>
        <span class="button-text">Войти</span>
      </button>
      <button class="button button-cart" id="cart-button" @click="toggleCart">
        <span class="button-cart-svg"></span>
        <span class="button-text">Корзина</span>
      </button>
      <button class="button button-primary button-out">
        <span class="button-text">Выйти</span>
        <span class="button-out-svg"></span>
      </button>
    </div>
  </header>
</template>

<script>
import { EventBus } from '@/utils/EventBus';

export default {
  data() {

  },
  created() {

  },
  methods: {
    toggleAuth() {
      EventBus.emit('toggle-auth-modal')
    },
    toggleCart() {
      EventBus.emit('toggle-cart-modal')
    }
  }
}
</script>
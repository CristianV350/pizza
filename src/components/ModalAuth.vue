<template>
  	<div class="modal-auth" @click.self="toggleAuthModal">
		<div class="modal-dialog modal-dialog-auth">
			<button class="close-auth" @click="toggleAuthModal">&times;</button>
			<form id="logInForm">
				<fieldset class="modal-body">
					<legend class="modal-title">Авторизация</legend>
					<label class="label-auth">
						<span>Логин</span>
						<input id="login" type="text">
					</label>
					<label class="label-auth">
						<span>Пароль</span>
						<input id="password" type="password">
					</label>
				</fieldset>
				<!-- /.modal-body -->
				<div class="modal-footer">
					<div class="footer-buttons">
						<button class="button button-primary button-login" type="submit">Войти</button>
					</div>
				</div>
			</form>
			<!-- /.modal-footer -->
		</div>
		<!-- /.modal-dialog -->
	</div>
</template>

<script>
import { EventBus } from '@/utils/EventBus';

export default {
	methods: {
		toggleAuthModal() {
			EventBus.emit('toggle-auth-modal')
		}
	}
}
</script>

<style>

</style>
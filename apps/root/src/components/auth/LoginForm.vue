<script setup lang="ts">
import type { LoginRequest } from '@/api/auth';
import AuthService from '@/api/auth';

const form = ref<LoginRequest>({
    email: '',
    password: '',
});

async function login() {
    const res = await AuthService.login(form.value);
    console.log(res);
}
</script>

<template>
    <VForm class="d-flex flex-column" @submit.prevent="login">
        <VTextField v-model="form.email" label="E-mail" />
        <VTextField v-model="form.password" label="Пароль" type="password" />
        <VBtn type="submit">
            Войти
        </VBtn>
    </VForm>
</template>

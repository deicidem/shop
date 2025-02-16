<script setup lang="ts">
import type { RegisterRequest } from '@/api/auth';
import AuthService from '@/api/auth';

const form = ref<RegisterRequest>({
    userName: '',
    email: '',
    password: '',
});

async function register() {
    const res = await AuthService.register(form.value);
    console.log(res);
}
</script>

<template>
    <VForm class="d-flex flex-column" @submit.prevent="register">
        <VTextField v-model="form.userName" label="Имя" />
        <VTextField v-model="form.email" label="E-mail" />
        <VTextField v-model="form.password" label="Пароль" type="password" />
        <VBtn type="submit">
            Зарегистрироваться
        </VBtn>
    </VForm>
</template>

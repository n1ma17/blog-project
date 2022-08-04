<template>
    <div class="auth">
        <div class="auth__login" v-if="haveAccount">
            <login-form @haveAccount="haveAccount = $event"></login-form>
        </div>
        <div class="auth__register" v-else>
            <register-form @haveAccount="haveAccount = $event"></register-form>
        </div>
    </div>

</template>

<script>
import { ref } from 'vue'
import LoginForm from '/src/components/Auth/LoginForm.vue'
import RegisterForm from '/src/components/Auth/RegisterForm.vue'
export default {
    name: 'AuthPage',
    components: {
        LoginForm,
        RegisterForm
    },
    setup() {
        let haveAccount = ref(true)
        const accountHandler = () => {
            haveAccount.value === !haveAccount.value
        }
        return {
            haveAccount,
            accountHandler
        }
    }
}
</script>

<style lang="scss" scoped>
.auth {
    height: 100%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    &__login,
    &__register {
        width: 55%;
        border-radius: 10px;
        background-color: #fff;
        padding: 20px;
        height: 500px;
        box-shadow: 0 0 11px 1px #e1e1e1;


    }
}
</style>
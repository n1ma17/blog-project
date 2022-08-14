<template>
    <div class="auth">
        <div class="auth__login" v-if="haveAccount">
            <v-progress-circular v-if="loginLoading" class="ml-6" :size="40" :width="4" color="success" indeterminate>
            </v-progress-circular>
            <login-form v-else @haveAccount="haveAccount = $event"></login-form>
        </div>
        <div class="auth__register" v-else>
            <v-progress-circular v-if="registerLoading" class="ml-6" :size="40" :width="4" color="success"
                indeterminate>
            </v-progress-circular>
            <register-form v-else @haveAccount="haveAccount = $event"></register-form>
        </div>
    </div>

</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import LoginForm from '/src/components/Auth/LoginForm.vue'
import RegisterForm from '/src/components/Auth/RegisterForm.vue'
export default {
    name: 'AuthPage',
    components: {
        LoginForm,
        RegisterForm
    },
    setup() {
        const store = useStore()
        let haveAccount = ref(true)
        const accountHandler = () => {
            haveAccount.value === !haveAccount.value
        }
        const loginLoading = computed(() => store.getters['auth/loginLoading'])
        const registerLoading = computed(() => store.getters['auth/registerLoading'])
        return {
            haveAccount,
            accountHandler,
            registerLoading,
            loginLoading
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
        box-shadow: 0 0 11px 1px #e1e1e1;

        @media only screen and (max-width: 768px) {
            width: 90%;
        }
    }

    &__login {
        height: 500px;
    }

    &__register {
        min-height: 500px;
    }
}
</style>
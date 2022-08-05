<template>
    <form class="login" @submit.prevent="handleLogin">
        <div class="login__content">
            <span class="login__content__title">Log In</span>
            <div class="login__content__form">
                <v-text-field :rules="emailRules" required v-model="item.email" label="Email" class="mb-4">
                </v-text-field>
                <v-text-field :rules="passwordRules" required v-model="item.password" label="Password" type="password"
                    class="mb-4">
                </v-text-field>
            </div>
        </div>
        <div class="login__btn">
            <div @click="accountHandler" class="login__btn__account-status">
                <span>Don't have an account yet? </span>
                <a class="ml-2">Register now</a>
            </div>
            <Button type="submit" icon="fa-solid fa-check-double" text="Sign in" />
        </div>
        <v-alert transition="slide-x-transition" v-if="showError" type="error">
            request is failed
        </v-alert>
    </form>
</template>

<script>
import { reactive, computed } from 'vue'
import Button from '/src/components/shared/Button/index.vue'
import { APP_LOGIN_ACTION } from "./../../store/actionTypes/Auth"
import { useStore } from 'vuex'
export default {
    name: 'LogIn',
    components: {
        Button
    },
    setup(_, { emit }) {
        const store = useStore()
        const item = reactive({
            email: '',
            password: ''
        })

        const handleLogin = () => {
            const params = {
                user: item
            }
            store.dispatch(`auth/${APP_LOGIN_ACTION}`, params)
        }
        const accountHandler = () => {
            emit('haveAccount', false)
        }
        const passwordRules = [
            v => !!v || 'Input is required',
            v => v.length > 3 || 'min:3',
        ]
        const emailRules = [
            v => !!v || 'Input is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ]
        const showError = computed(() => store.getters['auth/LoginError'])
        return {
            item,
            handleLogin,
            accountHandler,
            emailRules,
            passwordRules,
            showError,
        }
    }
}

</script>

<style lang="scss" scoped>
.login {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #29335C;

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;

        &__title {
            color: #5F7470;
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 30px;
        }

        &__form {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
    }

    &__btn {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 0 0 0;
        border-top: 1px solid #5F7470;

        &__account-status {
            font-size: 10px;
            color: #b7b7b7;

            a {
                font-size: 12px;
                color: #5F7470;
                cursor: pointer;
                font-weight: 600;
            }
        }
    }
}
</style>
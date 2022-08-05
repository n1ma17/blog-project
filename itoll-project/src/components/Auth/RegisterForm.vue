<template>
    <form @submit.prevent="handleRegister" class="register">
        <div class="register__content">
            <span class="register__content__title">Register</span>
            <div class="register__content__form">
                <v-text-field required v-model="registerItem.username" label="Username"></v-text-field>
                <v-text-field :rules="emailRules" required v-model="registerItem.email" label="Email"></v-text-field>
                <v-text-field :rules="passwordRules" required v-model="registerItem.password" label="Password"
                    type="password">
                </v-text-field>
                <v-text-field :rules="passwordRules" required v-model="registerItem.repassword" label="Confirm Password"
                    type="password">
                </v-text-field>
            </div>
        </div>
        <div class="register__btn">
            <div @click="accountHandler" class="register__btn__account-status">
                <span>Already have login and password? </span>
                <a class="ml-2">Sign in</a>
            </div>
            <Button type="submit" icon="fa-solid fa-check-double" text="register" />
        </div>
        <v-alert v-if="errorAlert.showError" type="error">
            {{ errorAlert.text }}
        </v-alert>
    </form>
</template>

<script>
import { reactive } from 'vue'
import TextField from '/src/components/shared/TextField/index.vue'
import Button from '/src/components/shared/Button/index.vue'
import { useStore } from 'vuex'
import { APP_REGISTER_ACTION } from '../../store/actionTypes/Auth'

export default {
    name: 'Register',
    components: {
        TextField,
        Button
    },
    setup(_, { emit }) {
        const store = useStore()
        const registerItem = reactive({
            username: '',
            email: '',
            password: '',
            repassword: ''
        })
        let errorAlert = reactive({
            showError: false,
            text: 'an error has accord'
        })
        const handleRegister = () => {
            const params = {
                user: {
                    username: registerItem.username,
                    email: registerItem.email,
                    password: registerItem.password
                }
            }



            if (registerItem.password === registerItem.repassword) {
                store.dispatch(`auth/${APP_REGISTER_ACTION}`, params)
            } else {
                errorAlert.showError = true
                errorAlert.text = 'passwords dosent match'
                setTimeout(() => {
                    errorAlert.showError = false
                    errorAlert.text = ''
                }, 3000);

            }

        }
        const accountHandler = () => {
            emit('haveAccount', true)
        }
        const passwordRules = [
            v => !!v || 'Input is required',
            v => v.length > 3 || 'min:3',
        ]
        const emailRules = [
            v => !!v || 'Input is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ]
        return {
            handleRegister,
            registerItem,
            emailRules,
            passwordRules,
            accountHandler,
            errorAlert
        }
    }
}

</script>

<style lang="scss" scoped>
.register {
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
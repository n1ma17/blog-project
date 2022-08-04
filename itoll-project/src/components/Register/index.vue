<template>
    <form @submit.prevent="handleRegister" class="register">
        <div class="register__content">
            <span class="register__content__title">Register</span>
            <div class="register__content__form">
                <TextField v-model="registerItem.username" name="user" lable="Username" type="text" class="mb-4" />
                <TextField v-model="registerItem.email" name="email" lable="Email" type="email" class="mb-4" />
                <TextField v-model="registerItem.password" name="password" lable="Password" type="password"
                    class="mb-4" />
                <TextField v-model="registerItem.repassword" name="repassword" lable="Confirm Password"
                    type="password" />
            </div>
        </div>
        <div class="register__btn">
            <Button type="submit" icon="fa-solid fa-check-double" text="register" />
        </div>
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
    setup() {
        const store = useStore()
        const registerItem = reactive({
            username: '',
            email: '',
            password: '',
            repassword: ''
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
            }else alert('incorrect password')
        }
        return {
            handleRegister,
            registerItem
        }
    }
}

</script>

<style lang="scss" scoped>
.register {
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
        justify-content: flex-end;
        padding: 30px 0 0 0;
        border-top: 1px solid #5F7470;
    }
}
</style>
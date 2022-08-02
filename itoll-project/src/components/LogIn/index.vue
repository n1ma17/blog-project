<template>
    <div class="login">
        <div class="login__content">
            <span class="login__content__title">Log In</span>
            <div class="login__content__form">
                <TextField v-model="model.name" @update:modelValue="model.name = $event" lable="Email" type="text" class="mb-4" />
                <TextField v-model="model.name" @update:modelValue="model.name = $event" lable="Password" type="text" />
            </div>
        </div>
        <div class="login__btn">
            <Button icon="fa-solid fa-check-double" text="log in" />
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'
import TextField from '/src/components/shared/TextField/index.vue'
import Button from '/src/components/shared/Button/index.vue'
export default {
    name: 'LogIn',
    components: {
        TextField,
        Button
    },
    setup() {
        const model = reactive({
            name: ''
        })
        return {
            model
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
        justify-content: flex-end;
        padding: 30px 0 0 0;
        border-top: 1px solid #5F7470;
    }
}
</style>
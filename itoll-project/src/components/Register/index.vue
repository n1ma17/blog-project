<template>
   <div class="register">
        <div class="register__content">
            <span class="register__content__title">Register</span>
            <div class="register__content__form">
                <TextField  lable="Username" type="text" class="mb-4" />
                <TextField  lable="Email" type="text" class="mb-4" />
                <TextField  lable="Password" type="text" class="mb-4" />
                <TextField  lable="Confirm Password" type="text" />
            </div>
        </div>
        <div class="register__btn">
            <Button  icon="fa-solid fa-check-double" text="register" />
        </div>
    </div>
</template>

<script>
import TextField from '/src/components/shared/TextField/index.vue'
import Button from '/src/components/shared/Button/index.vue'

export default {
    name: 'Register',
    components: {
        TextField,
        Button
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
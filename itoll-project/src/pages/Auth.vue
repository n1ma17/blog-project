<template>
    <div class="auth">
        <div class="auth__login">
            <LogIn />
        </div>
        <div class="auth__register">
            <Register />
        </div>
    </div>

</template>

<script>
import LogIn from '/src/components/LogIn/index.vue'
import Register from '/src/components/Register/index.vue'
export default {
    name: 'AuthPage',
    components: {
        LogIn,
        Register
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
    justify-content: space-between;

    &__login, &__register {
        width: 45%;
        border-radius: 10px;
        background-color: #fff;
        padding: 20px;
        height: 500px;
        box-shadow: 0 0 11px 1px #e1e1e1;
    }
}
</style>
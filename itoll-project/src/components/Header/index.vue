<template>
    <div class="header">
        <v-container>
            <div class="header__content">
                <div class="header__content__logo">
                    <img class="header__content__logo__image" src="../../assets/1.png" alt="logo">
                    <span class="ml-3">{{ title }}</span>
                </div>
                <div class="header__content__search">
                    <v-text-field solo label="search" dense hide-details></v-text-field>
                </div>
                <div class="header__content__actions">
                    <Button size="lg" color="#00000" text="Sign in" icon="fa-solid fa-right-to-bracket"
                        class="mr-3"></Button>
                    <Button size="lg" color="#00000" text="Register" icon="fa-solid fa-right-to-bracket"></Button>
                </div>
            </div>

        </v-container>
    </div>
</template>

<script>
import Button from '../shared/Button/index.vue'
export default {
    components: {
        Button
    },
    setup() {

        return {
            title: 'Logo',

        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 0px 10px #e0daca;

    &__content {
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__search {
            width: 40%;
            height: 80%;
        }

        &__logo {
            font-size: 32px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;

            &__image {
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
        }
    }
}
</style>
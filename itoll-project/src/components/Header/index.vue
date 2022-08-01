<template>
    <div class="header">
        <div class="header__user">
            <div class="header__user__avatar">
                <fa class="header__user__avatar__icon" icon="fa-solid fa-user" />
            </div>
            <div class="header__user__info ml-3">
                <span class="header__user__info__name">{{ data.name }}</span>
                <span class="header__user__info__desc">{{ data.description }}</span>
            </div>
        </div>
        <div class="header__search">
            <v-text-field solo label="search" dense hide-details></v-text-field>
        </div>
        <div class="header__actions">
            <Button class="mr-3" icon="fa-solid fa-right-to-bracket" text="Log in" />
            <Button icon="fa-solid fa-user-plus" text="Register" />
        </div>
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
            data: {
                name: 'name',
                description: 'lorem lorem lorem'
            }

        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #5F7470;
    color: #FDF8EA;
    padding: 0 30px;

    &__search {
        width: 40%;
        height: 80%;
    }

    &__user {
        display: flex;
        align-items: center;
        justify-content: center;

        &__avatar {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #FDF8EA;

            &__icon {
                color: #29335C;
                font-size: 18px;
            }
        }

        &__info {
            color: #FDF8EA;
            display: flex;
            flex-direction: column;

            &__name {
                font-size: 14px;
                font-weight: 600;
            }

            &__desc {
                font-size: 12px;
                font-weight: 400;
            }
        }
    }

    &__actions {
        display: flex;
        align-items: center;

        &__item {
            border: 1px solid grey;
            padding: 5px 10px;
            border-radius: 10px;
            cursor: pointer;

            .icon {
                font-size: 14px;
            }

            a {
                font-size: 14px;
                font-weight: 600;
            }
        }
    }

}
</style>
<template>
    <div class="header">
        <div class="header__user">
            <div class="header__user__avatar">
                <fa class="header__user__avatar__icon" icon="fa-solid fa-user" />
            </div>
            <div class="header__user__info ml-3">
                <span class="header__user__info__name">{{ data.name }}</span>
                <span class="header__user__info__desc">{{ data.email }}</span>
            </div>
        </div>
        <div class="header__menu">
            <router-link to="/">
                Articles
            </router-link>
            <router-link to="/create-article">
                Create Article
            </router-link>
        </div>
        <div class="header__actions">
            <router-link to="/Auth">
                <Button class="mr-3" icon="fa-solid fa-right-to-bracket" text="Log in / Register" />
            </router-link>
            <Button class="mr-3" icon="fa-solid fa-right-from-bracket" text="Log out" />
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
                email: 'test@test.com'
            }

        }
    }
}
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
}

.header {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FDF8EA;
    box-shadow: 0px 0px 8px #5f7470;
    padding: 0 20px;

    &__menu {
        width: 50%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            color: #FDF8EA;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            padding: 5px 0;
            margin: 0 20px;


            &:before {
                content: '';
                position: absolute;
                bottom: 0;
                right: 100%;
                width: 100%;
                height: 3px;
                background: #FDF8EA;
                transition: all 0.3s;
                transition-delay: 0.15s;
                border-radius: 10px;
            }

            &:hover {
                &:before {
                    right: 0;
                }
            }
        }

    }

    &__user {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 25%;

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
        justify-content: flex-end;
        width: 25%;

        a {
            color: #FDF8EA;
        }
    }

}
</style>
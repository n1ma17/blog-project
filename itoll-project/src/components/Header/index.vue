<template>
    <div class="header">
        <div class="header__user" @click="routeToProfile">
            <div class="header__user__avatar">
                <fa class="header__user__avatar__icon" icon="fa-solid fa-user" />
            </div>
            <div class="header__user__info ml-3">
                <span class="header__user__info__name">{{ user.username }}</span>
                <span class="header__user__info__desc">{{ user.email }}</span>
            </div>
        </div>
        <div class="header__menu">
            <router-link to="/">
                Articles
            </router-link>
            <router-link to="/create-article" v-if="isAuth">
                Create Article
            </router-link>
            <router-link to="/profile" v-if="isAuth">
                Profile
            </router-link>
        </div>
        <div class="header__actions">
            <router-link v-if="!isAuth" to="/Auth">
                <Button class="mr-3" icon="fa-solid fa-right-to-bracket" text="Log in / Register" />
            </router-link>
            <router-link v-else :to="{ name: 'Auth' }">
                <Button class="mr-3" icon="fa-solid fa-right-from-bracket" text="Log out" />
            </router-link>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import router from '../../router'
import Button from '../shared/Button/index.vue'
export default defineComponent({
    components: {
        Button
    },
    setup() {
        const store = useStore()
        const isAuth = computed(() => store.getters["auth/isAuth"])
        const user = computed(() => {
            const profile = store.getters["auth/profile"]
            return {
                username: profile?.username || "",
                email: profile?.email || ""
            }
        })
        const routeToProfile = () => {
            router.push({
                path: 'profile',
                query: {
                    username: user.value.username
                }
            })
        }
        return {
            user,
            isAuth,
            routeToProfile
        }
    }
})
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

    @media only screen and (max-width: 425px) {
        padding: 0 5px;
    }

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

            @media only screen and (max-width: 425px) {
                font-size: 12px;
                margin: 0 10px;
            }

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
        cursor: pointer;

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

        @media only screen and (max-width: 768px) {
            display: none;
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

    @media only screen and (max-width: 768px) {
        &__menu {
            width: 70%;
            display: flex;
            justify-content: flex-start;

            a {
                font-size: 12px;
            }

        }
    }

}
</style>
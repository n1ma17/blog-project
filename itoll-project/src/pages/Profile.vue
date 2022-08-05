<template>
    <div class="profile">
        <div class="profile__form">
            <form @submit.prevent="editProfile">
                <v-text-field v-model="formData.user.email" label="email" class="mb-4"></v-text-field>
                <v-text-field v-model="formData.user.username" label="username" type="username" class="mb-4">
                </v-text-field>
                <v-text-field v-model="formData.user.password" label="password" type="password" class="mb-4">
                </v-text-field>
                <div class="btn">
                    <Button type="submit" icon="fa-solid fa-pen-to-square" text="Edit Profile" />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Button from '/src/components/shared/Button/index.vue'
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'
import { EDIT_PROFILE_ACTION } from '../store/actionTypes/Auth'
export default {
    name: 'ProfilePage',
    components: {
        Button
    },
    setup() {

        const store = useStore()
        const profile = computed(() => store.getters["auth/profile"])
        const formData = reactive({
            user: {
                email: profile.value.user.email,
                password: "",
                username: profile.value.user.username
            }
        })

        const editProfile = () => {
            store.dispatch(`profile/${EDIT_PROFILE_ACTION}`, formData)
        }
        return {
            formData,
            editProfile
        }
    }
}

</script>

<style lang="scss" scoped>
.btn {
    text-align: right;
}

.profile {
    width: 100%;
    min-height: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__form {
        border-radius: 10px;
        background-color: #fff;
        padding: 20px;
        box-shadow: 0 0 11px 1px #e1e1e1;


    }
}
</style>
<template>
    <form @submit.prevent="createArticle" class="create-article">
        <div class="create-article__content">
            <span class="create-article__content__title">Create New Article</span>
            <div class="create-article__content__form">
                <div class="create-article__content__form__input">
                    <v-text-field v-model="formData.title" label="Title" class="mb-4"></v-text-field>
                </div>
                <div class="create-article__content__form__input">
                    <v-select v-model="formData.tagList" multiple chips :items="tagsList" label="Tags" class="mb-4">
                    </v-select>
                </div>
                <div class="create-article__content__form__input">
                    <v-textarea v-model="formData.description" name="create-article-desc" label="Description"
                        class="mb-4"></v-textarea>
                </div>
                <div class="create-article__content__form__input">
                    <v-textarea v-model="formData.body" name="create-article-body" label="Body" class="mb-4">
                    </v-textarea>
                </div>

            </div>
        </div>
        <div class="create-article__btn">
            <Button type="submit" icon="fa-solid fa-feather" text="create article" />
        </div>
    </form>
</template>

<script>
import Button from '/src/components/shared/Button/index.vue'
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
import { reactive } from 'vue'
import { ARTICLE_GET_TAGS, APP_CREATE_ARTICLE } from '../store/actionTypes/Auth'
export default {
    name: 'CreateArticlePage',
    components: {
        Button
    },
    setup() {
        const store = useStore()
        store.dispatch(`articles/${ARTICLE_GET_TAGS}`)
        const tagsList = computed(() => store.getters['articles/getTags'])
        const formData = reactive({
            title: '',
            tagList: null,
            body: '',
            description: ''
        })
        const createArticle = () => {
            const params = {
                article: formData
            }
            store.dispatch(`articles/${APP_CREATE_ARTICLE}`, params)
        }
        return {
            tagsList,
            createArticle,
            formData
        }
    }
}

</script>

<style lang="scss" scoped>
.create-article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #29335C;
    border-radius: 10px;
    background-color: #fff;
    padding: 20px;
    min-height: 500px;
    box-shadow: 0 0 11px 1px #e1e1e1;

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        &__title {
            color: #5F7470;
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 30px;
        }

        &__form {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;

            &__input {
                width: 100%;
            }
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
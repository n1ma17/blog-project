<template>
    <div class="single-article" v-if="!loading">
        <div class="single-article__main">
            <div class="single-article__main__author">
                <img :src="article?.author?.image" alt="author">
                <div class="single-article__main__author__info">
                    <span>Author: </span>
                    <span class="single-article__main__author__info__user">{{ article?.author?.username }}</span>

                </div>
                <div class="single-article__main__author__date">
                    <span class="single-article__main__author__date__ceation-time">
                        Created at: <b>{{ $dayjs(article?.createdAt).format('YYYY/MM/DD HH:mm') }}</b>
                    </span>
                    <span class="single-article__main__author__date__update-time">
                        Updated at: <b>{{ $dayjs(article?.updatedAt).format('YYYY/MM/DD HH:mm') }}</b>
                    </span>
                </div>
            </div>
            <div class="single-article__main__content">
                <div class="single-article__main__content__header">
                    <span class="single-article__main__content__header__title">{{ article?.title }}</span>
                    <span class="single-article__main__content__header__desc">{{ article?.description }}</span>
                </div>
                <span class="single-article__main__content__body">{{ article?.body }}</span>
            </div>
        </div>
        <div class="single-article__coments" v-if="comments?.length">
            <span class="single-article__coments__title">Comments: </span>
            <CommentCard v-for="(comment, i) in comments" :key="`article-comment-${i}`" :comment="comment" />
        </div>
    </div>
    <div v-if="loading" class="article-loading">
        <v-progress-circular :size="40" :width="4" color="success" indeterminate></v-progress-circular>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import CommentCard from '/src/components/Articles/CommentCard.vue'
import { APP_SINGLE_ARTICLE, APP_ARTICLE_COMMENTS } from '../store/actionTypes/Actions'
export default {
    name: 'SingleArticle',
    components: {
        CommentCard
    },
    setup() {
        const store = useStore()
        const route = useRoute()
        store.dispatch(`articles/${APP_SINGLE_ARTICLE}`, route.query.slug)
        const article = computed(() => store.getters['articles/getSingleArticle'])
        store.dispatch(`articles/${APP_ARTICLE_COMMENTS}`, route.query.slug)
        const comments = computed(() => store.getters['articles/getComments'])
        const loading = computed(() => store.getters['articles/singleArticleLoading'])

        return {
            article,
            comments,
            loading
        }
    }
}
</script>

<style lang="scss" scoped>
.article-loading {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.single-article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    &__main {
        display: flex;
        width: 100%;
        align-items: flex-start;
        justify-content: space-between;

        &__author {
            width: 30%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            min-height: 300px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0px 0px 12px #e8e8e8;
            padding: 20px;

            img {
                width: 100px;
                height: 100px;
                border-radius: 10px;
            }

            &__date {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-end;

                &__ceation-time,
                &__update-time {
                    font-size: 12px;
                    color: #29335c;
                }
            }


            &__info {
                font-size: 14px;
                font-weight: 400;
                color: #5F7470;

                &__user {
                    font-size: 16px;
                    font-weight: 600;
                    color: #5F7470;
                }
            }
        }

        &__content {
            width: 65%;
            min-height: 300px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;

            &__header {
                width: 100%;
                height: 50%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-between;

                &__title {
                    font-size: 26px;
                    font-weight: 700;
                    color: #5F7470;
                }

                &__desc {
                    font-size: 14px;
                    font-weight: 400;
                    color: #29335c;
                }
            }

            &__body {
                margin-top: 20px;
                font-size: 18px;
                font-weight: 400;
                color: #5F7470;
            }
        }
    }

    &__coments {
        width: 100%;
        margin-top: 50px;

        &__title {
            font-size: 26px;
            font-weight: 700;
            color: #29335c;
        }
    }

    @media only screen and (max-width: 425px) {
        &__main {
            flex-direction: column;
            justify-content: space-around;

            &__author {
                width: 100%;
                flex-direction: column;
                padding: 10px;
                min-height: 200px;
                background-color: #5F7470;

                &__date {

                    &__ceation-time,
                    &__update-time {
                        font-size: 10px;
                        color: #fff;
                    }
                }

                &__info {
                    font-size: 12px;
                    color: #fff;
                    &__user {
                        font-size: 14px;
                        color: #fff;
                    }
                }
            }

            &__content {
                width: 100%;
                align-items: center;
                margin-top: 10px;
                min-height: 200px;

                &__header {
                    align-items: center;

                    &__title {
                        font-size: 20px;
                    }

                    &__desc {
                        font-size: 12px;
                        text-align: center;
                    }
                }

                &__body {
                    margin-top: 10px;
                    font-size: 16px;
                    text-align: center;
                }
            }
        }

        &__coments {
            margin-top: 30px;

            &__title {
                font-size: 20px;
            }
        }
    }
}
</style>
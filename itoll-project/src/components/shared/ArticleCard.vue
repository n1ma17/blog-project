<template>
    <div class="card" @click="routeToSlug">
        <div class="card__content">
            <div class="card__content__author">
                <img :src="data?.author?.image" :alt="data.author.username" />
                <span class="mt-2"><b>Author:</b> {{ data.author.username }}</span>
            </div>
            <div class="card__content__info">
                <span class="card__content__info__title">{{ data.title }}</span>
                <span class="card__content__info__desc">{{ data.description }}</span>
            </div>
        </div>
        <div class="card__footer">
            <div class="card__footer__tag">
                <span v-for="(tag, i) in data.tagList" :key="`card-tag-${i}`">{{ tag }}</span>
            </div>
            <div class="card__footer__date">
                <span>Created {{ data.createdAt ? $dayjs().diff($dayjs(data.createdAt), 'month') : '' }} month
                    ago</span>
                <span>last update: {{ data.updatedAt ? $dayjs(data.updatedAt).format('YYYY/MM/DD') : '' }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import router from '../../router'

export default {
    name: 'ArticleCard',
    props: {
        data: {
            type: Object,
            default: () => ({})
        }
    },
    setup(props) {
        const routeToSlug = () => {
            router.push({
                path: 'single-article',
                query:{
                    slug: props.data.slug
                }
            })
        }
        return {
            routeToSlug
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    width: 100%;
    min-height: 200px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 12px #e8e8e8;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    &__content {
        height: 70%;
        display: flex;
        justify-content: space-between;

        &__info {
            display: flex;
            flex-direction: column;
            width: 70%;
            height: 100%;

            &__title {
                font-size: 24px;
                font-weight: 700;
                color: #5F7470;
            }

            &__desc {
                font-size: 14px;
                font-weight: 500;
                color: #5F7470;
            }
        }

        &__author {
            width: 20%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;

            img {
                min-height: 100px;
                height: 100px;
                border-radius: 10px;
            }

            span {
                font-size: 12px;
                font-weight: 400;
                color: #5F7470;
            }
        }
    }

    &__footer {
        width: 100%;
        display: flex;
        align-items: center;

        justify-content: space-between;

        &__date {
            display: flex;
            flex-direction: column;

            span {
                font-size: 10px;
                font-weight: 600;
                color: #29335C;
            }
        }

        &__tag {

            span {
                padding: 5px 10px;
                border-radius: 10px;
                background-color: #29335C;
                color: #FDF8EA;
                font-size: 12px;
                font-weight: 600;
                margin-right: 5px;
            }
        }
    }

    @media only screen and (max-width: 600px) {
        &__content {
            &__author {
                img {
                    min-height: 80px;
                    height: 80px;
                }

                span {
                    font-size: 10px;
                }
            }
        }

        @media only screen and (max-width: 425px) {
            &__content {
                flex-direction: column;

                &__info {


                    &__title {
                        font-size: 18px;
                    }

                    &__desc {
                        font-size: 12px;
                    }
                }

                &__author {
                    width: 100%;

                    img {
                        width: 100%;
                        height: auto;
                    }

                    span {
                        font-size: 10px;
                    }
                }
            }

            &__footer {

                &__tag {

                    span {

                        margin-right: 0;
                    }
                }
            }
        }
    }
}
</style>
<template>
    <div class="comment-card">
        <div class="comment-card__header">
            <div class="comment-card__header__author">
                <img :src="comment.author.image" alt="comment-img">
                <span>{{ comment.author.username }}</span>
            </div>
            <div class="comment-card__header__content">
                <span>{{ comment.body }}</span>
            </div>
        </div>
        <div class="comment-card__footer">
            <span>Create at: {{ $dayjs(comment.createdAt).format('YYYY/MMM/DD') }}</span>
            <span>Update {{ $dayjs().diff(comment.updatedAt, 'month') }} month ago</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommentCard',
    props: {
        comment: {
            type: Object,
            default: () => ({})
        }
    }
}

</script>

<style lang="scss" scoped>
.comment-card {
    width: 100%;
    min-height: 200px;
    background-color: #fff;
    border-radius: 0 40px 40px 40px;
    box-shadow: 0px 0px 12px #e8e8e8;
    margin-top: 10px;
    padding: 20px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;

    &__header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        &__author {
            width: 20%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;

            img {
                width: 100px;
                height: 100px;
                border-radius: 50%;
            }

            span {
                width: 100%;
                font-size: 16px;
                font-weight: 700;
                color: #29335c;
                margin-top: 10px;
            }
        }

        &__content {
            width: 75%;

            span {
                font-size: 14px;
                color: #29335c;
            }
        }
    }

    &__footer {
        width: 100%;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        justify-content: space-between;
        span{
            font-size: 10px;
            color: #29335c;
            font-weight: 700;
        }
    }

}
</style>
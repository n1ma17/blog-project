<template>
    <div class="create-article">
        <div class="create-article__content">
            <span class="create-article__content__title">Create New Article</span>
            <div class="create-article__content__form">
                <div class="create-article__content__form__input">
                    <TextField lable="Title" type="text" class="mb-4" />
                </div>
                <div class="create-article__content__form__input">
                    <TextField lable="Tag" type="select" class="mb-4" />
                </div>
                <div class="create-article__content__form__input">
                    <TextField lable="Description" type="text" class="mb-4" />
                </div>
                <div class="create-article__content__form__input">
                    <TextField lable="Body" type="text" class="mb-4" />
                </div>

            </div>
        </div>
        <div class="create-article__btn">
            <Button icon="fa-solid fa-feather" text="create article" />
        </div>
    </div>
</template>

<script>
import TextField from '/src/components/shared/TextField/index.vue'
import Button from '/src/components/shared/Button/index.vue'
export default {
    name: 'CreateArticlePage',
    components: {
        TextField,
        Button
    },
    setup() {

        return {

        }
    }
}

</script>

<style lang="scss" scoped>
.create-article {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #29335C;
    border-radius: 10px;
    background-color: #fff;
    padding: 20px;
    height: 500px;
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
<template>
    <div class="textarea">
        <textarea class="textarea__input" id="textarea" name="textarea" :rows="rows" :cols="cols"></textarea>
        <label class="textarea__label" for="textarea">{{ label }}</label>
    </div>
</template>

<script>
export default {
    name: 'TextareaInput',
    props: {
        rows: {
            type: Number,
            default: 1
        },
        cols: {
            type: Number,
            default: 1
        },
        label: {
            type: String,
            default: ''
        }
    }
}

</script>

<style lang="scss" scoped>
.textarea {
    position: relative;
    margin-top: 10px;

    &__input {
        width: 100%;
        padding: 10px 20px;
        border: 1px solid #d2d2d2;
        outline: 0;
        font-size: 16px;
        transition: border-color 0.2s;
        border-radius: 10px;

        &:focus {
            border: 1px solid #29335cb7;
        }
    }

    &__label {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        color: #29335cb7;
        transition: all 0.3s;
        transition-delay: 0s;
        padding: 0 10px;
    }

    .textarea__input:focus+.textarea__label {
        top: 0;
        transform: translateY(-50%);
        color: #29335c;
        background-color: #FDF8EA;
    }
}
</style>
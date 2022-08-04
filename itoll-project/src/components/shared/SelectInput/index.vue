<template>
    <div class="select-input">
        <select class="select-text" name="select" id="select-input">
            <option v-for="item, i in options" :key="`select-option-${i}`" :value="item">{{item}}</option>
        </select>
        <label class="select-label" for="select-input">{{label}}</label>
    </div>
</template>

<script>

export default {
    name: 'SelectInput',
    props: {
        options: {
            type: Array,
            default: () => []
        },
        label: {
            type: String,
            default: ''
        }
    }
}

</script>

<style lang="scss" scoped>
.select-input {
    position: relative;
    margin-top: 10px;

    .select-text {
        // appearance: none;
        width: 100%;
        padding: 10px 20px;
        border: 1px solid #d2d2d2;
        outline: 0;
        font-size: 16px;
        transition: border-color 0.2s;
        border-radius: 10px;
        position: relative;



        &:focus {
            border: 1px solid #29335cb7;
        }
    }

    .select-label {
        position: absolute;
        pointer-events: none;
        left: 20px;
        top: 10px;
        transition: 0.2s ease all;
    }

    &:focus {
        .select-label {
            top: 0;
            transform: translateY(-50%);
            color: #29335c;
            background-color: #FDF8EA;
        }
    }

    .select-text:focus~.select-label {
        top: 0;
        transform: translateY(-50%);
        color: #29335c;
        background-color: #FDF8EA;
    }
}
</style>
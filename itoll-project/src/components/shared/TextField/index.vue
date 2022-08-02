<template>
    <div class="text-field">
        <input v-model="model" id="textField" class="text-field__input" type="text" />
        <label for="textField">{{ lable }}</label>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {

    name: 'TextField',
    props: {
        value: {
            type: String | Number,
            required: true
        },
        type: {
            type: String,
            default: 'text'
        },
        lable: {
            type: String,
            default: 'text'
        }
    },
    setup(props, { emit }) {
        const model = computed(
            {
                get: () => props.value,
                set: (value) => emit('update:value', value)
            }
        )
        return {
            model
        }
    }
}

</script>

<style lang="scss" scoped>
.text-field {
    position: relative;
    margin-top: 10px;


    input {
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

    label {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        color: #29335cb7;
        transition: all 0.3s;
        transition-delay: 0s;
        padding: 0 10px;
    }

    input:focus+label {
        top: 0;
        transform: translateY(-50%);
        color: #29335c;
        background-color: #FDF8EA;
    }
}
</style>
<template>
    <div class=" custom-button">
        <fa class="icon" :icon="icon" />
        <a>{{text}}</a>
    </div>
</template>

<script>
// import { computed } from 'vue';
export default {
    props: {
        icon: {
            type: String,
            default: ''
        },
        text: {
            default: '',
            type: String
        },
    },
    setup() {
        return {
        }
    }
}

</script>

<style lang="scss" scoped>
.custom-button {
    border: 1px solid #FDF8EA;
    width: 100px;
    height: 35px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;

    .icon {
        font-size: 14px;
        transition: all 0.6s;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        opacity: 0;
    }

    a {
        font-size: 12px;
        font-weight: 600;
        transition: all 0.3s;
        transition-delay: 0s;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 1;
    }

    &:before {
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        position: absolute;
        height: 0;
        background: #768d895a;
        transition: all 0.3s;
        transition-delay: 0.15s;
        border-radius: 10px;
    }

    &:hover {
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            opacity: 0;
            transform: translate(-50%, 0);
        }

        .icon {
            opacity: 1;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 16px;
        }

        &:before {
            height: 100%;
            transition-delay: 0s;
        }
    }


}
</style>
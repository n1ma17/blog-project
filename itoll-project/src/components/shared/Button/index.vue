<template>

    <button :style="style" class="custom-btn">
        <span>{{ text }}</span>
        <fa class="icon" :icon="icon" />
    </button>
</template>

<script>
import { computed } from 'vue';
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
        color: {
            default: '',
            type: String
        },
        size: {
            default: '',
            type: String
        },

    },
    setup(props) {
        const sizeHandler = computed(
            () => {
                switch (props.size) {
                    case 'sm':
                        return {
                            width: '60px',
                            height: '20px'
                        }
                    case 'md':
                        return {
                            width: '80px',
                            height: '30px'
                        }
                    case 'lg':
                        return {
                            width: '120px',
                            height: '40px'
                        }
                    default:
                        break;
                }
            }

        )
        const style = {
            color: props.color,
            'border-color': props.color,
            width: sizeHandler.value.width,
            height: sizeHandler.value.height
        }
        return {
            style,

        }
    }
}

</script>

<style lang="scss" scoped>
.custom-btn {
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    font-size: 14px;
    position: relative;
    transition: all 0.3s;
}

.custom-btn span {
    display: inline-block;
    transition: all 0.3s;
    opacity: 0.8;
}

.custom-btn .icon {
    font-size: 14px;
    top: 50%;
    transform: translate(50%, -50%);
    left: 0px;
    position: absolute;
    opacity: 0;
    transition: all 0.3s;
    transition-delay: 0s;
}

.custom-btn:before {
    content: '';
    top: 0;
    left: 0;
    width: 0;
    position: absolute;
    height: 100%;
    background: rgba(138, 138, 138, 0.121);
    transition: all 0.3s;
    transition-delay: 0.15s;
}

.custom-btn:hover span {
    transform: translate3d(10px, 0px, 0px);
    opacity: 1;
    font-size: 12px;
}

.custom-btn:hover .icon {
    opacity: 1;
    transition-delay: 0.15s;
}

.custom-btn:hover:before {
    width: 30px;
    transition-delay: 0s;
}

.custom-btn:active:before {
    background: rgba(43, 43, 43, 0.682);
}
</style>
<template>
  <div>
   
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {

    const store = useStore()
    const test = computed(() => store.getters.getTest)
    console.log(test.value);


    return {
      test
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
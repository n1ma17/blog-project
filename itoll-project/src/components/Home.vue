<template>
  <div class="home">
    <h1>Home</h1>
    <h3>{{ test }}</h3>
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
.home{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #5F7470;
}
</style>
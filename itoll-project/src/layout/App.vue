<template>
  <v-app class="app">
    <div class="app__header ">
      <Header />
    </div>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '../components/Header/index.vue'
export default {
  name: 'App',
  components: {
    Header
  }

}
</script>
<style scoped lang="scss">
.app {
  background-color: #FDF8EA;
  position: relative;

  &__header {
    position: sticky;
    top: 0;
    left: 0;
    margin-bottom: 50px;
    background-color: #5f7470;
  }
}
</style>
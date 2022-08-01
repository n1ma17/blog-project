<template>
  <v-app class="app">
    <div class="header mb-6">
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
.app{
  background-color: #FDF8EA;
}
</style>
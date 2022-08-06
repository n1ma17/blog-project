<template>
  <v-app class="app">
    <div class="app__header">
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
import { useStore } from "vuex";
import Header from "../components/Header/index.vue";
import { AuthService } from "../services/Auth.service";
import { APP_USER_AUTED } from '../store/actionTypes/Actions';
export default {
  name: "App",
  components: {
    Header,
  },
  setup() {
    const store = useStore();
    store.commit(`auth/${APP_USER_AUTED}`, AuthService.isAuth());
  },
};
</script>
<style scoped lang="scss">
.app {
  background-color: #fdf8ea;
  position: relative;

  &__header {
    position: sticky;
    top: 0;
    left: 0;
    margin-bottom: 50px;
    background-color: #5f7470;
    z-index: 2;
  }
}
</style>
<template>
  <v-row>
    <v-col cols="12" md="12">
      <div class="header-section">
        <span>Articles</span>
      </div>
    </v-col>
    <v-col cols="12" md="6" v-for="item in articles">
      <Card :data='item' />
    </v-col>
  </v-row>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Card from '/src/components/shared/Card/index.vue'
export default {
  name: 'ArticlesPage',
  components: {
    Card
  },
  setup() {

    const store = useStore()
    const articles = computed(() => store.getters.getArticles)

    // const getData = () => {
    //   $http.$get('/articles').then((res) => console.log({ res }))
    // }
    // onMounted(() => {
    //   getData()
    // })
    return {
      articles
    }
  }

}
</script>

<style lang="scss" scoped>
.header-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  margin-bottom: 30px;
  border-bottom: 3px solid #5F7470;

  span {
    font-size: 40px;
    font-weight: 700;
    color: #5F7470;

  }
}
</style>
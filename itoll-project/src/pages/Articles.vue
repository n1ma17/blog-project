<template>
  <v-row>
    <v-col cols="12" md="12">
      <div class="header-section">
        <span>Articles</span>
        <v-progress-circular v-if="loading" class="ml-6" :size="40" :width="4" color="success" indeterminate></v-progress-circular>
      </div>
    </v-col>
    <v-col cols="12" md="6" v-for="item in articles">
      <ArticleCard :data='item' />
    </v-col>
  </v-row>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { APP_GET_ARTICLES } from '../store/actionTypes/Auth'
import ArticleCard from '/src/components/shared/ArticleCard.vue'
export default {
  name: 'ArticlesPage',
  components: {
    ArticleCard
  },
  setup() {
    const store = useStore()
    const articles = computed(() => store.getters["articles/getArticles"])
    store.dispatch(`articles/${APP_GET_ARTICLES}`)
    const loading = store.getters["articles/getLoading"]
    return {
      articles,
      loading
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
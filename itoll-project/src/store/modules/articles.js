import { articlesUrl, tagsUrl, SingleArticleUrl, articleCommentsUrl } from "../../endpoints/articles";
import {
  APP_ARTICLE_COMMENTS,
  APP_CREATE_ARTICLE,
  APP_GET_ARTICLES,
  APP_SINGLE_ARTICLE,
  ARTICLE_COMMENTS_FAILED,
  ARTICLE_COMMENTS_SUCCESS,
  ARTICLE_GET_TAGS,
  CREATE_ARTICLE_FAILED,
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_SUCCESS,
  GET_ARTICLES_FAILED,
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_TAGS_FAILED,
  GET_TAGS_REQUEST,
  GET_TAGS_SUCCESS,
  SINGLE_ARTICLE_FAILED,
  SINGLE_ARTICLE_REQUEST,
  SINGLE_ARTICLE_SUCCESS,
} from "../actionTypes/Auth";
import api from "../../plugins/api";
export default {
  namespaced: true,
  state: () => ({
    articles: [],
    loading: false,
    tags: [],
    tagsLoading: false,
    createLoading: false,
    singleArticleLoading: false,
    singleArticle: null,
    comments: null,
    commentsLoading: false
  }),

  getters: {
    getArticles: (state) => state.articles,
    getLoading: (state) => state.loading,
    getTagsLoading: (state) => state.tagsLoading,
    getTags: (state) => state.tags,
    createLoading: (state) => state.createLoading,
    singleArticleLoading: (state) => state.singleArticleLoading,
    getSingleArticle:(state) => state.singleArticle,
    getComments: (state) => state.comments
  },

  mutations: {
    GET_ARTICLES_REQUEST: (state) => {
      state.loading = true;
    },
    GET_ARTICLES_SUCCESS: (state, payload) => {
      state.loading = false;
      state.articles = payload;
    },
    GET_ARTICLES_FAILED: (state, payload) => {
      state.loading = false;
    },
    GET_TAGS_FAILED: (state, payload) => {
      state.tagsLoading = false;
    },
    GET_TAGS_REQUEST: (state) => {
      state.tagsLoading = true;
    },
    GET_TAGS_SUCCESS: (state, payload) => {
      state.tagsLoading = false;
      state.tags = payload;
    },
    CREATE_ARTICLE_REQUEST: (state) => {
      state.createLoading = true;
    },
    CREATE_ARTICLE_SUCCESS: (state, payload) => {
      state.createLoading = false;
    },
    CREATE_ARTICLE_FAILED: (state, payload) => {
      state.createLoading = false;
    },
    SINGLE_ARTICLE_REQUEST: (state) => {
      state.singleArticleLoading = true;
    },
    SINGLE_ARTICLE_SUCCESS: (state, payload) => {
      state.singleArticleLoading = false;
      state.singleArticle = payload
    },
    SINGLE_ARTICLE_FAILED: (state, payload) => {
      state.singleArticleLoading = false;
    },

    ARTICLE_COMMENTS_REQUEST: (state) => {
      state.commentsLoading = true;
    },
    ARTICLE_COMMENTS_SUCCESS: (state, payload) => {
      state.commentsLoading = false;
      state.comments = payload
    },
    ARTICLE_COMMENTS_FAILED: (state, payload) => {
      state.commentsLoading = false;
    },
  },

  actions: {
    [APP_GET_ARTICLES]: async ({ commit }) => {
      try {
        commit(GET_ARTICLES_REQUEST);
        const res = await api.get(articlesUrl);
        if (res && res.status === 200) {
          commit(GET_ARTICLES_SUCCESS, res.data.articles);
        } else {
          commit(GET_ARTICLES_FAILED, res.data);
        }
      } catch (error) {
        commit(GET_ARTICLES_FAILED, error);
      }
    },
    [ARTICLE_GET_TAGS]: async ({ commit }) => {
      try {
        commit(GET_TAGS_REQUEST);
        const res = await api.get(tagsUrl);
        if (res && res.status === 200) {
          commit(GET_TAGS_SUCCESS, res.data.tags);
        } else {
          commit(GET_TAGS_FAILED, res.data);
        }
      } catch (error) {
        commit(GET_TAGS_FAILED, error);
      }
    },
    [APP_CREATE_ARTICLE]: async ({ commit }, payload) => {
      try {
        commit(CREATE_ARTICLE_REQUEST);
        const res = await api.post(articlesUrl, payload);
        if (res && res.status === 200) {
          commit(CREATE_ARTICLE_SUCCESS, res.data.data);
        } else {
          commit(CREATE_ARTICLE_FAILED, res.data);
        }
      } catch (error) {
        commit(CREATE_ARTICLE_FAILED, error);
      }
    },
    [APP_SINGLE_ARTICLE]: async ({ commit }, payload) => {
      try {
        commit(SINGLE_ARTICLE_REQUEST);
        const res = await api.get(SingleArticleUrl(payload));
        if (res && res.status === 200) {
          commit(SINGLE_ARTICLE_SUCCESS, res.data.article);
        } else {
          commit(SINGLE_ARTICLE_FAILED, res.data);
        }
      } catch (error) {
        commit(SINGLE_ARTICLE_FAILED, error);
      }
    },
    [APP_ARTICLE_COMMENTS]: async ({ commit }, payload) => {
      try {
        commit(SINGLE_ARTICLE_REQUEST);
        const res = await api.get(articleCommentsUrl(payload));
        if (res && res.status === 200) {
          commit(ARTICLE_COMMENTS_SUCCESS, res.data.comments);
        } else {
          commit(ARTICLE_COMMENTS_FAILED, res.data);
        }
      } catch (error) {
        commit(ARTICLE_COMMENTS_FAILED, error);
      }
    },
  },
};

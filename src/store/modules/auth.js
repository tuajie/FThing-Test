import axios from "axios";

const state = {
  user: null,
  posts: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StatePosts: (state) => state.posts,
  StateUser: (state) => state.user,
};

const actions = {
  // async Register({dispatch}, form) {
  //   await axios.post('register', form)
  //   let UserForm = new FormData()
  //   UserForm.append('email', form.email)
  //   UserForm.append('password', form.password)
  //   await dispatch('LogIn', UserForm)
  // },

  async Register({commit}, user) {
    let busuk = await axios.post("register", user);
    console.log(busuk.data)
    await commit("setUser", busuk.data);
  }, 

  async LogIn({commit}, user) {
    let busuk = await axios.post("login", user);
    console.log(busuk.data)
    await commit("setUser", busuk.data);
  }, 

  async GetPosts({ commit }) {
    let response = await axios.get("users?page=2");
    console.log(response.data.data)
    commit("setPosts", response.data.data);
  },

  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};

const mutations = {
  setUser(state, username) {
    state.user = username;
  },

  setPosts(state, posts) {
    state.posts = posts;
  },
  logout(state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

import Vue from 'vue';
import Vuex from 'vuex';

import User from "./models/User";
import Household from "./models/Household";
import Reward from "./models/Reward";
import Progress from "./models/Progress";

import Repository from "./rest/factory/RepositoryFactory";
const HouseholdRepository = Repository.get("household");
const UserRepository = Repository.get("user");
const RewardRepository = Repository.get("reward");
const ProgressRepository = Repository.get("progress");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fontUnicodes: {
      starUnicode: '\uF4CE',
      hamburgerUnicode: '\uF684',
      shareUnicode: '\uF497',
      plusUnicode: '\uF417',
      priceUnicode: '\uF53B',
      overviewUnicode: '\uF76A',
      inviteUnicode: '\uF014',
    },
    user: User,
    households: [Household],
    


  },
  mutations: {
    getUser: (state, res) => {
      const {
        data
      } = res;
      state.households = data
    },
  },
  actions: {
    async getUser({
      commit
    }, payload) {
      commit('getUser', await UserRepository.get(payload));
    },
  },
  getters: {
    getFontUnicodes: (state) => {
      return state.fontUnicodes
    }
  }
});

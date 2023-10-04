import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import { EncryptStorage } from 'encrypt-storage';
export const encryptStorage = new EncryptStorage(toString(import.meta.env.VITE_VUE_APP_USERID_SECRET), {
  storageType: 'localStorage',
  stateManagementUse: true
});
const store = createStore({
    state:{
    user: {},
    loadingUser: true,
    isAuthenticated: false,
    access_token: null,
    error: {},
    },
    getters:{

    },
    mutations:{
        SET_USER_DATA(state, user) {
            state.user = user;
            state.isAuthenticated = true;
            state.loadingUser = false;
            state.error = {};
          },

        UPDATE_USER(state, payload){
          state.user = payload
        },

          SET_ACCESS_TOKEN(state, token = false) {
            if (token) {
              window.localStorage.setItem('access_token', token);
              return;
            }
            window.localStorage.removeItem('access_token');
            state.access_token = token;
          },
          SET_USER_ERROR_OR_LOGOUT(state, error) {
            state.error = error;
            state.user = {};
            state.isAuthenticated = false;
            state.loadingUser = false;
            state.access_token = '';
          },
      

    },
    actions:{
        SET_USER(context, payload){
            context.commit("SET_USER_DATA", payload)
        }
    },
    modules:{

    },
    plugins: [createPersistedState({ 
      storage: { 
        setItem: (key, state) => encryptStorage.setItem(key, state),
        getItem: (key) => encryptStorage.getItem(key),
        removeItem: (key) => encryptStorage.removeItem(key)
      }
    })],
  })
  
  export default store;
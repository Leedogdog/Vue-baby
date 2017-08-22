import Vue from 'vue';
import Vuex from 'vuex';
import 'isomorphic-fetch';
import {GETLIMITPROS,GETTYPES} from './mutation-types';

Vue.use(Vuex)

var store = new Vuex.Store({ //创建一个仓库
    state:{
        limitTime_pros:null,
        types:null
    },
    getters:{
        bigTypes(state,getters){
            var s = [];
            state.types && state.types.forEach(function(t){
                if(s.indexOf(t.big_type) == -1)
                    s.push(t.big_type);
            });
            // console.log(s)
            return s;
        }
    },
    mutations:{
        [GETLIMITPROS](state,products){
            state.limitTime_pros = products;
            // console.log(state.limitTime_pros)
        },

        [GETTYPES](state,types){
            state.types = types;
        }

    },
    actions:{
        getLimitTime_pros({commit,state,getters}){
            fetch("/limit_pros").then(function(res){
                return res.json();
            }).then(function(data){
                commit("GETLIMITPROS",data.pros)
            });

        },
        getTypes({commit,state,getters}){
            fetch("/types").then(function(res){
                return res.json();
            }).then(function(data){
                commit("GETTYPES",data.types)
            })

        }
    }
})

export default store
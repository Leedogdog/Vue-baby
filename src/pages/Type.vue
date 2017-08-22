<template>
    <div class="type">
        <header>
            <Back></Back>
            <i class="iconfont icon-fangdajing01"></i>
            <input type="text" placeholder="搜索" />
            <GoHome></GoHome>
        </header>
        <div class="contents">
            <div class="kindsList">
                <ul class="list">
                    <li class="selected">甄选推荐</li>
                    <li v-for="(type,idx) in bigTypes" :key="idx">{{type}}</li>
                    <li>玩具书籍</li>
                    <li>床椅寝具</li>
                </ul>
            </div>
            <div class="type_content">
                <div class="kinds" v-show="firstType">
                    <div class="kind_nav">
                        <ul>
                            <li v-for="(t,idx) in types" v-if="idx%10==0" :key="t.type_id">
                                <router-link to="/"><img :src="t.type_img"><p>{{t.type_name}}</p></router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="kinds" v-show="!firstType">
                    <div v-for="(t,idx) in small_types" :key="idx">
                        <div class="title">{{t}}</div>
                        <div class="kind_nav">
                            <ul>
                                <li v-for="ty in curType[idx]" :key="ty.type_id">
                                    <router-link to="/"><img :src="ty.type_img"><p>{{ty.type_name}}</p></router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Foot></Foot>

    </div>
</template>

<script>
    import Foot from '../components/Footer.vue';
    import Back from '../components/Back.vue';
    import GoHome from '../components/GoHome.vue';
    import { mapState , mapGetters,mapMutations,mapActions } from 'vuex';

    export default {
        components:{
            Foot,
            Back,
            GoHome
        },
        data() {
            return {
                curType:[],
                small_types:[],
                firstType:true
            }
        },
        mounted(){
            var _this = this;
            document.getElementsByClassName('list')[0].addEventListener("click",function(e){
                for(var i=0;i< e.currentTarget.children.length;i++){
                    e.currentTarget.children[i].className="";
                }
                e.target.className = "selected";
                // console.log(e.target.innerText,_this.$store.state.types);
                var bigType = e.target.innerText,
                    kinds = _this.$store.state.types;
                _this.curType = [],_this.small_types = [];
                if(bigType != "甄选推荐"){
                    _this.firstType = false;
                    kinds.forEach(function(t){
                        // console.log(t)
                        if(t.big_type == bigType){
                            // console.log(t);
                            var temp = {
                                type_img:t.type_img,
                                type_name:t.type_name,
                                type_id:t.type_id
                            }
                            if(_this.small_types.indexOf(t.small_type) == -1){
                                _this.small_types.push(t.small_type);
                                _this.curType.push([temp]);
                            }else{
                                var idx = _this.small_types.indexOf(t.small_type);
                                _this.curType[idx].push(temp)
                            }
                        }
                    })
                }else{
                    _this.firstType = true;
                }
            })
        },
        beforeMount(){
            this.$store.dispatch('getTypes');
            this.$store.commit('GETTYPES');
        },
        computed:{
            ...mapState(['types']),
            ...mapGetters(['bigTypes'])

        }
    }

</script>

<style scoped>
    @import '/iconfont/iconfont.css';
    .contents{
        margin-top:0.5rem;
    }
    header{
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.16rem;
        background: #ff4965;
        color: #fff;
        position:relative;
        position:fixed;
        top: 0;
        left: 0;
        z-index:999;
    }
    header span{
        font-size:0.18rem;
    }
    header .iconfont{
        font-size: 0.16rem;
        position: absolute;
        color:#000;
        left: 0.48rem;
        top: 0.01rem;

    }
    header input{
        font-size: 0.16rem;
        margin-left: 0.1rem;
        width: 2.8rem;
        height:0.3rem;
        line-height:0.3rem;
        border-radius: 0.02rem;
        padding-left:0.26rem;
        box-sizing: border-box;
    }
    .kindsList{
        width:0.96rem;
        font-size:0.14rem;
        color: #333;
        text-align:center;
        overflow:hidden;
        float:left;
    }
    .kindsList ul{
        width:0.96rem;padding-right:0.3rem;
        overflow-y: auto;
        height: 5.7rem;
    }
    .kindsList li{
        height:0.52rem;
        line-height:0.52rem;
        background: #efefef;
        position:relative;
    }
    .kindsList li.selected{
        background:#fff;
    }
    .kindsList li.selected:before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        height: 0.52rem;
        width: .04rem;
        background-color: #ff4965;
    }
    .type_content{
        width:2.79rem;
        overflow:hidden;
        float:left;
    }
    .kinds{
        width:2.79rem;
        padding:0.14rem;
        overflow-y: scroll;
        height: 5.7rem;
        font-size:0.12rem;
        color: #82737A;
    }
    .kinds .title{
        height:0.38rem;
        width:100%;
        line-height:0.38rem;
    }
    .kinds .title:after {
        float: left;
        display: block;
        content: "";
        width: .04rem;
        height: .18rem;
        margin-right:0.06rem;
        margin-top:0.1rem;
        background-color: #ff4965;
    }
    .kinds .kind_nav{
        margin-bottom:0.1rem;
    }
    .kinds .kind_nav,.kinds .kind_nav ul{
        width:100%;
        overflow:hidden;
    }
    .kinds .kind_nav li{
        width:0.8rem;
        height:0.8rem;
        float:left;
    }
    .kinds .kind_nav a{
        display:block;
        width:0.8rem;
        height:0.8rem;
        font-size:0.12rem;
        color: #82737A;
        text-align:center;
    }
    .kinds .kind_nav a p{
        margin-top:0.06rem;
    }
    .kinds .kind_nav a img{
        width:0.6rem;
        height:0.6rem;
    }

</style>
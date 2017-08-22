<template>
    <div class="Home">
        <div class="contents">
            <header>
                <span>母婴网</span>
                <i class="iconfont icon-fangdajing01"></i>
                <input type="text" placeholder="搜索" />
            </header>
            <nav>
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide><router-link to="/" class="s"><img src="/imgs/s0.jpg" /></router-link></swiper-slide>
                    <swiper-slide><router-link to="/" class="s"><img src="/imgs/s3.jpg" /></router-link></swiper-slide>
                    <swiper-slide><router-link to="/" class="s"><img src="/imgs/s1.jpg" /></router-link></swiper-slide>
                    <swiper-slide><router-link to="/" class="s"><img src="/imgs/s2.jpg" /></router-link></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </nav>
            <div class="homezone">
                <router-link to="/"><img src="/imgs/c0.jpg" /></router-link>
                <router-link to="/"><img src="/imgs/c1.jpg" /></router-link>
            </div>
            <div class="limitTime">
                <div class="timer">
                    <div class="t">
                        <img src="/imgs/limit.png">
                        <span class="start">15点场</span>
                        <span class="time"></span>
                    </div>
                    <router-link to="/" class="more">更多秒杀 &gt;</router-link>
                </div>
                <ProductsList :products="limitTime_pros" amount="10"></ProductsList>
            </div>
            <div class="classify">
                <h3><i></i>给孩子买安心，100%正品保证</h3>
                <router-link to="/"><img src="/imgs/classify1.jpg"></router-link>
                <router-link to="/"><img src="/imgs/classify2.jpg"></router-link>
                <router-link to="/"><img src="/imgs/classify3.jpg"></router-link>
                <router-link to="/"><img src="/imgs/classify4.jpg"></router-link>
                <router-link to="/"><img src="/imgs/classify5.jpg"></router-link>
            </div>
            <div class="group">
                <h3><i></i>天天拼团<img src="/imgs/group1.png"></h3>
                <router-link to="/"><img src="/imgs/group.png"></router-link>
            </div>
            <div class="today">
                <h3><i></i>今日特卖<span>每日十点上新</span></h3>
                <div class="things">
                    <router-link to="/"><img src="/imgs/today0.jpg"></router-link>
                    <ProductsList :products="limitTime_pros" amount="6"></ProductsList>
                    <router-link to="/"><img src="/imgs/today1.jpg"></router-link>
                    <ProductsList :products="limitTime_pros" amount="6"></ProductsList>
                    <router-link to="/"><img src="/imgs/today2.jpg"></router-link>
                    <ProductsList :products="limitTime_pros" amount="6"></ProductsList>
                    <router-link to="/"><img src="/imgs/today3.jpg"></router-link>
                    <ProductsList :products="limitTime_pros" amount="6"></ProductsList>
                    <router-link to="/"><img src="/imgs/today4.jpg"></router-link>
                    <ProductsList :products="limitTime_pros" amount="6"></ProductsList>
                </div>
            </div>
            <div class="bottom">
                <p>
                    <router-link to="/">电脑版首页</router-link> |
                    <router-link to="/">触屏版首页</router-link> |
                    <router-link to="/">关于我们</router-link>
                </p>
            </div>
        </div>
        <GoTop></GoTop>
        <Foot></Foot>

    </div>
</template>

<script>
    import Foot from '../components/Footer.vue';
    import ProductsList from '../components/ProductsList.vue';
    import GoTop from '../components/GoTop.vue';
    import {getTimer} from '../Timer.js';
    import {swiper,swiperSlide} from 'vue-awesome-swiper';
    import { mapState , mapGetters,mapMutations,mapActions } from 'vuex';

    export default {
        components:{
            Foot,
            ProductsList,
            GoTop,
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    autoplay: 5000,
                    loop : true,
                    pagination : '.swiper-pagination',
                    paginationClickable :true
                }
            }
        },
        beforeMount(){
            this.$store.dispatch('getLimitTime_pros');
            this.$store.commit('GETLIMITPROS');
        },
        mounted(){
            getTimer();//限时抢购计时器
        },
        computed:{
            ...mapState(['limitTime_pros'])
        }
    }

</script>

<style scoped>
    @import '/iconfont/iconfont.css';
    header{
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.16rem;
        background: #ff4965;
        color: #fff;
        padding-left: 0.2rem;
        position:relative;
    }
    header span{
        font-size:0.18rem;
    }
    header .iconfont{
        font-size: 0.16rem;
        position: absolute;
        color:#000;
        left:0.9rem;
        top:0.022rem;
    }
    header input{
        font-size: 0.16rem;
        margin-left: 0.04rem;
        width: 2.8rem;
        height:0.3rem;
        line-height:0.3rem;
        border-radius: 0.02rem;
        padding-left:0.26rem;
        box-sizing: border-box;
    }
    nav{
        height:1.76rem;
        background-color: #f0f0f0;
        overflow: hidden;
    }
    nav .s{
        display: block;
        width: 100%;
        height:1.76rem;
    }
    nav .s img{
        width: 100%;
        height:100%;
    }
    nav .swiper-pagination-bullet-active{
        background: #ff4965;
    }
    nav .swiper-container-horizontal>.swiper-pagination-bullets{
        bottom: -0.14rem;
    }
    .homezone{
        width:100%;
        height:0.94rem;
        display:flex;
        justify-content: space-between;
    }
    .homezone a{
        display:block;
        width:1.86rem;
        height:0.94rem;
        border:1px solid #f0f0f0;
        box-sizing:border-box;
    }
    .homezone a img{
        margin:0;
        width:100%;
    }
    .limitTime{
        padding:0 0.1rem;
        height:1.8rem;
        width:100%;
        background-color: #fff;
        background: url(/imgs/load.png) #fff no-repeat center;
        background-size: .4rem auto;
        box-sizing:border-box;
        z-index: -1;
    }
    .limitTime .timer{
        height:0.34rem;
        line-height:0.34rem;
    }
    .limitTime .t{
        float: left;
        height:0.34rem;
        line-height:0.34rem;
    }
    .limitTime img{
        width:0.7rem;
        height:0.14rem;
        float: left;
        margin-top:0.09rem;
    }
    .limitTime span{
        font-size:0.14rem;
        font-weight: bolder;
        color: #333;
        float: left;
        margin-left:0.1rem;
    }
    .limitTime .more{
        font-size:0.14rem;
        color: #ff4965;
        float: right;
        display: block;
        height:0.34rem;
        line-height:0.34rem;
    }
    .classify{
        background-color: #fff;
        height: 2.14rem;
    }
    .classify h3{
        color: #333;
        font-size:0.14rem;
        height:0.4rem;
        line-height:0.4rem;
        font-weight:normal;background-color: #F9F9F9;
    }
    .classify i{
        display: block;
        float: left;
        width:0.2rem;
        height:0.2rem;
        background:url(/imgs/sign.png) no-repeat;
        background-size:auto 0.2rem;
        margin-left:0.1rem;
        margin-right: 0.1rem;
        margin-top:0.1rem;
    }
    .classify a{
        display: block;
        background-color: #f0f0f0;
        margin-right:0.1rem;
        margin-top:0.1rem;
        float:left;
        width:1.10rem;
        height: 0.7rem;
    }
    .classify a:nth-of-type(1){
        width:1.14rem;
        height: 1.48rem;
        margin-left:0.1rem;
    }
    .classify a:nth-of-type(1) img{
        width:1.14rem;
        height: 1.48rem;
    }
    .classify a img{
        width:1.10rem;
        height: 0.7rem;
    }
    .group{
        background-color: #fff;
        height: 2.12rem;
    }
    .group h3{
        color: #333;
        font-size:0.14rem;
        height:0.4rem;
        line-height:0.4rem;
        font-weight:normal;background-color: #F9F9F9;
    }
    .group h3 img{
        height:0.2rem;
        margin-top:0.1rem;
        margin-left:0.06rem;
    }
    .group i{
        display: block;
        float: left;
        width:0.2rem;
        height:0.2rem;
        background:url(/imgs/sign.png) no-repeat -0.24rem 0;
        background-size:auto 0.2rem;
        margin-left:0.1rem;
        margin-right: 0.1rem;
        margin-top:0.1rem;
    }
    .group a {
        display:block;
        margin-top:0.02rem;
    }
    .group a img{
        width: 100%;
    }
    .today{
        background-color: #fff;
        position:relative;
    }
    .today h3{
        color: #333;
        font-size:0.14rem;
        height:0.4rem;
        line-height:0.4rem;
        font-weight:normal;background-color: #F9F9F9;
    }
    .today h3 img{
        height:0.2rem;
        margin-top:0.1rem;
        margin-left:0.06rem;
    }
    .today i{
        display: block;
        float: left;
        width:0.2rem;
        height:0.2rem;
        background:url(/imgs/sign.png) no-repeat -0.5rem 0;
        background-size:auto 0.2rem;
        margin-left:0.1rem;
        margin-right: 0.1rem;
        margin-top:0.1rem;
    }
    .today h3 span{
        margin-left: 0.1rem;
        font-size: 0.12rem;
        color: #666;
    }
    .today .things:after {
        position: absolute;
        content: '';
        bottom: 0;
        left: 50%;
        margin-left: -10px;
        width: 0;
        height: 0;
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent #fff transparent;
    }
    .today a{
        display: block;
        margin-top:0.04rem;
    }
    .today a img{
        width:100%;
    }
    .bottom p{
        height:0.46rem;
        line-height:0.46rem;
        text-align: center;
        padding:0 0.2rem;
        display: flex;
        justify-content:center;
        olor: #999999;
        font-size: 0.12rem;
    }
    .bottom p a{
        color: #999999;
        font-size: 0.12rem;
        margin:0 0.26rem;
    }

</style>
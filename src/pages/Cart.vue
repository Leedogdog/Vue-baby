<template>
    <div class="cart">
        <header>
            <Back></Back>
            <h3>购物车</h3>
            <GoHome></GoHome>
        </header>
        <div class="contents">
            <section class="w2 success empty" v-if="list == null || list.length == 0">
                <div class="modification"><img src="/imgs/emptyCart.png" alt=""></div>
                <div class="hint">您的购物车是空的哦！</div>
                <div class="btngroup">
                   <!-- <a href="/" class="btnPink widthauto">随便看看</a> -->
                   <router-link to="/" class="btn_sbkk">随便看看</router-link>
                           <router-link to="/login" class="btn_qdl" >去登录</router-link>
                </div>
            </section>

            <div class="items" v-else>
                <div class="list" v-for="(p,idx) in list" :key="idx" :data-id="p.id">
                    <i class="check-icon current"></i>
                    <div class="flex">
                        <div class="flex-img">
                            <a :title="p.name">
                                <img :src="p.img">
                            </a>
                        </div>
                        <div class="flex-else">
                            <h5><span class="price new">¥<em>{{p.price}}</em></span><p class="name_p1">{{p.name}}</p></h5>
                            <p style="font-size:0.14rem;color:#999;"><span class="sel">{{p.opt}}</span> <span class="it_size">{{p.size}}</span></p>
                            <div class="under clearfix">
                                <div class="numbox">
                                    <span class="sub dp_jian disabled" @click="reduceNum">-</span><input type="num" class="dp_num" :value="p.amount"  readonly="" :data-id="p.id"><span class="add dp_jia" @click="addNum">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clearAll mar25">
                    <a id="delete_selected_goods" href="javascript:void(0);" @click="deleteGoods">删除选择商品</a>
                    <a id="delete_invalid_goods" href="javascript:void(0);">清除无效商品</a>
                </div>
                <div class="paybar box-flex-f posi_z">
                    <div class="box-flex-c lt">
                        <i class="check-icon current"></i><label for="allSel" @click="allSel">全选</label>
                    </div>
                    <div class="box-flex-c md newCart">
                        <div class="totalprice" style="text-align:right;padding-right:0.5rem;">
                        总计：<span style="color:#f34fa1;">￥<span class="newCart_settle_amount">{{price}}</span></span>
                        </div>
                    </div>
                    <a class="box-flex-c rt btnJieSuan">
                        结算 <span>({{amount}})</span>
                    </a>
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

    export default {
        components:{
            Foot,
            Back,
            GoHome
        },
        data(){
            return {
                list:null,
                amount:0,
                price:0
            }
        },
        methods:{
            allSel(e){
                var checkes = document.getElementsByClassName('check-icon');
                if(e.target.previousSibling.className == "check-icon"){
                    for(var j=0;j<checkes.length;j++){
                        checkes[j].className += ' current';
                    }
                }
                else{
                    for(var j=0;j<checkes.length;j++){
                        checkes[j].className = "check-icon";
                    }
                }
            },
            countMoney(){
                var checkes = document.getElementsByClassName('check-icon');
                document.getElementsByClassName('btnJieSuan')[0].className += " disabled";
                for(var i=0;i<checkes.length-1;i++){
                    if(checkes[i].className.indexOf('current') != -1){
                        document.getElementsByClassName('btnJieSuan')[0].className = " box-flex-c rt btnJieSuan";
                        return;
                    }

                }
            },
            reduceNum(e){
                var amount = parseInt(e.target.nextSibling.value);
                var id = e.target.nextSibling.getAttribute('data-id');
                if(amount == 1)
                    amount = 1;
                else
                    amount -= 1;
                this.list.forEach(function(p){
                    if(id == p.id){
                        p.amount = amount;
                        return;
                    }
                })
                this.init();
                localStorage.setItem("cartList",JSON.stringify({
                    list:this.list
                }));
            },
            addNum(e){
                var amount = parseInt(e.target.previousSibling.value);
                var id = e.target.previousSibling.getAttribute('data-id');

                amount += 1;
                this.list.forEach(function(p){
                    if(id == p.id){
                        p.amount = amount;
                        return;
                    }
                })
                this.init();
                localStorage.setItem("cartList",JSON.stringify({
                    list:this.list
                }));
            },
            init(){
                var _this = this;
                this.amount = 0;
                this.price = 0;
                this.list.forEach(function(p){
                    _this.amount += p.amount;
                    _this.price += p.amount * p.price;
                })
            },
            deleteGoods(e){
                var checkes = document.getElementsByClassName('current');
                for(var i=0;i<checkes.length-1;i++){
                    var id = checkes[i].parentNode.getAttribute('data-id');
                    this.list.forEach(function(p,idx,arr){
                        if(p.id == id)
                            arr.splice(idx,1);
                    })
                }

                localStorage.setItem("cartList",JSON.stringify({
                    list:this.list
                }));

            }
        },
        created(){
            if(JSON.parse(localStorage.getItem("cartList")) != null){
                this.list= JSON.parse(localStorage.getItem("cartList")).list;
                this.init();
            }

        },
        mounted(){
            if(this.list != null && this.list.length != 0){
                var _this = this;
                //单选与全选
                var checkes = document.getElementsByClassName('check-icon');

                for(var i=0;i<checkes.length;i++){
                    checkes[i].onclick = function(e){

                        if(e.target.nextSibling.innerText == "全选"){
                            if(e.target.className == "check-icon"){
                                // e.target.className += ' current';
                                for(var j=0;j<checkes.length;j++){
                                    checkes[j].className += ' current';
                                }
                            }
                            else{
                                // e.target.className = "check-icon";
                                for(var j=0;j<checkes.length;j++){
                                    checkes[j].className = "check-icon";
                                }
                            }
                            _this.countMoney();
                        }
                        else{
                            if(e.target.className == "check-icon")
                                e.target.className += ' current';
                            else
                                e.target.className = "check-icon";

                            _this.countMoney();
                            checkes[checkes.length-1].className += ' current';
                            for(var j=0;j<checkes.length-1;j++){
                                if(checkes[j].className.indexOf('current') == -1){
                                    checkes[checkes.length-1].className = "check-icon";
                                    return;
                                }
                            }
                        }
                    }
                }

                //结算
                this.countMoney();
            }
        }
    }
</script>

<style scoped>
    .contents{
        margin-top:0.5rem;
    }
    #app{
        background: #ececec;
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
    header h3{
        width:2.94rem;
        text-align:center;
        font-size: 0.2rem;
        font-weight: normal;
        float:left;
    }
    .w2 {
        margin: 0.8rem auto;
        padding: 0 .1rem;
    }
    .empty .modification {
        width: 1rem;
        height: 1rem;
    }
    .empty .modification img{
        width: 1rem;
        height: 1rem;
    }
    .modification {
        margin: 0 auto;
    }
    .success .hint {
        line-height: 0.22rem;
        text-align: center;
        padding: 0.1rem 0;
        color: #999;
        font-size:0.14rem;
    }
    .btngroup {
        margin-top: 0.2rem;
    }
    .btngroup {
        text-align: center;
    }
    .btngroup a.btn_sbkk, .btngroup a.btn_qdl {
        display: inline-block;
        width: 30%;
        padding: 0;
        margin: 0 5%;
        padding: 8px 0;
        border-radius: 0;
    }
    .btngroup a.btn_sbkk {
        color: #fff;
        background-color: #ff4965;
    }
    .btngroup a {
        display: inline-block;
        border-radius: 4px;
        background: #ececec;
        padding: 10px 30px;
        margin: 0 5px;
        font-size: 16px;
    }
    .btngroup a.btn_sbkk, .btngroup a.btn_qdl {
        display: inline-block;
        width: 30%;
        padding: 0;
        margin: 0 5%;
        padding: 0.08rem 0;
        border-radius: 0;
    }
    .btngroup a.btn_qdl {
        color: #666;
    }
    .list {
        position: relative;
        display: block;
        padding: 0.2rem .2rem;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        z-index: 2;
    }
    .check-icon {
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        border-radius: 50%;
        position: relative;
        display: inline-block;
        width: .2rem;
        height: .2rem;
        border: 0.01rem solid #e1e1e1;
    }
    .current{
        background-color: #fa4b9b;
        border-color: #fa4b9b;
    }
    .list .check-icon {
        position: absolute;
        top: 50%;
        margin-top: -.2rem;
    }
    .check-icon:after {
        transform: rotate(-45deg);
        display: none;
        position: absolute;
        content: '';
        border: 0.01rem solid #fa4b9b;
        border-width: 0 0 0.01rem 0.01rem;
        top: 0.03rem;
        left: 0.03rem;
        width: .12rem;
        height: .08rem;
    }
    .check-icon.current:after {
        display: block;
        border-color: #fff;
    }
    .list .flex {
        padding-bottom: .16rem;
    }
    .list .flex {
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -moz-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        margin-left: 0.4rem;
        font-size: .14rem;
        color: #333;
    }
    .list .flex-img {
        width: 0.58rem;
        height: 0.58rem;
    }
    .flex-img {
        position: relative;
    }
    .flex-img img{
        width:0.58rem;
        height:0.58rem;
    }
    .list .flex-else {
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        margin-left: .01rem;
    }
    .flex-else h5 {
        position: relative;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-weight: 400;
        font-size: .14rem;
    }
    .flex-else .name_p1 {
        float: left;
        width: 1.8rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .14rem;
    }
    .flex-else .price {
        float: right;
        margin-right: .02rem;
        font-family: "Helvetica Neue",Helvetica,STHeiTi,Arial,sans-serif;
        color: #f34fa1;
    }
    .flex-else .under {
        margin-top: .01rem;
    }
    .clearfix {
        zoom: 1;
        clear: both;
    }
    .clearfix:after {
        clear: both;
        overflow: hidden;
    }
    .clearfix:after, .clearfix:before {
        content: "";
        display: table;
    }
    .clearfix:after {
        clear: both;
        overflow: hidden;
    }
    .clearfix:after, .clearfix:before {
        content: "";
        display: table;
    }
    .clearfix:after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
    }
    .flex-else .under .numbox {
        float: left;
        border: 0.01rem solid #ddd;
        overflow: hidden;
        margin-top:0.08rem;
    }
    .flex-else .under .numbox span {
        width: 0.28rem;
        font-size: .16rem;
        color: #666;
    }
    .flex-else .under .numbox input, .flex-else .under .numbox span {
        float: left;
        height: 0.28rem;
        line-height: 0.28rem;
        text-align: center;
    }
    .flex-else .under .numbox input {
        padding: .01rem 0;
        width: 0.35rem;
        border: 1px solid #ddd;
        border-width: 0 1px;
    }
    .clearAll {
        margin-bottom: 1rem;
    }
    .clearAll {
        padding: .1rem 0;
        text-align: center;
        background-color: #fbfbfb;
        font-size: .14rem;
    }
    .clearAll a {
        padding: .1rem 0 .1rem .18rem;
        background: url(/imgs/icon-clear.png) left center no-repeat;
        -webkit-background-size: .6rem auto;
        background-size: .16rem auto;
        color: #666;
        margin-right:0.18rem;
    }
    .posi_z {
        background: #fff;
        z-index: 400;
    }
    .box-flex-f {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }
    .paybar {
        position: fixed;
        width: 100%;
        bottom: 0.48rem;
        height: 0.6rem;
        font-size: .14rem;
        color: #8a8a8a;
        background-color: #fff;
        vertical-align: middle;
        text-align: center;
    }
    .paybar::before {
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        width: 100%;
        height: 0;
        border-top: 0.01rem solid #e3e5e9;
        transform: scaleY(.5);
        -webkit-transform: scaleY(.5);
    }
    .paybar .lt {
        max-width: 0.8rem;
        line-height: 0.6rem;
    }
    .box-flex-c {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0;
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        position:relative;
    }
    .paybar .md {
        margin-top: .16rem;
    }
    .paybar .totalprice {
        color: #333;
    }
    .paybar .rt {
        max-width: 0.94rem;
        line-height: 0.6rem;
        color: #FFF;
        background-color: #ff4965;
        font-size:0.16rem;
    }
    .paybar .btnJieSuan.disabled {
        background: #858585;
    }

</style>
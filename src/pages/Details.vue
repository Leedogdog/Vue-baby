<template>
    <div class="details">
         <header>
            <Back></Back>
            <h2>商品详情</h2>
            <GoHome></GoHome>
        </header>
        <div class="contents">
            <nav>
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-show="productItem.itemPic1 != ''"><img :src="productItem.itemPic1"/></swiper-slide>
                    <swiper-slide v-show="productItem.itemPic2 != ''"><img :src="productItem.itemPic2"/></swiper-slide>
                    <swiper-slide v-show="productItem.itemPic3 != ''"><img :src="productItem.itemPic3"/></swiper-slide>
                    <swiper-slide v-show="productItem.itemPic4 != ''"><img :src="productItem.itemPic4"/></swiper-slide>
                    <swiper-slide v-show="productItem.itemPic5 != ''"><img :src="productItem.itemPic5"/></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </nav>
            <h4 class="title">
                {{productItem.brand}}
                {{productItem.name}}
            </h4>
            <div class="price">
                <i>￥</i>
                <span>{{productItem.sale_price}}</span>
                <del>￥{{productItem.market_price}}</del>
            </div>
            <div class="descInfo">{{productItem.descInfo}}</div>
            <div class="detail-item">
                <ul class="detail-promiseSign">
                    <li>商家</li>
                    <li>7天无理由退换货</li>
                    <li>花呗分期</li>
                    <li>假一赔十</li>
                </ul>
                <span class="moreBtn" data-pop="explainPop" @click = "moreInfo">●●●</span>
            </div>
            <div class="detail-item1">
                <div class="opts">
                    <em>选择</em>
                    <span class="opt">{{productItem.opt.split('&')[0]}}</span>
                    <span v-if="productItem.height != ''" class="size">，尺码</span>
                </div>
                <span class="moreBtn" data-pop="explainPop" @click = "moreSel">●●●</span>
            </div>
            <section class="titleBar flexbox">
                <div class="current" data-num = "1">商品详情</div>
                <div data-num = "2">产品参数</div>
                <div data-num = "3">问题咨询</div>
                <i></i>
            </section>
            <div id="details1" v-show="detail1">
                <img v-for="imgs in productItem.details.split('&')" :src="imgs" />
                <img src="/imgs/p.jpg" />
            </div>
            <div id="details2" v-show="detail2">
                <p>商品名称:{{productItem.brand}} {{productItem.name}}</p>
                <p>品牌:{{productItem.brand}}</p>
                <p>分类:{{productItem.type}}</p>
                <p>安全等级:{{productItem.level}}</p>
                <p>参考身高:{{productItem.height}}</p>
                <p>适用季节:{{productItem.season}}</p>
                <p>适用年龄:{{productItem.age}}</p>
                <p>适用性别:{{productItem.sex}}</p>
                <p>风格:{{productItem.style}}</p>
                <p>产地:{{productItem.area}}</p>
            </div>
            <div id="details3" v-show="detail3">
                <div class="QA">
                    <dl>
                        <dt class="Q">1、我如何购买？</dt>
                        <dd class="A">每个套餐的价格、包含项目、注意事项会略有不同，请您注意页面描述及套餐温馨提示。购买付款成功后会收到短信，如果商品没有标“免预约”字样，需要您尽快凭下单后收到的短信优惠码和服务商预约服务。服务商预约电话在商品详情页均有标注。</dd>
                    </dl>
                    <dl>
                        <dt class="Q">2、订单下单后，我如何付款？</dt>
                        <dd class="A">同蜜芽官网的付款方式，我们目前支持 支付宝、银联、微信支付、易宝等多种支付方式供您选择。</dd>
                    </dl>
                    <dl>
                        <dt class="Q">3、我怎么知道自己定成功没？</dt>
                        <dd class="A">预订成功并付款后，我们的小蜜芽客服会马上对订单进行处理。订单成功后，会为您发出预订成功的短信。如订单在预订过程中有异常，我们的小蜜芽客服也会第一时间联系您，请您保持手机畅通。</dd>
                    </dl>
                    <dl>
                        <dt class="Q">4、如果我不想要了可以退吗？</dt>
                        <dd class="A">我们部分服务是支持随时退和延时退的。但是订单一旦在服务商处开始消费或预约成功，平台将不再接受取消订单和退款处理。如果在合理时间内，您需要取消订单，请致电蜜芽客服申请取消并退款。</dd>
                    </dl>
                    <dl>
                        <dt class="Q">5、取消订单后，多长时间可以退款？</dt>
                        <dd class="A">在您申请退款之后，我们会在24小时之内处理您的取消订单，订单确认取消成功后，您支付的款项最迟将会在3-5个工作日（视银行支付网关情况而定）退到您原支付的账户中，请您耐心等待。</dd>
                    </dl>
                    <dl>
                        <dt class="Q">6、如何查看我已经预定成功的订单？</dt>
                        <dd class="A">在您的蜜芽账户中，会有订单的相关信息供您查询。您只要访问蜜芽官网，登录后，点击“我的订单”，即可查看到已经预定成功的订单。</dd>
                    </dl>
                    <dl>
                        <dt class="Q">7、有一些产品细节我该如何确认？</dt>
                        <dd class="A">我们已经在产品的购买页面，详尽的列出了套餐介绍及注意事项，如果您对此还有疑问，欢迎您随时联系蜜芽在线进行确认。</dd>
                    </dl>
                    <dl>
                        <dt class="Q">8、蜜芽平台商品价格说明</dt>
                        <dd class="A">
                            <ul>
                                <li>1. 折扣价（显示如￥199）：如无特殊说明，折扣指划线价（如：吊牌价，品牌商、供应商的指导价、建议零售价，品牌专柜价或该商品在蜜芽平台上曾经展示过的销售价）等某一价格基础上计算出的优惠比例和优惠金额；</li>
                                <li>2. 划线价（显示如<del>￥399</del>）：商品划线价格可能是吊牌价，品牌商、供应商的指导价、建议零售价，品牌专柜价或该商品在蜜芽平台上曾经展示过的销售价。由于时间、地区的差异性及市场行情的波动性。品牌商品的标价、商品吊牌价可能会与您购物展示不一致。该价格仅供消费者参考；</li>
                                <li>3. 疑问/异常问题：商品促销信息以商品详情页面为准；商品的具体售价以订单结算页面为准；如您在购买商品时发现活动商品价格或促销活动，商品价格异常，请您在购买前联系蜜芽客服，由客服将您的问题第一时间反馈给销售商，进而帮助您解答。</li>
                            </ul>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="detail-tankuang" id="explainPop" v-show="showInfo">
                <div class="tk-title">商品说明</div>
                <div class="tk-body" >
                    <div class="shrink">
                                    <dl class="mes-notice jiap">
                            <dt>假一赔十</dt>
                            <dd>蜜芽自营的每一件商品，都通过严格的品质把关，保证正品。特做出“假一赔十“的正品保证承若，杜绝一切假货，请放心购买</dd>
                        </dl>
                        <dl class="mes-notice return">
                            <dt>7天无理由退货</dt>
                            <dd>收到商品之日起7天（含）内如有商品质量，溢露损失等问题，可申请售后进行退换货处理</dd>
                        </dl>
                    </div>
                </div>
                <div class="tk-btnGroup">
                    <button class="pop-closeBtn" @click = "hideMoreInfo">知道啦</button>
                </div>
            </div>

            <div class="detail-tankuang detail-selectBox" id="selectBoxPop" v-show="showMoreSel">
                <div class="tk-title">
                    <div id="typeInfoBox">
                        <div class="selProImg">
                            <img :src="productItem.itemPic1" alt="" />
                        </div>
                        <div class="fl selInfo">
                        <span class="selPrice">￥{{productItem.sale_price}}</span>
                            <span class="stock"></span>
                            <span class="selected">
                                已选 “<b class="kx">{{productItem.opt.split('&')[0]}}</b>
                                <b class="gg"></b>”
                            </span>
                        </div>
                    </div>
                    <div class="closeBtn pop-closeBtn" @click = "hideMoreSel"></div>
                </div>
                <div class="selBox">
                    <div class="tk-body selParams">
                       <dl class="taozhuangItem" id="typeSel" v-if="productItem.opt !=''">
                           <dt>可选</dt>
                           <dd data-skuid="1827650" data-icon="" class="sels" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);" v-for="opt in productItem.opt.split('&')">{{opt}}</dd>

                       </dl>
                       <dl class="taozhuangItem" id="specificationSel" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);" v-if="productItem.height !=''">
                            <dt>规格 </dt>
                            <dd class="disable" data-stock="0" title="" v-for="h in productItem.height.split(',')">{{h}}</dd>
                        </dl>
                       <input type="hidden" value="" id="item_size" name="size" readonly="readonly" />
                       <dl class="taozhuangItem">
                            <dt>购买数量</dt>
                            <dd class="NumberBox">
                                <span class="minusBtn" id="numReduce" @click="reduceNum">－</span>
                                <div class="midNum">
                                    <input type="text" id="buyAmount" value="1" maxlength="2" readonly />
                                </div>
                                <span class="addBtn" id="numAdd" @click="addNum">+</span>
                            </dd>
                       </dl>
                    </div>
                </div>
                <div class="tk-btnGroup defaultBlock"><button id="addToCart" @click = "keepSel">确定</button></div>
                <input type="hidden" id="item_id" value="1827654" />
            </div>
            <div class="mask" v-show="showInfo || showMoreSel"></div>
            <GoTop></GoTop>

            <div class="fixedCart">
                <router-link to="/cart" class="cart">
                    <i class="iconfont icon-icon0204"></i>
                    <span>购物车</span>
                    <em class="amount">{{amount}}</em>
                </router-link>
                <div class="addCart" @click="moreSel">加入购物车</div>
            </div>

            <div class="hintInfo" v-show="showHint">
                <div class="closehint" ></div>
                请选择规格
                <div class="hintBtn" >确定</div>
            </div>
        </div>
    </div>

</template>

<script>
    import Back from '../components/Back.vue';
    import GoHome from '../components/GoHome.vue';
    import GoTop from '../components/GoTop.vue';
    import {swiper,swiperSlide} from 'vue-awesome-swiper';

    export default {
        name:'details',
        components:{
            Back,
            GoHome,
            GoTop,
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    // autoplay: 5000,
                    // loop : true,
                    pagination : '.swiper-pagination'
                },
                amount:0,
                productItem:null,
                detail1:true,
                detail2:false,
                detail3:false,
                showInfo:false,
                showMoreSel:false,
                showHint:false
            }
        },
        methods:{
            moreInfo(){
                this.showInfo = true;
            },
            hideMoreInfo(){
                this.showInfo = false;

            },
            moreSel(){
                this.showMoreSel = true;
            },
            hideMoreSel(){
                this.showMoreSel = false;
            },
            closeHint(){
                this.showHint = false;
            },
            keepSel(){
                var selects = document.getElementsByClassName('active');
                if(selects.length == 1 && this.productItem.height != 0){
                    this.showHint = true;
                    this.showMoreSel = true;
                    document.getElementsByClassName('closehint')[0].onclick = this.closeHint;
                    document.getElementsByClassName('hintBtn')[0].onclick = this.closeHint;
                }
                if(selects.length == 2 || (selects.length == 1 && this.productItem.height == 0)){
                    var size = "";
                    if(selects.length == 2){
                        document.getElementsByClassName('size')[0].innerText = selects[1].innerText;
                        size = selects[1].innerText
                    }
                    document.getElementsByClassName('opt')[0].innerText = selects[0].innerText;
                    this.showMoreSel = false;

                    //将选购的商品保存入localStorage
                    var goods = {
                        id:this.productItem.id,
                        img:this.productItem.itemPic1,
                        name:this.productItem.brand + " " + this.productItem.name,
                        price:this.productItem.sale_price,
                        size:size,
                        opt:selects[0].innerText,
                        amount:parseInt(document.getElementById('buyAmount').value)
                    }

                    var list = [];
                    if(JSON.parse(localStorage.getItem("cartList")) != null)
                        list= JSON.parse(localStorage.getItem("cartList")).list;
                    if(list.indexOf(goods) != -1)
                        list[list.indexOf(goods)].amount += goods.amount;
                    else
                        list.push(goods);
                    localStorage.setItem("cartList",JSON.stringify({
                        list:list
                    }));
                    var _this = this;
                    this.amount = 0;
                    list.forEach(function(p){
                        _this.amount += p.amount;
                    });


                }


            },
            reduceNum(){
                var amount = parseInt(document.getElementById('buyAmount').value);
                if(amount !== 1)
                    amount -= 1;
                document.getElementById('buyAmount').value = amount;
            },
            addNum(){
                var amount = parseInt(document.getElementById('buyAmount').value);
                amount += 1;
                document.getElementById('buyAmount').value = amount;
            }
        },
        created(){
            //滑动，详情导航栏固定
            window.onscroll = function(){
                if(document.getElementsByClassName('titleBar')[0]){
                    var top =document.getElementsByClassName('titleBar')[0].offsetTop;
                    // console.log(document.body.scrollTop,top)
                    if(document.body.scrollTop > top)
                        document.getElementsByClassName('titleBar')[0].style.position = "fixed";
                    if(document.body.scrollTop <= document.getElementsByClassName('detail-item1')[0].offsetTop)
                        document.getElementsByClassName('titleBar')[0].style.position = "relative";
                }
            }

            var products = JSON.parse(localStorage.getItem('productsList')).products;
            var _this = this;
            products.forEach(function(p){
                if(p.id == _this.$route.params.productId){
                    _this.productItem = p;
                    return;
                }
            })
            var _this = this;
            if(JSON.parse(localStorage.getItem("cartList")) != null)
                JSON.parse(localStorage.getItem("cartList")).list.forEach(function(p){
                            _this.amount += p.amount;
                });

        },
        mounted(){
            var imgs = document.getElementsByClassName('swiper-slide');
            for(var i=0;i<imgs.length;i++){
                if(imgs[i].style.display == "none")
                    document.getElementsByClassName('swiper-wrapper')[0].removeChild(imgs[i]);
            }

            //点击切换详情导航栏选项
            // console.log(document.getElementsByClassName('titleBar')[0].children);
            var _this = this;
            document.getElementsByClassName('titleBar')[0].onclick =function(e){
                if(e.target.nodeName == "DIV"){
                    for(var i=0;i< e.currentTarget.children.length;i++){
                        e.currentTarget.children[i].className="";
                    }
                    e.target.className = "current";
                    if(e.target.getAttribute('data-num') == 1){
                        e.currentTarget.lastChild.style.left = "0";
                        _this.detail1 = true;_this.detail2 = false;_this.detail3 = false;
                    }
                    if(e.target.getAttribute('data-num') == 2){
                        e.currentTarget.lastChild.style.left = "1.2rem";
                        _this.detail1=false;_this.detail2=true;_this.detail3=false;
                    }
                    if(e.target.getAttribute('data-num') == 3){
                        e.currentTarget.lastChild.style.left = "2.5rem";
                        _this.detail1=false;_this.detail2=false;_this.detail3=true;
                    }
                }
            }

            //选择可选项
            if(this.productItem.opt.length != 0){
                var sels = document.getElementsByClassName("sels");
                sels[0].className += ' active';
                document.getElementById("typeSel").onclick = function(e){
                    if(e.target.nodeName == "DD"){
                        for(var i=0;i<sels.length;i++){
                            document.getElementsByClassName("sels")[i].className = "sels";
                        }
                        e.target.className += " active";
                        document.getElementsByClassName("kx")[0].innerText = e.target.innerText;
                    }
                }
            }
            if(this.productItem.height.length != 0){
                document.getElementById("specificationSel").onclick = function(e){
                    var dds = document.getElementsByClassName('disable');
                    if(e.target.nodeName == "DD"){
                        for(var i=0;i<dds.length;i++){
                            document.getElementsByClassName('disable')[i].className = "disable";
                        }
                        e.target.className += " active";
                        document.getElementsByClassName('gg')[0].innerText = e.target.innerText;
                    }
                }
            }

        }
    }
</script>

<style scoped>
    @import '/iconfont/iconfont.css';
    .contents{
        margin-top:0.5rem;
        position:relative;
    }
    header{
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.16rem;
        background: #ff4965;
        color: #fff;
        position:relative;
    }
    header h2{
        width:2.94rem;
        text-align:center;
        font-size:0.2rem;
        color:#fff;
        float:left;
        font-weight:normal;
    }
    nav{
        height:3.6rem;
        background-color: #f0f0f0;
        overflow: hidden;
    }
    nav img{
        width: 100%;
        height:100%;
    }
    nav .swiper-container{
        height:3.6rem;
    }
    .swiper-container-horizontal > .swiper-pagination-bullets {
        bottom: -14px;
    }
    .title{
        font-size:0.18rem;
        font-weight: 400;
        color: #1a1a1a;
        line-height:0.3rem;
        padding:0 0.14rem;
        margin-top:0.1rem;
    }
    .price{
        padding:0 0.14rem;
        height:0.36rem;
        line-height:0.36rem;
    }
    .price i,.price span{
        color:#ff4965;
        float:left;
    }
    .price i{
        font-size:0.18rem;
        line-height:0.4rem;
    }
    .price span{
        font-size:0.26rem;
        margin-right:0.06rem;
    }
    .price del{
        font-size:0.15rem;
        color: #989898;
        float:left;
        line-height:0.4rem;
    }
    .descInfo{
        font-size:0.12rem;
        color: #999;
        margin-top:0.06rem;
        padding: 0 0.1rem 0.14rem;
    }
    .detail-item{
        padding:0.2rem 0.14rem;padding-bottom: 0.5rem;
        border-bottom:0.1rem solid #f2f2f2;
        border-top:0.1rem solid #f2f2f2;
        color: #1a1a1a;
        font-size:0.12rem;
        position:relative;
    }
    .detail-item ul li{
        float:left;
        margin-right:0.1rem;
        height: 0.26rem;
        line-height: 0.26rem;
    }
    .detail-promiseSign li:before {
        content: '●';
        color: #ff4965;
        margin-right: .06rem;
        font-size: .16rem;
        vertical-align: middle;
    }
    .detail-item .moreBtn{
        color: #b5b5b5;
        position: absolute;
        right:0.14rem;
        top:36%;
        font-size:0.14rem;
    }
    .detail-item1{
        padding:0.2rem 0.14rem;
        border-bottom:0.1rem solid #f2f2f2;
        position:relative;
    }
    .detail-item1 .moreBtn{
        color: #b5b5b5;
        position: absolute;
        right:0.14rem;
        top:36%;
        font-size:0.14rem;
    }
    .opts{
        font-size:0.14rem;
        color: #1a1a1a;
    }
    .opts em{
        color: #999;
    }
    .opts span{
        margin-left:0.1rem;
    }
    .titleBar {
        display: flex;
        display: -webkit-flex;
        display: -moz-flex;
        position: relative;
        width: 100%;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.16rem;
        background: #fff;
        margin: 0 auto;
        z-index: 3;
        top: 0;
    }
    .titleBar div.current {
        color: #ff4965;
    }
    .titleBar div {
        flex: 1;
        -webkit-flex: 1;
        -moz-flex: 1;
        width: 0.5rem;
        text-align: center;
        line-height: 0.38rem;
        font-weight: normal;
    }
    .titleBar i {
        width: 33.33%;
        position: absolute;
        content: '';
        height: 0.02rem;
        background-color: #ff4965;
        left: 0;
        bottom: 0;
        -webkit-transition: all .5s ease;
    }
    #details1,#details1 img{
        width:100%;
    }
    #details2{
        font-size:0.14rem;
        color: #1a1a1a;
        padding:0.1rem 0.14rem;
    }
    #details2 p{
        line-height:0.23rem;
    }
    .QA {
        padding: 0.1rem 0;
        font-size: 0.12rem;
    }
    .QA dl {
        margin: 0.05rem 0.1rem 0.15rem 0.1rem;
    }
    .QA .Q {
        font-weight: 600;
        font-size: 0.14rem;
        color: #343434;
        line-height: 1.3;
    }
    .QA .Q, .QA .A {
        position: relative;
        padding-left: 0.2rem;
    }
    .QA .A {
        margin-top: 0.08rem;
        margin-left:0;
        font-size: 0.12rem;
        color: #5b5b5b;
    }
    .QA .Q:after {
        top: 0.02rem;
    }
    .QA .Q:after{
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        width: 0.12rem;
        height: 0.15rem;
        background: url(/imgs/icon_qa.png) no-repeat;
        -webkit-background-size: 0.12rem auto;
        background-size: 0.12rem auto;
    }
    .QA .A:after {
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        width: 0.12rem;
        height: 0.15rem;
        background: url(/imgs/icon_qa.png) no-repeat 0 -0.15rem;
        -webkit-background-size: 0.12rem auto;
        background-size: 0.12rem auto;
    }
    .detail-tankuang {
        background: #fff;
        bottom: 0;
        left: 0;
        right: 0;
        position: fixed;
        z-index: 100001;
        font-size: .12rem;
    }
    .detail-tankuang .tk-title {
        height: 0.5rem;
        border-bottom: .02rem solid #f2f2f2;
        line-height: 0.5rem;
        text-align: center;
        font-size: .18rem;
        padding: 0 .4rem;
        color: #1a1a1a;
    }
    .detail-tankuang .tk-body {
        min-height: 2.5rem;
        overflow: auto;
        width: 100%;
        max-height: 2.5rem;
        color: #1a1a1a;
    }
    .detail-tankuang .shrink {
        display: block;
    }
    .mes-notice {
        padding: .1rem;
    }
    .mes-notice dt {
        font-size: .14rem;
        font-weight: 700;
        line-height: 1.5;
        color: #1a1a1a;
    }
    .mes-notice dt:before {
        content: "";
        background: url(/imgs/info.png) no-repeat;
        background-size: 1rem;
        display: inline-block;
        height: .2rem;
        width: .2rem;
        margin-right: 0.05rem;
        vertical-align: text-top;
    }
    .jiap dt:before {
        background-position: -0.24rem 0rem;
    }
    .mes-notice dd {
        color: #3a3a3a;
        line-height: 1.5;
    }
    .return dt:before {
        background-position: 0.02rem 0rem;
    }
    .detail-tankuang .tk-btnGroup {
        background: #ff4965;
        color: #fff;
        height: 0.48rem;
        text-align: center;
    }
    .detail-tankuang .tk-btnGroup button {
        color: #fff;
        display: inline-block;
        height: 100%;
        text-align: center;
        font-size: .15rem;
        border: none;
        background: 0 0;
        display: block;
        width: 100%;
        outline:none;
    }
    .mask{
        width:100%;
        height:100%;
        background:#000;
        opacity:0.5;
        position:fixed;
        top:0;
        z-index:100000;
    }
    .detail-tankuang .tk-title {
        border-bottom: .02rem solid #f2f2f2;
        text-align: center;
        font-size: .14rem;
        padding: 0 .1rem;
    }
    .detail-selectBox .tk-title {
        height: 0.8rem;
        padding-left: 1.3rem;
    }
    .detail-selectBox .selProImg {
        position: absolute;
        width: 0.88rem;
        height: 0.88rem;
        border: 0.01rem solid #f2f2f2;
        overflow: hidden;
        left: .1rem;
        top: -0.4rem;
    }
    .detail-selectBox .selProImg img{
        width:100%;
    }
    .detail-selectBox .selInfo {
        text-align: left;
        line-height: 1.5;
        font-size: .13rem;
    }
    .detail-selectBox .selInfo span {
        display: block;
    }
    .detail-selectBox .selPrice {
        color: #ff4965;
        font-size: .16rem;
    }
    .detail-selectBox .selInfo span.stock {
        min-height: .16rem;
    }
    .detail-selectBox .closeBtn {
        position: absolute;
        width: 0.4rem;
        height: 0.4rem;
        right: 0;
        top: 0;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    .detail-selectBox .closeBtn:before,.detail-selectBox .closeBtn:after{
        content: '';
        display: block;
        position: absolute;
        width: .256rem;
        height: .256rem;
        border-radius: 100%;
        background: #fff;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    .detail-selectBox .closeBtn:after {
        width: .18rem;
        height: 0.01rem;
        background: #666;
        right: 74%;
        margin-right: -.2rem;
        border-radius: 0;
    }
    .detail-selectBox .closeBtn:before {
        left: 50%;
        width: 0.01rem;
        height: .18rem;
        background: #666;
        border-radius: 0;
    }
    #selectBoxPop .selBox{
        overflow:hidden;
    }
    .detail-selectBox .selParams {
        max-height: 2.6rem;
    }
    .detail-tankuang .tk-body {
        min-height: 2.6rem;
        overflow: auto;
        width: 100%;
        max-height: 2.6rem;
        padding-right:0.6rem;
    }
    .detail-selectBox .selParams dl {
        padding-bottom: 0;
        padding-top: .16rem;
    }
    .taozhuangItem {
        padding: .1rem;
        overflow: hidden;
        border-bottom: .02rem solid #f2f2f2;
    }
    .detail-selectBox .selParams dt {
        font-size: .14rem;
        color: #333;
        line-height:0.4rem;
    }
    .detail-selectBox .selParams dd {
        height: 0.26rem;
        line-height: 0.26rem;
        padding: 0 .2rem;
        border: .02rem solid #e0e0e0;
        border-radius: .16rem;
        margin-bottom: .2rem;
        cursor: pointer;
        color: #333;
        float: left;
        margin-right:0.1rem;
    }
    .taozhuangItem:last-child {
        border-bottom: none;
    }
    .tk-body .taozhuangItem dt {
        line-height: 0.3rem;
        color: #333;
    }
    .NumberBox .addBtn,.NumberBox .minusBtn {
        display: inline-block;
        width: 0.28rem;
        height: 0.28rem;
        text-align: center;
        line-height: 0.28rem;
        font-size: .16rem;
        cursor: pointer;
    }
    .NumberBox .midNum {
        display: inline-block;
        vertical-align: top;
        width: 0.4rem;
        border: .02rem solid #e0e0e0;
        border-top: none;
        border-bottom: none;
        box-sizing: border-box;
    }
    .NumberBox .midNum input {
        width: 100%;
        border: none;
        height: 0.24rem;
        text-align: center;
        vertical-align: top;
        font-size: .14rem;
    }
    .taozhuangItem dd, .taozhuangItem li {
        vertical-align: middle;
        display: inline-block;
        margin-right: .1rem;
        color: #999;
    }
    .tk-body .taozhuangItem .NumberBox {
        padding: 0!important;
        border-radius:0;
    }
    .detail-selectBox .selParams dd.active {
        border-color: #ff4965;
        color: #ff4965;
    }
    .fixedCart{
        width:100%;
        position:fixed;
        bottom:0;
        left:0;
        display:flex;
        justify-content:space-between;
        font-size:0.14rem;
        border-top: .02rem solid #ededed;
        height:0.6rem;
        z-index:9;
    }
    .fixedCart .cart{
        width:50%;
        background:#fff;
        display:flex;
        flex-direction:column;
        text-align:center;
        justify-content:center;
        color: #5f646e;
        position:relative;
    }
    .fixedCart .cart .iconfont{
        font-size:0.36rem;
    }
    .fixedCart .cart .amount{
        position:absolute;
        top:0.04rem;
        right:0.7rem;
        width:0.16rem;
        height:0.16rem;
        line-height:0.16rem;
        border-radius:50%;
        background:#ff4965;
        text-align:center;
        padding-left:0.02rem;
        box-sizing:border-box;
        color:#fff;
    }
    .fixedCart .addCart{
        width:50%;
        background:#ff4965;
        font-size:0.16rem;
        color:#fff;
        text-align:center;
        line-height:0.6rem;
    }
    .hintInfo{
        position:fixed;
        top:30%;
        left:15%;
        font-size:0.18rem;
        border:0.02rem solid #ededed;
        background:#f9f9f9;
        width:2.6rem;
        height:1.6rem;
        line-height:1.2rem;
        text-align:center;
        border-radius:0.06rem;
        z-index: 100010;
    }
    .hintInfo .closehint{
        position: absolute;
        width: 0.4rem;
        height: 0.4rem;
        right: 0;
        top: 0;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    .hintInfo .closehint:before, .hintInfo .closehint:after {
        content: '';
        display: block;
        position: absolute;
        width: .256rem;
        height: .256rem;
        border-radius: 100%;
        background: #fff;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    .hintInfo .closehint:before {
        left: 50%;
        width: 0.01rem;
        height: .18rem;
        background: #666;
        border-radius: 0;
    }
    .hintInfo .hintBtn{
        position:absolute;
        bottom:0.1rem;;
        right:0.2rem;
        height:0.3rem;
        line-height:0.3rem;
        width:0.8rem;
        background:#ededed;
    }
    .hintInfo .closehint:after {
        width: .18rem;
        height: 0.01rem;
        background: #666;
        right: 75%;
        margin-right: -.2rem;
        border-radius: 0;
    }


</style>
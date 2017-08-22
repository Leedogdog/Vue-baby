<template>
    <div class="item">
        <ul>
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="(pouduct,idx) in products" v-if="idx < amount" :key="pouduct.id"><li>
                    <a @click="goDetails(pouduct.id)">
                        <img :src="pouduct.itemPic1">
                        <p>{{pouduct.name}}</p>
                        <div class="price">
                            <strong>{{pouduct.sale_price}}</strong>
                            <span>{{pouduct.market_price}}</span>
                        </div>
                    </a>
                </li></swiper-slide>

            </swiper>
        </ul>

    </div>
</template>

<script>
    import {swiper,swiperSlide} from 'vue-awesome-swiper';

    export default {
        props:['products','amount'],
        components:{
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView : 4.3,
                    freeMode : true,
                    freeModeMomentum : false
                }
            }
        },
        methods:{
            goDetails(id){
                // console.log(this.products)
                localStorage.setItem("productsList",JSON.stringify({
                    products:this.products
                }));
                this.$router.push({
                    name:"details",
                    params:{
                        productId:id
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .item,.item ul{
        height:1.46rem;
        box-sizing: border-box;
    }
    .item ul{
        display:flex;
        justify-content:space-between;
        background:#fff;
    }
    .item ul li{
        width:0.86rem;
        height:1.46rem;
        white-space: normal;
        padding:0 0.02rem;
    }
    .item ul li a{
        display: block;
        width:0.86rem;
        height:1.46rem;
        padding:0 0.01rem;
        box-sizing:border-box;
        margin:0;
    }
    .item ul li img{
        width:0.82rem;
        height:0.82rem;
        float: left;
    }
    .item ul li p{
        float:left;
        margin-top:0.02rem;
        font-size:0.12rem;
        color: #444;
        height:0.32rem;
        line-height:0.16rem;
        overflow:hidden;
        padding:0 0.08rem;
        text-align:center;
    }
    .item ul li .price{
        height:0.24rem;
        line-height:0.24rem;
        float: left;
        padding:0 0.06rem;
        box-sizing:border-box;
    }
    .item ul li .price strong{
        color: #ff425f;
        font-size: 0.18rem;
        float: left;
    }
    .item ul li .price strong:before {
        font-size: 0.14rem;
    }
    .item ul li .price span{
        display:inline-block;
        font-size: 0.12rem;
        margin-left: 0.02rem;
        color: #999;
        font-weight: normal;
        text-decoration:line-through;
    }
    .item ul li .price span:before, .item ul li .price strong:before {
        content: "¥";
    }

</style>

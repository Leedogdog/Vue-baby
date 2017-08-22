<template>
    <div class="goTop" @click="backTop" v-show="isShow"><img src="/imgs/goTop.png"></div>
</template>

<script>
    export default {
        data(){
            return{
                isShow:false
            }
        },
        created(){
            var _this =  this;
            window.addEventListener('scroll', function(){
                if(document.body.scrollTop > 500)
                    _this.isShow = true;
                else
                    _this.isShow = false;
            })
        },
        methods:{
            backTop(){
                document.body.scrollTop = 0;
            }
        }
    }
</script>

<style scoped>
    .goTop{
        position:fixed;
        bottom:0.7rem;
        right:0.14rem;
        width:0.5rem;
        height:0.5rem;
        z-index:99999;
    }
    .goTop img{
        width:0.5rem;
        height:0.5rem;
    }
</style>
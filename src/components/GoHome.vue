<template>
    <div class="goHome"><i class="iconfont icon-shouye" @click="goHome"></i></div>
</template>

<script>
    export default{
        methods:{
            goHome(){
                this.$router.push('/home');
            }
        }
    }
</script>

<style scoped>
    @import '/iconfont/iconfont.css';
    .goHome{
        float: right;
        width:0.5rem;
        height:0.5rem;
        line-height:0.5rem;
        text-align:center;
    }
    .goHome .iconfont{
        position:relative;
        left:0;
        right:0;
        top:0;
        bottom:0;
        color:#fff;
        font-size:0.3rem;
    }
</style>
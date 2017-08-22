<template>
    <div class="Footer">
        <router-link to="/home"><i class="iconfont icon-shouye"></i>首页</router-link>
        <router-link to="/type"><i class="iconfont icon-fenlei"></i>分类</router-link>
        <router-link to="/cart"><i class="iconfont icon-icon0204"></i>购物车</router-link>
        <router-link to="/login"><i class="iconfont icon-wode"></i>快速登录</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

</script>

<style scoped>
    @import '/iconfont/iconfont.css';

    .Footer{
        width:100%;
        height:0.48rem;
        font-size:0.16rem;
        position:fixed;
        bottom:0;
        left:0;
        font-size:0.14rem;
        display:flex;
        justify-content:space-between;
        padding:0 0.1rem;
        box-sizing:border-box;
        background: #fafafa;
        border-top: 1px solid #e6e6e6;
        z-index: 999;

    }
    .Footer a{
        width:0.8rem;
        display:flex;
        flex-direction:column;
        justify-content:center;
        text-align:center;
        color: #888;
    }
    .Footer .iconfont{
        font-size:0.3rem;
    }
    .Footer .router-link-active{
        color:#ff4965;
    }
</style>

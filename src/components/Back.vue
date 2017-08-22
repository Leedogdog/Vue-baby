<template>
    <div class="back" @click="goBack"><img src="/imgs/icon_back.png"></div>
</template>

<script>
    export default{
        methods:{
            goBack(){
                history.back();
            }
        }
    }
</script>

<style scoped>
    .back img{
        width:0.3rem;

    }
    .back{
        float:left;
        height:0.5rem;
        display: flex;
        flex-direction:column;
        justify-content:center;
    }
</style>
<template>
  <div class="flex flex-item-center c-header" v-if="pageNav != 'custom'">
    
    <div class="c-header__goback " @click="goBack">
      <div class="iconfont icon-back" ></div>
    </div>
    <div class="flex-item text-center c-header__title">{{pageTitle || title}}{{pageNav}}</div> 
    <div class="c-header__right"></div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      title: '详情页'
    }
  },
  computed:{
    pageTitle(){
      console.log(this.$store.state.pageTitle)
      return this.$store.state.pageTitle
    },
    pageNav(){
      console.log(this.$store.state.pageNav);
      return this.$store.state.pageNav
    },
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    }
  },
  created(){
  }
}
</script>
<style scoped>
.c-header{
  color:#fff;
  padding:0 10px;
  height: 45px;
  background-color:var(--mainColor);
}
.c-header__goback, .c-header__right{
  width:40px;
  height: 40px;
  line-height: 40px;
}
.c-header__goback{
  font-size: 20px;
}
.c-header__title{
  font-size: 16px;
}
</style>
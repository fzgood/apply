<template>
  <div id="app" class="flex flex-column">
    <div class="header">
      <c-header></c-header>  
    </div> 
    <div class="flex-item app-box">
      <router-view/>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
import cHeader from '@/components/c-header/c-header';
export default {
  components: {
    cHeader
  }
}
</script>
<style>
html,body,#app {
  height: 100%;
  background-color: #f7f7f7;
}
.app-box{
  height: 100%;
  overflow-y: scroll;
}
</style>

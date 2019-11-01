<template>
  <div class="success flex flex-center">
    <div class="success-box text-center">
      <div >
        <img class="success-image" src="@/assets/success.png">
      </div>
      <div class="mt30 success-title">支付成功</div> 
      <div class="mt30 success-btn" @click="jumpPage('/')">返回首页</div> 
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.success{
height: 100%;
background-color: #fff;
}
.success-image{
  width: 100px;
}
.success-title{
  font-size: 18px;
  font-weight: bold;
}
.success-btn{
  padding:10px 30px;
  color:var(--mainColor);
  border:1px solid var(--mainColor);
  border-radius: 5px;
}
</style>
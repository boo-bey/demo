<template>
  <div class="footfixed">
    <div class="content">
      <a href="">
        <span class="iconfont">&#xe636;</span>
        <span>订阅疫情动态</span>
      </a>
    </div>
  </div>
</template>

<script>
import Home from "../Home.vue";
export default {
  components: { Home },
  name: "Footfixed",
};
</script>

<style lang="less" scoped>
.footfixed {
  width: 100%;
  .content {
    background: white;
    height: 0.8rem;
    width: 80%;
    position: fixed;
    bottom: 0.5rem;
    left: 0.3rem;
    border: 1px solid blue;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    padding: 0 0.4rem;
    span {
      font-size: 0.6rem;
      vertical-align: middle;
      line-height: 0.8rem;
      color: #4169e2;
    }
    span:last-child{
        font-size: 0.3rem;
        font-weight: 500;
    }
    
  }
}
</style>
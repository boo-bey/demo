<template>
    <div class="ipoto">
        <!-- <a href="#"><img src="@/assets/img/yz.png" alt=""></a>
        <a href="#"><img src="@/assets/img/hsjc.png" alt=""></a>
        <a href="#"><img src="@/assets/img/fywz.png" alt=""></a>
        <a href="#"><img src="@/assets/img/cxzc.png" alt=""></a> -->
        <div class="item">
            <div>
                <img src="@/assets/img/yz.png" alt="">
            </div>
            <p>问医生</p>
        </div>
        <div class="item">
            <div class="hoticon">
                <img src="@/assets/img/hsjc.png" alt="">
                <div class="hottag"></div>
            </div>
            <p>核酸检测</p>
        </div>
        <div class="item">
            <div>
                <img src="@/assets/img/fywz.png" alt="">
            </div>
            <p>防疫物资</p>
        </div>
        <div class="item">
            <div>
                <img src="@/assets/img/cxzc.png" alt="">
            </div>
            <p>出行政策</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Ipoto'
    }
</script>

<style lang="less" scoped>
.ipoto{
    padding-top: 0.25rem;
  display: flex;
  width: 100%;
  .item{
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      .hottag{
          width: 0.8rem;
          height: 0.25rem;
          position: absolute;
          background: url('@/assets/img/hottag.png') no-repeat ;
          background-position: 32%;
          background-size: 0.5rem;
          top: 0.01rem;
          left: 1rem;
      }
      img{
          width: .8rem;
      }
  }
}
</style>
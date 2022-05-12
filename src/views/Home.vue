<template>
  <div class="home">
    <!-- 首页图片 -->
    <Tphoto/>
    <Hot/>
    <Ipoto></Ipoto>


  </div>
</template>

<script>
// @ is an alias to /src
import Ipoto from './Ipoto'
import Tphoto from '@/components/Tphoto'
import Hot from './Hot'
export default {
  name: 'Home',
  components: {
    Tphoto,
    Hot,
    Ipoto,
  }
}
</script>
<style lang="less" scope>

</style>

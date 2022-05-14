<template>
  <div class="home">
    <!-- 首页图片 -->
    <Tphoto />

    <!-- 疫情热点 -->
    <Hot />

    <Ipoto />

    <!-- 疫情地图 -->
    <Map />
    <!-- 国内数据 -->
    <Inland />

    <!-- 地步固定位置 -->
    <Footfixed />
  </div>
</template>

<script>
// @ is an alias to /src
import Inland from "./Inland";
import Map from "./Map";
import Ipoto from "./Ipoto";
import Tphoto from "@/components/Tphoto";
import Hot from "./Hot";
import Footfixed from "./Footfixed";
export default {
  name: "Home",
  components: {
    Tphoto,
    Hot,
    Ipoto,
    Map,
    Inland,

    Footfixed,
  },
};
</script>
<style lang="less" scope>
</style>

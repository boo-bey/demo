<template>
  <div>
    <div id="main" style="width: 7.5rem; height: 7.5rem"></div>
  </div>
</template>

<script>
import axios from "axios";
import api from "@/api/index";
export default {
  name: "Ctiy",
  props: ["cityname"],
  mounted() {
    api.getCity(this.cityname).then((res) => {
      let result = res.data.retdata.subList;
      let arr = [];
      result.forEach((item) => {
        let obj = {};
        obj.name = item.city;
        obj.value = item.confirm;
        arr.push(obj);
      });
      this.$nextTick(() => {
        this.$myCharts.cityMap("main", this.cityname, arr);
      });
    });
  },
};
</script>

<style lang="less" scoped>
</style>
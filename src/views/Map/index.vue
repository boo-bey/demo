<template>
  <div>
    <h3>国内疫情地图</h3>
    <van-tabs
      v-model="active"
      animated
      swipeable
      title-active-color="#4169e2"
      line-height="0px"
      title-style="titlelist"
      @change="change"
    >
      <van-tab v-for="index in list" :title="index.title" :key="index.id">
        <div style="width: 100%; height: 7.5rem" :id="index.id"></div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import api from "@/api/index";
export default {
  data() {
    return {
      active: 0,
      list: [
        { id: "now", title: "现存确诊" },
        { id: "count", title: "风险地区" },
        { id: "sum", title: "累计确诊" },
      ],
      chinaData: [],
      arr: [],
    };
  },

  mounted() {
    let localdata = JSON.parse(localStorage.getItem("datalist"));
    if (localdata) {
      this.chinaData = localdata;
    } else {
      api.getCov().then((res) => {
        let chinaData = res.data.retdata;
        localStorage.setItem("datalist", JSON.stringify(chinaData));
      });
    }
    let arr = [];
    let newarr = [];
    localdata.forEach((item) => {
      let obj = {};
      let newobj = {};
      newobj.name = item.xArea;
      newobj.value = item.confirm;
      obj.name = item.xArea;
      obj.value = item.curConfirm;
      arr.push(obj);
      newarr.push(newobj);
    });
    this.arr = newarr;
    this.$nextTick(() => {
      this.$myCharts.chinaMap("now", arr);
    });
  },
  methods: {
    change(index) {
      if (index == 1) {
        this.$nextTick(() => {
          this.$myCharts.chinaMap("count", this.arr);
        });
      } else if (index == 2) {
        this.$nextTick(() => {
          this.$myCharts.chinaMap("sum", this.arr);
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
h3 {
  padding: 0.3rem 0.6rem;
  position: relative;
  border-top: 1px solid #999;
}
h3::before {
  content: "";
  width: 0.08rem;
  height: 0.4rem;
  display: block;
  background: #4169e2;
  position: absolute;
  top: 0.3rem;
  left: 0.3rem;
}
</style>
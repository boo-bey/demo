<template>
  <div class="hot">
    <div class="tit">
      <i></i>
      <img src="@/assets/img/2.png" alt="" />
      <span><a href="#">查看更多 ></a></span>
    </div>
    <div class="content">
      <ul>
        <li v-for="item in news" :key="item.id">
          <span class="new">最新</span>
          <span class="tex">{{ item.title }}</span>
          <span class="icon"> ></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "@/api/index";
export default {
  name: "Hot",
  data() {
    return {
      news: [],
    };
  },
  created() {
    api.getHot().then((res) => {
      if (res.data.msg === "success") {
        this.news = res.data.newslist[0].news;
        console.log(res.data.newslist[0].news);
      }
    });
  },
};
</script>
<style lang="less">
.hot {
  padding: 0.2rem 0.3rem;
  .tit {
    i {
      display: inline-block;
      width: 0.08rem;
      height: 0.32rem;
      background: #4169e2;
      vertical-align: middle;
    }
    img {
      width: 1.4rem;
      vertical-align: middle;
      margin-left: 0.1rem;
    }
    span {
      float: right;
      a {
        color: #4169e2;
        font-weight: 500;
        vertical-align: middle;
      }
    }
  }
  .content {
    ul {
        border-bottom: .005rem solid #ebebeb;
       
      li {
        line-height: 0.6rem;
        vertical-align: baseline;
        letter-spacing: 0.03rem;
        color: #000;
        font-size: 0.3rem;
        padding: 0.1rem 0;
        .new {
          font-size: 0.25rem;
          line-height: 0.3rem;
          background: red;
          border-radius: 3px;
          color: white;
        }
        .tex {
          margin-left: 0.1rem;
        }
        .icon {
          float: right;
          color: #ccc;
        }
      }
    }
  }
}
</style>

<template>
  <!-- panel+nav -->
  <div
    class="panel_nav"
    :style="$route.meta.panel_nav"
    v-show="!$route.meta.isShow"
  >
    <!-- alert -->
    <div
      class="alert alert-warning alert-dismissible text-center"
      v-show="$route.meta.alert"
      role="alert"
      id="alert"
    >
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <a href="#">在线选购</a>,尊享全国免费顺丰配送
    </div>
    <!-- panel -->
    <div class="panel panel-default">
      <div class="panel-body" :class="$route.meta.panel_a">
        <div class="text-left">
          <a href="#">
            <img src="./images/search_fff.svg" v-show="!$route.meta.alert" />
            <img src="./images/search_333.svg" v-show="$route.meta.alert" />
          </a>
          <a href="#">搜索</a>
        </div>
        <div class="text-center">
          <a href="#"><b>BEW Clothing</b></a>
        </div>
        <div class="text-right">
          <router-link to="/cart"> 我的购物车 </router-link>
          <router-link to="/land">
            <img src="./images/user_fff.svg" v-show="!$route.meta.alert" />
            <img src="./images/user_333.svg" v-show="$route.meta.alert" />
          </router-link>
        </div>
      </div>
    </div>

    <!-- nav -->
    <nav class="navbar navbar-default" :class="$route.meta.nav_a">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"> BEW Clothing </a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/">新品系列</router-link>
            </li>
            <li>
              <router-link to="/lady">女士</router-link>
            </li>
            <li>
              <router-link to="/man">男士</router-link>
            </li>
            <li>
              <router-link to="/bewMusic">BEW Music</router-link>
            </li>
            <li>
              <router-link to="/art">生活艺术</router-link>
            </li>
            <li>
              <router-link to="/colloation">BEW Clothing 世界</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="less">
/* alert 样式 */
.alert {
  background-color: #f6f5f3;
  border: none;
  color: #524f47;
  padding-bottom: 8px;
  padding-top: 8px;
  margin-bottom: 0;

  a {
    color: #524f47;
    text-decoration: none;
    border-bottom: 1px solid #000000;
  }
}

/* panel+nav 设置一个absolute */
.panel_nav {
  width: 100%;
  top: 0;
  z-index: 2;
}

/* panel 样式 */
.panel {
  width: 100%;
  margin-bottom: 0;
  border: none;
  box-shadow: 0 1px 0 0 inset transparent;
  background-color: transparent;

  .white {
    a {
      color: #ffffff;
    }
  }

  .black {
    a {
      color: #19110b;
    }

    .text-center a {
      color: #000;
    }
  }

  .panel-body {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      width: 30%;
    }

    .text-left img {
      position: relative;
      top: -1px;
      margin-right: 12px;
    }

    .text-center a {
      font-size: xx-large;
      font-family: lv;
      letter-spacing: 2px;
      text-decoration: none;
    }

    .text-right a {
      display: inline-block;
    }

    .text-right > a:last-of-type {
      margin-left: 14px;
    }
  }
}

/* nav 样式 */
.navbar {
  width: 100%;
  background-color: transparent;
  font-family: lv;

  .container {
    .navbar-header .navbar-brand {
      visibility: hidden;
      position: absolute;
    }
  }
}

.transparent {
  border: none;

  .container #navbar .nav {
    li a {
      transition: all 1s;
      border-bottom: 2px solid transparent;
      color: #ffffff;
    }

    li:hover a {
      border-bottom: 2px solid #ffffff;
    }
  }
}

.white {
  border-top: none;

  .container #navbar .nav {
    li a {
      border-bottom: 2px solid transparent;
      transition: all 1s;
    }

    li.select a {
      color: rgb(0, 0, 0);
      border-bottom: 2px solid #696969;
    }

    li:hover a {
      border-bottom: 2px solid #696969;
    }
  }
}

/* 当浏览器宽度小于768px时 panel b、.navbar-brand、.blank 样式 */
@media screen and (max-width: 768px) {
  .panel b {
    font-size: large;
    font-family: lv;
    letter-spacing: 2px;
  }

  .navbar .container {
    .navbar-header .navbar-brand {
      color: #ffffff;
      visibility: visible;
    }

    #navbar .nav {
      li {
        background-color: #ffffff;

        a {
          color: #19110b;
        }
      }

      li:hover a {
        border-bottom: 2px solid #696969;
      }
    }
  }
}

/* 当浏览器宽度大于768px ul.nav 样式 */
@media screen and (min-width: 768px) {
  .navbar .container #navbar .nav {
    float: none;
    clear: both;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

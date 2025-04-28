<script lang="ts" setup name="AppTopnav">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const ISdrawer = ref(false);

const route = useRoute(); // 获取当前路由信息

// 监听路由变化，跳转后自动关闭抽屉
watch(route, () => {
  ISdrawer.value = false;
});
</script>
<template>
  <div class="app-topnav">
    <div class="container">
      <div class="GroundGlassBgH">
        <div class="GroundGlassBg">
          <div class="GroundGlass">
            <div class="logo">
              <img class="logoImg" src="@/assets/imgs/logo.webp" alt="" />
              <div class="Web">
                <div class="SIM">SIMANGEL</div>
                <div class="Charity">
                  <div class="rotate">
                    <svg
                      stroke="currentColor"
                      fill="rgb(20 241 149)"
                      stroke-width="0"
                      role="img"
                      viewBox="0 0 24 24"
                      class="text-[#14F195]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m23.8764 18.0313-3.962 4.1393a.9201.9201 0 0 1-.306.2106.9407.9407 0 0 1-.367.0742H.4599a.4689.4689 0 0 1-.2522-.0733.4513.4513 0 0 1-.1696-.1962.4375.4375 0 0 1-.0314-.2545.4438.4438 0 0 1 .117-.2298l3.9649-4.1393a.92.92 0 0 1 .3052-.2102.9407.9407 0 0 1 .3658-.0746H23.54a.4692.4692 0 0 1 .2523.0734.4531.4531 0 0 1 .1697.196.438.438 0 0 1 .0313.2547.4442.4442 0 0 1-.1169.2297zm-3.962-8.3355a.9202.9202 0 0 0-.306-.2106.941.941 0 0 0-.367-.0742H.4599a.4687.4687 0 0 0-.2522.0734.4513.4513 0 0 0-.1696.1961.4376.4376 0 0 0-.0314.2546.444.444 0 0 0 .117.2297l3.9649 4.1394a.9204.9204 0 0 0 .3052.2102c.1154.049.24.0744.3658.0746H23.54a.469.469 0 0 0 .2523-.0734.453.453 0 0 0 .1697-.1961.4382.4382 0 0 0 .0313-.2546.4444.4444 0 0 0-.1169-.2297zM.46 6.7225h18.7815a.9411.9411 0 0 0 .367-.0742.9202.9202 0 0 0 .306-.2106l3.962-4.1394a.4442.4442 0 0 0 .117-.2297.4378.4378 0 0 0-.0314-.2546.453.453 0 0 0-.1697-.196.469.469 0 0 0-.2523-.0734H4.7596a.941.941 0 0 0-.3658.0745.9203.9203 0 0 0-.3052.2102L.1246 5.9687a.4438.4438 0 0 0-.1169.2295.4375.4375 0 0 0 .0312.2544.4512.4512 0 0 0 .1692.196.4689.4689 0 0 0 .2518.0739z"
                      ></path>
                    </svg>
                  </div>
                  Web3 Charity
                </div>
              </div>
            </div>
            <div class="menu" v-if="!ISdrawer" @click="ISdrawer = true">
              <svg
                t="1740398312848"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="6854"
                width="24"
                height="24"
              >
                <path
                  d="M682.666667 768v85.333333H213.333333v-85.333333h469.333334z m213.333333-298.666667v85.333334H128v-85.333334h768z m-85.333333-298.666666v85.333333H341.333333V170.666667h469.333334z"
                  p-id="6855"
                  fill="#ffffff"
                ></path>
              </svg>
            </div>
            <div class="menu" v-if="ISdrawer" @click="ISdrawer = false">
              <svg
                t="1740455563480"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="8152"
                width="24"
                height="24"
              >
                <path
                  d="M801.856 734.016 579.904 512l222.016-222.016c18.816-18.816 18.88-49.152 0.064-67.968-18.752-18.752-49.216-18.752-67.904 0L512 444.032 289.92 222.016c-18.688-18.752-49.088-18.752-67.904 0C203.328 240.768 203.328 271.232 222.144 290.048L444.096 512l-222.016 221.952c-18.816 18.752-18.816 49.152-0.064 67.968C231.424 811.392 243.84 816 256 816s24.576-4.608 33.92-14.016L512 579.968l222.08 222.016c9.408 9.344 21.696 14.016 33.92 14.016 12.288 0 24.576-4.608 33.92-14.016C820.672 783.104 820.736 752.768 801.856 734.016z"
                  p-id="8153"
                  fill="#ffffff"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="drawer" :class="{ drawerTrue: ISdrawer }">
        <div class="menuList">
          <router-link to="/" class="menu-item">首页</router-link>
          <router-link to="/donate" class="menu-item">捐赠</router-link>
          <router-link to="/project" class="menu-item">项目</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.app-topnav {
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 34px;

  z-index: 1000;
  .container {
    padding: 0 16px;
    width: 100%;
    .GroundGlassBgH {
      background: #4b4b4b;
      border-radius: 12px;
    }
    .GroundGlassBg {
      height: 56px;
      width: 100%;
      background: linear-gradient(
        90deg,
        rgba(166, 65, 78, 0.419),
        rgba(41, 156, 140, 0.36),
        rgba(39, 90, 172, 0.425)
      );
      border-radius: 12px;
    }
    .GroundGlass {
      border: 1px solid #dcd8d805;
      padding: 0 16px;
      height: 56px;
      width: 100%;

      background: rgba(0, 0, 0, 0.3); /* 半透明白色背景 */
      border-radius: 12px;

      box-shadow: 0px 0px 5px rgb(87, 86, 86);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        display: flex;
        align-items: center;
        gap: 12px;
        .logoImg {
          width: 40px;
          height: 40px;
        }
        .Web {
          .SIM {
            background: linear-gradient(90deg, #38bdf8, #a855f7, #2dd4bf);
            letter-spacing: 1px; /* 调整横间距 */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
            font-size: 17px;
            margin-bottom: 4px;
            font-weight: 800;
            transition: all 0.3s ease-in-out;
          }
          .SIM:hover {
            //  放大
            transform: scale(1.1);
            //过渡
            transition: all 0.3s ease-in-out;
            //弹性
            // -webkit-box-reflect: below 1px
            //   linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
          }
          .Charity {
            display: flex;
            align-items: center;
            gap: 4px;
            color: rgb(156 163 175);
            font-size: 12px;
          }
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .rotate {
          display: inline-block; /* 确保动画在行内元素上有效 */
          animation: rotate 3s linear infinite; /* 2秒旋转一圈，线性运动，无限循环 */
        }
      }
      .menu {
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }
}
.drawer {
  width: 100%;
  height: 0px;
  padding: 0 16px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  margin-top: 12px;
  background: linear-gradient(
    185deg,
    rgba(0, 0, 0, 0.93) 30%,
    rgba(23, 37, 84, 0.92) 70%
  );
  // backdrop-filter: blur(15px); /* 毛玻璃模糊效果 */
  border-radius: 14px;
  .menuList {
    display: flex;
    flex-direction: column;
    gap: 8px;
    .menu-item {
      padding: 8px 16px;
      color: rgb(209 213 219);
      cursor: pointer;
      font-size: 16px;
      font-weight: 300;
      transition: all 0.2s ease-in-out;
      &:hover {
        //    平移
        transform: translateX(12px);
      }
    }
  }
}
.drawerTrue {
  height: 148px;
  padding: 16px;
}
</style>

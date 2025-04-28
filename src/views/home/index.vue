<script setup lang="ts">
import router from "@/router";

const shortenAddress = (str: string) => {
  if (str.length <= 8) return str;
  return str.slice(0, 4) + "..." + str.slice(-4);
};
</script>

<template>
  <div class="homeView">
    <div class="container">
      <div class="OpenScreen">
        <div class="FirstGlobal">全球首个去中心化慈善平台</div>
        <div class="Bigtitle">
          <div class="title1">链上公益</div>
          <div class="title2">透明追踪</div>
        </div>
        <div class="TransparentDonation">
          透明捐赠，区块链见证每份爱，通过区块链技术，让每一笔捐赠都清晰可见。
          <span class="price">￥2,100,000</span> 用于四川理塘希漫教育中心
        </div>
        <div class="btnS">
          <div class="btn1" @click="router.push('/donate')">立即捐赠</div>
          <div class="btn2" @click="router.push('/project')">了解项目</div>
        </div>
      </div>
      <div class="dynamic">
        <div class="dynamicTitle">最新捐赠动态</div>
        <div class="dynamictext">
          <span>实时展示最新的捐赠流向,</span
          ><span>确保每一笔捐赠都用于实处</span>
        </div>
        <div class="IWantToDonate">
          <div class="IWantTop">
            <div class="IWantleft">
              <div class="ILogo">
                <svg
                  stroke="rgb(45 212 191)"
                  fill="rgb(45 212 191)"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m23.8764 18.0313-3.962 4.1393a.9201.9201 0 0 1-.306.2106.9407.9407 0 0 1-.367.0742H.4599a.4689.4689 0 0 1-.2522-.0733.4513.4513 0 0 1-.1696-.1962.4375.4375 0 0 1-.0314-.2545.4438.4438 0 0 1 .117-.2298l3.9649-4.1393a.92.92 0 0 1 .3052-.2102.9407.9407 0 0 1 .3658-.0746H23.54a.4692.4692 0 0 1 .2523.0734.4531.4531 0 0 1 .1697.196.438.438 0 0 1 .0313.2547.4442.4442 0 0 1-.1169.2297zm-3.962-8.3355a.9202.9202 0 0 0-.306-.2106.941.941 0 0 0-.367-.0742H.4599a.4687.4687 0 0 0-.2522.0734.4513.4513 0 0 0-.1696.1961.4376.4376 0 0 0-.0314.2546.444.444 0 0 0 .117.2297l3.9649 4.1394a.9204.9204 0 0 0 .3052.2102c.1154.049.24.0744.3658.0746H23.54a.469.469 0 0 0 .2523-.0734.453.453 0 0 0 .1697-.1961.4382.4382 0 0 0 .0313-.2546.4444.4444 0 0 0-.1169-.2297zM.46 6.7225h18.7815a.9411.9411 0 0 0 .367-.0742.9202.9202 0 0 0 .306-.2106l3.962-4.1394a.4442.4442 0 0 0 .117-.2297.4378.4378 0 0 0-.0314-.2546.453.453 0 0 0-.1697-.196.469.469 0 0 0-.2523-.0734H4.7596a.941.941 0 0 0-.3658.0745.9203.9203 0 0 0-.3052.2102L.1246 5.9687a.4438.4438 0 0 0-.1169.2295.4375.4375 0 0 0 .0312.2544.4512.4512 0 0 0 .1692.196.4689.4689 0 0 0 .2518.0739z"
                  ></path>
                </svg>
              </div>
              <div class="IBtn" @click="router.push('/donate')">
                <div class="loves">
                  <svg
                    stroke="rgb(255 0 0)"
                    fill="rgb(255 0 0)"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class="w-4 h-4 mr-2 text-[red] animate-pulse"
                    height="16px"
                    width="16px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                    ></path>
                  </svg>
                </div>
                我要捐赠
              </div>
            </div>
            <div class="SOL">+2.91 SOL</div>
          </div>
          <div class="send">
            <div class="SendTo">发送至</div>
            <div class="sender">{{ shortenAddress("x8ebc25v9fea21") }}</div>
            <div class="rocket">
              <svg
                stroke="rgb(45 212 191)"
                fill="rgb(45 212 191)"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="w-4 h-4"
                height="16px"
                width="16px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"
                ></path>
              </svg>
            </div>
            <div class="payment">
              {{ shortenAddress("CmE7A3V8AB79Q2YwM") }}
            </div>
          </div>
          <div class="progress-bar"></div>
          <div class="Transfer">✓ 正在进行转账到四川理塘希漫教育中心</div>
        </div>
        <div class="LatestProject">
          <div class="LatestProjectTitle">最新项目进展</div>
          <div class="LatestProjectList">
            <div class="ProjectItem" v-for="(item, index) in 3" :key="index">
              <div
                class="LoveIcon"
                style="background: rgba(244, 63, 94, 0.2)"
                v-if="index === 0"
              >
                <svg
                  stroke="rgb(251 113 133)"
                  fill="rgb(251 113 133)"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="16px"
                  width="16px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                  ></path>
                </svg>
              </div>
              <div
                class="LoveIcon"
                style="background: rgba(245, 158, 11, 0.2)"
                v-if="index === 1"
              >
                <svg
                  stroke="rgb(251 191 36)"
                  fill="rgb(251 191 36)"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="16px"
                  width="16px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                  ></path>
                </svg>
              </div>
              <div
                class="LoveIcon"
                style="background: rgba(20, 184, 166, 0.2)"
                v-if="index === 2"
              >
                <svg
                  stroke="rgb(45 212 191)"
                  fill="rgb(45 212 191)"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="16px"
                  width="16px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                  ></path>
                </svg>
              </div>
              <div class="text">
                <div class="ProjectTitle">完成四川理塘希漫教育中心建设</div>
                <div class="time">2025年6月6日</div>
              </div>
            </div>
          </div>
          <div class="LatestProjectBtn" @click="router.push('/project')">
            查看更多进展<svg
              t="1740469834086"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="10137"
              width="16"
              height="16"
            >
              <path
                d="M881 562H81c-27.6 0-50-22.4-50-50s22.4-50 50-50h800c27.6 0 50 22.4 50 50s-22.4 50-50 50z"
                p-id="10138"
                fill="#fb7185"
              ></path>
              <path
                d="M907.6 540.7L695.5 328.6c-19.5-19.5-19.5-51.2 0-70.7s51.2-19.5 70.7 0L978.4 470c19.5 19.5 19.5 51.2 0 70.7-19.6 19.6-51.2 19.6-70.8 0z"
                p-id="10139"
                fill="#fb7185"
              ></path>
              <path
                d="M695.5 695.4l212.1-212.1c19.5-19.5 51.2-19.5 70.7 0s19.5 51.2 0 70.7L766.2 766.1c-19.5 19.5-51.2 19.5-70.7 0s-19.5-51.2 0-70.7z"
                p-id="10140"
                fill="#fb7185"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="Why">
        <div class="WhyTitle">为什么选择我们</div>
        <div class="WhyText">
          <span> 区块链技术保证捐赠全程透明，</span
          ><span> 让爱心直达需要的地方</span>
        </div>
        <div class="WhyList">
          <div class="WhyItem">
            <div
              class="WhyItemIcon"
              style="
                background: linear-gradient(
                  90deg,
                  rgba(59, 130, 246, 0.2),
                  rgba(45, 212, 191, 0.2)
                );
              "
            >
              <svg
                stroke="rgb(45 212 191)"
                fill="rgb(45 212 191)"
                stroke-width="0"
                role="img"
                viewBox="0 0 24 24"
                class="w-6 h-6 text-teal-400"
                height="24px"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m23.8764 18.0313-3.962 4.1393a.9201.9201 0 0 1-.306.2106.9407.9407 0 0 1-.367.0742H.4599a.4689.4689 0 0 1-.2522-.0733.4513.4513 0 0 1-.1696-.1962.4375.4375 0 0 1-.0314-.2545.4438.4438 0 0 1 .117-.2298l3.9649-4.1393a.92.92 0 0 1 .3052-.2102.9407.9407 0 0 1 .3658-.0746H23.54a.4692.4692 0 0 1 .2523.0734.4531.4531 0 0 1 .1697.196.438.438 0 0 1 .0313.2547.4442.4442 0 0 1-.1169.2297zm-3.962-8.3355a.9202.9202 0 0 0-.306-.2106.941.941 0 0 0-.367-.0742H.4599a.4687.4687 0 0 0-.2522.0734.4513.4513 0 0 0-.1696.1961.4376.4376 0 0 0-.0314.2546.444.444 0 0 0 .117.2297l3.9649 4.1394a.9204.9204 0 0 0 .3052.2102c.1154.049.24.0744.3658.0746H23.54a.469.469 0 0 0 .2523-.0734.453.453 0 0 0 .1697-.1961.4382.4382 0 0 0 .0313-.2546.4444.4444 0 0 0-.1169-.2297zM.46 6.7225h18.7815a.9411.9411 0 0 0 .367-.0742.9202.9202 0 0 0 .306-.2106l3.962-4.1394a.4442.4442 0 0 0 .117-.2297.4378.4378 0 0 0-.0314-.2546.453.453 0 0 0-.1697-.196.469.469 0 0 0-.2523-.0734H4.7596a.941.941 0 0 0-.3658.0745.9203.9203 0 0 0-.3052.2102L.1246 5.9687a.4438.4438 0 0 0-.1169.2295.4375.4375 0 0 0 .0312.2544.4512.4512 0 0 0 .1692.196.4689.4689 0 0 0 .2518.0739z"
                ></path>
              </svg>
            </div>
            <div class="WhyItemTitle" style="color: rgb(96 165 250)">
              极速到账
            </div>
            <div class="WhyItemText">
              基于 Solana 的高性能区块链，捐赠资金秒级到账，让帮助不再等待。
            </div>
          </div>
          <div class="WhyItem">
            <div
              class="WhyItemIcon"
              style="
                background: linear-gradient(
                  90deg,
                  rgba(59, 130, 246, 0.2),
                  rgba(45, 212, 191, 0.2)
                );
              "
            >
              <svg
                stroke="rgb(251 113 133)"
                fill="rgb(251 113 133)"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="w-6 h-6 text-rose-400"
                height="24px"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                ></path>
              </svg>
            </div>
            <div class="WhyItemTitle" style="color: rgb(251 113 133)">
              全程追踪
            </div>
            <div class="WhyItemText">
              区块链技术确保每一笔捐赠都可追踪，资金流向清晰透明。
            </div>
          </div>
          <div class="WhyItem">
            <div
              class="WhyItemIcon"
              style="
                background: linear-gradient(
                  90deg,
                  rgba(59, 130, 246, 0.2),
                  rgba(45, 212, 191, 0.2)
                );
              "
            >
              <svg
                stroke="rgb(251 191 36)"
                fill="rgb(251 191 36)"
                stroke-width="0"
                viewBox="0 0 288 512"
                class="w-6 h-6 text-amber-400"
                height="24px"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"
                ></path>
              </svg>
            </div>
            <div class="WhyItemTitle" style="color: rgb(251 191 36)">
              多链支持
            </div>
            <div class="WhyItemText">
              支持ETH、BTC、SOL、TRON等多链捐赠，让爱心不受限制。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.homeView {
  width: 100%;
  background: #030408;
}
@keyframes breathe-text {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
.container {
  padding: 0 16px;
  padding-right: 16px+10px;
  width: 100%;
}
.OpenScreen {
  padding: 128px 0px 64px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  .FirstGlobal {
    animation: breathe-text 2s infinite ease-in-out;
    padding: 6px 16px;
    border: 1px solid rgba(59, 130, 246, 0.2);
    color: rgb(96 165 250);
    font-size: 13px;
    border-radius: 888px;
    line-height: 20px;
    background: linear-gradient(
      90deg,
      rgba(59, 130, 246, 0.2),
      rgba(45, 212, 191, 0.1)
    );
  }
  .Bigtitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    font-size: 60px;
    font-weight: 700;
    color: rgb(212 212 216);
    .title1 {
      background: linear-gradient(90deg, #3b82f6, #2dd4bf);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
    }
  }
  .TransparentDonation {
    margin-bottom: 24px;
    font-size: 20px;
    letter-spacing: 0.8px; /* 调整横间距 */
    text-align: center;
    line-height: 28px;
    font-weight: 400;
    color: rgb(161 161 170);
    .price {
      font-weight: 600;
      color: rgb(96 165 250);
      @keyframes breathe-text {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }

      animation: breathe-text 2s infinite ease-in-out;
    }
  }
  .btnS {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    gap: 18px;
    .btn1 {
      color: rgb(255 255 255);
      padding: 12px 32px;
      background: linear-gradient(90deg, #3b82f6, #2dd4bf);
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.06);
        background: linear-gradient(90deg, #3964e6, #60b3a7);
        box-shadow: 0px 1px 8px #3964e6;
      }
    }
    .btn2 {
      padding: 12px 32px;
      border-radius: 12px;
      cursor: pointer;
      color: rgb(212 212 216);
      border: 1px solid rgb(39 39 42);
      background: rgb(24 24 27);
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.06);
        background: #27272a;
        border: 1px solid #374975;
      }
    }
  }
}
.dynamic {
  padding: 96px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dynamicTitle {
    background: linear-gradient(90deg, #60a5fa, #2dd4bf);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 16px;
  }
  .dynamictext {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(161 161 170);
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 48px;
  }
  .IWantToDonate {
    padding: 24px;
    width: 100%;
    margin-bottom: 32px;
    @keyframes glowingBox {
      0% {
        box-shadow: 5px 0 10px rgba(0, 255, 128, 0.2),
          -5px 0 10px rgba(0, 128, 255, 0.2);
      }
      50% {
        box-shadow: 8px 0 16px rgba(0, 255, 128, 0.3),
          -8px 0 16px rgba(0, 128, 255, 0.3);
      }
      100% {
        box-shadow: 5px 0 10px rgba(0, 255, 128, 0.2),
          -5px 0 10px rgba(0, 128, 255, 0.2);
      }
    }

    animation: glowingBox 3s infinite ease-in-out;
    border-radius: 10px;
    &:hover {
      animation: glowingBox1 3s infinite ease-in-out;
      @keyframes glowingBox1 {
        0% {
          box-shadow: 5px 0 10px rgba(0, 255, 128, 0.4),
            -5px 0 10px rgba(0, 128, 255, 0.4);
        }
        50% {
          box-shadow: 8px 0 16px rgba(0, 255, 128, 0.8),
            -8px 0 16px rgba(0, 128, 255, 0.8);
        }
        100% {
          box-shadow: 5px 0 10px rgba(0, 255, 128, 0.4),
            -5px 0 10px rgba(0, 128, 255, 0.4);
        }
      }
    }
    .IWantTop {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 18px;
      .IWantleft {
        display: flex;
        align-items: center;
        gap: 12px;
        .ILogo {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(45, 212, 191, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .IBtn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px 24px;
          border-radius: 6px;
          background: linear-gradient(90deg, #3b82f6, #2dd4bf);
          color: #000;
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          &:hover {
            transform: scale(1.06);
            box-shadow: 0 0px 10px #3b83f6b6, 0 0px 10px #f24461;
            background: linear-gradient(
              -80deg,
              #57f4df,
              #f3afab,
              #fa8ff0,
              #5996f6,
              #5996f6
            );
          }

          .loves {
            display: flex;
            align-items: center;
            justify-content: center;
            animation: breathe-text 2s infinite ease-in-out;
          }
        }
      }
      .SOL {
        color: rgb(45 212 191);
        font-weight: 600;
        font-size: 16px;
      }
    }
    .send {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      .SendTo {
        color: rgb(161 161 170);
        margin-right: 8px;
        letter-spacing: 0.8px; /* 调整横间距 */
      }
      .sender {
        color: rgb(96 165 250);
        letter-spacing: 1px; /* 调整横间距 */
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          Liberation Mono, Courier New, monospace;
      }
      .rocket {
        margin-left: 8px;
        animation: moveAndFade 2s infinite linear;
        @keyframes moveAndFade {
          0% {
            transform: translateX(0);
            opacity: 0.5;
            fill: rgba(45, 212, 191, 0.3);
          }
          20% {
            transform: translateX(4px);
            opacity: 1;
            fill: rgba(45, 212, 191, 1);
          }
          30% {
            transform: translateX(6px);
            opacity: 1;
            fill: rgba(45, 212, 191, 1);
          }
          100% {
            transform: translateX(20px);
            opacity: 0;
            fill: rgba(45, 212, 191, 0.3);
          }
        }
      }
      .payment {
        margin-left: 8px;
        color: rgb(251 113 133);
        letter-spacing: 1px; /* 调整横间距 */
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          Liberation Mono, Courier New, monospace;
      }
    }
    /* 进度条容器 */
    .progress-bar {
      position: relative;
      width: 100%;
      height: 6px;
      background: rgb(39 39 42);
      border-radius: 30px;
      overflow: hidden;
      margin-bottom: 8px;
    }
    /* 进度条动画 */
    @keyframes progressAnimation {
      0% {
        width: 0%;
      }
      30% {
        /* 3秒内完成进度 */
        width: 100%;
      }
      100% {
        /* 停留5秒 */
        width: 100%;
      }
    }
    /* 进度条前景 */
    .progress-bar::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 0;
      background: linear-gradient(90deg, #3b82f6, #2dd4bf);
      animation: progressAnimation 8s linear infinite; /* 3秒动画 + 5秒停留 */
    }
    .Transfer {
      color: rgb(74 222 128 / var(--tw-text-opacity, 1));
      line-height: 20px;
      font-family: ui-sans-serif, system-ui, sans-serif, Apple Color Emoji,
        Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    }
  }
  .LatestProject {
    padding: 24px;
    width: 100%;

    @keyframes LatestBox {
      0% {
        box-shadow: 5px 0 10px rgba(251, 146, 60, 0.2),
          -5px 0 10px rgba(244, 63, 94, 0.2);
      }
      50% {
        box-shadow: 8px 0 16px rgba(251, 146, 60, 0.3),
          -8px 0 16px rgba(244, 63, 94, 0.3);
      }
      100% {
        box-shadow: 5px 0 10px rgba(251, 146, 60, 0.2),
          -5px 0 10px rgba(244, 63, 94, 0.2);
      }
    }

    animation: LatestBox 3s infinite ease-in-out;
    border-radius: 10px;
    &:hover {
      animation: LatestBox1 3s infinite ease-in-out;
      @keyframes LatestBox1 {
        0% {
          box-shadow: 5px 0 10px rgba(251, 146, 60, 0.4),
            -5px 0 10px rgba(244, 63, 94, 0.4);
        }
        50% {
          box-shadow: 8px 0 16px rgba(251, 146, 60, 0.8),
            -8px 0 16px rgba(244, 63, 94, 0.8);
        }
        100% {
          box-shadow: 5px 0 10px rgba(251, 146, 60, 0.4),
            -5px 0 10px rgba(244, 63, 94, 0.4);
        }
      }
    }
    .LatestProjectTitle {
      color: rgb(251 113 133);
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 16px;
      letter-spacing: 0.3px; /* 调整横间距 */
      line-height: 28px;
    }
    .LatestProjectList {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 24px;
      .ProjectItem {
        display: flex;
        align-items: center;
        gap: 12px;
        font-weight: 300;
        .LoveIcon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .text {
        .ProjectTitle {
          color: rgb(255 255 255);
          font-size: 16px;
          line-height: 24px;
        }
        .time {
          color: rgb(161 161 170);
          line-height: 20px;
        }
      }
    }
    .LatestProjectBtn {
      color: rgb(251 113 133);
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 16px;
      line-height: 24px;
      cursor: pointer;
    }
  }
}
.Why {
  padding: 96px 16px;
  padding-bottom: 118px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .WhyTitle {
    background: linear-gradient(90deg, #60a5fa, #2dd4bf);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 16px;
  }
  .WhyText {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(161 161 170);
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 48px;
  }
  .WhyList {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 100%;
    .WhyItem {
      padding: 24px;
      display: flex;
      flex-direction: column;
      width: 100%;
      border-radius: 10px;
      @keyframes WhyBox {
        0% {
          box-shadow: 5px 0 5px rgba(45, 212, 190, 0.2),
            -5px 0 10px rgba(0, 128, 255, 0.2);
        }
        50% {
          box-shadow: 8px 0 10px rgba(45, 212, 190, 0.4),
            -8px 0 16px rgba(0, 128, 255, 0.4);
        }
        100% {
          box-shadow: 5px 0 5px rgba(45, 212, 190, 0.2),
            -5px 0 10px rgba(0, 128, 255, 0.2);
        }
      }
      animation: WhyBox 3s infinite ease-in-out;
      &:hover {
        animation: WhyBox1 3s infinite ease-in-out;
        @keyframes WhyBox1 {
          0% {
            box-shadow: 5px 0 5px rgba(45, 212, 190, 0.4),
              -5px 0 10px rgba(0, 128, 255, 0.4);
          }
          50% {
            box-shadow: 8px 0 10px rgba(45, 212, 190, 0.8),
              -8px 0 16px rgba(0, 128, 255, 0.8);
          }
          100% {
            box-shadow: 5px 0 5px rgba(45, 212, 190, 0.4),
              -5px 0 10px rgba(0, 128, 255, 0.4);
          }
        }
      }
      .WhyItemIcon {
        margin-bottom: 24px;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 12px;
      }
      .WhyItemTitle {
        margin-bottom: 16px;
        font-weight: 600;
        line-height: 28px;
        font-size: 20px;
      }
      .WhyItemText {
        color: rgb(161 161 170);
        line-height: 24px;
        font-size: 16px;
      }
    }
  }
}
</style>

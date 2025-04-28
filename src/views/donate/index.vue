<script setup lang="ts">
import { ElNotification } from "element-plus";
const shortenAddress = (str: string) => {
  if (str.length <= 8) return str;
  return str.slice(0, 4) + "..." + str.slice(-4);
};

const copyToClipboard = async (textToCopy: string) => {
  try {
    await navigator.clipboard.writeText(textToCopy);
    ElNotification({
      dangerouslyUseHTMLString: true,
      showClose: false,
      customClass: "message-logout",
      title: "已复制地址",
      duration: 1000,
    });
  } catch (err) {
    ElNotification({
      dangerouslyUseHTMLString: true,
      showClose: false,
      customClass: "message-logout",
      title: "复制失败",
      duration: 1000,
    });
  }
};
</script>

<template>
  <div class="homeView">
    <div class="homeViewBG">
      <div class="container">
        <div class="OpenScreen">
          <div class="FirstGlobal">全球首个去中心化慈善平台</div>
          <div class="Bigtitle">
            <div class="title1">希漫公益</div>
            <div class="title2">让爱心永恒</div>
          </div>
          <div class="TransparentDonation">
            通过区块链技术,<br />让每一份善意都透明可追溯,<br />共同构建更美好的未来
          </div>
        </div>
        <div class="DonationChain">
          <div class="DonationChainBg">
            <div class="DonationChainTitle">链上捐赠</div>
            <div class="DonationChainList">
              <div class="DonationChainItem">
                <div class="ChainName">
                  <div class="icon">
                    <svg
                      stroke="#627EEA"
                      fill="#627EEA"
                      stroke-width="0"
                      viewBox="0 0 320 512"
                      class="w-8 h-8 text-[#627EEA]"
                      height="32px"
                      width="32px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                      ></path>
                    </svg>
                  </div>
                  <div class="name">ETH</div>
                </div>
                <div class="Address">
                  0x70315b79b8e6769c7208aab3031ccb364ea6b83d
                </div>
                <div
                  class="copy"
                  @click="
                    copyToClipboard(
                      '0x70315b79b8e6769c7208aab3031ccb364ea6b83d'
                    )
                  "
                >
                  复制地址
                  <svg
                    class="w-4 h-4 group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    height="16px"
                    width="16px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="DonationChainItem">
                <div class="ChainName">
                  <div class="icon">
                    <svg
                      stroke="#F0B90B"
                      fill="#F0B90B"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="w-8 h-8 text-[#F0B90B]"
                      height="32px"
                      width="32px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12C10.1046 12 11 11.1046 11 10 11 8.89543 10.1046 8 9 8 7.89543 8 7 8.89543 7 10 7 11.1046 7.89543 12 9 12ZM12 1 21.5 6.5V17.5L12 23 2.5 17.5V6.5L12 1ZM4.5 7.65311V16.3469L6.8724 17.7204 14.9446 11.8008 19.5 14.534V7.65311L12 3.311 4.5 7.65311Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="name">BNB</div>
                </div>
                <div class="Address">
                  0x70315b79b8e6769c7208aab3031ccb364ea6b83d
                </div>
                <div
                  class="copy"
                  @click="
                    copyToClipboard(
                      '0x70315b79b8e6769c7208aab3031ccb364ea6b83d'
                    )
                  "
                >
                  复制地址
                  <svg
                    class="w-4 h-4 group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    height="16px"
                    width="16px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="DonationChainItem">
                <div class="ChainName">
                  <div class="icon">
                    <svg
                      stroke="#00FFA3"
                      fill="#00FFA3"
                      stroke-width="0"
                      role="img"
                      viewBox="0 0 24 24"
                      class="w-8 h-8 text-[#00FFA3]"
                      height="32px"
                      width="32px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m23.8764 18.0313-3.962 4.1393a.9201.9201 0 0 1-.306.2106.9407.9407 0 0 1-.367.0742H.4599a.4689.4689 0 0 1-.2522-.0733.4513.4513 0 0 1-.1696-.1962.4375.4375 0 0 1-.0314-.2545.4438.4438 0 0 1 .117-.2298l3.9649-4.1393a.92.92 0 0 1 .3052-.2102.9407.9407 0 0 1 .3658-.0746H23.54a.4692.4692 0 0 1 .2523.0734.4531.4531 0 0 1 .1697.196.438.438 0 0 1 .0313.2547.4442.4442 0 0 1-.1169.2297zm-3.962-8.3355a.9202.9202 0 0 0-.306-.2106.941.941 0 0 0-.367-.0742H.4599a.4687.4687 0 0 0-.2522.0734.4513.4513 0 0 0-.1696.1961.4376.4376 0 0 0-.0314.2546.444.444 0 0 0 .117.2297l3.9649 4.1394a.9204.9204 0 0 0 .3052.2102c.1154.049.24.0744.3658.0746H23.54a.469.469 0 0 0 .2523-.0734.453.453 0 0 0 .1697-.1961.4382.4382 0 0 0 .0313-.2546.4444.4444 0 0 0-.1169-.2297zM.46 6.7225h18.7815a.9411.9411 0 0 0 .367-.0742.9202.9202 0 0 0 .306-.2106l3.962-4.1394a.4442.4442 0 0 0 .117-.2297.4378.4378 0 0 0-.0314-.2546.453.453 0 0 0-.1697-.196.469.469 0 0 0-.2523-.0734H4.7596a.941.941 0 0 0-.3658.0745.9203.9203 0 0 0-.3052.2102L.1246 5.9687a.4438.4438 0 0 0-.1169.2295.4375.4375 0 0 0 .0312.2544.4512.4512 0 0 0 .1692.196.4689.4689 0 0 0 .2518.0739z"
                      ></path>
                    </svg>
                  </div>
                  <div class="name">SOL</div>
                </div>
                <div class="Address">
                  CmE7JAWnwotBEvXSqRsJt2igeVQoXz3fkYjYu3cF2YwM
                </div>
                <div
                  class="copy"
                  @click="
                    copyToClipboard(
                      'CmE7JAWnwotBEvXSqRsJt2igeVQoXz3fkYjYu3cF2YwM'
                    )
                  "
                >
                  复制地址
                  <svg
                    class="w-4 h-4 group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    height="16px"
                    width="16px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="DonationChainItem">
                <div class="ChainName">
                  <div class="ICONIMG">
                    <img src="@/assets/imgs/trx.webp" alt="" />
                  </div>
                  <div class="name">TRX</div>
                </div>
                <div class="Address">TU86v4cSKTdthB8GNz1rvv8iT6Y67xn1gX</div>
                <div
                  class="copy"
                  @click="copyToClipboard('TU86v4cSKTdthB8GNz1rvv8iT6Y67xn1gX')"
                >
                  复制地址
                  <svg
                    class="w-4 h-4 group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    height="16px"
                    width="16px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="DonationChainItem">
                <div class="ChainName">
                  <div class="icon">
                    <svg
                      stroke="#F7931A"
                      fill="#F7931A"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      class="w-8 h-8 text-[#F7931A]"
                      height="32px"
                      width="32px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"
                      ></path>
                    </svg>
                  </div>
                  <div class="name">BTC</div>
                </div>
                <div class="Address">
                  bc1p3hcn7snsfpt80g5n3y6q4zsmqq3axyqswvutmmmc32rqpq4pnf5q2z4mxa
                </div>
                <div
                  class="copy"
                  @click="
                    copyToClipboard(
                      'bc1p3hcn7snsfpt80g5n3y6q4zsmqq3axyqswvutmmmc32rqpq4pnf5q2z4mxa'
                    )
                  "
                >
                  复制地址
                  <svg
                    class="w-4 h-4 group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    height="16px"
                    width="16px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    ></path>
                  </svg>
                </div>
              </div>
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
  background: rgb(0 0 0);
  .homeViewBG {
    background: rgba(46, 48, 117, 0.2);
    height: 100%;
  }
  .container {
    padding: 0 16px;
    padding-right: 16px+10px;
  }
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
.OpenScreen {
  padding: 128px 0px 80px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  .FirstGlobal {
    padding: 8px 24px;
    border: 1px solid rgba(99, 102, 241, 0.3);
    color: rgb(129 140 248);
    font-size: 13px;
    border-radius: 888px;
    // font-weight: 500;
    line-height: 20px;
    background: linear-gradient(
      90deg,
      rgba(99, 102, 241, 0.2),
      rgba(139, 92, 246, 0.2)
    );
  }
  .Bigtitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 12px;
    color: rgb(212 212 216);
    .title1 {
      background: linear-gradient(90deg, #818cf8, #a78bfa, #e879f9);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
    }
  }
  .TransparentDonation {
    font-size: 18px;
    // letter-spacing: 1px; /* 调整横间距 */
    text-align: center;
    line-height: 28px;
    font-weight: 300;
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
}
.DonationChain {
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(139, 92, 246, 0.1);
  border-right: 1px solid rgba(217, 70, 239, 0.1);
  border-bottom: 1px solid rgba(217, 70, 239, 0.1);
  border-left: 1px solid rgba(139, 92, 246, 0.1);
  background: rgba(139, 92, 246, 0.1);
  border-radius: 16px;
  .DonationChainBg {
    border-radius: 16px;
    padding: 32px;
    background: rgba(0, 0, 0, 0.8);
    .DonationChainTitle {
      margin-bottom: 32px;
      background: linear-gradient(90deg, #818cf8, #a78bfa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
      line-height: 32px;
      font-size: 24px;
      font-weight: 700;
    }
    .DonationChainList {
      display: flex;
      flex-direction: column;
      gap: 24px;
      .DonationChainItem {
        background: hsla(0, 0%, 100%, 0.05);
        border-radius: 12px;
        padding: 24px;
        transition: all 0.3s ease;
        &:hover {
          background: hsla(0, 0%, 100%, 0.1);
          transform: translateY(-3px);
        }
        .ChainName {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;

          .name {
            color: rgb(255 255 255);
            // line-height: 28px;
            font-size: 18px;
          }
        }
        .Address {
          margin-bottom: 16px;
          padding: 16px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            Liberation Mono, Courier New, monospace;
          color: hsla(0, 0%, 100%, 0.6);
          background-color: rgba(0, 0, 0, 0.4);
          border-radius: 8px;
          font-size: 14px;
          line-height: 1.5;
          //  文字换行
          word-break: break-all;
          word-wrap: break-word;
          font-weight: 300;
        }
        .copy {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          background: linear-gradient(90deg, #6366f1, #4f46e5);
          padding: 10px 24px;
          border-radius: 10px;
          line-height: 24px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
<style>
.message-logout {
  top: 104px !important;
  right: 24px !important;
  background: #000;
  color: #fff;
  font-family: Rubik;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
  border-radius: 11px;
  border: 1px solid rgba(107, 107, 107, 0.4);
  background: rgb(26, 26, 26);
  width: 168px;
  display: flex;
  flex-direction: column;
  gap: 11px;
}
.el-notification__title {
  color: #fff;
  font-family: Rubik;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
}
</style>
<script setup lang="ts">
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import { ref } from "vue";
import jwtDecode from "jwt-decode";
import { useAuthStore } from "@/store/authStore";
import { ElMessage, ElNotification } from "element-plus";
import router from "@/router";

const authStore = useAuthStore();

const callback = (response: any) => {
  console.log("Handle the response", response);
  handleLogin(response);
};
const handleLogin = (googleUser: { credential: any }) => {
  const { credential } = googleUser;
  // 解码 JWT Token
  const decoded = jwtDecode(credential) as any;
  console.log("解码后的用户信息:", decoded);
  // 获取用户信息
  // const userName = decoded.name; // 用户名
  // const userEmail = decoded.email; // 用户邮箱
  // const userPicture = decoded.picture; // 用户头像 URL
  authStore.setGoogleUser({
    name: decoded.name || "",
    email: decoded.email || "",
    picture: decoded.picture || "",
  });
  ElNotification({
    dangerouslyUseHTMLString: true,
    showClose: false,
    customClass: "message-logout",
    title: "谷歌账号登录成功",
    duration: 1000,
  });
  router.push("/");
};

const walletAddress = ref();
const connectWallet = async () => {
  try {
    if (!(window as any).solana) {
      ElNotification({
        dangerouslyUseHTMLString: true,
        showClose: false,
        customClass: "message-logout",
        title: "请安装 Solana 钱包",
        duration: 1000,
      });

      return;
    }

    const response = await (window as any).solana.connect();

    walletAddress.value = response.publicKey.toString();
    ElNotification({
      dangerouslyUseHTMLString: true,
      showClose: false,
      customClass: "message-logout",
      title: "已连接 Solana 钱包",
      duration: 1000,
    });
    console.log("已连接 Solana 钱包:", walletAddress.value);
    authStore.setSolanaUser(response.publicKey.toString());
    router.push("/");
  } catch (error) {
    ElNotification({
      dangerouslyUseHTMLString: true,
      showClose: false,
      customClass: "message-logout",
      title: "Solana 连接失败",
      duration: 1000,
    });
    console.error("Solana 连接失败:", error);
  }
};
</script>

<template>
  <div class="login-container">
    <div class="title">全球首个去中心化慈善平台</div>
    <div class="title1">选择登录方式</div>
    <!-- <GoogleLogin :callback="callback" prompt /> -->
    <GoogleLogin :callback="callback" />
    <!-- Solana 钱包登录按钮 -->
    <div class="solana-btn" @click="connectWallet">
      <svg
        t="1740387718703"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2608"
        width="20"
        height="20"
      >
        <path
          d="M229.45266009 688.5477827a26.89203337 26.89203337 0 0 1 19.27538904-8.12944811h668.65841907c11.89252289 0 18.18191039 15.08246403 9.63015326 23.8830818l-131.88860669 134.73165117a26.77137366 26.77137366 0 0 1-19.26784779 8.12944811H106.53057826c-11.89252289 0-18.17436914-15.08246403-9.63015329-23.79258701l132.38632802-134.82214596h0.1659071z"
          fill="#C931F7"
          p-id="2609"
        ></path>
        <path
          d="M229.45266009 184.95939121a26.80907982 26.80907982 0 0 1 19.27538904-8.12190688h668.65841907c11.89252289 0 18.18191039 15.08246403 9.63015326 23.79258701L795.12801477 335.45975854a26.79399733 26.79399733 0 0 1-19.26784779 8.12944811H106.53057826c-11.89252289 0-18.17436914-15.08246403-9.63015329-23.88308181L229.27921175 184.95939121h0.16590711z"
          fill="#1CE2AF"
          p-id="2610"
        ></path>
        <path
          d="M794.54733991 435.33583534a26.79399733 26.79399733 0 0 0-19.26784781-8.12944812H106.62107305c-11.90006413 0-18.18191039 15.08246403-9.63769451 23.79258703l131.89614791 134.7391924a26.76383243 26.76383243 0 0 0 19.26784782 8.1294481h668.65087783c11.90006413 0 18.18191039-15.08246403 9.63769452-23.80012823l-131.88860671-134.73165118z"
          fill="#6697CE"
          p-id="2611"
        ></path>
      </svg>
      <div class="text">使用 Solana 钱包登录</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #010203;
  gap: 24px;
  padding: 0 16px;
  padding-right: 16px+10px;
}
:deep(.nsm7Bb-HzV7m-LgbsSe) {
  background: linear-gradient(90deg, #60a5fa, #2dd4bf, #4ade80);
  border: none;
  color: #fff;
  font-size: 16px;
  width: 280px;
}
.title {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  background: linear-gradient(90deg, #38bdf8, #a855f7, #2dd4bf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  margin-bottom: 20px;
}
.title1 {
  font-size: 20px;
  background: linear-gradient(90deg, #818cf8, #a78bfa, #e879f9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}
.solana-btn {
  width: 280px;
  padding: 0 12px;
  background: linear-gradient(90deg, #60a5fa, #a855f7, #2dd4bf);
  height: 40px;
  display: flex;
  align-items: center;
  font-weight: 500;
  gap: 41px;
  font-size: 16px;
  border-radius: 4px;
  font-family: "Google Sans", arial, sans-serif;
  cursor: pointer;
}
:deep(.S9gUrf-YoZ4jf) {
  width: 280px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.nsm7Bb-HzV7m-LgbsSe) {
  background-color: linear-gradient(
    90deg,
    #60a5fa,
    #2dd4bf,
    #4ade80
  ) !important;
  border: none;
  color: #fff;
  font-size: 16px;
  width: 280px;
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
  width: 238px;
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
.nsm7Bb-HzV7m-LgbsSe {
  background-color: #ff0000 !important;
}
</style>
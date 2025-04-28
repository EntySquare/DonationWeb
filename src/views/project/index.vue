<script setup lang="ts">
import { ref } from "vue";

const timelineData = ref([
  { date: "2025年1-2月份", content: "选址和规划设计" },
  { date: "2025年3-4月份", content: "基础设施建设" },
  { date: "2025年5-6月份", content: "教学楼主体工程" },
  { date: "2025年6月份", content: "内部装修和设备安装" },
]);
</script>

<template>
  <div class="homeView">
    <div class="homeViewBG">
      <div class="container">
        <div class="OpenScreen">
          <div class="FirstGlobal">全球首个去中心化慈善平台</div>
          <div class="Bigtitle">
            <div class="title1">希漫公益</div>
            <div class="title2">项目追踪</div>
          </div>
        </div>
        <div class="project">
          <div class="projectItemBg">
            <div class="projectItem">
              <div class="itemTitle">
                <div class="icon">
                  <svg
                    stroke="rgb(96 165 250)"
                    fill="rgb(96 165 250)"
                    stroke-width="0"
                    viewBox="0 0 640 512"
                    class="w-6 h-6 text-blue-400"
                    height="24px"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32zm360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32.002 32.002 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63zM320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32z"
                    ></path>
                  </svg>
                </div>
                <div class="title">四川理塘希漫教育中心建设</div>
              </div>
              <div class="itemText">
                为四川理塘希漫教育中心建设现代化小学，提供优质教育资源。通过区块链技术，每一笔建设资金都可追踪、可验证。
              </div>
              <div class="Configuration">
                <div class="ConfigurationItem">
                  <div class="num">￥210万</div>
                  <div class="text">已募集</div>
                </div>
                <div class="ConfigurationItem">
                  <div class="num">75%</div>
                  <div class="text">完成度</div>
                </div>
                <div class="ConfigurationItem">
                  <div class="num">200+</div>
                  <div class="text">受益学生</div>
                </div>
              </div>
            </div>
          </div>
          <div class="projectItemBg">
            <div class="projectItem">
              <div class="itemTitle">
                <div class="icon">
                  <svg
                    stroke="rgb(96 165 250)"
                    fill="rgb(96 165 250)"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class="w-6 h-6 text-blue-400"
                    height="24px"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z"
                    ></path>
                  </svg>
                </div>
                <div class="title">教学设备配置</div>
              </div>
              <div class="itemText">
                配备现代化教学设备和丰富的图书资源，让每个孩子都能享受到优质的教育资源。
              </div>
              <div class="Configuration">
                <div class="ConfigurationItem">
                  <div class="num">100+</div>
                  <div class="text">设备数量</div>
                </div>
                <div class="ConfigurationItem">
                  <div class="num">1000+</div>
                  <div class="text">图书数量</div>
                </div>
                <div class="ConfigurationItem">
                  <div class="num">3所</div>
                  <div class="text">覆盖学校</div>
                </div>
              </div>
            </div>
          </div>
          <div class="projectItemBg">
            <div class="projectItem">
              <div class="itemTitle">
                <div class="icon">
                  <svg
                    stroke="rgb(96 165 250)"
                    fill="rgb(96 165 250)"
                    stroke-width="0"
                    viewBox="0 0 640 512"
                    class="w-6 h-6 text-blue-400"
                    height="24px"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"
                    ></path>
                  </svg>
                </div>
                <div class="title">教师培训计划</div>
              </div>
              <div class="itemText">
                为当地教师提供专业培训和发展机会，提升教育质量，培养更多优秀教师。
              </div>
              <div class="Configuration">
                <div class="ConfigurationItem">
                  <div class="num">50+</div>
                  <div class="text">培训教师</div>
                </div>
                <div class="ConfigurationItem">
                  <div class="num">12门</div>
                  <div class="text">课程数量</div>
                </div>
                <div class="ConfigurationItem">
                  <div class="num">360h</div>
                  <div class="text">培训时长</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="Progress">
          <div class="ProgressTitle">建设进度</div>
          <div class="ProgressBox">
            <div class="ProgressList">
              <el-timeline>
                <el-timeline-item
                  v-for="(item, index) in timelineData"
                  :key="index"
                  :timestamp="item.date + item.content"
                  placement="top"
                >
                </el-timeline-item>
              </el-timeline>
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
  background: rgba(0, 0, 0);

  // 27272a

  .homeViewBG {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.9),
      rgba(45, 212, 191, 0.1)
    );
    padding: 128px 0px;
    padding-top: 0;
    // background: rgba(46, 48, 117, 0.2);
  }
}
.container {
  padding: 0 16px;
  padding-right: 16px+10px;
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
    padding: 6px 16px;
    border: 1px solid rgba(59, 130, 246, 0.2);
    color: rgb(96 165 250);
    font-size: 13px;
    border-radius: 888px;
    // font-weight: 500;
    line-height: 20px;
    background: linear-gradient(
      90deg,
      rgba(59, 130, 246, 0.1),
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
    margin-bottom: 12px;
    color: rgb(212 212 216);
    .title1 {
      background: linear-gradient(90deg, #3b82f6, #2dd4bf);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
    }
  }
}
.project {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 96px;
  .projectItemBg {
    background: #000;
  }
  .projectItem {
    padding: 32px;
    border-radius: 12px;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.9),
      rgba(45, 212, 191, 0.1)
    );
    box-shadow: 5px 0 10px #00ffdd5f, -5px 0 10px #3b83f655;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 5px 0 15px #2dd4bed5, -5px 0 15px #3b83f6d5;
      .ConfigurationItem {
        box-shadow: 3px 0 10px #2dd4be84, -3px 0 10px #3b83f688;
      }
    }
    .itemTitle {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 24px;
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background: linear-gradient(
          90deg,
          rgba(59, 130, 246, 0.2),
          rgba(45, 212, 191, 0.2)
        );
      }
      .title {
        font-size: 20px;
        font-weight: 600;
        background: linear-gradient(90deg, #60a5fa, #2dd4bf);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
      }
    }
    .itemText {
      margin-bottom: 24px;
      color: rgb(161 161 170);
      font-size: 16px;
      line-height: 24px;
    }
    .Configuration {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      .ConfigurationItem {
        transition: all 0.3s ease-in-out;
        flex: 1;
        background-color: rgba(24, 24, 27, 0.8);
        padding: 12px;
        border-radius: 8px;
        .num {
          font-weight: 700;
          background: linear-gradient(90deg, #60a5fa, #60a5fa, #2dd4bf);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          line-height: 28px;
          font-size: 20px;
        }
        .text {
          color: rgb(113 113 122);
          line-height: 20px;
        }
      }
    }
  }
}

.Progress {
  width: 100%;
  .ProgressTitle {
    width: 100%;
    margin-bottom: 48px;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    background: linear-gradient(90deg, #60a5fa, #2dd4bf);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
  .ProgressBox {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.9),
      rgba(45, 212, 191, 0.1)
    );
    box-shadow: 5px 0 10px #00ffdd5f, -5px 0 10px #3b83f655;
    border-radius: 12px;
    padding: 32px;
    transition: all 0.3s ease-in-out;
    .ProgressList {
      padding-top: 22px;
      padding-left: 22px;
    }
    &:hover {
      box-shadow: 5px 0 15px #2dd4bed5, -5px 0 15px #3b83f6d5;
    }
    :deep(.el-timeline-item__timestamp) {
      font-size: 18px;
      color: rgb(161 161 170);
    }
    :deep(.el-timeline-item__node) {
      background: #333;
      background: url("@/assets/yuan.svg");
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-size: cover;
      background-position: center;
      top: -20px;
      left: -15px;
      // border: 2px solid #2dd4bf;
    }
    :deep(.el-timeline-item) {
      padding-bottom: 40px;
      &:last-child {
        padding-bottom: 0;
      }
    }
    :deep(.el-timeline-item__wrapper) {
      top: -14px;
      padding-left: 42px;
    }
    :deep(.el-timeline-item__tail) {
      border-left: 2px solid #365b77; /* 设置透明边框 */
    }
  }
}

/* 时间点的样式 */
</style>

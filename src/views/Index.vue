
<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse == true ? '45px' : '180px'">
        <el-collapse-transition>
          <el-menu
            :uniqueOpened="true"
            :default-active="navigationIndex"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :default-openeds="nvOpenIndex"
            :collapse="isCollapse"
          >
            <el-submenu
              v-for="(item, Nvindex) in NavMenuData"
              :key="Nvindex + 'elsubmenu'"
              :index="`${parseInt(Nvindex + 1)}submenu`"
              class="flex_center"
            >
              <template #title>
                <i :class="item.icon"></i>
                <span>{{ $t(item.NaName) }}</span>
              </template>
              <el-menu-item-group
                v-for="(Grouping, GroupingIndex) in item.GroupingTitle"
                :key="Grouping.to"
              >
                <el-menu-item
                  :index="countIndex(Nvindex, GroupingIndex)"
                  class="flex_center"
                  @click="ToLink(Grouping.to, Nvindex, GroupingIndex)"
                >
                  <i :class="Grouping.icon"></i>
                  <span>{{ $t(Grouping.title) }}</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-collapse-transition>
      </el-aside>
      <el-container>
        <el-header>
          <Header :isCollapse="isCollapse" @onColl="onColl" />
        </el-header>
        <el-main>
          <Home />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script >
import { defineComponent, inject, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import Header from "./Header";
import Home from "./Home";
import state from "@/store/index";
const StateNew = new state();

export default defineComponent({
  name: "Index",
  components: {
    Header,
    Home,
  },
  setup() {
    const isCollapse = ref(false);
    const NavMenuData = reactive([
      {
        NaName: "Homepage",
        icon: "el-icon-s-home",
        GroupingTitle: [
          {
            title: "home",
            to: "/",
            icon: "el-icon-user",
          },
          {
            title: "userRights",
            to: "/AuthoritySettings",
            icon: "el-icon-coordinate",
          },
        ],
      },
      {
        NaName: "LiveRights",
        icon: "el-icon-user",
        GroupingTitle: [
          {
            title: "ChannelDeploy",
            to: "/Channel",
            icon: "el-icon-user",
          },
          {
            title: "MPTSRDeploy",
            to: "/Mpts",
            icon: "el-icon-coordinate",
          },
        ],
      },
      {
        NaName: "videoRights",
        icon: "el-icon-video-camera-solid",
        GroupingTitle: [
          {
            title: "video",
            to: "/Video",
            icon: "el-icon-user",
          },
          {
            title: "videoFolder",
            to: "/Folder",
            icon: "el-icon-coordinate",
          },
        ],
      },
      {
        NaName: "end",
        icon: "el-icon-set-up",
        GroupingTitle: [
          {
            title: "ProgramSubcontract",
            to: "/Authorization",
            icon: "el-icon-user",
          },
          {
            title: "endwarrant",
            to: "/PackageOrder",
            icon: "el-icon-coordinate",
          },
          {
            title: "endOrder",
            to: "/ProgramPackage",
            icon: "el-icon-coordinate",
          },
          {
            title: "endRegional",
            to: "/TerminalArea",
            icon: "el-icon-coordinate",
          },
        ],
      },
    ]);
    const router = useRouter();
    let navData = inject("navData", {});
    //控制侧边导航栏当前位置
    const navigationIndex = ref(navData.NAVACTIVE);
    const nvOpenIndex = ref(navData.NAVMENOPENDES);
    //控制侧边栏展开
    const onColl = (res) => {
      isCollapse.value = res;
    };
    //计算侧边栏下标属性
    const countIndex = (index, index2) => {
      return `${index + 1}-${index2 + 1}`;
    };
    //跳转
    const ToLink = (link, Nvindex, GroupingIndex) => {
      StateNew.modify("NAVACTIVE", `${Nvindex + 1}-${GroupingIndex + 1}`);
      StateNew.modify("NAVMENOPENDES", [`${+1}`]);
      router.push(link);
    };
    return {
      isCollapse,
      NavMenuData,
      navigationIndex,
      nvOpenIndex,
      countIndex,
      onColl,
      ToLink,
      navData,
    };
  },
});
</script>

<style scoped>
.common-layout {
  position: relative;
  height: 100%;
  width: 100%;
}
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #5d90d4;
  color: #fff;
  text-align: center;
  line-height: 60px;
  height: 100%;
}
.el-footer {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
  height: 100%;
}

.el-aside {
  background-color: rgb(84, 92, 100);
  color: #333;
  text-align: center;
  line-height: 100vh;
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
  padding: 0px;
}
.el-menu {
  height: 100%;
  border-right: solid 0px #e6e6e6;
}

.flex_center {
  text-align: justify;
}
</style>


<style>
#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
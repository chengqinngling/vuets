<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6" class="flex_align_b">
        <i
          :class="isCollapse==true?'el-icon-s-fold':'el-icon-s-unfold'"
          class="cursor"
          style="font-size: 30px;padding-right:20px;"
          @click="onHeaderColl"
        ></i>
        <span class="Extra large">{{$t('HeadersTile')}}</span>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple flex_align_b" style="justify-content: flex-end;">
          <el-dropdown @command="onswitchLanguage">
            <span class="el-dropdown-link header_dr">
              <span>{{$t('Language')}}</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="ch">中文</el-dropdown-item>
                <el-dropdown-item command="en">English</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>{{$t('userName')}}</span>
          <el-avatar
            style="margin-left:20px;"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          >user</el-avatar>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";
import state from "@/store/index";
export default defineComponent({
  name: "NavigTop",
  props: {
    isCollapse: Boolean,
  },
  setup(props, context) {
    //控制侧边栏
    const { proxy }: any = getCurrentInstance();
    const StateNew = new state();

    const onHeaderColl = () => {
      context.emit("onColl", !props.isCollapse);
    };
    return {
      onHeaderColl,
    };
  },

  methods: {
    onswitchLanguage(command: any) {
      localStorage.setItem("lang", command);
      this.$i18n.locale = command;
    },
  },
});
</script>
<style scoped>
.flex_align_b {
  display: flex;
  align-items: center;
}
.header_dr {
  font-size: 16px;
  color: #fff;
  padding-right: 2em;
}
</style>
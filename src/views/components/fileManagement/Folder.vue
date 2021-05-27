<template>
  <div class="heights_top">
    <div class="heights_top_span">
      <span>文件夹管理</span>
    </div>
    <el-card class="box-card">
      <div class="height_seath">
        <div>
          <el-button size="mini" type="primary" icon="el-icon-d-arrow-left">后退</el-button>
          <el-button size="mini" type="primary" icon="el-icon-folder-add">新建文件夹</el-button>
        </div>
        <div>
          <el-button size="mini" type="primary" icon="el-icon-connection">文件上传</el-button>
        </div>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(fileItem,filexIndex) in breadcrumbList" :key="filexIndex">
          <a href="/">{{fileItem}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <el-row style="margin:5em 0em">
        <el-col
          :span="4"
          :offset="0"
          class="flex_div"
          v-for="(item,index) in fileData.children"
          :key="`file${index}`"
        >
          <div
            class="div_hove"
            :class="ifHove==index?'hove':''"
            @mouseenter="ifHove=index"
            @mouseleave="ifHove=null"
          >
            <el-image
              class="flex_img"
              v-if="item.category=='image'"
              :src="`${host}${fileData.path+item.text}`"
              :preview-src-list="[`${host}${fileData.path+item.text}`]"
              alt
            />
            <img
              src="../../../assets/mov.png"
              class="flex_img"
              v-if="item.category=='video'"
              @click="ifDiVideo(true,`${host}${fileData.path+item.text}`)"
              alt="视频图标加载失败"
            />
            <img
              src="../../../assets/audio.png"
              class="flex_img"
              @click="ifDiVideo(true,`${host}${fileData.path+item.text}`)"
              v-if="item.category=='audio'"
              alt="音频图标加载失败"
            />
            <img
              src="../../../assets/file2.png"
              v-if="item.category=='text'"
              class="flex_img"
              alt="文本图标加载失败"
            />
            <img
              src="../../../assets/file.png"
              class="flex_img"
              v-if="item.category==undefined"
              alt="文件图标加载失败"
            />
            <span class="flex_div_span">{{item.text}}</span>
            <span class="flex_div_span2" v-show="ifHove==index?true:false">
              <span @click="renameFile(index)">重命名</span>
              <span @click="deletFile(index)">删除</span>
              <span
                v-if="item.category=='text'"
                @click="onDownload(`${host}${fileData.path+item.text}`,item.text)"
              >下载</span>
            </span>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
  <div>
    <div class="mask" v-if="DiVideo" @click="DiVideo=false"></div>
    <div class="pop" v-if="DiVideo">
      <video class="dim" :src="DiVideoSrc" controls="controls"></video>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import elenentMake from "@/utils/elenentMake";
import { ElMessageBox } from "element-plus";
export default defineComponent({
  name: "Folder",
  setup() {
    let elenent = new elenentMake();

    //创建所有的变量
    const folderData = reactive({
      host: "http://192.168.1.110:9081" + "//stream/vod",
      //视频资源
      fileData: {
        path: "/国乐/",
        children: [
          { text: "1.mp4", is_file: true, category: "video" },
          { text: "1.txt", is_file: true, category: "text" },
          { text: "2", is_file: true },
          {
            text: "7d515b22c4958598c0fbd1e6290a5ca5.mp4",
            is_file: true,
            category: "video",
          },
          { text: "description.csv", is_file: true, category: "text" },
          { text: "timg.jpg", is_file: true, category: "image" },
          {
            text: "九州同.mkv",
            is_file: true,
            category: "video",
          },
          { text: "九州同国家宝藏.mp3", is_file: true, category: "audio" },
          {
            text: "水龙吟国家宝藏.mp3",
            is_file: true,
            category: "audio",
          },
          {
            text: "象王行国家宝藏.mp3",
            is_file: true,
            category: "audio",
          },
          { text: "醉太平.mkv", is_file: true, category: "video" },
          {
            text: "醉太平国家宝藏.mp3",
            is_file: true,
            category: "audio",
          },
        ],
      },

      DiVideoSrc:
        "http://192.168.1.110:9081/stream/vod/%E5%9B%BD%E4%B9%90/1.mp4",

      //视频预览弹窗控制
      DiVideo: false,

      // 控制鼠标移入移出动画
      ifHove: null,
      //文件夹导航栏
      breadcrumbList: [],
    });
    //音视频预览
    const ifDiVideo = (divide: boolean, url: string) => {
      folderData.DiVideo = divide;
      if (url) {
        folderData.DiVideoSrc = url;
      }
    };
    //文本文件下载
    const onDownload = (fileUrl: string, fileName: string) => {
      if (!fileUrl) {
        return;
      }
      let url = window.URL.createObjectURL(new Blob([fileUrl]));
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
    };

    //拆解导航信息
    const onpath = () => {
      let result: any = folderData.fileData.path.split("/").filter(String);
      folderData.breadcrumbList = result;
    };

    //重命名文件
    const renameFile = () => {
      ElMessageBox.prompt("重命名文件名称", "修改文件名称", {
        confirmButtonText: "提交",
        cancelButtonText: "取消",
        inputPattern: /^[\s\S]*.*[^\s][\s\S]*$/,
        inputErrorMessage: "内容不能为空",
      })
        .then(({ value }) => {
          elenent.Notification();
        })
        .catch(() => {
          elenent.Notification("提示", "取消修改", "error");
        });
    };
    //删除文件
    const deletFile = (index: number) => {
      ElMessageBox.confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          elenent.Notification();
          folderData.fileData.children.splice(index, 1);
        })
        .catch(() => {
          elenent.Notification("提示", "撤销删除", "error");
        });
    };
    onMounted(() => {
      onpath();
    });
    return {
      ifDiVideo,
      onDownload,
      onpath,
      renameFile,
      deletFile,
      ...toRefs(folderData),
    };
  },
});
</script>

<style scoped>
.div_hove {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  line-height: 4;
  width: 150px;
  height: 150px;
  padding: 10px 0px;
  border-radius: 15px;
}

.flex_div {
  align-items: center;
  padding-bottom: 4em;
}

.flex_div > i {
  font-size: 70px;
  color: #5d90d4;
}
.flex_div_span {
  font-size: 13px;
  color: gray;
  padding-top: 15px;
  width: 100%;
  height: 150px;
  line-height: 1;
  word-break: keep-all; /* 不换行 */
  white-space: nowrap; /* 不换行 */
  overflow: hidden;
  text-overflow: ellipsis;
}

.flex_div_span2 {
  font-size: 13px;
  color: #5d90d4;
  display: flex;
  justify-content: space-evenly;
  width: 100px;
  cursor: pointer;
}

.flex_img {
  width: 70px;
}

.mask {
  background-color: #000;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.pop {
  background-color: #fff;

  position: fixed;
  top: 100px;
  left: 300px;
  width: calc(100% - 600px);
  height: calc(100% - 200px);
  z-index: 2;
}
.dim {
  width: 100%;
}
</style>
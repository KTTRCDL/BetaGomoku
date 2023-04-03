<template>
  <!--  <img src="previewImage" class="uploading-image"/>-->
  <!--  <input type="file" accept="image/*" @change="uploadImage($event)" id="file-input"/>-->
  <div style="display: flex;">
    <div>
      <el-image :src="previewImage" class="el-image">
        <template #placeholder>
          <div class="image-slot">
            <el-icon>
              <picture-filled/>
            </el-icon>
          </div>
        </template>
      </el-image>

      <el-upload
          :limit="1"
          :on-exceed="handleExceed"
          :on-change="handleChange"
          :auto-upload="false"
      >
        <template #trigger>
          <el-button type="primary">select file</el-button>
        </template>
        <el-button style="margin-left: 80px;" type="success" @click="submitUpload">
          upload to server
        </el-button>
        <template #tip>
          <div class="el-upload__tip text-red">
            limit 1 file, new file will cover the old file
          </div>
        </template>
      </el-upload>
    </div>
    <div style="display:flex; margin-left: 100px; flex-direction: column; justify-content: start;">
      <el-text class="mx-1" size="large">Image Class:</el-text>
      <el-button style="margin-top: 10px; background: #242424;" type="primary" text dark bg>{{ imgClass }}</el-button>
    </div>
  </div>
</template>

<script>
import {AXIOS_URL} from "../config/axios_config.js";
import axios from "axios";
import {PictureFilled} from "@element-plus/icons-vue";

export default {
  name: "ImgClass",
  components: {PictureFilled},
  data() {
    return {
      uploadImage: null,
      previewImage: null,
      imgClass: null,
      buttons : [
        { type: 'primary', text: 'primary' },
      ]
    }
  },
  methods: {
    handleExceed(files) {
      // console.log(files)
      this.uploadImage = files[0]
      this.previewImage = URL.createObjectURL(files[0])
      // console.log(this.previewImage)
      // console.log(this.previewImage)
    },

    handleChange(uploadFile, _) {
      // console.log(uploadFile)
      this.uploadImage = uploadFile.raw
      this.previewImage = URL.createObjectURL(uploadFile.raw)
      // console.log(this.previewImage)
    },

    submitUpload(_) {
      let data = new FormData();
      data.append('name', this.uploadImage.name);
      data.append('file', this.uploadImage);

      const config = {
        header: {
          'Content-Type': 'image/png'
        }
      }

      axios.post(
          AXIOS_URL,
          data,
          config,
      ).then(
          response => {
            // console.log('image upload response > ', response)
            // let res = response.data
            this.imgClass = response.data.class_name
            // console.log(res.class_name)
          }
      )
    },
    // uploadImage(event) {
    //   console.log(event.target.name)
    //   const URL = 'http://foobar.com/upload';
    //
    //   let data = new FormData();
    //   data.append('name', 'my-picture');
    //   data.append('file', event.target.files[0]);
    //
    //   // console.log(data.get("file"))
    //
    //   let config = {
    //     header: {
    //       'Content-Type': 'image/png'
    //     }
    //   }
    //
    //   axios.put(
    //       URL,
    //       data,
    //       config
    //   ).then(
    //       response => {
    //         console.log('image upload response > ', response)
    //       }
    //   )
    //
    // }
  }
}
</script>

<style scoped>
.el-image {
  padding: 0 5px;
  max-width: 300px;
  max-height: 200px;
  width: 100%;
  height: 200px;
}

.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: var(--el-text-color-secondary);
  font-size: 30px;
}

</style>
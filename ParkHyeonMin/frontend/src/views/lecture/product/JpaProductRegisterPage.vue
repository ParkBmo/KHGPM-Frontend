<template>
  <v-container>
    <h2>게시물 작성</h2>
    <jpa-product-register-form @submit="onSubmit"/>
    <div>
        <label>Files
        <input type="file" id="files" ref="files"
            multiple @change="handleFileUpload"/>
      </label>
    </div>
  </v-container>
</template>

<script>
import JpaProductRegisterForm from '@/components/lecture/product/JpaProductRegisterForm.vue'
import { mapActions } from 'vuex'
import axios from 'axios'

export default {
    components: { JpaProductRegisterForm },
    name: "JpaProductRegisterPage",
    data() {
    return {
      files: null,
      fileinfo: {
        price: 50000,
        test: "test",
      }
    }
  },
    methods: {
        ...mapActions ([
            'requestCreateProductToSpring'
        ]),
        async onSubmit (payload) {
            await this.requestCreateProductToSpring(payload)
            await this.$router.push({
                name: 'JpaProductListPage'
            })
        },
        handleFileUpload () {
            this.files = this.$refs.files.files
        },
        submitFiles () {
            let formData = new FormData()

            // 사진
            for (let idx = 0; idx < this.files.length; idx++) {
                formData.append('fileList', this.files[idx])
            }

            // 글자
            formData.append(
                "info",
                new Blob([JSON.stringify(fileinfo)], { type: "application/json" })
            )

            axios.post('http://localhost:7777/file/uploadImgsWithText', formData)
                .then (res => {
                    alert('처리 결과: ' + res.data)
                })
                .catch(() => {
                    alert('문제 발생!')
                })
        }
        
    }
}

</script>

<style>

</style>
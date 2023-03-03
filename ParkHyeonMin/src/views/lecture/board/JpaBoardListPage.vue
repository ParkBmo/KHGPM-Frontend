<template>
  <v-container>
    <h2> Vue + Spring +JPA Board</h2>
    <router-link :to="{name: 'JpaBoardRegisterPage'}">
        게시물 작성
    </router-link>
  </v-container>
</template>

<script>
export default {
    name: "JpaBoardListPage"
}
</script>

<style>

</style>
<template>
    <v-container>
      <h2>회사 소개</h2>
    </v-container>
  </template>
  
  <script>
  import introductionForm from '@/components/Board/IntroductionBoard/introductionForm.vue';
  
  export default {
      components: { introductionForm },
      name: "introductionBoard",
      methods: { 
          ...mapActions ([
              'requestCreateBoardToSpring'
          ]),
        
      }
  }
  
  </script>
  
  <style>
  </style>
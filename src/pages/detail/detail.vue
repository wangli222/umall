<template>
  <div>
    <v-header title="详情信息"></v-header>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      detail:{}
    }
  },
  methds:{

  },
  mounted(){
    // axios.get('/api/getgoodsinfo',{id:this.$route.query.id}).then(((res)=>{
    //   console.log(res);
    // }))
    axios({
      url:"/api/getgoodsinfo",
      methods:"GET",
      params:{
        id:this.$route.query.id
      }
    }).then(res=>{console.log(res);})
  }
};
</script>

<style scoped>
</style>
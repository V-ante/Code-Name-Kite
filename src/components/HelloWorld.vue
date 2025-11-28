<template>
  <el-table :data="users" stripe style="width: 100%">
    <el-table-column prop="id" label="ID" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="age" label="年龄"> </el-table-column>
    <el-table-column prop="email" label="邮箱"> </el-table-column>
  </el-table>
</template>

<script>
const users = []
export default {
  name: 'HelloWorld',
  created(){
	this.getUserList()
  },
  data(){
	return{
		users
		};
   },
   methods:{
	getUserList(){
		this.$http.get('/').then(response=>{
			console.log(response.data)
			this.users = response.data
		})
		.catch(error=>{
			console.log(error)
		})
	}
   }	 
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 50 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// export default {
//     beforeCreate(){
//            this.$router.beforeEach((to, from, next) => { //to:即将前往的页面,from:从哪个页面来,next:下一步操作
//            consol.log(to, from, next)
//              if (to.matched.some(res => res.login)) {  //判断是否登录
//                   next()
//              }else {
//                   this.$toast.center("请先登录")
//                   next({path: '/login'})
//              }
//         })
//     }   
// }
</script>

<style lang="scss">
#app {
  font-family: Adobe Heiti Std, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>



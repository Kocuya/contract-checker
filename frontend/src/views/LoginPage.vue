<template>
    <TheHeader1 />
    <div id="home-login">
        <div id="title-login">
            Log In
        </div>
    </div>
</template>

<script>
import TheHeader1 from '../components/TheHeader1.vue'
export default {
    name: 'LoginPage',
    components: {
        TheHeader1
    }
}
</script>

<style>
#home-login {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  width: 72%;
  text-align: center;
  align-items: center;
}

#title-login {
  display: flex;
  align-items: center;
  margin-top: 100px;
  font-weight: 520;
  font-size: 28px;
  margin-left: auto;
  margin-right: auto;
}
</style>
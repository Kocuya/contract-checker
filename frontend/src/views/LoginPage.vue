<template>
    <TheHeaderLogin />
    <div id="home-login">
        <div id="box-login-text">
            ログイン
        </div>
    </div>
    <div id="text-field-outer">
            <div class="text-field-title">
                会社名
            </div>
            <input type="text" name="username" class="text-field">
            <div class="text-field-title">
                パスワード
            </div>
            <input type="text" name="username" class="text-field">
    </div>
    <div id="button-box-login">
        <button v-on:click="login" id="botton-login">ログイン</button>
    </div>
</template>

<script>
import TheHeaderLogin from '../components/TheHeaderLingin.vue'
export default {
    name: 'LoginPage',
    components: {
        TheHeaderLogin
    },
    methods: {
        login() {
            console.log('ログイン処理')
        }
    }
}
</script>

<style>
@import '@/assets/colors.css';
#home-login {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
  align-items: center;
}

#text-field-outer {
    background-color: white;
    width: 50%;
    padding-bottom: 8px;
    margin: 0px auto;
    align-items: center;
    flex-direction: column;
    display: flex;
}

.text-field-title {
    width: 75%;
    margin: 0px auto;
    font-size: 12px;
    padding: 4px;
    font-weight: 500;
}

.text-field {
    border: 1px var(--line-color);
    width: 75%;
    height: 28px;
    font-size: 28;
    font-weight: 200;
    border: 2px solid var(--line-color);
    border-radius: 4px;
    margin-bottom: 30px;
    padding-left: 10px;
    padding-top: 4px;
    padding-bottom: 4px;
}

#box-login-text {
  margin-top: 100px;
  font-weight: 548;
  font-size: 14px;
  background-color: white;
  width: 50%;
  border: 2px var(--line-color);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-top: 30px;
  padding-bottom: 30px;
}

#button-box-login {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    margin: 0px auto;
    background-color: rgb(250, 250, 250);
    width: 50%;
    padding-top: 30px;
    padding-bottom: 30px;
}

#botton-login {
  background-color: var(--project-red);
  color: white;
  border: none;
  padding: 10px 40px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: background-color 0.3s;
}
#botton-login:hover {
    background-color: var(--project-red-hover);
}
</style>
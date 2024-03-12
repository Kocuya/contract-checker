<template>
    <TheHeader />
    <router-view />
    <div id="home">
        <div id="title">
            契約書リスト
            <button v-on:click="new_add" class="rounded-button">新規追加</button>
        </div>
    </div>
    <ContractList />
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import ContractList from '../components/ContractList.vue'
export default {
  name: 'HomePage',
  components: {
    TheHeader,
    ContractList
  },
  methods: {
    new_add() {
      this.$router.push('/login');
      console.log('追加処理');
      console.log('デバッグでloginに飛んでいます')
    }
  }
}
</script>

<style>
/* 
これはassetsフォルダのcolors.cssファイルからインポートしています
呼び出しはvar()関数を使用してください 
*/
@import "@/assets/colors.css";
#home {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  width: 83%;
  text-align: center;
}

#title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
  width: 100%;
  font-weight: 510;
  font-size: 20px;
}

.content {
  margin-top: 100px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.rounded-button {
  background-color: var(--project-red);
  color: white;
  border: none;
  padding: 8px 18px;
  border-radius: 18px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.3s;
}
.rounded-button:hover {
  background-color: var(--project-red-hover);
}
</style>
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
    <Upload v-if="showUploadPage" />
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import ContractList from '../components/ContractList.vue'
import Upload from '../views/UploadPage.vue'
export default {
  name: 'HomePage',
  components: {
    TheHeader,
    ContractList,
    Upload
  },
  data() {
    return {
      showUploadPage: false
    };
  },
  watch: {
    '$route'(to) {
      this.showUploadPage = to.path === '/upload';
    }
  },
  methods: {
    new_add() {
      this.$router.push('/upload');
      console.log('遷移: upload');
    }
  }
}
</script>

<style>
/* 
これはassetsフォルダのcolors.cssファイルからインポートしています ディレクトリ:src/assets/colors.css
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
</style>
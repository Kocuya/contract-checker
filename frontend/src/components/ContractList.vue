<template>
    <div class="contract-list-container">
      <div class="list-header">
        <div class="type">契約種型</div>
        <div class="title">タイトル</div>
        <div class="date">発行日時</div>
      </div>
      <div class="list-item" v-for="(contract, index) in contracts" :key="index">
        <div class="type">{{ contract.type }}</div>
        <div class="title">{{ contract.title }}</div>
        <div class="date">{{ contract.date }}</div>
      </div>
    </div>
</template>
  
<script>
export default {
  name: 'ContractListPage',
  data() {
    return {
      contracts: [
        { type: 'タイプA', title: '契約A', date: '2020-01-01' },
        { type: 'タイプB', title: '契約B', date: '2020-02-01' },
        { type: 'タイプC', title: '契約C', date: '2020-03-01' }
      ]
    }
  }
}
</script>

<style>
@import "@/assets/colors.css";
.contract-list-container {
  width: 83%;
  margin: 30px auto; /* 上のスペースと中央揃え */
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 2px var(--line-color);
  border-radius: 4px;
}

.list-item {
  display: flex;
  justify-content: space-between;
  padding: 10px; /* アイテムの内側の余白 */
  border-top: dashed 1px var(--line-color);
}
.list-header {
    display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: rgb(245, 225, 225);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: 1px var(--line-color);
}

.list-item {
  flex: 1; /* 全アイテムを均等に配置 */
}

.type, .title, .date {
  flex: 1; /* 各項目を均等に配置 */
}

.title {
  flex: 2; /* 真ん中の2/5 */
}

.date {
  flex: 2; /* 右の2/5 */
}
</style>
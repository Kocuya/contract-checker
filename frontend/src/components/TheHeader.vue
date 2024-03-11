<template>
    <nav class="navbar">
      <img src="@/assets/logo.png" alt="Icon" class="icon">
      契約書
    </nav>
</template>
  
<script>
export default {
  name: 'TheHeader',
}
</script>
  
<style scoped>
@import "@/assets/colors.css";
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  
  width: 100%;
  background-color: white; /* 背景色 */
  color: var(--project-red); /* テキストの色 */
  padding: 10px 0;
  border-bottom: 2px solid var(--line-color); /* 下に線を追加 */
  text-align: left;
  padding-left: 22px;
  display: flex;
  align-items: center;
  font-weight: 600;
}
  
.icon {
  height: 18px; /* アイコンの高さ */
  margin-right: 10px; /* アイコンとテキストの間隔 */
}
</style>
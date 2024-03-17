<template>
    <nav class="navbar">
      <img src="@/assets/logo.png" alt="Icon" class="icon">
      契約書
    </nav>
</template>
  
<script>
export default {
  name: 'TheHeaderLogin',
}
</script>
  
<style scoped>
@import "@/assets/colors.css";
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  color: var(--project-red);
  padding: 10px 0;
  border-bottom: 2px solid var(--line-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
}
  
.icon {
  height: 18px;
  margin-right: 10px;
}
</style>
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
</script>

<style>
body {
  background-color: rgb(225, 225, 225);
  margin: 0;
  padding: 0;
}
.rounded-button {
  background-color: var(--project-red);
  width: 110px;
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

.inverted-button {
  border: 1px solid var(--project-red);
  width: 110px;
  border-radius: 14px;
  background-color: white;
  color: var(--project-red);
  transition: background-color 0.3s;
  cursor: pointer;
}
.inverted-button:hover {
  background-color: #ccc;
}

.grey-rb {
  background-color: rgb(145, 145, 145);
  width: 110px;
  color: white;
  border: none;
  padding: 8px 18px;
  border-radius: 18px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.3s;
}
.grey-rb:hover {
  background-color: rgb(120, 120, 120);
}
</style>
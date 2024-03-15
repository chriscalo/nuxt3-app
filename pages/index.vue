<script setup>
  const url = useRequestURL();
  const msg = "Hello, World!";
</script>

<template>
  <Navigation/>
  <div>
    {{ msg }}
  </div>
  <div>
    URL: {{ `${url.pathname}${url.search}` }}
  </div>
</template>

<style scoped></style>

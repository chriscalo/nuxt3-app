<script setup>
  // Get underlying request event
  const event = useRequestEvent();
  console.debug({
    req: event?.node?.req,
    url: event?.path,
  });
  
  // Get the URL
  const url = event?.path;
  
  const msg = "Hello, World!";
</script>

<template>
  <div>
    {{ msg }}
  </div>
  <div>
    URL: {{ url }}
  </div>
</template>

<style scoped></style>

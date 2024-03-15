<template>
  <!-- FIXME: add some way of setting `headAttrs`? -->
  <Head>
    <Meta charset="utf-8"/>
    
    <!--
      Favicons
      Source: https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs
    -->
    <Link rel="icon" href="/favicon.ico" sizes="32x32"/>
    <Link rel="icon" href="/icon.svg" type="image/svg+xml"/>
    <Link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
    <Link rel="manifest" href="/manifest.webmanifest"/>
    
    <!-- FIXME: add some way of setting `description`? -->
    <Meta name="description" content="A web-based personal finance manager"/>
    
    <!-- mobile-friendly layout -->
    <Meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    
    <!--
      Prevent iOS Safari from linkifying telephone numbers, which breaks Vue
      hydration. See https://stackoverflow.com/a/227238/101869
    -->
    <Meta name="format-detection" content="telephone=no"/>
    
    <Title>Viaticus</title>
  </Head>
  
  <NuxtPage />
</template>

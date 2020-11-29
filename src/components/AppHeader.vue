<template>
  <div>
    <button v-show="loggedIn">Logout</button>
    <!-- <button v-if="false">Logout</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false
    }
  }
}
</script>
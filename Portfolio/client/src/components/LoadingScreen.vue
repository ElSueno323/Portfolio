<template>
  <div v-if="isLoading" class="loading-screen">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen',
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      this.isLoading = false
    })
  }
}
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #3498db;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style> 
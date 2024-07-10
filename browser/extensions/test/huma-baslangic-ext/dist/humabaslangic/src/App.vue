<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-800 bg-opacity-50" :style="{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
    <div class="text-center text-white">
      <div class="text-6xl font-bold">{{ time }}</div>
      <div class="text-2xl mt-2">İyi günler</div>
      <div class="mt-8">
        <input
          v-model="searchQuery"
          @keydown.enter="performSearch"
          type="text"
          placeholder="Search with Google"
          class="w-full p-2 text-lg rounded bg-white bg-opacity-20 placeholder-gray-300 text-white"
        />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div class="bg-white bg-opacity-20 p-4 rounded">
          <div>You are 24.1942145</div>
        </div>
        <div class="bg-white bg-opacity-20 p-4 rounded">
          <div>Bristol</div>
          <div>7°C</div>
          <div>Saturday: 6°C - 9°C</div>
          <div>Sunday: 6°C - 10°C</div>
          <div>Monday: 8°C - 12°C</div>
        </div>
        <div class="bg-white bg-opacity-20 p-4 rounded">
          <div>The Register: News</div>
          <div>Google emits data-leaking...</div>
          <div>Gummy bears as a unit of measure?</div>
          <div>A lot of things will have changed...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: '',
      searchQuery: '',
      backgroundImage: require('@/assets/background.jpg'),
    }
  },
  methods: {
    updateTime() {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      this.time = `${hours}:${minutes}`
    },
    async performSearch() {
      try {
        // eslint-disable-next-line no-undef
        if (typeof browser !== 'undefined' && browser.runtime) {
          await browser.runtime.sendMessage({
            action: 'search',
            query: this.searchQuery
          });
        } else {
          console.error('Browser API is not available.');
        }
      } catch (error) {
        console.error('Error performing search:', error);
      }
    }
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 60000);
  }
}
</script>




<style>
body {
  margin: 0;
}
</style>
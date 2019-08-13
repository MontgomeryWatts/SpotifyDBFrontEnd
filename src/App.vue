<template>
  <div id="app">
    <navbar @open-settings-modal="showSettingsModal"/>
    <settings-modal ref="settingsModal"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import SettingsModal from '@/components/SettingsModal';

export default {
  name: 'app',
  components: {
    Navbar,
    SettingsModal
  },
  methods: {
    showSettingsModal() {
      this.$refs.settingsModal.show();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 55px;
}
</style>

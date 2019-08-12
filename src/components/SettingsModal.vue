<template>
  <b-modal ref="modal" centered hide-footer>
    <b-tabs vertical pills>
      <feedback-tab/>
    </b-tabs>
  </b-modal>
</template>

<script>
import FeedbackTab from '@/components/FeedbackTab';

export default {
  name: 'SettingsModal',
  components: {
    FeedbackTab
  },
  methods: {
    show () {
      this.$refs.modal.show();
    },
    hide () {
      this.$refs.modal.hide();
    }
  }
};
</script>
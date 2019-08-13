<template>
  <b-tab title="Feedback">
    <b-form @submit.prevent="sendFeedback">
      <b-form-group>
        <b-form-group label="Subject">
          <b-form-input required v-model="feedback.subject">
          </b-form-input>
        </b-form-group>

        <b-form-group label="Description">
          <b-form-textarea required v-model="feedback.body" rows="4" no-resize>
          </b-form-textarea>
        </b-form-group>

        <b-form-group label="Email">
          <b-form-input required type="email" v-model="feedback.contact">
          </b-form-input>
        </b-form-group>

        <b-button class="w-100" type="submit">Submit</b-button>
      </b-form-group>
    </b-form>
  </b-tab>
</template>

<script>
import services from '@/services/feedback-service';

export default {
  name: 'FeedbackTab',
  data () {
    return {
      feedback: {
        subject: '',
        body: '',
        contact: ''
      }
    }
  },
  methods: {
    async sendFeedback() {
      await services.postFeedback(this.feedback);
    }
  }
};
</script>
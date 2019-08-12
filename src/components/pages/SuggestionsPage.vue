<template>
  <b-container>
    <b-form @submit.prevent="sendSuggestion">
      <b-form-group>
        <b-form-group label="Subject">
          <b-form-input required v-model="suggestion.subject">
          </b-form-input>
        </b-form-group>

        <b-form-group label="Description">
          <b-form-textarea required v-model="suggestion.body">
          </b-form-textarea>
        </b-form-group>

        <b-form-group label="Email">
          <b-form-input required type="email" v-model="suggestion.contact">
          </b-form-input>
        </b-form-group>

        <b-button type="submit">Submit</b-button>
      </b-form-group>
    </b-form>
  </b-container>
</template>

<script>
import services from '@/services/suggest-service';

export default {
  name: 'SuggestionsPage',
  data () {
    return {
      suggestion: {
        contact: '',
        subject: '',
        body: ''
      }
    };
  },
  methods: {
    async sendSuggestion() {
      await services.postSuggestion(this.suggestion);
    }
  }
};
</script>

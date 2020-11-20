<template>
  <b-card class="p-3 mt-4">
    <h1 class="text-center">
      Share your experience and Suggest something to improve the online system:
    </h1>
    <b-row>
      <div class="center mt-4">
        <b-card class="main-card">
          <b-form @submit.prevent="createSuggestion">
            <b-form-group label="Suggestion" label-for="description">
              <b-form-input
                id="suggestion"
                placeholder="Title"
                type="text"
                v-model="suggestion.title"
                class="mb-3"
                required
              >
              </b-form-input>
              <b-form-textarea
                id="textarea"
                placeholder="Enter something..."
                rows="3"
                v-model="suggestion.description"
                max-rows="6"
                required
              ></b-form-textarea>
            </b-form-group>
            <b-button type="submit" variant="primary">Create</b-button>
          </b-form>
        </b-card>
      </div>
      <div class="center mt-4">
        <b-card class="main-card">
          <b-form @submit.prevent="createComplaint">
            <b-form-group label="Complaint" label-for="description">
              <b-form-input
                id="complaint"
                placeholder="Title"
                type="text"
                v-model="complaint.title"
                class="mb-3"
                required
              ></b-form-input>
              <b-form-textarea
                id="textarea"
                placeholder="Enter something..."
                rows="3"
                v-model="complaint.description"
                max-rows="6"
                required
              ></b-form-textarea>
            </b-form-group>
            <b-button type="submit" variant="primary">Create</b-button>
          </b-form>
        </b-card>
      </div>
    </b-row>

    <b-row>
      <b-card-text style="width: 48%">
        <h1 class="text-center mb-4">Suggestions</h1>
        <b-table bordered hover :fields="fields" :items="suggestions">
          <template #cell(actions)="data" class="text-center">
            <b-button variant="outline-primary" @click="show" size="sm"
              >Details</b-button
            >
            <b-button variant="outline-info" @click="edit" size="sm"
              >Edit</b-button
            >
            <b-button variant="outline-danger" @click="deleteSU" size="sm"
              >Delete</b-button
            >
          </template>
        </b-table>
      </b-card-text>

      <b-card-text style="width: 48%" class="ml-5">
        <h1 class="text-center mb-4">Complaints</h1>
        <b-table bordered hover :fields="fields" :items="suggestions">
          <template #cell(actions)="data" class="text-center">
            <b-button variant="outline-primary" @click="show" size="sm"
              >Details</b-button
            >
            <b-button variant="outline-info" @click="edit" size="sm"
              >Edit</b-button
            >
            <b-button variant="outline-danger" @click="deleteSU" size="sm"
              >Delete</b-button
            >
          </template>
        </b-table>
      </b-card-text>
    </b-row>
  </b-card>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: "",
  data() {
    return {
      suggestion: {
        title: '',
        description: ''
      },
      complaint: {
        title: '',
        description: ''
      },
      fields: [
        "title",
        "description",
        { key: "actions", label: "Actions", tdClass: "text-center" }
      ],
      suggestions: [
        { title: "Dickerson", description: "Macdonald" },
        { title: "Larsen", description: "Shaw" },
        { title: "Geneva", description: "Wilson" },
        { title: "Larsen", description: "Shaw" },
        { title: "Geneva", description: "Wilson" },
        { title: "Jami", description: "Carney" }
      ]
    };
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    show() {},
    edit() {},
    deleteSU() {},
    createSuggestion() {

    },
    createComplaint() {
      
    }
  },
  created() {
    if(!this.isLoggedIn){
      this.$router.push('/login')
    }
  }
};
</script>

<template>
  <b-card class="p-3 mt-4">
    <h1 class="text-center">
      Share your experience and Suggest something to improve the online system:
    </h1>
    <b-row>
      <div class="center mt-4">
        <b-card class="main-card">
          <b-form @submit.prevent="onCreateSuggestion">
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
          <b-form @submit.prevent="onCreateExperience">
            <b-form-group label="experience" label-for="description">
              <b-form-input
                id="experience"
                placeholder="Title"
                type="text"
                v-model="experience.title"
                class="mb-3"
                required
              ></b-form-input>
              <b-form-textarea
                id="textarea"
                placeholder="Enter something..."
                rows="3"
                v-model="experience.description"
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
            <b-button variant="outline-primary" @click="show(data.item._id, 'ShowSuggestion')" size="sm"
              >Details</b-button
            >
            <b-button variant="outline-info" @click="edit(data.item._id, 'EditSuggestion')" size="sm"
              >Edit</b-button
            >
            <b-button variant="outline-danger" @click="deleteSU(data.item._id, 'suggestion')" size="sm"
              >Delete</b-button
            >
          </template>
        </b-table>
      </b-card-text>

      <b-card-text style="width: 48%" class="ml-5">
        <h1 class="text-center mb-4">Experience</h1>
        <b-table bordered hover :fields="fields" :items="experiences">
          <template #cell(actions)="data" class="text-center">
            <b-button variant="outline-primary" @click="show(data.item._id, 'ShowExperience')" size="sm"
              >Details</b-button
            >
            <b-button variant="outline-info" @click="edit(data.item._id, 'EditExperience')" size="sm"
              >Edit</b-button
            >
            <b-button variant="outline-danger" @click="deleteSU(data.item._id, 'experience')" size="sm"
              >Delete</b-button
            >
          </template>
        </b-table>
      </b-card-text>
    </b-row>
  </b-card>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import axios from './../axios'
export default {
  name: "",
  data() {
    return {
      suggestion: {
        title: '',
        description: ''
      },
      experience: {
        title: '',
        description: ''
      },
      fields: [
        "title",
        "description",
        { key: "actions", label: "Actions", tdClass: "text-center" }
      ],
    };
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'suggestions', 'experiences'])
  },
  methods: {
    ...mapActions(['deleteSuggestion', 'createSuggestion', 'deleteExperience', 'createExperience']),
    show(id, route) {
      this.$router.push({name: route, params: {id: id}})
    },
    edit(id, route) {
      this.$router.push({name: route, params: {id: id}})
    },
    deleteSU(id, type) {
      if(type == 'suggestion')
        this.deleteSuggestion(id);
      else 
        this.deleteExperience(id);
    },
    onCreateSuggestion() {
      this.createSuggestion(this.suggestion)
      .then(res => {
        alert('Suggestion created successfully!');
        this.suggestion = {}
      })
      .catch(error  => {
        console.log(error)
      })
    },
    onCreateExperience() {
      this.createExperience(this.experience)
      .then(res => {
        alert('Experience created successfully!');
        this.experience = {}
      })
      .catch(error  => {
        console.log(error)
      })
    }
  },
  created() {
    if(!this.isLoggedIn){
      this.$router.push('/login')
    }
    this.$store.dispatch('getSuggestions')
    this.$store.dispatch('getExperiences')
  }
};
</script>

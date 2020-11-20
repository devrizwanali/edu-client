<template>
  <div class="center mt-4">
    <b-card class="main-card">
      <h1 class="text-center mb-4">All suggestions/complaint</h1>
       <b-card-text>
         <b-table striped hover :fields="fields" :items="suggestions" sticky-header="true">
          <template #cell(action)="data">
            <b-icon icon="eye"></b-icon>
            <b-icon icon="pencil-square"></b-icon>
            <b-icon icon="trash"></b-icon>
          </template>
         </b-table>
       </b-card-text>
     </b-card>
  </div>
</template>
<script>
  export default {
    name: '',
     data() {
      return {
        fields: [
          'title', 'description', 'action'
        ],
        suggestions: [
          { title: 'Dickerson', description: 'Macdonald' },
          { title: 'Larsen', description: 'Shaw' },
          { title: 'Geneva', description: 'Wilson' },
          { title: 'Larsen', description: 'Shaw' },
          { title: 'Geneva', description: 'Wilson' },
          { title: 'Jami', description: 'Carney' }
        ]
      }
    },
  }
</script>

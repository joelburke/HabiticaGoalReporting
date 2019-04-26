<template>
  <div class="hello">
    <h1>Habitica Api Explorer</h1>
    <!-- <b-form @submit="onSubmit"> -->
    <b-form>
        <b-form-group
            id="habiticaUsername-Group"
            label="Habitica Api Username Guid"
            label-for="habiticaUsername"
        >
            <b-form-input
                id="habiticaUsername"
                v-model="form.username"
                required
                placeholder="enter username"></b-form-input>
                
        </b-form-group>
        <b-form-group
            id="habiticaPassword-Group"
            label="Habitica Api Password Guid"
            label-for="habiticaUsername"
        >
            <b-form-input
                id="habiticaPassword"
                v-model="form.password"
                required
                placeholder="enter password"></b-form-input>
        </b-form-group>

        <b-button variant="primary" @click="onSubmit">Get User Data</b-button>        
        <b-button @click="setHeaders">Set Headers</b-button>     
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">
            <tree-view :data="result" :options="{maxDepth: 10}"></tree-view>
            {{ result }}
        </pre>
    </b-card>
  </div>
</template>

<script>

import axios from 'axios'

const habiticaApiUrl='https://habitica.com/api/v3/tasks/user?type=completedTodos';

export default {
  name: 'HabiticaApiExplorer',
  data: function () {
      return {
        form: {
            username: 'dd0cd644-3636-4249-bb8b-78d53ebecb42',
            password: '8c8b9e6b-8505-48a4-a1eb-3b64cd01f96a'
        },
        result: '',
        config: {
            headers: { 
                'Content-Type': 'application/json',
                'x-api-user': 'dd0cd644-3636-4249-bb8b-78d53ebecb42',
                'x-api-key': '8c8b9e6b-8505-48a4-a1eb-3b64cd01f96a'
            },
        }
      }
  },
  methods: {
      onSubmit: function () {
          setHeaders();
          axios.get(
              habiticaApiUrl,
              this.config
          ).then(
              response => {
                  this.result = response.data
              }
          ).catch(
              error => {
                  console.log('ERROR', error)
              }
          )
      },
      setHeaders: function() {
          this.config.headers[1] = 'test'
      }
  }
}
</script>

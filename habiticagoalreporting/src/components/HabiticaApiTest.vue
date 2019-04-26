<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-form @submit="onSubmit">
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

        <b-button type="submit" variant="primary">Submit</b-button>
        
        <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'HabiticaApiTest',
  data: function () {
      return {
        msg: "Test",
        form: {
            username: '',
            password: ''
        }
      }
  },
  methods: {
      onSubmit: function () {
          console.log('hey you');
      }
  }
}
</script>

<!-- <template>
    <div class="container">
        <h1>Listado pay_mode</h1>
        <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>

                    <th scope="col">name</th>

                    <th scope="col">observation</th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="(pay_mode, index) in pay_modes" :key="index">
                <th scope="row"> {{index+1}}</th>
                <td>{{pay_mode.name}}</td>
                <td>{{pay_mode.observation}}</td>
            </tr>
        </tbody>
    </table> 
</div> 
</template>
<script>
import axios from 'axios'
export default { 
    name: 'pay_mode',
    data(){
        return{
            pay_modes: []
        }
 },
 mounted() {
 axios
 .get('http://127.0.0.1:8000/api/pay_mode') 
.then(response => (this.pay_modes = response.data.pay_mode))
 },
}


</script> -->
<template>
    <div class="container">
      <h1>Listado Pay Mode</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Observation</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pay_mode, index) in pay_modes" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ pay_mode.name }}</td>
            <td>{{ pay_mode.observation }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'PayMode',
    data() {
      return {
        pay_modes: []
      };
    },
    async created() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/pay_mode');
        this.pay_mode = response.data.pay_mode;
      } catch (error) {
        console.error('Error fetching pay modes:', error);
      }
    }
  };
  </script>
  
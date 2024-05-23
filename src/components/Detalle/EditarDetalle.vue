<template>
  <div class="container text-start">
    <h1 class="text-primary fw-bold"> Editar Detalle</h1>
    <div class="card">
      <div class="card-header fw-bold">
        Detalle
      </div>
      <div class="card-body">
        <form @submit.prevent="updateDetalle">
          
          <div class="row mb-3">
            <label for="id" class="form-label">ID</label>
            <div class="input-group">
              <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
              <input type="text" class="form-control" id="id" placeholder="ID detalle" disabled 
              v-model='detalle.id'
              >
            </div>
          </div>
         
          <div class="row mb-3">
              <label for="invoice_id" class="form-label">Invoice ID :</label>
            <div class="input-group">
              <div class="input-group-text"> <font-awesome-icon icon="bookmark" /></div>
              <input type="text" class="form-control" id="invoice_id" placeholder="Invoice"
               v-model="detalle.invoice_id"
               >
            </div>
          </div>

          <div class="row mb-3">
              <label for="product_id" class="form-label">Product ID :</label>
            <div class="input-group">
              <div class="input-group-text"> <font-awesome-icon icon="bookmark" /></div>
              <input type="text" class="form-control" id="product_id" placeholder="Product"
               v-model="detalle.product_id"
               >
            </div>
          </div>

          <div class="row mb-3">
              <label for="quantity" class="form-label">Quantity:</label>
            <div class="input-group">
              <div class="input-group-text"> <font-awesome-icon icon="bookmark" /></div>
              <input type="text" class="form-control" id="quantity" placeholder="Quantity"
               v-model="detalle.quantity"
               >
            </div>
          </div>

          <div class="row mb-3">
              <label for="price" class="form-label">Price:</label>
            <div class="input-group">
              <div class="input-group-text"> <font-awesome-icon icon="bookmark" /></div>
              <input type="text" class="form-control" id="price" placeholder="Price"
               v-model="detalle.price"
               >
            </div>
          </div> 

          <button class="btn btn-primary" type="submit">Actualizar</button>
          <button class="btn btn-secondary mx-2" @click="cancelar">Cancelar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'EditarDetalle',
  data() {
    return {
      detalle: {
        id: 0,
        invoice_id: '',
        product_id: '',
        quantity: '',
        price: ''
      }
    };
  },
  methods: {
    cancelar() {
      this.$router.push({ name: 'detalles' });
    },

    async updateDetalle() {
      try {
        const res = await axios.put(`http://127.0.0.1:8000/api/detalles/${this.detalle.id}`, this.detalle);
        
        if (res.status === 200) {
          this.$router.push({ name: 'detalles' });
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Detalle ha sido actualizado',
            showConfirmButton: false,
            timer: 2000
          });
        }
      } catch (error) {
        console.error("Error updating detail:", error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Error al actualizar el detalle',
          showConfirmButton: false,
          timer: 2000
        });
      }
    }
  },
  mounted() {
    this.detalle.id = this.$route.params.id;
    axios.get(`http://127.0.0.1:8000/api/detalles/${this.detalle.id}`)
      .then(response => {
        this.detalle = response.data.detalle; // Asume que la API devuelve un objeto con 'detalle'
      })
      .catch(error => {
        console.error("Error fetching detail:", error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Error al cargar el detalle',
          showConfirmButton: false,
          timer: 2000
        });
      });
  }
};
</script>

<style scoped>
/* Add some styles if needed */
</style>

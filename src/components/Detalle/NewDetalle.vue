<template>
  <div class="container text-start">
    <h1 class="text-primary fw-bold">Agregar Nuevo Detalle</h1>
    <div class="card">
      <div class="card-header fw-bold">
        Nuevo Detalle
      </div>
      <div class="card-body">
        <form @submit.prevent="createDetalle">

          <div class="row mb-3">
              <label for="invoice_id" class="form-label">Invoice ID:</label>
            <div class="input-group">
              <div class="input-group-text"> <font-awesome-icon icon="bookmark" /></div>
              <input type="text" class="form-control" id="invoice_id" placeholder="Invoice ID"
               v-model="detalle.invoice_id"
               >
            </div>
          </div>

          <div class="row mb-3">
              <label for="product_id" class="form-label">Product ID:</label>
            <div class="input-group">
              <div class="input-group-text"> <font-awesome-icon icon="bookmark" /></div>
              <input type="text" class="form-control" id="product_id" placeholder="Product ID"
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

          <button class="btn btn-primary" type="submit">Agregar</button>
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
  name: 'NewDetalle',
  data() {
    return {
      detalle: {
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

    async createDetalle() {
      try {
        const res = await axios.post('http://127.0.0.1:8000/api/detalles', this.detalle);
        
        if (res.status === 201) {
          this.$router.push({ name: 'detalles' });
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Detalle ha sido creado',
            showConfirmButton: false,
            timer: 2000
          });
        }
      } catch (error) {
        console.error("Error creating detail:", error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Error al crear el detalle',
          showConfirmButton: false,
          timer: 2000
        });
      }
    }
  },
  mounted() {
    axios.get(`http://127.0.0.1:8000/api/productos`)
    .then(response => {
        this.productos = response.data.productos
    })
  },
};
</script>

<style scoped>
/* Add some styles if needed */
</style>

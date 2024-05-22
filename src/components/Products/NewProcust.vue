<template>
  <div class="container text-start">
    <h1 class="text-primary fw-bold">Nuevo Producto</h1>
    <div class="card">
      <div class="card-header fw-bold">
        Producto
      </div>
      <div class="card-body">
        <form @submit.prevent="saveProduct">
          <div class="row mb-3">
            <label for="prod_name" class="form-label">Nombre</label>
            <div class="input-group">
              <div class="input-group-text"><font-awesome-icon icon="box" /></div>
              <input type="text" class="form-control" id="prod_name" placeholder="Nombre del producto" v-model="product.prod_name">
            </div>
          </div>
          <div class="row mb-3">
            <label for="prod_desc" class="form-label">Descripción</label>
            <div class="input-group">
              <textarea class="form-control" id="prod_desc" placeholder="Descripción del producto" v-model="product.prod_desc"></textarea>
            </div>
          </div>
          <div class="row mb-3">
            <label for="prod_price" class="form-label">Precio</label>
            <div class="input-group">
              <div class="input-group-text">$</div>
              <input type="number" class="form-control" id="prod_price" placeholder="Precio del producto" v-model="product.prod_price">
            </div>
          </div>
          <button class="btn btn-primary" type="submit">Guardar</button>
          <button class="btn btn-secondary mx-2" @click="cancel">Cancelar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'NewProduct',
  data() {
    return {
      product: {
        prod_name: '',
        prod_desc: '',
        prod_price: 0
      }
    };
  },
  methods: {
    cancel() {
      this.$router.push({ name: 'Products' });
    },
    async saveProduct() {
      const res = await axios.post('http://127.0.0.1:8000/api/products/', this.product);
      console.log(res);
      if (res.status === 200 || res.status === 201) { // Ajustar según el código de estado que tu API devuelva para la creación exitosa.
        this.$router.push({ name: 'Products' });
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto guardado con éxito',
          showConfirmButton: false,
          timer: 2000
        });
      }
    }
  }
};
</script>

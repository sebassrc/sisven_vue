<template>
  <div class="container text-start">
    <h1 class="text-primary fw-bold">Editar Producto</h1>
    <div class="card">
      <div class="card-header fw-bold">
        Producto
      </div>
      <div class="card-body">
        <form @submit.prevent="updateProduct">
          <div class="row mb-3">
            <label for="prod_codi" class="form-label">Código</label>
            <div class="input-group">
              <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
              <input type="text" class="form-control" id="prod_codi" placeholder="Código del producto" disabled v-model="product.prod_codi">
            </div>
          </div>
          <div class="row mb-3">
            <label for="prod_nomb" class="form-label">Nombre</label>
            <div class="input-group">
              <div class="input-group-text"><font-awesome-icon icon="box" /></div>
              <input type="text" class="form-control" id="prod_nomb" placeholder="Nombre del producto" v-model="product.prod_nomb">
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
  name: 'EditProduct',
  data() {
    return {
      product: {
        prod_codi: 0,
        prod_nomb: '',
        prod_desc: '',
        prod_price: 0
      }
    };
  },
  methods: {
    cancelar() {
      this.$router.push({ name: 'Products' });
    },
    async updateProduct() {
      const res = await axios.put(`http://127.0.0.1:8000/api/products/${this.product.prod_codi}`, this.product);
      if (res.status === 200) {
        this.$router.push({ name: 'Products' });
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto actualizado con éxito',
          showConfirmButton: false,
          timer: 2000
        });
      }
    }
  },
  mounted() {
    this.product.prod_codi = this.$route.params.id;
    axios.get(`http://127.0.0.1:8000/api/products/${this.product.prod_codi}`)
      .then(response => {
        this.product = response.data.product;
      });
  }
};
</script>

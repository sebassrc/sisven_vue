<template>
  <div class="container">
    <h1 class="text-start">Listado de Productos
      <button @click="newProduct" class="btn btn-success mx-2">
        <font-awesome-icon icon="plus" />
      </button>
    </h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripción</th>
          <th scope="col">Precio</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>${{ product.price }}</td>
          <td>
            <button @click="deleteProduct(product.id)" class="btn btn-danger mx-2">
              <font-awesome-icon icon="trash" />
            </button>
            <button @click="editProduct(product.id)" class="btn btn-warning mx-2">
              <font-awesome-icon icon="pencil" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'Products',
  data() {
    return {
      products: []
    };
  },
  methods: {
    deleteProduct(id) {
      Swal.fire({
        title: `¿Quieres eliminar el producto con ID ${id}?`,
        showCancelButton: true,
        confirmButtonText: 'Eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`http://127.0.0.1:8000/api/products/${id}`)
            .then(response => {
              if (response.data.success) {
                Swal.fire('Eliminado!', '', 'success');
                this.products = response.data.products;
              }
            });
        }
      });
    },
    editProduct(id) {
      this.$router.push({ name: 'EditProduct', params: { id: id } });
    },
    newProduct() {
      this.$router.push({ name: 'NewProduct' });
    }
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then(response => {
        this.products = response.data.products;
      });
  }
};
</script>

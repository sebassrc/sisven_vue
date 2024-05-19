<template>
    <div class="container">
      <h1 class="text-start">Listado de Categorías
        <button @click="newCategory" class="btn btn-success mx-2">
          <font-awesome-icon icon="plus" />
        </button>
      </h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(category, index) in categories" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ category.name }}</td>
            <td>{{ category.description }}</td>
            <td>
              <button @click="deleteCategory(category.id)" class="btn btn-danger mx-2">
                <font-awesome-icon icon="trash" />
              </button>
              <button @click="editCategory(category.id)" class="btn btn-warning mx-2">
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
    name: 'Categories',
    data() {
      return {
        categories: []
      };
    },
    methods: {
      deleteCategory(id) {
        Swal.fire({
          title: `¿Quieres eliminar la categoría con ID ${id}?`,
          showCancelButton: true,
          confirmButtonText: 'Eliminar'
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(`http://127.0.0.1:8000/api/categories/${id}`)
              .then(response => {
                if (response.data.success) {
                  Swal.fire('Eliminado!', '', 'success');
                  this.categories = response.data.categories;
                }
              });
          }
        });
      },
      editCategory(id) {
        this.$router.push({ name: 'EditarCategoria', params: { id: id } });
      },
      newCategory() {
        this.$router.push({ name: 'NewCategoria' });
      }
    },
    mounted() {
      axios
        .get("http://127.0.0.1:8000/api/categories")
        .then(response => {
          this.categories = response.data.categories;
        });
    }
  };
  </script>
  
<template>
    <div class="container text-start">
      <h1 class="text-primary fw-bold"> Nueva Categoría</h1>
      <div class="card">
        <div class="card-header fw-bold">
          Categoría
        </div>
        <div class="card-body">
          <form @submit.prevent="saveCategoria">
            
            <div class="row mb-3">
                <label for="name" class="form-label">Nombre :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="bookmark" /></div>
                <input type="text" class="form-control" id="name" placeholder="Nombre de la categoría"
                 v-model="categoria.name"
                 >
              </div>
            </div>
  
            <div class="row mb-3">
                <label for="description" class="form-label">Descripción :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="align-left" /></div>
                <textarea class="form-control" id="description" placeholder="Descripción de la categoría"
                 v-model="categoria.description"
                 ></textarea>
              </div>
            </div>
  
            <button class="btn btn-primary" type="submit">Guardar</button>
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
    name: 'NewCategoria',
    data() {
      return {
        categoria: {
          name: '',
          description: ''
        }
      };
    },
    methods: {
      cancelar() {
        this.$router.push({ name: 'categories' });
      },
  
      async saveCategoria() {
        const res = await axios.post(`http://127.0.0.1:8000/api/categories`, this.categoria);
        
        if (res.status === 200) {
          this.$router.push({ name: 'categories' });
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Categoría ha sido guardada',
            showConfirmButton: false,
            timer: 2000
          });
        }
      }
    }
  };
  </script>
  
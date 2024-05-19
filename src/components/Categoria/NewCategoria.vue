<template>
  <div class="container text-start">
    <h1 class="text-primary fw-bold"> Editar Categoría</h1>
    <div class="card">
      <div class="card-header fw-bold">
        Categoría
      </div>
      <div class="card-body">
        <form @submit.prevent="updateCategoria">
          
          <div class="row mb-3">
            <label for="categoria_id" class="form-label">ID</label>
            <div class="input-group">
              <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
              <input type="text" class="form-control" id="categoria_id" placeholder="ID categoría" disabled 
              v-model='categoria.id'
              >
            </div>
          </div>
         
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
  name: 'EditarCategoria',
  data() {
    return {
      categoria: {
        id: 0,
        name: '',
        description: ''
      }
    };
  },
  methods: {
    cancelar() {
      this.$router.push({ name: 'categories' });
    },

    async updateCategoria() {
      const res = await axios.put(`http://127.0.0.1:8000/api/categories/${this.categoria.id}`, this.categoria);
      
      if (res.status === 200) {
        this.$router.push({ name: 'categories' });
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Categoría ha sido actualizada',
          showConfirmButton: false,
          timer: 2000
        });
      }
    }
  },
  mounted() {
    this.categoria.id = this.$route.params.id;
    axios.get(`http://127.0.0.1:8000/api/categories/${this.categoria.id}`)
      .then(response => {
        this.categoria = response.data.category;
      });
  }
};
</script>

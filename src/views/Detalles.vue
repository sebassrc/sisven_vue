<template>
    <div class="container">
        <h1>Listado de Detalles |
            <button @click="newDetalle()"
                    class="btn btn-dark mx-2">
                    <font-awesome-icon icon="plus"/>
            </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Invoice</th>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(detalle, index) in detalles" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ detalle.invoice_id }}</td>
                    <td>{{ detalle.product_id }}</td>
                    <td>{{ detalle.quantity }} /u</td>
                    <td>${{ detalle.price }}</td>
                    <td>
                        <button @click="deleteDetalle(detalle.id)"
                            class="btn btn-danger mx-2">
                            <font-awesome-icon icon="trash"/>
                        </button>
                        <button @click="editDetalle(detalle.id)"
                            class="btn btn-info mx-2">
                            <font-awesome-icon icon="pencil"/>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Detalle',
    data() {
        return {
            detalles: [] // Use "detalles" instead of "Detalles"
        }
    },
    methods: {
        deleteDetalle(codigo){
            Swal.fire({
                tittle: `Do you want to delete the Detail with ID = ${codigo}?`,
                showCancelButton: true,
                confirmButtonText: 'Delete',
            }).then((result) =>{
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/detalles/${codigo}`)
                    .then(response => {
                        if (response.data.succes) {
                            Swal.fire('Deleted!! ', '', 'success')
                            this.detalles = response.data.detalles
                        }
                    })
                }
            })
        },
        editDetalle(id){
            this.$router.push({name: 'EditarDetalle', params: {id: `${id}` }} )
        },
        newDetalle(){
            this.router.push({name: 'NewDetalle'})
        }
    },

    mounted() {
        axios
            .get('http://127.0.0.1:8000/api/detalles')
            .then(response => {
                this.detalles = response.data.detalles;
            });
    }
};
</script>

<style scoped>
/* Add some styles if needed */
</style>

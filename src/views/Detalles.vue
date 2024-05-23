<template>
    <div class="container">
        <h1>Listado de Detalles</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Invoice</th>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(detalle, index) in detalles" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ detalle.invoice_id }}</td>
                    <td>{{ detalle.product_id }}</td>
                    <td>{{ detalle.quantity }}</td>
                    <td>{{ detalle.price }}</td>
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
        };
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

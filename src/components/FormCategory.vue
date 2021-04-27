<template>
  <div>
    <!-- Ver -->
    <div v-if="$route.name == 'view'">
      <h2>Ver {{$route.params.id}}</h2>
      Nombre
      <input type="text" disabled v-model="user.name">
    </div>

    <!-- Agregar -->
    <div v-if="$route.name == 'add'">
      <h2>Agregar</h2>
      Nombre
      <input type="text" v-model="user.nombre">
      <button @click="agregar()">Agregar</button>
    </div>

    <!-- Editar -->
    <div v-if="$route.name == 'edit'">
      <h2>Editar {{$route.params.id}}</h2>
      Nombre
      <input type="text" v-model="user.name">
      <button @click="actualizar()">Actualizar</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      user: {
        name: ""
      }
    }
  },
  mounted() {
    if (this.$route.params.id != undefined) {
        axios.get("https://jsonplaceholder.typicode.com/users/"+this.$route.params.id)
        .then(r => this.user = r.data)
    }
  },
  methods: {
    agregar() {
      // operaciones para agregar
      axios.post("/personas", this.user)
    },
    actualizar() {
      // operaciones para actualizar
      axios.put("/personas/"+this.$route.params.id, this.user)
    }
  }
}
</script>
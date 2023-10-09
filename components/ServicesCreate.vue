<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '../clients/supabase.ts'
import router from '../router';

const name = ref('')
const price = ref(0)
const scheduled_at = ref()
const patent = ref('')
const address = ref('')
const errorSubmit = ref('')

async function createService() {
  const { error } = await supabase
    .from('services')
    .insert(
      {
        scheduled_at: scheduled_at.value,
        price: price.value,
        name: name.value,
        patent: patent.value,
        address: address.value,
      }
    )
  if (error) {
    errorSubmit.value = error.message
  } else {
    router.push('/services')
  }
}


</script>

<template>
  <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
    <div class="modal-content py-4 text-left px-6">
      <h2 class="text-2xl font-semibold mb-4">Crear Nuevo Servicio</h2>
      <form @submit.prevent="createService">
        <div class="mb-4">
          <label for="serviceName" class="block text-gray-700 font-semibold">Nombre del Servicio</label>
          <input
            type="text"
            id="serviceName"
            name="serviceName"
            v-model="name"
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-4">
          <label for="servicePrice" class="block text-gray-700 font-semibold">Precio</label>
          <input
            type="number"
            id="servicePrice"
            name="servicePrice"
            v-model="price"
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-4">
          <label for="servicePatent" class="block text-gray-700 font-semibold">Patente</label>
          <input
            type="text"
            id="servicePatent"
            name="servicePatent"
            v-model="patent"
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-4">
          <label for="serviceAddress" class="block text-gray-700 font-semibold">Dirección</label>
          <input
            type="text"
            id="serviceAddress"
            name="serviceAddress"
            v-model="address"
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-4">
          <label for="serviceAddress" class="block text-gray-700 font-semibold">Dirección</label>
          <input
            type="date"
            id="serviceAddress"
            name="serviceAddress"
            v-model="scheduled_at"
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-4 flex space-x-3 justify-between">
          <button
            type="button"
            class="bg-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="router.push('/services')"
          >
            Cancelar
          </button>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

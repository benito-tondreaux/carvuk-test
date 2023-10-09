<script setup lang="ts">
interface props {
  service: Service
}

defineProps<props>()

defineEmits(['closeModal'])

</script>

<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-2xl font-semibold mb-4">Detalles del Servicio</h2>
      <div class="bg-white rounded shadow-md p-4">
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold">Nombre del Servicio:</label>
          <span class="text-blue-500 font-semibold">{{ service.name }}</span>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold">Patente:</label>
          <span class="text-blue-500 font-semibold">{{ service.patent }}</span>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold">Fecha:</label>
          <span class="text-blue-500 font-semibold">{{ service.scheduled_at }}</span>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold">Precio:</label>
          <span class="text-blue-500 font-semibold">{{ service.price }}</span>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold">Dirección:</label>
          <span class="text-blue-500 font-semibold">{{ service.address }}</span>
        </div>
        <button
            type="button"
            class="bg-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="$emit('closeModal')"
          >
            Cancelar
          </button>
      </div>
    </div>
  </div>
</template>

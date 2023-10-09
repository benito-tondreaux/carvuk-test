<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '../clients/supabase.ts'
import router from '../router';
import servicesDetail from './ServicesDetail.vue'

const services = ref<Service[]>([])
const errorMessage = ref('')
const showInfoService = ref(false)
const serviceSelected = ref<Service>()

function openModalServicesDetail(service: Service) {
  serviceSelected.value = service
  showInfoService.value = true
}

async function getAllServices() {
  const { data, error } = await supabase
    .from('services')
    .select('*')
  if (error) {
    errorMessage.value = error.message
  } else {
    services.value = data
  }
}

getAllServices()

</script>

<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-2xl font-semibold mb-4">Lista de Servicios</h2>
      <div class="bg-white rounded shadow-md p-4">
        <ul>
          <li v-for="service in services" :key="service.id" class="mb-2 flex space-x-4">
            <span class="text-blue-500 font-semibold">{{ service.name }}</span>
            <button @click="openModalServicesDetail(service)">
              <img src="/src/assets/icons/information-icon.svg" alt="Ver" class="w-6 h-6" />
            </button>
          </li>
        </ul>
      </div>
      <button
        class="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        @click="router.push('/services/create')"
      >
        Nuevo Servicio
      </button>
    </div>
    <services-detail
      v-if="showInfoService"
      :service="serviceSelected as Service"
      @close-modal="showInfoService = false"
    />
  </div>
</template>

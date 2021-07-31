<template>
  <div>
    <b-button v-b-toggle.sidebar-backdrop>Menu</b-button>
    <b-sidebar
      id="sidebar-backdrop"
      title="Menu"
      backdrop
      shadow
    >
      <div class="px-3 py-2">
        <router-link to="/numberofplayers"><b-button>Start A New Game</b-button></router-link></div>
      <div>
        <b-form-select v-model="selected" :options="options"></b-form-select>      
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Japan' },
          { value: null, text: 'Under Construction' },
          { value: null, text: 'This doesn\'t do anything' },
          { value: null, text: 'Another Region' },
          { value: null, text: 'Do later' }
        ]
      }
    }
  }
</script>
<template>
  <div>
    <div id="list-demo">
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
        <transition-group name="list" tag="p">
          <span v-for="item in items" v-bind:key="item" class="list-item">
            {{ item }}
          </span>
        </transition-group>
    </div>
    <router-link to="/namesofplayers">Names of Players</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
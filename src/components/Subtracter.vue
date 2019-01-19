<template>
  <div>
    <h1>{{msg}}</h1>
    <Input @getVal='fetch($event,"value1")'></Input>
    <Input @getVal='fetch($event,"value2")'></Input>
    <button @click="addVals">Subtract</button><br> {{sum}}
  </div>
</template>

<script>
  import Input from './InputFields.vue'
  export default {
    name: 'subtracter',
    components: {
      Input
    },
    data() {
      return {
        msg: 'Subtracter',
        value1: '',
        value2: '',
        sum: ''
      }
    },
    methods: {
      addVals: function() {
        this.sum = Number(this.value1) - Number(this.value2);
      },
      fetch(n, toChange) {
        this[toChange] = n;
        console.log(this[toChange])
      }
    },
  }
</script>

<style lang="">
  body,
  * {
    margin: 10px;
  }
  
  button {
    margin: 10px;
  }
</style>

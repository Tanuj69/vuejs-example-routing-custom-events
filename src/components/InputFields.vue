<template>
    <div>
        <input type="text" v-model="value" @change="sendVal">
        <div id="err">{{err}}</div>
    </div>
</template>

<script>
    export default {
        name: 'Input',
        data() {
            return {
                value: '',
                isErr: 'false',
            }
        },
        methods: {
            sendVal: function() {
                this.$emit('getVal', this.value);
            }
        },
        computed: {
            err: function() {
                if (isNaN(this.value)) {
                    return "Please Enter a number"
                }
            }
        }
    }
</script>

<style lang="">
    #err {
        color: red;
    }
    
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
    }
</style>
<template>
    <button @click="_handleCount">
        Count <slot></slot>!
    </button>
</template>

<script>
export default {
    methods: {
        _handleCount() {
            this.$emit("handleCount");
        }
    }
}
</script>

<style scope>
button {
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    height: 35px;
    width: 40%;
    color: #fff;
    transition: opacity .15s;
}
button:hover {
    opacity: .8;
}
button.blue {
    background-color: #007bff;
    border-color: #007bff;
}
button.green {
    background-color: #28a745;
    border-color: #28a745;
}
</style>
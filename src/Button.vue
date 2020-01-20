<template>
    <button @click="_handleClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    methods: {
        _handleClick() {
            this.$emit("handleClick");
        }
    }
}
</script>

<style scope>
  button {
    border: none;
    display: block;
    margin: 0 auto 1.5rem;
    color: #323e70;
    font-size: 1rem;
    border-radius: 24px;
    text-align: center;
    background-color: #efeeee;
    box-shadow: -6px -6px 12px #fff, 6px 6px 16px #d1cdc7;
    width: 200px;
    height: 42px;
    letter-spacing: 2px;
    transition: all 1.0s;
    font-weight: 600;
  }

  button:hover {
    background-color: #efeeee;
    box-shadow: -6px -6px 16px #fff inset, 6px 6px 6px #d1cdc7 inset;
    transition: box-shadow 0.3s;
  }
</style>
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
};
</script>

<style scope>
button {
  outline: none;
  cursor: pointer;
  display: block;
  margin: 0 auto 1.5rem;
  color: #323e70;
  font-size: 1rem;
  border-radius: 24px;
  text-align: center;
  background-color: #efeeee;
  width: 200px;
  height: 42px;
  letter-spacing: 2px;
  transition: box-shadow 0.3s;
  font-weight: 600;
  border: none;
  box-shadow: -6px -6px 12px #fff, 6px 6px 16px #d1cdc7;
}

button:hover {
  box-shadow: -3px -3px 6px #fff, 3px 3px 8px #d1cdc7;
}

button:active {
  box-shadow: -6px -6px 16px #fff inset, 6px 6px 6px #d1cdc7 inset;
}
</style>
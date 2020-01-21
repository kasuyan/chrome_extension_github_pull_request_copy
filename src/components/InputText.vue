<template>
  <input
    type="text"
    v-bind:placeholder="placeholder"
    v-bind:value="value"
    v-on:input="_handleInput"
  />
</template>

<script>
export default {
  props: {
    placeholder: String,
    value: String
  },
  methods: {
    _handleInput(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<style scoped>
input {
  width: 100%;
  border-radius: 0.3rem;
  border: 1px solid #323e70;
  background-color: #efeeee;
  padding: 0.5rem;
  box-sizing: border-box;
  color: #323e70;
  font-size: 0.8rem;

  box-shadow: -6px -6px 16px #fff inset, 6px 6px 6px #d1cdc7 inset;
  border: none;
}
</style>
<template>
  <label for="autoCopy">
    <input type="checkbox" id="autoCopy" v-bind:checked="checked" v-on:change="_handleChange" />
    <span>ON</span>
  </label>
</template>

<script>
export default {
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    value: String,
    checked: Boolean
  },
  methods: {
    _handleChange(e) {
      this.$emit("change", e.target.checked);
    }
  }
};
</script>

<style scoped>
input {
  display: none;
}

input + span {
  outline: none;
  cursor: pointer;
  display: inline-block;
  padding: 0.8rem;
  border: 1px solid #fff;
  border: none;
  border-radius: 2rem;
  transition: box-shadow 0.3s;
  box-shadow: -6px -6px 12px #fff, 6px 6px 16px #d1cdc7;
  box-sizing: border-box;
  font-weight: 600;
}

input:checked + span {
  box-shadow: -6px -6px 16px #fff inset, 6px 6px 6px #d1cdc7 inset;
}

input:not(:checked):hover + span {
  box-shadow: -3px -3px 6px #fff, 3px 3px 8px #d1cdc7;
}
</style>
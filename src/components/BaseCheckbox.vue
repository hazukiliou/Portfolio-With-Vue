<template>
  <div class="checkbox" :style="cssProps">
    <input
      type="checkbox"
      name="checkbox"
      v-model="newValue"
      @change="checkChange"
    />
    <label for="checkbox"></label>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    checkStatus: {
      type: Boolean,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 15
    }
  },
  data () {
    return {
      newValue: this.checkStatus
    }
  },
  computed: {
    cssProps () {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`
      }
    }
  },
  methods: {
    checkChange () {
      this.$emit('update:checkStatus', this.newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.checkbox {
  position: relative;
  margin-right: 5px;
}

input[type='checkbox'] {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0;

  &:checked + label {
    transform: rotate(90deg);
    background: rgb(115, 103, 240);
    border: rgb(115, 103, 240);
  }
}

label {
  position: absolute;
  border: 2px solid rgb(180, 180, 180);
  width: 100%;
  height: 100%;
  border-radius: 3px;
  left: 0;
  top: 0;
  box-sizing: border-box;
  transition: all ease-in-out 300ms;
}
</style>

<script>
export default {
  name: "flt-button",
  props: {
    backgroundColor: {
      type: String
    },
    color: {
      type: String,
      default: "rgb(74, 74, 74)"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    /**
     * Called when the button has been clicked, emits a click event
     */
    clickHandler() {
      if (this.disabled) return;
      this.$emit("click");
    },
    generateButton() {
      return this.$createElement(
        "button",
        {
          staticClass: "flt-button",
          style: {
            backgroundColor: this.backgroundColor,
            color: this.color
          },
          attrs: {
            disabled: this.disabled
          },
          on: {
            click: this.clickHandler
          }
        },
        this.$slots.default
      );
    }
  },
  render() {
    return this.generateButton();
  }
};
</script>

<style lang="scss" scoped>
.flt-button {
  padding: 12px;
  margin: 4px;
  border-radius: 4px;
  border-style: none;
  background-color: rgba(0, 0, 0, 0.25);
  transition: opacity 0.2s ease;
  font-size: 1em;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.flt-button:hover {
  opacity: 0.9;
  cursor: pointer;
}

.flt-button[disabled] {
  pointer-events: none;
  opacity: 0.5;
}

/* Removes dotted outline on Firefox */
.flt-button::-moz-focus-inner {
  border: 0;
}
</style>

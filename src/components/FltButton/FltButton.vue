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
  computed: {
    buttonClasses() {
      return {};
    }
  },
  methods: {
    /**
     * Called when the button has been clicked, emits a click event
     */
    clickHandler(e) {
      if (this.disabled) return;
      this.$emit("click");
    },
    /**
     * Generates content of the button
     */
    generateContent() {
      return [this.generateButton()];
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
  render(createElement) {
    return createElement(
      "div",
      {
        staticClass: "flt-button-wrapper",
        class: this.buttonClasses
      },
      this.generateContent()
    );
  }
};
</script>

<style lang="scss" scoped>
.flt-button-wrapper {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  text-align: left;
  padding: 8px;
}

.flt-button {
  padding: 12px;
  border-radius: 4px;
  border: none;
  background-color: rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s ease;
  font-size: 1em;
}

.flt-button:hover {
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.flt-button[disabled] {
  pointer-events: none;
  opacity: 0.5;
}
</style>

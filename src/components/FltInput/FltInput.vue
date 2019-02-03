<script>
export default {
  name: "flt-input",
  props: {
    id: {
      type: String,
      required: false
    },
    backgroundColor: {
      type: String
    },
    color: {
      type: String,
      default: "rgb(74, 74, 74)"
    },
    label: String
  },
  computed: {
    inputClasses() {
      return {};
    }
  },
  methods: {
    /**
     * Generates content of the input field
     * Contains: Label (optional), Input
     */
    generateContent() {
      return [this.generateLabel(), this.generateInput()];
    },
    generateLabel() {
      if (!this.label) return null;

      return this.$createElement(
        "label",
        {
          staticClass: "flt-label",
          style: {
            color: "rgba(0, 0, 0, 0.3)"
          },
          attrs: {
            for: this.$attrs.id || this.id
          }
        },
        this.label
      );
    },
    generateInput() {
      return this.$createElement("input", {
        staticClass: "flt-input",
        style: {
          backgroundColor: this.backgroundColor,
          color: this.color
        }
      });
    }
  },
  render(createElement) {
    return createElement(
      "div",
      {
        staticClass: "flt-input-wrapper",
        class: this.inputClasses
      },
      this.generateContent()
    );
  }
};
</script>

<style lang="scss" scoped>
.flt-input-wrapper {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  text-align: left;
}

.flt-input {
  padding: 12px;
  border-radius: 4px;
  border: none;
  background-color: rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s ease;
  font-size: 1em;
}

.flt-input:focus {
  background-color: rgba(0, 0, 0, 0.3);
}

.flt-label {
  margin-right: 8px;
}
</style>

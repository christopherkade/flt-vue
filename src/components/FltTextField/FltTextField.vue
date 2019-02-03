<script>
export default {
  name: "flt-text-field",
  props: {
    backgroundColor: {
      type: String
    },
    color: {
      type: String,
      default: "rgb(74, 74, 74)"
    },
    label: String,
    rows: {
      type: Number,
      default: 4
    },
    cols: {
      type: Number,
      default: 50
    }
  },
  computed: {
    textFieldClasses() {
      return {};
    }
  },
  methods: {
    /**
     * Generates content of the text field
     * Contains: Label (optional), Text Field
     */
    generateContent() {
      return [this.generateLabel(), this.generateTextField()];
    },
    generateLabel() {
      if (!this.label) return null;

      return this.$createElement(
        "label",
        {
          staticClass: "flt-label",
          style: {
            color: "rgba(0, 0, 0, 0.3)"
          }
        },
        this.label
      );
    },
    generateTextField() {
      return this.$createElement("textarea", {
        staticClass: "flt-text-field",
        style: {
          backgroundColor: this.backgroundColor,
          color: this.color
        },
        attrs: {
          rows: this.rows,
          cols: this.cols
        }
      });
    }
  },
  render(createElement) {
    return createElement(
      "div",
      {
        staticClass: "flt-text-field-wrapper",
        class: this.textFieldClasses
      },
      this.generateContent()
    );
  }
};
</script>

<style lang="scss" scoped>
.flt-text-field-wrapper {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  text-align: left;
  padding: 8px;
}

.flt-text-field {
  padding: 12px;
  border-radius: 4px;
  border: none;
  background-color: rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s ease;
  font-size: 1em;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.flt-text-field:focus {
  background-color: rgba(0, 0, 0, 0.3);
}

.flt-label {
  margin-right: 8px;
}
</style>

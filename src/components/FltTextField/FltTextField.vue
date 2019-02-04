<script>
import FltLabel from "@/components/FltLabel/FltLabel.vue";

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

      return this.$createElement(FltLabel, this.label);
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
  padding: 8px;
  display: inline-block;
}

.flt-text-field {
  padding: 12px;
  border-radius: 4px;
  border-style: none;
  background-color: transparent;
  font-size: 1em;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  vertical-align: middle;
  box-shadow: 0px 2px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.flt-text-field:focus {
  box-shadow: inset 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    inset 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    inset 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.flt-label {
  margin-right: 8px;
}
</style>

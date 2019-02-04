<script>
import FltLabel from "@/components/FltLabel/FltLabel.vue";

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
        FltLabel,
        {
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
  padding: 8px;
  display: inline-block;
}

.flt-input {
  padding: 12px;
  border-radius: 4px;
  border-style: none;
  background-color: transparent;
  font-size: 1em;
  box-shadow: 0px 2px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.flt-input:focus {
  box-shadow: inset 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    inset 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    inset 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.flt-label {
  margin-right: 8px;
}
</style>

<script>
export default {
  name: "flt-label",
  props: {
    color: {
      type: String,
      default: "rgba(0, 0, 0, 0.3)"
    },
    for: String
  },
  methods: {
    generateLabel() {
      return this.$createElement(
        "label",
        {
          staticClass: "flt-label",
          style: {
            color: this.color
          },
          for: this.for
        },
        this.$slots.default
      );
    }
  },
  render() {
    return this.generateLabel();
  }
};
</script>

<style lang="scss" scoped>
.flt-label {
  display: inline-block;
  font-size: 16px;
  line-height: 1;
  margin: 4px;
}
</style>

<script>
export default {
  name: "flt-tag",
  props: {
    color: {
      type: String,
      default: "white"
    },
    backgroundColor: {
      type: String,
      default: "#23d160"
    }
  },
  methods: {
    generateTag() {
      return this.$createElement(
        "div",
        {
          staticClass: "flt-tag",
          style: {
            color: this.color,
            backgroundColor: this.backgroundColor
          }
        },
        this.$slots.default
      );
    }
  },
  render() {
    return this.generateTag();
  }
};
</script>

<style lang="scss" scoped>
.flt-tag {
  display: inline-block;
  border-radius: 4px;
  font-size: 0.75rem;
  line-height: 1.5;
  padding: 0.4em 1.2em 0.4em 1.2em;
  font-weight: bold;
}
</style>

import { shallowMount } from "@vue/test-utils";
import FltTag from "@/components/FltTag/FltTag.vue";

describe("[UNIT] FltButton", () => {
  it("renders component correctly", () => {
    const wrapper = shallowMount(FltTag);

    expect(wrapper.is(FltTag)).toBe(true);
  });

  it("displays the correct tag text", () => {
    const wrapper = shallowMount(FltTag, {
      slots: {
        default: "Mocked tag",
      },
    });

    expect(wrapper.text()).toBe("Mocked tag");
  });

  it("displays the correct tag background color", () => {
    const wrapper = shallowMount(FltTag, {
      propsData: {
        backgroundColor: "red",
      },
    });

    expect(wrapper.props("backgroundColor")).toBe("red");
  });
  it("displays the correct tag font color", () => {
    const wrapper = shallowMount(FltTag, {
      propsData: {
        color: "blue",
      },
    });

    expect(wrapper.props("color")).toBe("blue");
  });
});

import { shallowMount } from "@vue/test-utils";
import FltButton from "@/components/FltButton/FltButton.vue";

describe("[UNIT] FltButton", () => {
  it("renders component correctly", () => {
    const wrapper = shallowMount(FltButton);

    expect(wrapper.is(FltButton)).toBe(true);
  });

  it("displays the correct background color when set", () => {
    const wrapper = shallowMount(FltButton, {
      propsData: {
        backgroundColor: "red",
      },
    });

    expect(wrapper.props("backgroundColor")).toBe("red");
  });

  it("displays the correct font color when set", () => {
    const wrapper = shallowMount(FltButton, {
      propsData: {
        color: "blue",
      },
    });

    expect(wrapper.props("color")).toBe("blue");
  });
});

import { shallowMount } from "@vue/test-utils";
import FltTextField from "@/components/FltTextField/FltTextField.vue";

describe("[UNIT] FltInput", () => {
  it("renders components correctly", () => {
    const wrapper = shallowMount(FltTextField);

    expect(wrapper.is(FltTextField)).toBe(true);
  });

  it("displays the correct background color when set", () => {
    const wrapper = shallowMount(FltTextField, {
      propsData: {
        backgroundColor: "red",
      },
    });

    expect(wrapper.props("backgroundColor")).toBe("red");
  });

  it("displays the correct label", () => {
    const wrapper = shallowMount(FltTextField, {
      propsData: {
        label: "mockedLabel",
      },
    });
    expect(wrapper.text()).toBe("mockedLabel");
  });

  it("displays the correct font color when set", () => {
    const wrapper = shallowMount(FltTextField, {
      propsData: {
        color: "blue",
      },
    });

    expect(wrapper.props("color")).toBe("blue");
  });
});

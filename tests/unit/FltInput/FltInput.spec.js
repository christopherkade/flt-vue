import { shallowMount } from "@vue/test-utils";
import FltInput from "@/components/FltInput/FltInput.vue";

describe("[UNIT] FltInput", () => {
  it("renders components correctly", () => {
    const wrapper = shallowMount(FltInput);

    expect(wrapper.is(FltInput)).toBe(true);
  });

  it("displays the correct background color when set", () => {
    const wrapper = shallowMount(FltInput, {
      propsData: {
        backgroundColor: "red",
      },
    });

    expect(wrapper.props("backgroundColor")).toBe("red");
  });

  it("displays the correct label", () => {
    const wrapper = shallowMount(FltInput, {
      propsData: {
        label: "mockedLabel",
      },
    });
    expect(wrapper.text()).toBe("mockedLabel");
  });

  it("displays the correct font color when set", () => {
    const wrapper = shallowMount(FltInput, {
      propsData: {
        color: "blue",
      },
    });

    expect(wrapper.props("color")).toBe("blue");
  });
});

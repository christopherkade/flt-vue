import { shallowMount } from "@vue/test-utils";
import FltTextField from "@/components/FltTextField/FltTextField.vue";

describe("[UNIT] FltTextField", () => {
  it("renders component correctly", () => {
    const wrapper = shallowMount(FltTextField);

    expect(wrapper.is(FltTextField)).toBe(true);
  });

  it("displays the correct background color when set", () => {
    const wrapper = shallowMount(FltTextField, {
      propsData: {
        backgroundColor: "red",
      },
    });
    expect(wrapper.vm.backgroundColor).toBe("red");
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
    expect(wrapper.vm.color).toBe("blue");
  });

  it("displays the correct amount of rows", () => {
    const wrapper = shallowMount(FltTextField, {
      propsData: {
        rows: 50,
      },
    });

    expect(wrapper.vm.rows).toBe(50);
  });

  it("displays the correct amount of cols", () => {
    const wrapper = shallowMount(FltTextField, {
      propsData: {
        cols: 100,
      },
    });

    expect(wrapper.vm.cols).toBe(100);
  });
});

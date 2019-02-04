import { shallowMount } from "@vue/test-utils";
import FltLabel from "@/components/FltLabel/FltLabel.vue";

describe("[UNIT] FltButton", () => {
  it("renders component correctly", () => {
    const wrapper = shallowMount(FltLabel);

    expect(wrapper.is(FltLabel)).toBe(true);
  });

  it("displays the correct label", () => {
    const wrapper = shallowMount(FltLabel, {
      slots: {
        default: "Mocked Label",
      },
    });

    expect(wrapper.text()).toBe("Mocked Label");
  });
});

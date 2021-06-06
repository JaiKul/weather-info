import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import WeatherDetails from "@/components/WeatherDetails.vue";

describe("WeatherDetails.vue", () => {
  it("renders", () => {
    const wrapper = shallowMount(WeatherDetails);
    expect(wrapper.exists()).to.be.true();
  });
});

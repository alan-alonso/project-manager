import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import ProjectForm from "@/components/ProjectForm.vue";

const localVue = createLocalVue();

describe("ProjectForm.vue", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let vuetify: any;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  test("Form submit should call the store's addProject action", async () => {
    // arrange
    const mocks = {
      methods: {
        addProject: jest.fn()
      }
    };

    // act
    const wrapper = mount(ProjectForm, {
      localVue,
      vuetify,
      ...mocks
    });

    // assert
    const titleInput = wrapper.find("#title");
    titleInput.trigger("focus");
    await wrapper.vm.$nextTick();
    (titleInput.element as HTMLInputElement).value = "Testing Project";
    titleInput.trigger("input");
    await wrapper.vm.$nextTick();

    const descriptionElement = wrapper.find("#description");
    descriptionElement.trigger("focus");
    await wrapper.vm.$nextTick();
    (descriptionElement.element as HTMLTextAreaElement).value =
      "Description sample";
    descriptionElement.trigger("input");
    await wrapper.vm.$nextTick();

    const button = wrapper.find(".v-btn");
    button.trigger("click");
    expect(mocks.methods.addProject).toHaveBeenCalled();
  });

  test("Project form should be rendered correctly", () => {
    // act
    const wrapper = shallowMount(ProjectForm, {
      localVue,
      vuetify
    });

    // assert
    expect(wrapper.element).toMatchSnapshot();
  });
});

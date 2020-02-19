import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

import { createLocalVue, shallowMount } from "@vue/test-utils";
import ProjectComp from "@/components/Project.vue";
import { Project, ProjectStatus } from "@/models/project";

const localVue = createLocalVue();

describe("Project.vue", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let vuetify: any;
  let project: Project;

  beforeEach(() => {
    vuetify = new Vuetify();
    project = new Project(
      "1",
      "Test Title",
      "Test Description",
      1,
      ProjectStatus.ACTIVE
    );
  });

  test("should render component with project prop data", () => {
    // act
    const wrapper = shallowMount(ProjectComp, {
      localVue,
      vuetify,
      propsData: {
        project
      }
    });

    // assert
    expect(wrapper.text()).toContain(project.title);
    expect(wrapper.text()).toContain(project.description);
    expect(wrapper.text()).toContain(project.people);
  });

  test("renders project item correctly", () => {
    // act
    const wrapper = shallowMount(ProjectComp, {
      localVue,
      vuetify,
      propsData: {
        project
      }
    });

    // assert
    expect(wrapper.element).toMatchSnapshot();
  });
});

import Vue from "vue";
import Vuex, { Store } from "vuex";
import Vuetify from "vuetify";

Vue.use(Vuetify);

import { createLocalVue, shallowMount, mount } from "@vue/test-utils";
import ProjectList from "@/components/ProjectList.vue";
import ProjectCmp from "@/components/Project.vue";
import { ProjectStatus, Project } from "@/models/project";
import { StateModel } from "@/store/models/state";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("ProjectList.vue", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let vuetify: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let actions: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let getters: any;
  let store: Store<StateModel>;

  beforeEach(() => {
    vuetify = new Vuetify();
    getters = {
      projects: jest.fn(),
      activeProjects: jest.fn(),
      finishedProjects: jest.fn()
    };
    actions = {
      changeProjectStatus: jest.fn()
    };
    store = new Vuex.Store({
      actions,
      getters
    });
  });

  test("should create active project list with pink background color", () => {
    // act
    const wrapper = mount(ProjectList, {
      localVue,
      vuetify,
      store,
      propsData: {
        listType: ProjectStatus.ACTIVE
      }
    });

    // assert
    expect(wrapper.element.classList).toContain("pink");
  });

  test("should create finished project list with indigo background color", () => {
    // act
    const wrapper = mount(ProjectList, {
      localVue,
      vuetify,
      store,
      propsData: {
        listType: ProjectStatus.FINISHED
      }
    });

    // assert
    expect(wrapper.element.classList).toContain("indigo");
  });

  test("should render project list with store getter provided for projects", () => {
    // arrange
    store.hotUpdate({
      getters: {
        activeProjects: (): Project[] => [
          {
            id: "1",
            title: "Test Title",
            description: "Test Description",
            people: 1,
            status: ProjectStatus.ACTIVE
          }
        ]
      }
    });

    // act
    const wrapper = shallowMount(ProjectList, {
      localVue,
      vuetify,
      store,
      propsData: {
        listType: ProjectStatus.ACTIVE
      }
    });

    // assert
    const Projects = wrapper.findAll(ProjectCmp);
    expect(Projects).toHaveLength(1);
  });

  test("Project List should be rendered correctly", () => {
    // act
    const wrapper = shallowMount(ProjectList, {
      localVue,
      vuetify,
      store,
      propsData: {
        listType: ProjectStatus.ACTIVE
      }
    });

    // assert
    expect(wrapper.element).toMatchSnapshot();
  });
});

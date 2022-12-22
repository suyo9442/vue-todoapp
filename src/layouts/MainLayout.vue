<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title> {{ appTitle }} </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-scroll-area style="height: 100%; margin-top: 0px">
        <q-list bordered class="rounded-borders">
          <q-expansion-item
            v-for="(tab, n) in tabs"
            :key="n"
            :icon="tab.icon"
            :label="tab.title"
            :content-inset-level="0.5"
          >
            <q-item
              v-for="(children, i) in tab.children"
              :key="i"
              :to="tab.children[i].to"
              clickable
              v-ripple
            >
              <q-item-section avatar>
                <q-icon color="primary" name="arrow_right" />
              </q-item-section>

              <q-item-section>{{ tab.children[i].title }}</q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import store from "src/store/showcase";
import { computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "MainLayout",

  data() {
    return {
      appTitle: store.state.appTitle,
      num: store.state.num,
      tabs: [
        {
          title: "To Do App",
          icon: "list",
          children: [{ title: "To Do List", to: "/toDoList" }],
        },
        {
          title: "Admin Page",
          icon: "list",
          children: [{ title: "Admin Table", to: "/adminTable" }],
        },
      ],
    };
  },
  computed: {
    mainNumber() {
      return store.getters.addNum;
    },
  },
  components: {},
  setup() {
    const leftDrawerOpen = ref(false);
    const $store = useStore();

    const drawerState = computed({
      get: () => $store.getters["showcase/addNum"],
      set: (val) => $store.commit("showcase/addNum", val),
    });

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      drawerState,
    };
  },
});
</script>

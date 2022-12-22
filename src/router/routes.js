const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/toDoList",
        name: "/ToDoList",
        component: () => import("pages/todoapp/ToDoList.vue"),
      },
      {
        path: "/adminTable",
        name: "/AdminTable",
        component: () => import("pages/adminPage/AdminTable.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

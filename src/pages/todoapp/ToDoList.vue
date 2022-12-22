<template>
  <div>
    <p>To Do List</p>
    <q-card class="my-card q-mb-md q-mr-lg q-ml-lg" padding>
      <q-list>
        <q-item>
          <q-option-group
            v-model="group"
            :options="options"
            color="green"
            type="checkbox"
          />
        </q-item>
      </q-list>
    </q-card>
    <q-input
      outlined
      v-model="text"
      label="할 일을 입력하세요"
      class="q-mb-md q-mr-lg q-ml-lg"
    />
    <q-btn color="primary" label="추가" />
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  data() {
    return {
      todolist: [
        {
          title: "할일 1",
          date: "op1",
        },
      ],
    };
  },
  setup() {
    return {
      group: ref(["op1"], ["op2"]),
      text: ref(""),

      
      options: [
        {
          label: "Option 1",
          value: "op1",
        },
        {
          label: "Option 1",
          value: "op2",
        },
        {
          label: "Option 1",
          value: "op3",
        },
      ],
    };
  },
};
</script>
<style></style>

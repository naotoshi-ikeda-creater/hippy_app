<template>
  <div id="dataBoard">
    <v-card max-width="1200" class="mx-auto">
      <v-toolbar card dense color="transparent">
        <v-toolbar-title> <h3>Doing</h3></v-toolbar-title>
        <!--空間を開ける -->
        <v-spacer></v-spacer>
        <v-menu bottom left>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>settings</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i" @click="showForm">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
      <v-divider></v-divider>
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="desserts"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        :single-select="singleSelect"
        hide-default-footer
        class="elevation-1"
        @page-count="pageCount = $event"
        show-select
        item-key="name"
        id="tableBody"
      >
        <template v-slot:item.progress="{ item }">
          <v-progress-linear
            v-model="item.progress"
            height="24"
            reactive
            color="#1DE9B6"
          >
            <template v-slot="{ value }">
              <strong id="tableBody">{{ Math.ceil(value) }}%</strong>
            </template>
          </v-progress-linear>
        </template>

        <template v-slot:item.action="{ item }">
          <v-btn icon :to="'/detail/' + item.uri">
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn icon :to="'/stats/' + item.uri">
            <v-icon>delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>

      <div class="text-center pt-2">
        <v-pagination
          v-model="page"
          :length="pageCount"
          color="#00BFA5"
        ></v-pagination>
        <v-text-field
          :value="itemsPerPage"
          label="Items per page"
          type="number"
          min="-1"
          max="15"
          @input="itemsPerPage = parseInt($event, 10)"
        ></v-text-field>
      </div>
    </v-card>
  </div>
</template>

<script>
import "vue-progress-path/dist/vue-progress-path.css";
import VueProgress from "vue-progress-path";

// var element = document.getElementById("items");
// var sortable = Sortable.create(element);

export default {
  data() {
    return {
      selected: [],
      singleSelect: true,
      items: [
        { title: "リスト名の変更" },
        {
          title: "配色の変更"
        }
      ],
      page: 1,
      pageCount: 0,
      itemsPerPage: 3,
      headers: [
        {
          text: "Task's name",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "deadline", value: "deadline", width: "15%", align: "left" },
        { text: "progress", value: "progress", width: "36%", align: "left" },
        { text: "action", value: "action", align: "center" }
      ],
      desserts: [
        {
          id: "",
          name: "Frozen Yogurt",
          deadline: "2020/12/12",
          progress: 90
        },
        {
          id: "",
          name: "Frozen Yogurt",
          deadline: "2020/12/12",
          progress: 30
        },
        {
          id: "",
          name: "Frozen Yogurt",
          deadline: "2020/12/12",
          progress: 20
        },
        {
          id: "",
          name: "Frozen Yogurt",
          deadline: "2020/12/12",
          progress: 12
        },
        {
          id: "",
          name: "Frozen Yogurt",
          deadline: "2020/12/12",
          progress: 56
        },
        {
          id: "",
          name: "Frozen Yogurt",
          deadline: "2020/12/12",
          progress: 10
        },
        {
          id: "",
          name: "Frozen Yogurt",
          deadline: "2020/12/12",
          progress: 34
        },
        {
          id: "",
          name: "Frozen Yogurt",
          deadline: "2020/12/12",
          progress: 80
        }
      ]
    };
  },
  methods: {
    showForm() {}
  }
};
</script>

<style lang="scss">
#dataBoard {
  margin: 20px;
}
.vue-progress-path path {
  stroke-width: 12;
}
.vue-progress-path .progress {
  stroke: red;
}
.vue-progress-path .background {
  stroke: #edd;
}
</style>

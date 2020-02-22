<template>
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
    <!--線を入れる -->
    <!-- ここまでがヘッダー  -->

    <v-card-text>
      <template>
        <v-data-table :headers="headers">
          <!--ここにデータのやりとりの詳細をかく -->
          <template slot="items" slot-scope="">
            <td>checkbox</td>
            <td>name</td>
            <td>deadline</td>
            <td>
              <v-progress-linear></v-progress-linear>
              <!-- 進捗具合の可視化 -->
            </td>
            <td>
              <v-button flat icon class="grey">
                <v-icon>edit</v-icon>
                <!--　編集ボタン -->
              </v-button>
              <v-button flat icon class="grey">
                <v-icon>delete</v-icon>
                <!-- 削除ボタン -->
              </v-button>
            </td>
          </template>
        </v-data-table>
      </template>
      <v-divider></v-divider>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "リスト名の変更" },
        {
          title: "配色の変更"
        }
      ],
      selected: [],
      headers: [
        {
          text: "Done",
          align: "center",
          sortable: false,
          value: "checkbox"
        },
        {
          text: "Name",
          align: "left",
          value: "name"
        },
        {
          text: "Deadline",
          value: "deadline"
        },
        {
          text: "Progress",
          value: "value"
        },
        {
          text: "Action",
          align: "right",
          value: "action"
        }
      ]
    };
  },
  methods: {
    showForm() {}
  },

  computed: {
    tasklist() {
      return {
        tasklist: [
          {
            name: "GoでのAPI認証",
            deadline: "2020/4/10",
            progress: 20
          },
          {
            name: "Vue.jsでログイン画面の実装",
            deadline: "2020/3/10",
            progress: 90
          },
          {
            name: "GoでのAPI認証",
            deadline: "2020/4/10",
            progress: 20
          },
          {
            name: "GoでのAPI認証",
            deadline: "2020/4/10",
            progress: 20
          },
          {
            name: "GoでのAPI認証",
            deadline: "2020/4/10",
            progress: 20
          }
        ]
      };
    }
  }
};
</script>

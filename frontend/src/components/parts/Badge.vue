<template>
  <div id="app">
    <v-app id="inspire">
      <p>選択されたテーブル見出し：{{ selected }}</p>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :pagination.sync="pagination"
        select-all
        item-key="name"
        class="elevation-1"
      >
        <template v-slot:headers="props">
          <tr id="sort_key">
            <th
              v-for="header in props.headers"
              :key="header.text"
              :class="[
                'column sortable',
                pagination.descending ? 'desc' : 'asc',
                header.value === pagination.sortBy ? 'active' : ''
              ]"
            >
              <v-checkbox
                v-model="selected"
                :value="header.value"
                :label="header.text"
                primary
                hide-details
                class="myCheckBox"
              ></v-checkbox>
              <v-icon small @click="changeSort(header.value)"
                >arrow_upward</v-icon
              >
            </th>
          </tr>
        </template>
        <template v-slot:items="props">
          <tr>
            <td v-for="header in headers">{{ props.item[header.value] }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-app>
  </div>
</template>

<script>
export default {
    data(){
        return {
            pagination: {
      sortBy: 'name'
    },
    selected: [],
    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'left',
        value: 'name'
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Iron (%)', value: 'iron' }
    ],
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%'
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%'
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%'
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%'
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%'
      },
      {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0%'
      },
      {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2%'
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45%'
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22%'
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6%'
      }
    ]
  }
  mounted () {
    this.$nextTick(() => {
      const element = document.getElementById('tableBody')
      const _self = this
      Sortable.create(element, {
        onEnd({ newIndex, oldIndex }) {
          const rowSelected = _self.desserts.splice(oldIndex, 1)[0]
          _self.desserts.splice(newIndex, 0, rowSelected)
        }
      })
    })
  },
  methods: {
    toggleAll () {
      if (this.selected.length) this.selected = []
      else this.selected = this.desserts.slice()
    },
    changeSort (column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    }
  }
})
        }
    }
}
</script>

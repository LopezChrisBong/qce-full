<template>
    <div>
      <!-- <table id="datatable" class="w-full mx-auto table-fixed mt-5">
        <tr>
          <slot name="labels">
            <th v-for="(label, labelIndex) in labels" :key="labelIndex" :class=" label.field == 'action' ? 'text-center w-1/5' : label.field == 'Research Title' ? 'text-center w-2/5' : 'w-auto' " class=" font-poppins text-xs text-left bg-customGreen font-medium text-white px-6 py-3 " >
              {{ label.text }}
            </th>
          </slot>
        </tr>
        <tbody>
          <tr v-if="formdata.length == 0" class=" bg-grey-100 border-b border-l border-r border-gray-400 transition duration-300 ease-in-out " >
            <td :colspan="labels.length" class=" text-center font-poppins text-xs text-gray-500 italic border-b border-l border-r border-gray-400 " > No data found. </td>
          </tr>
  
          <tr v-else v-for="(item, itemIndex) in formdata" :key="itemIndex" :class="notifField ? item[`${notifField}`] == notifID ? 'bg-gray-200' : '' : ''" class=" bg-grey-100 border-b border-l border-r border-t border-gray-400 transition duration-300 ease-in-out " >
            <td
              class="
                text-xs text-gray-600
                font-poppins font-light
                px-6
                py-3
                border
                
                text-justify
              "
              valign="top"
              v-for="(label, labelIndex) in labels"
              :key="labelIndex"
              :data="label.field"
              :class="
                label.field == 'action'
                  ? 'grid md:flex sm:flex xl:flex lg:flex justify-evenly items-center whitespace-normal'
                  : label.field == 'Research Title'
                  ? 'text-justify break-words whitespace-normal'
                  : 'break-all whitespace-normal'
              "
            >
              <slot  :name="`${label.field}`" v-bind:item="item">
               {{ item[label.field] }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table> -->
      <table :id="idName" class="w-full mx-auto table-fixed md:mt-5">
        <tr>
          <slot name="labels">
            <th v-for="(label, labelIndex) in labels" :key="labelIndex" :class="label.field == 'action'
                ? 'text-center w-1/5'
                : label.field == 'Research Title'
                  ? 'text-center w-2/5'
                  : 'w-auto'
              " @click="sortTable(labelIndex)" class="
                  cursor-pointer
                  font-poppins
                  text-xs text-left
                  bg-customGreen
                  font-medium
                  text-white
                  px-5
                  md:py-3
                ">
              {{ label.text }}
            </th>
          </slot>
        </tr>
        <!-- DESKTOP VIEW -->
        <tbody>
          <tr v-if="formdata.length == 0"
            class="bg-grey-100 border-b border-l border-r border-t border-gray-400 transition duration-300 ease-in-out pl-0 hover:bg-gray-100">
            <td :colspan="labels.length"
              class=" text-center font-poppins text-xs text-gray-500 italic md:border-b md:border-l md:border-r md:border-t md:border-gray-400 p-3 md:p-3">
              No data found.
            </td>
          </tr>
  
          <tr v-else v-for="(item, itemIndex) in formdata" :key="itemIndex"
            :class="notifField ? item[`${notifField}`] == notifID ? 'bg-gray-200' : '' : ''"
            class=" bg-grey-100 border-b border-l border-r border-t border-gray-400 transition duration-300 ease-in-out md:mt-0 hover:bg-gray-100">
            <td
              class=" text-xs text-gray-600 font-poppins font-light px-5 py-2 md:py-2 lg:py-2 xl:py-2 text-justify withData "
              valign="center" v-for="(label, labelIndex) in labels" :key="labelIndex" :data="label.text"
              :class="label.field == 'action' ? 'grid md:flex sm:flex xl:flex lg:flex justify-evenly items-center whitespace-normal' : label.field == 'Research Title' ? 'text-justify break-words whitespace-normal' : 'break-words whitespace-normal'">
              <slot :name="`${label.field}`" v-bind:item="item">
                {{ item[label.field] == '' || item[label.field] == null ? '-' : item[label.field] }}
  
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      labels: Array,
      data: Array,
      notifField: String,
      notifID: String,
      idName: String
    },
  
    data() {
      return {
        formdata: [],
        labels_data: [],
        name_of_id: null,
        ascending: false,
        sortColumn: '',
      };
    },
    methods: {
      sortTable(d) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById(this.name_of_id);
        switching = true;
        dir = 'asc';
        while (switching) {
          switching = false;
          rows = table.rows;
          for (i = 1; i < (rows.length - 1); i++) { 
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[d];
            y = rows[i + 1].getElementsByTagName("TD")[d];
            if (dir == "asc") {
              if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                // If so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
              }
            }
            else if (dir == "desc") { 
              if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                // If so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
              }
            }
          }
          if (shouldSwitch) { 
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
          }
          else {
            if (switchcount == 0 && dir == "asc") {
              dir = "desc";
              switching = true;
            }
          }
        }
      }
    },
  
  
    watch: {
      data: {
        handler(val) {
          this.formdata = val;
          // console.log(val);
        },
        immediate: true,
      },
      labels: {
        handler(val) {
          this.labels_data = val;
        },
        immediate: true,
      },
      idName: {
        handler(val) {
          this.name_of_id = val;
        },
        immediate: true,
      },
    },
  };
  </script>
  
  <style scoped>
  @media only screen and (max-width: 800px) {
  
    #datatable table,
    #datatable thead,
    #datatable tbody,
    #datatable .withData,
    #datatable tr {
      display: block;
    }
  
    #datatable tr th {
      display: none;
      border-top-color: green;
    }
  
    #datatable thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
  
    #datatable .withData {
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
      white-space: normal;
      text-align: left;
    }
  
    #datatable .withData:before {
      position: absolute;
      /* Top/left values mimic padding */
      top: 6px;
      left: 6px;
      width: 45%;
      padding-left: 10px;
      white-space: nowrap;
      text-align: left;
      font-weight: bold;
    }
  
    #datatable .withData:before {
      content: attr(data);
      text-transform: uppercase;
    }
  
  }
  
  /* top-left border-radius */
  table tr:first-child th:first-child {
    border-top-left-radius: 6px !important;
  }
  
  /* top-right border-radius */
  table tr:first-child th:last-child {
    border-top-right-radius: 6px !important;
  }
  
  /* bottom-left border-radius */
  table tr:last-child td:first-child {
    border-bottom-left-radius: 6px !important;
  }
  
  /* bottom-right border-radius */
  table tr:last-child td:last-child {
    border-bottom-right-radius: 6px !important;
  }
  </style>
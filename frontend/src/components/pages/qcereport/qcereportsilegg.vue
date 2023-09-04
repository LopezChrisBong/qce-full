
<template>
      <SidebarmobVue />
    <div class="flex">
        <div class="container mx-auto mt-12">
              <div class="grid grid-cols-2 gap-6 mb-6 lg:grid-cols-4">
                  <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div class="grid grid-rows-3 grid-flow-col gap-">
                    <div class="row-span-3 bg-green-500 border rounded-md h-16 w-16 -mr-16"> </div>
                      <div class="mt-1 text-xl font-semibold text-gray-900">
                          Students
                      </div>
                      <div class="text-sm font-medium text-gray-500 truncate">
                        6,230 Evaluators
                      </div> </div>
                      <div class="mt-1 text-3xl font-semibold text-gray-900">
                        6,230 <span class="text-sm font-medium text-green-500 truncate">100%</span> 
                      </div>
                     
                      <div class="text-sm font-medium bg-green-500 truncate line-fill rounded-sm">
                        s
                      </div>
                      
                  </div>
                  <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div class="grid grid-rows-3 grid-flow-col gap-">
                    <div class="row-span-3 bg-blue-500 border rounded-md h-16 w-16 -mr-16"> </div>
  
                      <div class="mt-1 text-xl font-semibold text-gray-900">
                          Peer
                      </div>
                      <div class="text-sm font-medium text-gray-500 truncate">
                        63 Evaluators
                      </div>
                    </div>
                      <div class="mt-1 text-3xl font-semibold text-gray-900">
                        63 <span class="text-sm font-medium text-green-500 truncate">100%</span> 
                      </div>
                      <div class="text-sm font-medium bg-blue-500 truncate line-fill rounded-sm">
                        s
                      </div>
                  </div>
                  <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div class="grid grid-rows-3 grid-flow-col gap-">
                    <div class="row-span-3 bg-orange-500 border rounded-md h-16  w-16 -mr-16"> </div>
                      <div class="mt-1 text-xl font-semibold text-gray-900">
                          Self
                      </div>
                      <div class="text-sm font-medium text-gray-500 truncate">
                        121 Evaluators
                      </div>
                      </div>
                      <div class="mt-1 text-3xl font-semibold text-gray-900">
                        121 <span class="text-sm font-medium text-green-500 truncate">100%</span> 
                      </div>
                      <div class="text-sm font-medium bg-orange-500 truncate line-fill rounded-sm">
                        s
                      </div>
                  </div>
                  <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div class="grid grid-rows-3 grid-flow-col gap-">
                    <div class="row-span-3 bg-violet-500 border rounded-md h-16 w-16 -mr-16"> </div>
                      <div class="mt-1 text-xl font-semibold text-gray-900">
                          Supervisor
                      </div>
                      <div class="text-sm font-medium text-gray-500 truncate">
                        4 Evaluators
                      </div>
                      </div>
                      <div class="mt-1 text-3xl font-semibold text-gray-900">
                        4 <span class="text-sm font-medium text-green-500 truncate">100%</span> 
                      </div>
                      <div class="text-sm font-medium bg-violet-500 truncate line-fill rounded-sm">
                        s
                      </div>
                  </div>
              </div>
              <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                  <div class="flex justify-between bg-gray-100 py-3 rounded-lg">
                    
                    <div class="flex  w-15 h-8 bg-white ml-4 mt-1 rounded-lg"> 
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="ml-5"><rect width="256" height="256" fill="none"/><circle cx="116" cy="116" r="84" fill="none" stroke="#004" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/></svg>
  
                                <input type="text" placeholder="Search"  class="rounded-lg pr-16 text-lg pl-2 tex"> </div>
                    <div class=""><Button class="btn mr-4"> <Icon :name="'filter'"/>Filter</Button></div>
                  </div>
                  <div class=" flex justify-center">
                    <table class="table-fixed">
                        <thead>
                          <tr>
                            <th >Faculty Name</th>
                            <th >Student <br>
                                30%  </th>
                            <th >Peer <br>
                                20%</th>
                            <th >Self <br>
                              20%</th>
                              <th >Supervisor <br>
                              30%</th>
                              <th></th>
                          </tr>
                          
                        </thead>
                        <tbody>
                          <tr>
                            
                            <td>Faculty 1</td>
                            <td>30%</td>
                            <td>20%</td>
                            <td>20%</td>
                            <td>30% </td>
                            <td><a href="FacultyReportilegg" class="bg-green-600 px-1 py-1 text-center text-xs py-2 px-2 rounded-md shadow-md hover:bg-green-400 text-[#fff]  ">View Evaluator</a></td>
                          </tr>
                          <tr>
                            
                            <td>Faculty 2</td>
                            <td>30%</td>
                            <td>20%</td>
                            <td>20%</td>
                            <td>30% </td>
                            <td><a href="FacultyReportilegg" class="bg-green-600 px-1 py-1 text-center text-xs py-2 px-2 rounded-md shadow-md hover:bg-green-400 text-[#fff]  ">View Evaluator</a></td>

  
                          </tr>
                          <tr>
                            <td>Faculty 3</td>
                            <td>30%</td>
                            <td>20%</td>
                            <td>20%</td>
                            <td>30% </td>
                            <td><a href="FacultyReportilegg" class="bg-green-600 px-1 py-1 text-center text-xs py-2 px-2 rounded-md shadow-md hover:bg-green-400 text-[#fff]  ">View Evaluator</a></td>

  
                          </tr>
                          <tr>
                            <td>Faculty 4</td>
                            <td>30%</td>
                            <td>20%</td>
                            <td>20%</td>
                            <td>30% </td>
                            <td><a href="FacultyReportilegg" class="bg-green-600 px-1 py-1 text-center text-xs py-2 px-2 rounded-md shadow-md hover:bg-green-400 text-[#fff]  ">View Evaluator</a></td>

                          </tr>
                           <tr>
                            <td>Faculty 5</td>
                            <td>30%</td>
                            <td>20%</td>
                            <td>20%</td>
                            <td>30% </td>
                            <td><a href="FacultyReportilegg" class="bg-green-600 px-1 py-1 text-center text-xs py-2 px-2 rounded-md shadow-md hover:bg-green-400 text-[#fff]  ">View Evaluator</a></td>

                          </tr>
                        </tbody>
                      </table>
                  </div>
              </div>
        </div>
    </div> 
  
  
  </template>
  <script>
  import Icon from '../../icon.vue'    
  import SidebarmobVue from '../navigation/sidebarmob.vue'
            
  export default {
    components: {
      Icon,
      SidebarmobVue
    },
    methods: {
      view(){
        
      }
    },
    data(){
      return{isHidden:false}
    }
  }
  </script>
  
  <style>
  .line-fill{
    width: 100%;
    height: 5px;
  }
  table {
    width: 100%;
    text-align: center;
    
  }
  table th{
    text-align: center;
    border-bottom: solid 1px;
    border-color:rgb(227, 227, 227);
  }
  table tr{
    border-bottom: solid 1px;
    border-color:rgb(227, 227, 227);
  }
  table td{
    padding: 1rem;
    align-content: right;
  }
  
  
  </style>
  
<html>

    <head>
        <meta http-equiv="Content-Language" content="en-us">
        <meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
        <meta name="GENERATOR" content="Microsoft FrontPage 4.0">
        <meta name="ProgId" content="FrontPage.Editor.Document">
        <meta charset="UTF-8" /> 
        <title>STUDENTS</title>
        <script>document.domain = /(\w+)(.\w+)?$/.exec(location.hostname)[0];</script>
        <!-- Vue.js -->
        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>

        <!-- Bootstrap -->
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <!-- JavaScript Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>

        <!-- Bootstrap Icons -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">

        <!-- Axios -->
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

        <!-- Google fonts -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />

        <style>
            /* Background Colors */
            .bg-blue {
                background-color: #31599C;
            }

            .bg-gray {
                background-color: #DBDBDB;
            }

            /* Text Colors */
            .text-white {
                color: #FFFFFF;
            }

            .text-blue {
                color: #31599C;
            }

            .text-green {
                color: #008051;
            }

            .text-gray {
                color: #C1C1C1;
            }

            .text-red {
                color: #FF0000;
            }

            /* Font Weights */
            .font-weight-700 {
                font-weight: 700;
            }

            .font-weight-800 {
                font-weight: 800;
            }

            /* Font Sizes */
            .font-size-12 {
                font-size: 12px;
            }

            .font-size-14 {
                font-size: 14px;
            }

            .font-size-13 {
                font-size: 13px;
            }

            .font-size-15 {
                font-size: 15px;
            }

            .font-size-50 {
                font-size: 40px;
            }

            /* Progress Bar Styles */
            .progress,
            .progress-bar.progress-bar-striped.progress-bar-animated {
                height: 0.5rem;
                width: 100%;
            }

            /* Other Styles */
            .line-height-18 {
                line-height: 18px;
            }

            .btn-download,
            .btn-download:hover,
            .btn-download:active,
            .btn-download:focus {
                background-color: #31599C;
                color: #FFFFFF;
                border-radius: 20px !important;
            }

            .btn-download:disabled {
                background-color: #5681ca;
                color: #FFFFFF;
            }

            .btn-light:disabled {
                background-color: #DEDEDE;
            }

            .no-border-right {
                border-right: #FFFFFF !important;
            }

            .table-scrollable { 
                overflow-y: auto; 
                height: 100%;
                max-height: 500px; 
            }

            .table-scrollable thead {
                position: sticky; 
                top: 0; 
                z-index: 1; 
            }

            .d-flex-gap {
              display: flex;
              gap: 10px;
            }
        </style>
    </head>
    <body> 
    
    <div align="center">
      <center>
    
        <table border="0" width="760" cellspacing="0" cellpadding="0" style="margin-top: 50; margin-bottom: 0">
            <tr>
                <td width="100%">
                <h1 style="margin-top: 0; margin-bottom: 0"><b>STUDENTS</b></h1>
                </td>
            </tr>
        </table>
    
      </center>
    </div>
    
    
    <div id="studentsApp" class="container mb-3" style="width: 760;">
        <div v-if="has_error" class="row mt-3">
            <h1 class="px-0 text-red font-size-12 font-weight-700">There was a problem with your request. <a href="#" @click="refreshPage">Click here to refresh the page.</a></h1>
        </div>

        <div class="row">
          <div class="col-md-12 py-1 font-weight-700">
              <div class="row">
                <h3 class="mb-0 px-1 mb-2">Create New Student</h3>
                <div class="col-md-6 px-1">
                  <label for="firstName">First Name</label>
                  <input type="text" id="firstName" class="form-input" v-model="firstName">
                </div>
                <div class="col-md-6 px-1">
                  <label for="middleName">Middle Name</label>
                  <input type="text" id="middleName" class="form-input" v-model="middleName">
                </div>
                <div class="col-md-6 px-1">
                  <label for="lastName">Last Name</label>
                  <input type="text" id="lastName" class="form-input" v-model="lastName">
                </div>
                <div class="col-md-6 px-1">
                  <label for="suffix">Suffix</label>
                  <input type="text" id="suffix" class="form-input" v-model="suffix">
                </div>
                <div class="col-md-6 px-1">
                  <label for="studentNumber">Student Number</label>
                  <input type="text" id="studentNumber" class="form-input" v-model="studentNumber">
                </div>
              </div>
              <button class="btn btn-primary py-1" type="button" :disabled="has_error" @click="addStudent()">Submit</button>
          </div>
        </div>

        <div class="row mt-2" v-if="!has_error">
          <div class="col-md-8 px-0 mx-0">
            <!-- If there are generated reports -->
            <div class="border table-scrollable" v-if="students.length > 0">
              <table class="table align-middle mb-0">
                <thead class="text-white bg-blue font-size-13 text-center">
                  <th>Student Number</th>
                  <th>Full Name</th>
                  <th></th>
                </thead>
                <tbody class="font-size-13">
                  <tr class="text-center" v-for="student in students" :key="student.id">
                    <td class="py-2">{{student.studentNumber}}</td>
                    <td class="py-2">{{student.lastName}}, {{student.firstName}} {{student.middleName}} {{student.suffix}}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- If there are no generated reports -->
              <div v-if="students.length = 0">
                <div class="text-center text-gray">
                  <i class="bi bi-file-earmark-x-fill font-size-50"></i>
                  <p class="mt-1 font-size-13">There are no students yet. Create a <strong>student</strong> by filling up the form above and click the <strong>Submit</strong> button
                    to create one.</p>
                </div>
              </div>

          </div>
        </div>
    </div>

    <script>
        new Vue({
          el: "#studentsApp",
          data: {
            api_url: 'https://students-api-template.onrender.com',
            students: [],
            has_error: null,
            firstName: "", 
            middleName: "", 
            lastName: "", 
            suffix: "", 
            studentNumber: ""
          },
          watch: {
            // has_in_progress(newValue, oldValue) {
            //   if(newValue === true) {
            //     setTimeout(() => {
            //       window.location.href = window.location.href.split("?")[0];
            //     }, 5000)
            //   }
            // }
          },
          methods: {
            async refreshPage() {
              window.location.href = window.location.href.split("?")[0];
            },
            async getStudents() {
              try {

                // Get List of Students
                this.students = await axios.get(`${this.api_url}/students`)

              } catch (error) {
                if(error) this.has_error = true
              }
            },
            async addStudent() {
              try {

                  // Post Axios
                  const body = { 
                    firstName: this.firstName, 
                    middleName: this.middleName, 
                    lastName: this.lastName, 
                    suffix: this.suffix, 
                    studentNumber: this.studentNumber 
                  }

                  await axios.post(`${this.api_url}/students`, this.postBody)

                  // Refetch Student List
                  await this.getStudents()
                  
              } catch(error) {
                if(error) this.has_error = true
              }
            },
            async updateStudent(id, firstName, middleName, lastName, suffix, studentNumber) {
              try {

                // Put Axios
                const body = { firstName, middleName, lastName, suffix, studentNumber }
                await axios.post(`${this.api_url}/students/${id}`, body)

                // Refetch Student List
                await this.getStudents()
                  
              } catch(error) {
                console.log(error)
                if(error) this.has_error = true
              }
            },
            async deleteStudent(id) {
              try {

                // Delete Axios
                await axios.delete(`${this.api_url}/students/${id}`)

                // Refetch Student List
                await this.getStudents()
                
              } catch (error) {
                console.log(error)
                if(error) this.has_error = true
              }
            }
          },
          async mounted() {
            this.getStudents()
          }
        })
      </script>
    
    </body>
    
  </html>

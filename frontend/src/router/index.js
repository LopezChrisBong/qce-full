import {createRouter, createWebHistory } from 'vue-router'
import store from '../store';
import Home from '../components/pages/home.vue'
import Nav from '../components/pages/navigation/qce_nav.vue'
import Response from '../components/pages/response.vue'
import ResponseForm from '../components/pages/response_form.vue'
import Evaluation from '../components/pages/qce_evaluation.vue'
import Commitment from '../components/pages/commitment/commitment.vue'
import Commitmentq2 from '../components/pages/commitment/commitmentq2.vue'
import Commitmentq3 from '../components/pages/commitment/commitmentq3.vue'
import Commitmentq4 from '../components/pages/commitment/commitmentq4.vue'
import Commitmentq5 from '../components/pages/commitment/commitmentq5.vue'
import Knowledge from '../components/pages/knowledge/knowledge.vue'
import Knowledgeq2 from '../components/pages/knowledge/knowledgeq2.vue'
import Knowledgeq3 from '../components/pages/knowledge/knowledgeq3.vue'
import Knowledgeq4 from '../components/pages/knowledge/knowledgeq4.vue'
import Knowledgeq5 from '../components/pages/knowledge/knowledgeq5.vue'
import Independent from '../components/pages/Independent/independent.vue'
import Independentq2 from '../components/pages/Independent/independentq2.vue'
import Independentq3 from '../components/pages/Independent/independentq3.vue'
import Independentq4 from '../components/pages/Independent/independentq4.vue'
import Independentq5 from '../components/pages/Independent/independentq5.vue'
import Management from '../components/pages/Management/management.vue'
import Managementq2 from '../components/pages/Management/managementq2.vue'
import Managementq3 from '../components/pages/Management/managementq3.vue'
import Managementq4 from '../components/pages/Management/managementq4.vue'
import Managementq5 from '../components/pages/Management/managementq5.vue'
import Comments from '../components/pages/comments.vue'
import Review from '../components/pages/review.vue'
import QCEReportiaas from '../components/pages/qcereport/qcereportsiaas.vue'
import QCEReportic from '../components/pages/qcereport/qcereportsic.vue'
import QCEReportilegg from '../components/pages/qcereport/qcereportsilegg.vue'
import QCEReportited from '../components/pages/qcereport/qcereportsited.vue'
import FacultyReportiaas from '../components/pages/facultyreport/facultyreportiaas.vue'
import FacultyReportic from '../components/pages/facultyreport/facultyreportic.vue'
import FacultyReportilegg from '../components/pages/facultyreport/facultyreportilegg.vue'
import FacultyReportited from '../components/pages/facultyreport/facultyreportited.vue'
import Pdfreport from '../components/pages/pdfreport.vue'
import Choose from '../components/pages/choose.vue'
import Quiz from '../components/pages/quiz.vue'
import Tables from '../components/pages/Table.vue'
import PrintReport from '../components/pages/printreport.vue'
import Login from '../components/views/login.vue'
import SignUp from '../components/views/signup.vue'
import Google from '../components/views/google.vue'

const routes =[
    {
        path: '/',
        name: 'Login',
        component: Login,
        meta: {requiresVisitor: true},
        
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {requiresLogin: true},
       
    },
    
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
        meta: {requiresAuth: true},

    },
    {
        path: '/nav',
        name: 'Nav',
        component: Nav,
        meta: {requiresAuth: true},
    },
    {
        path: '/response',
        name: 'Response',
        component: Response,
        meta: {requiresAuth: true},
    },
    {
        path: '/response_form',
        name: 'ResponseForm',
        component: ResponseForm,
        meta: {requiresAuth: true},
    },
    {
        path: '/qceevaluation',
        name: 'Evaluate',
        component: Evaluation,
        meta: {requiresAuth: true},
    },
    {
        path: '/commitment',
        name: 'Commitment',
        component: Commitment,
        meta: {requiresAuth: true},
    },
    {
        path: '/commitmentq2',
        name: 'Commitmentq2',
        component: Commitmentq2,
        meta: {requiresAuth: true},
    },
    {
        path: '/commitmentq3',
        name: 'Commitmentq3',
        component: Commitmentq3,
        meta: {requiresAuth: true},
    },
    {
        path: '/commitmentq4',
        name: 'Commitmentq4',
        component: Commitmentq4,
        meta: {requiresAuth: true},
    },
    {
        path: '/commitmentq5',
        name: 'Commitmentq5',
        component: Commitmentq5,
        meta: {requiresAuth: true},
    },
    {
        path: '/knowledge',
        name: 'Knowledge',
        component: Knowledge,
        meta: {requiresAuth: true},
    },
    {
        path: '/knowledgeq2',
        name: 'Knowledgeq2',
        component: Knowledgeq2,
        meta: {requiresAuth: true},
    },
    {
        path: '/knowledgeq3',
        name: 'Knowledgeq3',
        component: Knowledgeq3,
        meta: {requiresAuth: true},
    },
    {
        path: '/knowledgeq4',
        name: 'Knowledgeq4',
        component: Knowledgeq4,
        meta: {requiresAuth: true},
    },
    {
        path: '/knowledgeq5',
        name: 'Knowledgeq5',
        component: Knowledgeq5,
        meta: {requiresAuth: true},
    },
    {
        path: '/independent',
        name: 'Independent',
        component: Independent,
        meta: {requiresAuth: true},
    },
    {
        path: '/independentq2',
        name: 'Independentq2',
        component: Independentq2,
        meta: {requiresAuth: true},
    },
    {
        path: '/independentq3',
        name: 'Independentq3',
        component: Independentq3,
        meta: {requiresAuth: true},
    },
    {
        path: '/independentq4',
        name: 'Independentq4',
        component: Independentq4,
        meta: {requiresAuth: true},
    },
    {
        path: '/independentq5',
        name: 'Independentq5',
        component: Independentq5,
        meta: {requiresAuth: true},
    },
    {
        path: '/management',
        name: 'Management',
        component: Management,
        meta: {requiresAuth: true},
    },
    {
        path: '/managementq2',
        name: 'Managementq2',
        component: Managementq2,
        meta: {requiresAuth: true},
    },
    {
        path: '/managementq3',
        name: 'Managementq3',
        component: Managementq3,
        meta: {requiresAuth: true},
    },
    {
        path: '/managementq4',
        name: 'Managementq4',
        component: Managementq4,
        meta: {requiresAuth: true},
    },
    {
        path: '/managementq5',
        name: 'Managementq5',
        component: Managementq5,
        meta: {requiresAuth: true},
    },
    {
        path: '/comments',
        name: 'Comments',
        component: Comments,
        meta: {requiresAuth: true},

    },
    {
        path: '/review',
        name: 'Review',
        component: Review,
        meta: {requiresAuth: true},
    },
    {
        path: '/qcereportiaas',
        name: 'QCEReportiaas',
        component: QCEReportiaas,
        meta: {requiresAuth: true},
    }, 
    {
        path: '/qcereportic',
        name: 'QCEReportic',
        component: QCEReportic,
        meta: {requiresAuth: true},
    }, 
    {
        path: '/qcereportited',
        name: 'QCEReportited',
        component: QCEReportited,
        meta: {requiresAuth: true},
    }, 
    {
        path: '/qcereportilegg',
        name: 'QCEReportilegg',
        component: QCEReportilegg,
        meta: {requiresAuth: true},
    }, 
    {
        path: '/facultyreportiaas',
        name: 'FacultyReportiaas',
        component: FacultyReportiaas,
        meta: {requiresAuth: true},
    }, 
  
    {
        path: '/facultyreportilegg',
        name: 'FacultyReportilegg',
        component: FacultyReportilegg,
        meta: {requiresAuth: true},
    }, 
    {
        path: '/facultyreportic',
        name: 'FacultyReportic',
        component: FacultyReportic,
        meta: {requiresAuth: true},
    }, 
    {
        path: '/facultyreportited',
        name: 'FacultyReportited',
        component: FacultyReportited,
        meta: {requiresAuth: true},
    }, 
    {
        path: '/pdfreport',
        name: 'Pdfreport',
        component: Pdfreport,
        meta: {requiresAuth: true},
    }, 
    {
        path: '/choose',
        name: 'Choose',
        component: Choose,
        meta: {requiresAuth: true},
    }, 
    {
        path: '/quiz',
        name: 'Quiz',
        component: Quiz,
        meta: {requiresAuth: true},
    }, 
    {
        path: '/tables',
        name: 'Tables',
        component: Tables,
        meta: {requiresAuth: true},
    }, 
    {
        path: '/printreport',
        name: 'PrintReport',
        component: PrintReport,
        meta: {requiresAuth: true},
    }, 
    {
        path: '/Google',
        name: 'Google',
        component: Google,
        meta: {requiresAuth: true},
    }, 

]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    console.log(to);
    console.log(from);
    let user =localStorage.getItem('access_token');
    console.log(user)
    // console.log(store.state.user)
    // console.log(record.meta.requiresAuth)
    // if (to.matched.some(record => record.meta.requiresAuth)){
    //     if(routerAuthCheck){
    //         next();
    //     }
    //     else{
    //         next('/')
    //     }
    // }
    // else{
    //   next();
    // }
    // if (to.meta.requiresAuth && !user){
    //     router.replace({path: '/'});
    //     return
    // }
    if (to.matched.some((record) => record.meta.requiresLogin)) {
        if (!user) {
          next({ path: "/" });
        } 
        else {
          next();
        }
      } 
      // if user is logged in and go to log in page redirect them to home page
      else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (user) {
          next({ path: '/home'});
        }
        else {
          next();
        }
      }
      // 
      else {
        next();
      }
    
  });
// router.beforeEach((to, from, next) => {
//     let user = store.state.user;
//     console.log(user)
//     if (to.meta.requireAuth) {
//      const token = localStorage.getItem('access_token');
//      if (token && token !== 'null') {
//       next();
//      } else {
//       next('/login');
//      }
//     } else {
//      next();
//     }
//    });


export default router
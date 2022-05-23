import MainPage from "@/pages/MainPage";
import AuthPage from "@/components/AuthPage";
import ShowTable from "@/pages/ShowTable";
import CarsPage from "@/pages/CarsPage";
import ContractsTable from "@/pages/ContractsTable";
import TableStudents from "@/pages/TableStudents";
import TeachersTable from "@/pages/TeachersTable";

export default [
    {path: '/', component: MainPage},
    {path: '/tableShow', component: ShowTable},
    {path: '/auth', component: AuthPage},
    {path:'/cars',component: CarsPage},
    {path: '/contracts', component: ContractsTable},
    {path: '/students', component: TableStudents},
    {path: '/teachers', component: TeachersTable}
]
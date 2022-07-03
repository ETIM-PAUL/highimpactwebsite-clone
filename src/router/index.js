import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/IndexPage.vue";
import AboutUs from "@/views/AboutUs.vue";
import BizTrans from "@/views/BizTrans.vue";
import ExecEdu from "@/views/ExecEdu.vue";
import CvServices from "@/views/CvServices.vue";
import RecruitEmp from "@/views/RecruitEmp.vue";
import AgileFun from "@/views/Courses/AgileFun.vue";
import BizAna from "@/views/Courses/BizAna.vue";
import DataAna from "@/views/Courses/DataAna.vue";
import CyberSec from "@/views/Courses/CyberSec.vue";
import DigMar from "@/views/Courses/DigMar.vue";
import ProjMan from "@/views/Courses/ProjMan.vue";
import ProMan from "@/views/Courses/ProMan.vue";
import SoftEng from "@/views/Courses/SoftEng.vue";
import UserXpr from "@/views/Courses/UserXpr.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about-us",
      name: "about-us",
      component: AboutUs,
    },
    {
      path: "/business-transformation",
      name: "business-transformation",
      component: BizTrans,
    },
    {
      path: "/executive-education",
      name: "executive-education",
      component: ExecEdu,
    },
    {
      path: "/cv-services",
      name: "cv-services",
      component: CvServices,
    },
    {
      path: "/recruitment-for-employers",
      name: "recruitment-for-employers",
      component: RecruitEmp,
    },
    {
      path: "/agile-fundamentals",
      name: "agile-fundamentals",
      component: AgileFun,
    },
    {
      path: "/technology-and-cyber-security",
      name: "technology-and-cyber-security",
      component: CyberSec,
    },
    {
      path: "/business-analysis",
      name: "business-analysis",
      component: BizAna,
    },
    {
      path: "/data-analysis",
      name: "data-analysis",
      component: DataAna,
    },
    {
      path: "/digital-marketing",
      name: "digital-marketing",
      component: DigMar,
    },
    {
      path: "/digital-management",
      name: "digital-management",
      component: DigMar,
    },
    {
      path: "/product-management",
      name: "product-management",
      component: ProMan,
    },
    {
      path: "/project-management",
      name: "project-management",
      component: ProjMan,
    },
    {
      path: "/software-engineering",
      name: "software-engineering",
      component: SoftEng,
    },
    {
      path: "/user-experience/",
      name: "user-experience",
      component: UserXpr,
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from 'vue-router'

import MainLayer from "@/layers/MainLayer.vue";
import CourseLayer from "@/layers/CourseLayer.vue";
import CertificateLayer from "@/layers/CertificateLayer.vue";
import PartnersLayer from "@/layers/PartnersLayer.vue"
import StudentProfileLayer from "@/layers/StudentProfileLayer.vue";
import TeacherLayer from "@/layers/TeacherProfileLayer.vue";
import DocumentsLayer from "@/layers/DocumentsLayer.vue";
import NewsPage from '@/layers/NewsPage.vue';
import NewsDetails from '@/layers/NewsDetails.vue';
import AnnouncementsPage from '@/layers/AnnouncementsPage.vue';
import ScienceLayer from "@/layers/ScienceLayer.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainLayer
        },
        {

            path: '/course',
            name: 'course',
            component: CourseLayer
        },
        {
            path: '/certificate',
            name: 'certificate',
            component: CertificateLayer
        },
        {
            path: '/partners',
            name: 'partners',
            component: PartnersLayer
        },
        {
            path: '/student/:id',
            name: 'student',
            component: StudentProfileLayer
        },
        {
            path: '/teacher-profile',
            name: 'teacher-profile',
            component: TeacherLayer
        },
        {
            path: '/documents',
            name: 'documents',
            component: DocumentsLayer
        },
        {
            path: '/news',
            name: 'news',
            component: NewsPage,
        },
        {
            path: '/news/:id',
            name: 'news-details',
            component: NewsDetails,
        },
        {
            path: '/announcements',
            name: 'announcements',
            component: AnnouncementsPage,
        },
        {
            path: '/science',
            name: 'science',
            component: ScienceLayer
        },
    ]
})

export default router

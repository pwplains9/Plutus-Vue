import { createWebHistory, createRouter } from 'vue-router';
import MainPage from '@/Pages/MainPage';
import Explore from '@/Pages/ExplorePage';
import Brand from '@/Pages/BrandPage';
import Card from '@/Pages/CardPage';
import Collections from '@/Pages/CollectionsPage';
import DocsItem from '@/Pages/DocsItem';
import DocsPage from '@/Pages/DocsPage';
import Rewards from '@/Pages/RewardsPage';
import Team from '@/Pages/TeamPage';
import Profile from '@/Pages/ProfilePage';

const routes = [
    {
        path: '/',
        name: 'Index',
        component: MainPage,
    },
    {
        path: '/explore',
        name: 'explore',
        component: Explore,
    },
    {
        path: '/brand',
        name: 'Brand',
        component: Brand,
    },
    {
        path: '/card/:id',
        name: 'Card',
        component: Card,
    },
    {
        path: '/collections',
        name: 'Collections',
        component: Collections,
    },
    {
        path: '/docsItem/:id',
        name: 'DocsItem',
        component: DocsItem,
    },
    {
        path: '/docsPage',
        name: 'DocsPage',
        component: DocsPage,
    },
    {
        path: '/rewards',
        name: 'Rewards',
        component: Rewards,
    },
    {
        path: '/team',
        name: 'Team',
        component: Team,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
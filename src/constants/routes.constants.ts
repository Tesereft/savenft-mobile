import { HomeScreen, CollectionScreen, CollectionCreationScreen } from "../pages/";

export const routeList = [
    {
        name: 'Home',
        component: HomeScreen,
    },
    {
        name: 'Create',
        component: CollectionCreationScreen,
    },
    {
        name: 'Collection',
        component: CollectionScreen,
    },
]
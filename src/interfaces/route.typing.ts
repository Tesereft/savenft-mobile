export interface IRoutes {
    name: string;
    component: React.FC;
}

export type RootStackParamList = {
    Create: { address: string } | undefined;
};


export type CollectionStackParamList = {
    Collection: { id: string } | undefined;
};

export type HomeStackParamList = {
    Home: undefined;
};
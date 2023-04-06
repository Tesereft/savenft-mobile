export interface IModalContext {
    showModal: (title:string, content: string) => void;
    hideModal: () => void;
}

export interface IModalProviderProps {
    children: React.ReactNode;
}
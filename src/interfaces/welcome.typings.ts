export interface IWelcomeProps {
    value: string,
    setValue: (value: string) => void,
    searchCollection: () => void,
    isLoading: boolean
}
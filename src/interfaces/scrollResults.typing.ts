export interface IScrollResultsProps {
    isLoading: boolean,
    filteredData: INFTData[],
    setSelected?: (key: string) => () => void
}
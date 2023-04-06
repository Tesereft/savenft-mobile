export interface ButtonProps {
    option: 'active' | 'inactive';
    text: string;
    onPress: () => void;
    loading?: boolean;
    translation?: boolean;
}
import { FC, ReactNode } from 'react';
import './styles.css';
export interface IButtonProps {
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    children?: ReactNode;
}
export declare const Button: FC<IButtonProps>;

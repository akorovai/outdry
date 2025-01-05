export interface CartItem {
    id: string;
    name: string;
    price: number;
    discount?: number;
    quantity: number;
    imageUrl: string;
    color: string;
    size: string;
}

export interface CartOverlayProps {
    onClose: () => void;
}
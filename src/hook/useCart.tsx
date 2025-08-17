import { IFilter } from '@/server/db/models/filters';
import { IImage } from '@/server/db/models/images';
import { IProduct } from '@/server/db/models/products';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import toast from 'react-hot-toast';

// Interface cho CartItem
export interface IProductCart {
    id: number,
    name: string,
    print_min: number,
    unit: string,
    idCate: number,
    Filters: IFilter[],
    Image: IImage

}
export interface ICartItem {
    product: IProduct;
    count: number;
}

// Interface cho Context
interface CartContextType {
    cartItems: ICartItem[];
    addToCart: (item: IProduct) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    increaseCount: (id: number) => void;
    decreaseCount: (id: number) => void;
    updateCount: (id: number, newCount: number) => void;
}

// Tạo Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<ICartItem[]>([]);

    // Load từ localStorage
    useEffect(() => {
        const stored = localStorage.getItem('cart');
        if (stored) {
            setCartItems(JSON.parse(stored));
        }
    }, []);

    // Lưu vào localStorage mỗi khi giỏ hàng thay đổi
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Thêm sản phẩm vào giỏ
    const addToCart = (product: IProduct) => {
        const index = cartItems.findIndex(x => x.product.id === product.id);
        if (index === -1) {
            const newCartItem = {
                count: 1,
                product: product
            };
            const list = [...cartItems, newCartItem];
            setCartItems(list);

        } else {
            toast.error("Sản phẩm đã tồn tại!")
        }
    };


    // Xoá hoàn toàn sản phẩm khỏi giỏ
    const removeFromCart = (id: number) => {
        const updated = cartItems.filter(item => item.product.id !== id);
        setCartItems(updated);
    };

    // Tăng số lượng
    const increaseCount = (id: number) => {
        const index = cartItems.findIndex(x => x.product.id === id);
        if (index !== -1) {
            const updated = [...cartItems];
            updated[index].count += 1;
            setCartItems(updated);
        }
    };

    // Giảm số lượng, nếu còn 1 thì xoá
    const decreaseCount = (id: number) => {
        const index = cartItems.findIndex(x => x.product.id === id);
        if (index !== -1) {
            const updated = [...cartItems];
            if (updated[index].count > 1) {
                updated[index].count -= 1;
            } else {
                updated.splice(index, 1);
            }
            setCartItems(updated);
        }
    };
    const updateCount = (id: number, newCount: number) => {
        const index = cartItems.findIndex(x => x.product.id === id);
        if (index !== -1) {
            const updated = [...cartItems];
            if (newCount <= 0) {
                updated.splice(index, 1);
            } else {
                updated[index].count = newCount;
            }
            setCartItems(updated);
        }
    };

    // Xoá toàn bộ giỏ hàng
    const clearCart = () => setCartItems([]);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            clearCart,
            increaseCount,
            decreaseCount,
            updateCount
        }
        }>
            {children}
        </CartContext.Provider>
    );
};

// Hook truy cập giỏ hàng
export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart phải được dùng bên trong <CartProvider>');
    }
    return context;
};

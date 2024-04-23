interface CartItem extends MenuItem {
  quantity: number;
}

interface MenuCategory {
  id: number;
  title: string;
}

interface MenuItem {
  categoryId: number;
  description: string;
  id: number;
  price: number;
  title: string;
}

export type {
  CartItem,
  MenuCategory,
  MenuItem,
}

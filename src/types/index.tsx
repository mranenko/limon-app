interface MenuCategory {
  id: number;
  title: string;
}

interface MenuItem {
  categoryId: number;
  description: string;
  id: number;
  price: number;
  quantity: number;
  title: string;
}

export type {
  MenuCategory,
  MenuItem,
}

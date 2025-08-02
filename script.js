const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            isCartOpen: false,
            menuItems: [
                {
                    id: 1,
                    name: "Маргарита",
                    description: "Класична піца з томатним соусом, моцарелою та базиліком",
                    price: 150,
                    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                },
                {
                    id: 2,
                    name: "Пепероні",
                    description: "Піца з томатним соусом, моцарелою та ковбаскою пепероні",
                    price: 170,
                    image: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                },
                {
                    id: 3,
                    name: "Гавайська",
                    description: "Піца з томатним соусом, моцарелою, куркою та ананасами",
                    price: 180,
                    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                },
                {
                    id: 4,
                    name: "Чотири сири",
                    description: "Піца з томатним соусом, моцарелою, горгонзолою, пармезаном та фетою",
                    price: 200,
                    image: "https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                },
                {
                    id: 5,
                    name: "Вегетаріанська",
                    description: "Піца з томатним соусом, моцарелою, перцем, грибами, оливками та цибулею",
                    price: 160,
                    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                },
                {
                    id: 6,
                    name: "М'ясна",
                    description: "Піца з томатним соусом, моцарелою, пепероні, беконом, ковбаскою та куркою",
                    price: 190,
                    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                }
            ],
            cartItems: []
        };
    },
    computed: {
        cartTotalPrice() {
            return this.cartItems.reduce((total, item) => {
                return total + (item.price * item.quantity);
            }, 0);
        },
        cartTotalQuantity() {
            return this.cartItems.reduce((total, item) => {
                return total + item.quantity;
            }, 0);
        }
    },
    methods: {
        toggleCart() {
            this.isCartOpen = !this.isCartOpen;
        },
        addToCart(item) {
            const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
            
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.cartItems.push({
                    ...item,
                    quantity: 1
                });
            }
            
            // Показуємо кошик при додаванні товару
            this.isCartOpen = true;
            
            // Анімація додавання до кошика
            const button = event.target;
            button.classList.add('animate__animated', 'animate__pulse');
            setTimeout(() => {
                button.classList.remove('animate__animated', 'animate__pulse');
            }, 1000);
        },
        removeFromCart(item) {
            this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
        },
        increaseQuantity(item) {
            item.quantity++;
        },
        decreaseQuantity(item) {
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                this.removeFromCart(item);
            }
        },
        checkout() {
            alert(`Дякуємо за замовлення! Сума: ${this.cartTotalPrice} ₴`);
            this.cartItems = [];
            this.isCartOpen = false;
        }
    },
    created() {
        // Завантажуємо кошик з localStorage при завантаженні сторінки
        const savedCart = localStorage.getItem('pizzaCart');
        if (savedCart) {
            this.cartItems = JSON.parse(savedCart);
        }
    },
    watch: {
        // Зберігаємо кошик в localStorage при змінах
        cartItems: {
            handler(newCart) {
                localStorage.setItem('pizzaCart', JSON.stringify(newCart));
            },
            deep: true
        }
    }
});

app.mount('body');
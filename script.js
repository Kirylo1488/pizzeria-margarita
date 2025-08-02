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
                    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcipollino.ua%2Fua%2Fpytstsa-pepperony-sostav-retsept-y-kaloryinost&psig=AOvVaw10FiW_MNHKS93h-DjhvyA-&ust=1754216774228000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPCc_PD0644DFQAAAAAdAAAAABAE"
                },
                {
                    id: 3,
                    name: "Гавайська",
                    description: "Піца з томатним соусом, моцарелою, куркою та ананасами",
                    price: 180,
                    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gastronom.ru%2Ftext%2Fgavajskaya-picca-1022301&psig=AOvVaw2_8NtdggTZy0opgoTgAhoq&ust=1754216920183000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOCuhLf1644DFQAAAAAdAAAAABAE"
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
                    description: "Піца з томатним соусом, моцарелою, перцем, грибами, оливками та броколямі",
                    price: 160,
                    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fprosto-vkysno.ru%2Fvypechka%2Fvegetarianskaya-pitstsu%2F&psig=AOvVaw1E9jO7EmoXVRiTwYMURLcb&ust=1754217005246000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOjdreD1644DFQAAAAAdAAAAABAV"
                },
                {
                    id: 6,
                    name: "М'ясна",
                    description: "Піца з томатним соусом, моцарелою, пепероні, олівками, беконом, ковбаскою та куркою",
                    price: 190,
                    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fepicentrk.ua%2Fshop%2Fpitsa-miasnyi-miks-z-pertsem-chili-vyr-480-h.html&psig=AOvVaw0D1LMl8aOAwLppRX3t6vxd&ust=1754217192350000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMD_2NH2644DFQAAAAAdAAAAABAE"
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

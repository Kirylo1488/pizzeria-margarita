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
                    image: "https://cipollino.ua/content/uploads/images/pytstsa-pepperony-sostav-retsept-y-kaloryinost-1-cipollino.jpg"
                },
                {
                    id: 3,
                    name: "Гавайська",
                    description: "Піца з томатним соусом, моцарелою, куркою та ананасами",
                    price: 180,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nHf03Dh_2uBagLwVln3pasLLAnmM7dVMPw&s"
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
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMCE5xWGgtvQi-zSx5OkVNC4hkLDQ0xlWkw&s"
                },
                {
                    id: 6,
                    name: "М'ясна",
                    description: "Піца з томатним соусом, моцарелою, пепероні, олівками, беконом, ковбаскою та куркою",
                    price: 190,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-_evG-H9NxHx8CI6C1eZHwi1gvXhOygMDQ&s"
                },
                {
                    id: 7,
                    name: "Бургер",
                    description: "Піца з томатним соусом, сиром чедер, фаршом, марінованими огірками, помідорами та цибулею  ",
                    price: 180,
                    image: "https://allogarag.com.ua/wp-content/uploads/2024/02/img_7646.jpg"
                },
                {
                    id: 8,
                    name: "Жульен",
                    description: "Піца з Куркою, печерицями, моцарелою та часником",
                    price: 170,
                    image: "https://assets.dots.live/misteram-public/0196884b-bb01-72a9-b40a-9a6fdf00baca-826x0.png"
                },
                {
                    id: 9,
                    name: "Цезарь",
                    description: "Піца з сирним соусом,балик, помідор, лист салату,шинка, моцарелою та яйцем",
                    price: 190,
                    image: "https://i.obozrevatel.com/food/recipemain/2020/2/5/zhenygohvrxm865gbgzsoxnru3mxjfhwwjd4bmvp.jpeg?size=636x424"
                },
                {
                    id: 10,
                    name: "Сирна",
                    description: "Піца з сирним соусом та подвійним сиром",
                    price: 140,
                    image: "https://karuzo.ua/image/cache/catalog/pizza/syrna-700x480.jpg"
                },
                {
                  id: 11, 
                  name: "Піца з грушою",
                  description: "Піца з сирним соусом, грушою та сиром дор-блю",
                  price: 170,
                  image: "https://assets.dots.live/misteram-public/50f4a096-9521-4572-9f87-9ea7c9852d39.png"
                },
                {
                    id: 12,
                    name: "Фермерська",
                    description: "Піца з томатним соусом, печерицями, баликом, салямі, помідорами та моцарелою ",
                    price: 190,
                    image: "https://assets.dots.live/misteram-public/ec94c2d497d222eba291a201f79a3346-826x0.png"
                },
                {
                    id: 13,
                    name: "Місливська",
                    description: "Піца з сирним соусом, кукурузою, місливськими ковбасками, цибулею, помідорами та моцарелою",
                    price: 170,
                    image: "https://rondo-pizza.kiev.ua/wp-content/uploads/2020/12/%D0%BC%D0%B8%D1%81%D0%BB%D0%B8%D0%B2%D1%81%D1%8C%D0%BA%D0%B0-1.jpg"
                },
                {
                    id: 14,
                    name: "Піца з шинкою",
                    description: "Піца з томатним соусом, шинкою та моцарелою",
                    price: 180,
                    image: "https://shuba.life/static/content/thumbs/1824x912/3/49/xc3sux---c2x1x50px50p-up--4f9d214c87bd3c9f1d5cea9a693c5493.jpg"
                },
                {
                    id: 15,
                    name: "Балоньезе",
                    description: "Піца з томатним соусом, свинячим фаршом та моцарелою",
                    price: 210,
                    image: "https://lh5.googleusercontent.com/proxy/-uQe52NebM8D2B_DZuzEF4qGdLyyUeQUQHp66yHFJmvK8rj_-LvBCeJvuC0e2_65E4hxPfIahUCFWMAKLHq3Og8gQ-EIOGyswkScF__yRXvQ5vvWweboxQd9_c73a_qh_Jq3iiw"
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

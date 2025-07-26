const { createApp } =Vue;

const app = createApp({
    data() {
        return {
            user: "",
        };
    },
    methods: {
        loginUser() {
            if (this.user.trim()) {
                localStorage.setItem("user", this.user);
                window.location.href = "/user.html";
            }
        },
    },
});

app.mount("#app");
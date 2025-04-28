import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        name: "",
        email: "",
        picture: "",
        walletAddress: "",
        loginMethod: "", // "google" 或 "solana"
    }),
    actions: {
        setGoogleUser(user: { name: string; email: string; picture: string }) {
            this.name = user.name;
            this.email = user.email;
            this.picture = user.picture;
            this.walletAddress = "";
            this.loginMethod = "google";
        },
        setSolanaUser(walletAddress: string) {
            this.name = "";
            this.email = "";
            this.picture = "";
            this.walletAddress = walletAddress;
            this.loginMethod = "solana";
        },
        logout() {
            this.name = "";
            this.email = "";
            this.picture = "";
            this.walletAddress = "";
            this.loginMethod = "";
        },
    },
});

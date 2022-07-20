import { defineStore } from "pinia";
import currency from "currency.js";
import { euro } from "../main";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    totalPrice: 0,
    cartItems: localStorage.getItem("CartState")
      ? JSON.parse(localStorage.getItem("CartState"))
      : [],
    cartItemsTotal: 0,
  }),

  getters: {
    itemsTotal: (state) =>
      state.cartItems.reduce(function (previous, current) {
        return previous + current.amount;
      }, state.cartItemsTotal),
    itemsTotalPrice: (state) =>
      state.cartItems.reduce(function (previous, current) {
        const init = currency(current.price);
        let v = previous + init.value;
        return v;
      }, state.totalPrice),
  },

  actions: {
    addItem(name, price, unitPrice, quantity, imageUrl, selectedCourse) {
      const existingItem = this.cartItems.find((it) => it.name === name);
      const existingCourse = this.cartItems.find(
        (it) => it.name === name && it.selectedCourse === selectedCourse
      );
      if (selectedCourse === undefined) {
        if (!existingItem) {
          this.cartItems.push({
            name: name,
            price: price,
            unitPrice: unitPrice,
            amount: quantity,
            image: imageUrl,
            selectedCourse: selectedCourse,
          });
        } else {
          {
            const newAmount = existingItem.amount + quantity;
            let formatNewPrice = currency(price);
            let formatPrice = currency(existingItem.price);
            const newPrice = formatNewPrice.value + formatPrice.value;
            existingItem.amount = newAmount;
            existingItem.price = euro(newPrice).format();
          }
        }
      } else {
        if (!existingCourse) {
          this.cartItems.push({
            name: name,
            price: price,
            unitPrice: unitPrice,
            amount: quantity,
            image: imageUrl,
            selectedCourse: selectedCourse,
          });
        } else {
          const newAmount = existingCourse.amount + quantity;
          let formatNewPrice = currency(price);
          let formatPrice = currency(existingCourse.price);
          const newPrice = formatNewPrice.value + formatPrice.value;
          existingCourse.amount = newAmount;
          existingCourse.price = euro(newPrice).format();
        }
      }

      localStorage.setItem("CartState", JSON.stringify(this.cartItems));
    },

    removeItem(name) {
      const i = this.cartItems.lastIndexOf(name);
      if (i > -1) this.cartItems.splice(i, 1);
      localStorage.setItem("CartState", JSON.stringify(this.cartItems));
    },

    increaseItemQuantity(name, course) {
      if (course !== undefined) {
        const existingItem = this.cartItems.find(
          (it) => it.selectedCourse === course && it.name === name
        );
        existingItem.amount++;
        let formatNewPrice = currency(existingItem.price);
        let formatPrice = currency(existingItem.unitPrice);
        const newPrice = formatNewPrice.value + formatPrice.value;
        existingItem.price = euro(newPrice).format();
      } else {
        const existingItem = this.cartItems.find((it) => it.name === name);
        existingItem.amount++;
        let formatNewPrice = currency(existingItem.price);
        let formatPrice = currency(existingItem.unitPrice);
        const newPrice = formatNewPrice.value + formatPrice.value;
        existingItem.price = euro(newPrice).format();
      }
      localStorage.setItem("CartState", JSON.stringify(this.cartItems));
    },
    decreaseItemQuantity(name, course, amount) {
      if (course !== undefined) {
        const existingCourse = this.cartItems.find(
          (it) => it.selectedCourse === course && it.name === name
        );
        const itemIndex = this.cartItems.findIndex(
          (it) => it.selectedCourse === course && it.name === name
        );
        let formatNewPrice = currency(existingCourse.price);
        let formatPrice = currency(existingCourse.unitPrice);

        const newPrice = formatNewPrice.value - formatPrice.value;
        existingCourse.price = euro(newPrice).format();
        if (amount > 1) existingCourse.amount--;
        if (amount === 1) this.cartItems.splice(itemIndex, 1);
      } else {
        const existingItem = this.cartItems.find((it) => it.name === name);
        const itemIndex = this.cartItems.findIndex((it) => it.name === name);
        if (amount > 1) existingItem.amount--;
        if (amount === 1) this.cartItems.splice(itemIndex, 1);
        let formatNewPrice = currency(existingItem.price);
        let formatPrice = currency(existingItem.unitPrice);
        const newPrice = formatNewPrice.value - formatPrice.value;
        existingItem.price = euro(newPrice).format();
      }

      localStorage.setItem("CartState", JSON.stringify(this.cartItems));
    },

    clearCart() {
      this.cartItems = [];
      localStorage.setItem("CartState", JSON.stringify(this.cartItems));
    },
  },
});

export const useLink = defineStore({
  id: "link",
  state: () => ({
    link: localStorage.getItem("activeLink")
      ? localStorage.getItem("activeLink")
      : "",
  }),
  getters: {},
  actions: {
    setLink(link) {
      this.link = link;
      localStorage.setItem("activeLink", this.link);
    },
  },
});

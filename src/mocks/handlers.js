/* eslint-disable no-unused-vars */
// src/mocks.js
// 1. Import the library.
import { http, HttpResponse } from "msw";

// 2. Describe network behavior with request handlers.
export const handlers = [
  http.get("/api/products", (resolver) => {
    return HttpResponse.json([
      {
        name: "Ekmek",
        barkod: "14000041",
        price: 3.5,
        imageUrl:
          "https://ankarahalkekmek.com.tr/wp-content/uploads/2020/11/nekmek.jpg",
      },
      {
        city: "Ordu",
        name: "eray",
      },
    ]);
  }),

  http.get("/api/shopInfo", (resolver) => {
    return HttpResponse.json([
      {
        shopNo: 1532,
        kasaNo: 2,
        kasaIP: "10.0.2.16",
        version: "v1.3.78.146",
      },
    ]);
  }),
];

# E-Commerce Backend (Express)

Simple Express API with routes for users, products, and cart.

Run locally:

```powershell
cd d:\santosh\Project\backend\sharpener\ecommbackend
npm install
npm start
```

Available endpoints (placeholders):

- `GET /users` — "Fetching all users"
- `POST /users` — "Adding a new user"
- `GET /users/:id` — "Fetching user with ID: :id"

- `GET /products` — "Fetching all products"
- `POST /products` — "Adding a new product"
- `GET /products/:id` — "Fetching product with ID: :id"

- `GET /cart/:userId` — "Fetching cart for user with ID: :userId"
- `POST /cart/:userId` — "Adding product to cart for user with ID: :userId"

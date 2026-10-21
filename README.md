# Eclaire shop (Next.js)

Part 2 of the Zealand "Lemonade Stand" assignment. The eclair shop from Part 1 (React + Vite) rebuilt with Next.js and the App Router.

**Live demo:** https://eclaire-next-5nua.vercel.app/
**Part 1 (React):** https://github.com/katerynamois/redux-cake-cart

## Features

- **Home:** shows the current profit. "Sell Éclair" adds $5 and "Buy Ingredients" subtracts $2.
- **Shop:** eclairs are fetched on the server from my MockAPI and shown with name, image, description and price.
- **Product page:** click an eclair to open `/shop/[id]` with details and "Add to Cart".
- **Cart:** change quantities with **+** and **−**, see totals, or clear the cart.
- **Checkout:** order summary. "Place Order" sends the order to my own API route `/api/order`. "Clear Order" empties the cart.

## Tech

- [Next.js](https://nextjs.org/) 16 with the App Router
- [Redux Toolkit](https://redux-toolkit.js.org/): `cartSlice` and `profitSlice` (reused from Part 1)
- [Bootstrap](https://getbootstrap.com/) + custom CSS (reused from Part 1)
- API: [MockAPI](https://mockapi.io/) `https://6abe4f88c4d5ac54830261cc.mockapi.io/eclairs`
- Deployment: [Vercel](https://vercel.com/), CI: GitHub Actions

## Install and run

You need [Node.js](https://nodejs.org/) 20.9 or newer.

```bash
git clone https://github.com/katerynamois/eclaire-next.git
cd eclaire-next
npm install
npm run dev
```

Then open http://localhost:3000.

| Command | What it does |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the app for production |
| `npm run start` | Runs the production build |
| `npm run lint` | Checks the code with ESLint |

## Project structure

```
app/
├── layout.js              # Shared layout: StoreProvider + Navbar
├── page.js                # Home  → /
├── shop/
│   ├── page.js            # Shop  → /shop (fetches data on the server)
│   └── [id]/page.js       # Product details → /shop/1, /shop/2 ...
├── cart/page.js           # Cart  → /cart
├── checkout/page.js       # Checkout → /checkout
└── api/order/route.js     # POST /api/order (Route Handler)
components/
├── StoreProvider.jsx      # Redux Provider (client)
├── Navbar.jsx             # Links + cart count (client)
├── ProfitCard.jsx         # Profit buttons (client)
├── AddToCartButton.jsx    # Add to cart button (client)
├── Cart.jsx               # Cart with + / − (client)
└── Checkout.jsx           # Order summary + Place Order (client)
redux/
├── store.js
├── cartSlice.js
└── profitSlice.js
```

## Server and Client Components

All pages in `app/` are **Server Components**. Only the parts that need state or clicks are **Client Components** (`"use client"`): `StoreProvider`, `Navbar`, `ProfitCard`, `AddToCartButton`, `Cart` and `Checkout`.

## Rendering strategy

`/shop` uses `fetch(..., { next: { revalidate: 60 } })`. The page is cached and served as static HTML, and Next.js fetches fresh data at most once a minute. Products rarely change, so the page is fast, but a new éclair in MockAPI still shows up without a new deploy.

`/shop/[id]` is rendered on demand, because the product ids are not known at build time.

## API route

`POST /api/order` receives the cart from Checkout, rejects an empty order (400), calculates the total on the server and returns an order number (201).

## CI/CD

- **CI:** `.github/workflows/ci.yml` runs `npm ci`, `npm run lint` and `npm run build` on every push and pull request to `main`.
- **CD:** Vercel is connected to the GitHub repo and deploys automatically on every push to `main`.

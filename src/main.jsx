import React from "react"
import { ecommerceContext } from "./contexts/EcommerceContext"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./routes/home/Home"
import App from "./App"
import Error from "./Error.jsx"
import Product from "./routes/product/Product.jsx"
import SignUp from "./routes/sign-up/SignUp.jsx"
import "./index.css"

const images = {
  0: "https://wedeliverphones.com/wp-content/uploads/2022/05/iPhone-8-64GB-We-Deliver-Phones.png",
  1: "https://cdn.shopify.com/s/files/1/0325/8708/8005/products/iphone-x_700x_700x_65ddf5c5-512f-4026-af21-5e6fd5d1ec35.png?v=1671052373",
  2: "https://ciclozero.com.mx/wp-content/uploads/2020/10/samsungs9-negro.png",
  3: "https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBVOUCHER-FOR-MAYA695029CF0BD15D/1629219756232_0.png",
  4: "https://tienda.monteprovidencia.com.mx/cdn/shop/products/P30Lite_722aa3ae-92b0-4fd9-8aee-f3736010cc46_1200x1200.png?v=1636763734",
  5: "https://images.frandroid.com/wp-content/uploads/2022/06/apple-macbook-pro-13-m2-frandroid-2022.png",
  6: "https://images.samsung.com/is/image/samsung/p6pim/uk/galaxy-book/gallery/uk-galaxy-book-15inch-np750xdaa-387040-np750xda-kd2uk-433780039?$624_624_PNG$",
  7: "https://cdn11.bigcommerce.com/s-ni96tm29t7/images/stencil/1280x1280/products/746/1398/520120-Product-0-I-637883146977204564_6fd9c1cc-ab7b-4330-8168-dd7ee1633421_909x__13122.1677031300.png?c=1",
  8: "https://www.ooredoo.tn/Personal/5051-large_default/portable-infinix-inbook-x2-core-i3-4g-256g.jpg",
  9: "https://lusof.com.py/wp-content/uploads/2022/11/65443.png",
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "product/:productId",
    element: <Product />,
  },
  {
    path: "sign-up",
    element: <SignUp />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ecommerceContext.Provider value={images}>
      <RouterProvider router={router} />
    </ecommerceContext.Provider>
  </React.StrictMode>,
)

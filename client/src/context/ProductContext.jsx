import { createContext } from "react";
//createContext lets you share data across many components without having
//to pass props manually at every level

const ProductContext = createContext(null);

export default ProductContext;

import { products } from "./constant/product.js"
import product from "./model/productSchema.js";

const data = async () => {
    try {

        await product.insertMany(products);

        console.log('Data imported Successfully');

    } catch (error) {
        console.log('Error: ', error.message);
    }

}

export default data;
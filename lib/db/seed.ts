import { loadEnvConfig } from "@next/env";
import { cwd } from "process";
import data from "@/lib/data";
import { connectDB } from ".";
import Product from "./models/product.model";

loadEnvConfig(cwd());

const main = async () => {
  try {
    const { products } = data;
    await connectDB(process.env.MONGODB_URI);

    await Product.deleteMany();
    const createdProducts = await Product.insertMany(products);
    console.log({ createdProducts, message: "Products seeded: " });
    process.exit(0);
  } catch (error) {
    console.error(error);
    throw new Error("Seeding failed");
  }
};

main();

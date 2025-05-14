import { ProductInputSchema } from "@/lib/validator";
import { z } from "zod";

export type IProductInput = z.infer<typeof ProductInputSchema>;

export type Data = {
  products: IProductInput[];
  headMenus: {
    name: string;
    href: string;
  }[];
  carousels: {
    title: string;
    url: string;
    image: string;
    buttonCaption: string;
    isPublished: boolean;
  }[];
};

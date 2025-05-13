import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { APP_NAME } from "@/lib/constants";
import { SearchIcon } from "lucide-react";
import React from "react";

const categories = ["mens", "womens", "kids", "home", "electronics"];

const Search = async () => {
  return (
    <form action="/search" method="GET" className="flex items-stretch h-10">
      <Select name="category">
        <SelectTrigger className="w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r rounded-r-none rounded-l-md">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="all">All</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        type="search"
        name="q"
        placeholder={`Search... ${APP_NAME}`}
        className="flex-1 border-l-0 rounded-none dark:border-gray-200 bg-gray-100 text-black"
      />
      <Button
        type="submit"
        className="bg-primary text-primary-foreground border-l rounded-s-none rounded-e-md px-3 py-2"
      >
        <SearchIcon className="w-6 h-6" />
      </Button>
    </form>
  );
};

export default Search;

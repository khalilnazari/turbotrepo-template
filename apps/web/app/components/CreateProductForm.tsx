"use client";

import React from "react";
import TextInput from "@repo/ui/form/TextInput";
import createProduct from "./actions/create-product";

export default function CreateProductForm() {
  return (
    <div>
      <form action={createProduct}>
        <TextInput placeholer="product name" name="name" />
        <div>
          <input type="number" name="price" placeholder="product price" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

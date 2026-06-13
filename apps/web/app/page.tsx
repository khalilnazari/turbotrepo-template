import React from "react";
import CreateProductForm from "./components/CreateProductForm";
import { Product } from "@repo/types";

export const dynamic = "force-dynamic";

export default async function page() {
  if (!process.env.API_URL) {
    return (
      <main>
        <p>Error: API setup is incomplete.</p>
      </main>
    );
  }

  try {
    const response = await fetch(`${process.env.API_URL}/products`, {
      next: { tags: ["products"] },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const products: Product[] = await response.json();

    return (
      <main>
        <CreateProductForm />
        <pre>{JSON.stringify({ products }, null, 4)}</pre>
      </main>
    );
  } catch (error) {
    return (
      <main>
        <p>Could not load products right now.</p>
      </main>
    );
  }
}

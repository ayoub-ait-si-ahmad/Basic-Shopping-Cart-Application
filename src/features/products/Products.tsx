import React, { useEffect, useState } from "react";
import { getProducts, Product } from "../../app/api";
import styles from "./Products.module.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchedProducts } from "./productsSlice";

export function Products() {
const dispatch = useAppDispatch();
useEffect(()=> {
  getProducts().then((products)=> {
    dispatch(fetchedProducts(products));
  })})
  const products= useAppSelector((state) =>state.products.products)
  return (
    <main className="page">
      <ul className={styles.products}>
        {Object.values(products).map((product) => (
          <li key={product.id}>
            <article className={styles.product}>
              <figure>
                <img src={product.imageURL} alt={product.imageAlt} />
                <figcaption className={styles.caption}>
                  {product.imageCredit}
                </figcaption>
              </figure>
              <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <button>Add to Cart 🛒</button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}

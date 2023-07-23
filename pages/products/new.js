import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";

export default function NewProduct() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    function createProduct() {

    }
    return (
        <Layout>
            <form onSubmit={createProduct}>
                <h1 className="mb2">New Product</h1>
                <label htmlFor="">Product name</label>
                <input
                    type="text"
                    placeholder="product name"
                    value={title}
                    onChange={(ev) => setTitle(ev.target.value)}
                />
                <label htmlFor="">Description</label>
                <textarea
                    placeholder="description"
                    value={description}
                    onChange={(ev) => setDescription(ev.target.value)}
                />
                <label htmlFor="">Price</label>
                <input
                    type="number"
                    placeholder="price"
                    value={price}
                    onChange={(ev) => setPrice(ev.target.value)}
                />
                <button type="submit" className="btn-primary">
                    Save
                </button>
            </form>
        </Layout>
    );
}

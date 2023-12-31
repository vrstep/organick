import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('/api/products').then(response => {
            setProducts(response.data);
        })
    }, []);
    return <Layout>
        <Link href={'/products/new'}>Add new product</Link>
        <table className="basic mt2">
            <thead>
                <tr>
                    <td>Product name</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr>
                        <td>{product.title}</td>
                        <td>
                            <Link href={'/products/edit/' +product._id}>
                                Edit
                            </Link>
                            <Link href={'/products/delete/' +product._id}>
                                Delete 
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Layout>
}
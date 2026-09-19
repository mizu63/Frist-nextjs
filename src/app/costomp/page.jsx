
import Link from "next/link";
import React from "react";

const ProductsPage = async () => {
    const res = await fetch("http://localhost:5000/products",

        {next:{revalidate:20}}
    );

    const Data = await res.json();

    return (
        <div className="min-h-screen bg-gray-100 px-5 py-10">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Our Products
                    </h1>
                    <p className="mt-2 text-gray-500">
                        Explore our latest products
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {Data.map((product) => (
                        <div
                            key={product.id}
                            className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="mb-5 flex h-32 items-center justify-center rounded-xl bg-gray-100">
                                <span className="text-5xl">🛍️</span>
                            </div>

                            <h2 className="mb-2 text-xl font-bold text-gray-800">
                                {product.name}
                            </h2>

                            <p className="mb-3 text-2xl font-bold text-blue-600">
                                ${product.price}
                            </p>

                            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                                {product.category}
                            </span>

                      <Link href={`/costomp/${product.id}`}>
                                <button className="btn btn-primary">View Details</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;


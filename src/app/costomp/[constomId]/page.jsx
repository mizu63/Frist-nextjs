
import React from "react";

export const generateStaticParams = async() =>{
    const res = await fetch("http://localhost:5000/products");
    const books = await res.json();

    return books.slice(1,3).map(book => ({constomId: book.id}))
}

const CostomIdPage = async ({ params }) => {
  const { constomId } = await params;

  const res = await fetch("http://localhost:5000/products");
  const UseData = await res.json();

  const product = UseData.find(
    (item) => item.id == constomId
  );

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h1 className="mb-5 text-3xl font-bold">
          Product Details
        </h1>

        <h2 className="text-2xl font-semibold">
          {product?.name}
        </h2>

        <p className="mt-3 text-xl text-blue-600">
          ${product?.price}
        </p>

        <p className="mt-2 text-gray-500">
          {product?.category}
        </p>

        <p className="mt-3 text-sm text-gray-400">
          ID: {constomId}
        </p>
      </div>
    </div>
  );
};

export default CostomIdPage;


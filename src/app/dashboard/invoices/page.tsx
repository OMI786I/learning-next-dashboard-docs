import React from "react";

const Invoices = async () => {
  interface Posts {
    name: string;
    email: string;
    money: number;
  }

  const data = await fetch("http://localhost:3000/api/invoices");
  const posts: Posts[] = await data.json();
  console.log(posts);

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">Invoices</h1>

        {posts.length === 0 ? (
          <p className="text-gray-500">No invoices available.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {posts.map((invoice, index: number) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-100 rounded-lg p-4 shadow-sm"
              >
                <div>
                  <h2 className="text-lg font-medium text-gray-700">
                    {invoice.name}
                  </h2>
                  <p className="text-sm text-gray-500">{invoice.email}</p>
                </div>
                <p className="text-lg font-semibold text-green-600">
                  ${invoice.money.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Invoices;

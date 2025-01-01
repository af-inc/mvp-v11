"use client";

import React from "react";
import Link from "next/link";

const Donations = () => {
  const donations = [
    {
      id: 1,
      name: "Help the Homeless",
      status: "Active",
      raised: "$3,000",
      goal: "$5,000",
    },
    {
      id: 2,
      name: "School Supplies for Kids",
      status: "Inactive",
      raised: "$1,200",
      goal: "$2,500",
    },
    {
      id: 3,
      name: "Animal Shelter Support",
      status: "Active",
      raised: "$800",
      goal: "$1,500",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 bg-white lg:px-8">
      <main className="max-w-7xl mx-auto py-8">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-indigo-900">Overview</h2>
          </div>
          <Link href="/v1/donate/new">
            <button className="sm:mt-0 p-3 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              New donate
            </button>
          </Link>
        </header>

        {donations.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-[50vh] text-center">
            <h3 className="text-2xl font-semibold text-gray-800">No donations yet</h3>
            <p className="text-gray-500 mt-2">
              Create your first donation page to make an impact!
            </p>
          </div>
        ) : (
          <div className="overflow-hidden border border-gray-300 rounded-lg bg-white shadow-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Raised
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Goal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {donations.map((donation) => (
                  <tr key={donation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-800 font-medium">{donation.name}</td>
                    <td
                      className={`px-6 py-4 text-sm font-medium ${
                        donation.status === "Active" ? "text-green-600" : "text-gray-500"
                      }`}
                    >
                      {donation.status}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">{donation.raised}</td>
                    <td className="px-6 py-4 text-sm text-gray-800">{donation.goal}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex space-x-2">
                      
                        <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                          Review
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default Donations;

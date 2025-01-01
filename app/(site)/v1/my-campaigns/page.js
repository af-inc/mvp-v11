"use client";

import React, { useState } from "react";
import Link from "next/link";

const MyCampaigns = () => {

    const [campaigns, setCampaigns] = useState([])
    console.log(campaigns.length)

  return (
    <div className="flex w-screen">
      <main className="w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* <h2 className="text-xl text-neutral-600 font-bold">My campaigns</h2> */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
          <h2 className="text-xl font-bold text-indigo-900">My campaigns</h2>
          </div>
          <Link href="/v1/create-campaign">
            <button className="mt-4 sm:mt-0 px-6 py-2 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800">
              New Campaign
            </button>
          </Link>
        </header>
        
        {campaigns.length <= 0 ? (
            <div className="flex flex-col justify-center items-center h-[50vh]">
            <h3 className="text-2xl font-semibold">No campaigns yet</h3>
            <p className="text-gray-400 mt-2">Start your first campaign to make an impact!</p>
            </div>
        ) : (
            <div className="overflow-hidden border border-gray-800 rounded-lg bg-gray-800 shadow">
            <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-700">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Raised</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Goal</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Actions</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                {/* This part is left static. Add campaign items here manually if you need to */}
                </tbody>
            </table>
            </div>
        )}

      </main>
    </div>
  );
};

export default MyCampaigns;

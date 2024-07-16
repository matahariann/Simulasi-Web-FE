"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Dropdown, Ripple, initTWE } from "tw-elements";

initTWE({ Dropdown, Ripple });

export default function RekapDataPKL() {
  return (
    <main className="flex-1 max-h-full p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
      <section className="w-full p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-1">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Rekap Data PKL
        </h1>
        
        <button
          type="button"
          className="text-black bg-white hover:bg-black hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-6"
        >
          Cetak Rekap
        </button>

        <div className="relative overflow-x-auto mt-6 rounded-lg">
          <table className="w-full text-s text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  colSpan={14}
                  className="px-6 py-3 text-center align-middle"
                >
                  Angkatan
                </th>
              </tr>
              <tr>
                {Array.from({ length: 6 }, (_, i) => 2019 + i).map((year) => (
                  <th
                    key={year}
                    scope="col"
                    colSpan={2}
                    className="px-6 py-3 text-center"
                  >
                    {year}
                  </th>
                ))}
              </tr>
              <tr>
                {Array.from({ length: 6 * 2 }).map((_, i) => (
                  <th key={i} scope="col" className="px-6 py-3 text-center">
                    {i % 2 === 0 ? "Sudah PKL" : "Belum PKL"}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 text-center">0</td>
                <td className="px-6 py-4 text-center">0</td>
                <td className="px-6 py-4 text-center">0</td>
                <td className="px-6 py-4 text-center">0</td>
                <td className="px-6 py-4 text-center">0</td>
                <td className="px-6 py-4 text-center">0</td>
                <td className="px-6 py-4 text-center">0</td>
                <td className="px-6 py-4 text-center">0</td>
                <td className="px-6 py-4 text-center">0</td>
                <td className="px-6 py-4 text-center">0</td>
                <td className="px-6 py-4 text-center">0</td>
                <td className="px-6 py-4 text-center">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

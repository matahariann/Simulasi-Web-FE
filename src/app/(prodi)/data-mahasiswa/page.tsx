"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

export default function DataMahasiswa() {
  return (
    <main className="flex-1 max-h-full p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
      <section className="w-auto p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-1">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Data Mahasiswa
        </h1>

        <form className="max-w-md mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Cari Daftar Mahasiswa"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>

        <div className="relative overflow-x-auto mt-6 rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3">
                  NIM
                </th>
                <th scope="col" className="px-6 py-3">
                  Angkatan
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">Dzu Sunan Muhammad</td>
                <td className="px-6 py-4">24060122120034</td>
                <td className="px-6 py-4">2022</td>
                <td className="px-6 py-4">Aktif</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">Muhammad Shaquille Kana</td>
                <td className="px-6 py-4">24060122120036</td>
                <td className="px-6 py-4">2022</td>
                <td className="px-6 py-4">Cuti</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">Muhammad Dimas Saputra</td>
                <td className="px-6 py-4">24060122120036</td>
                <td className="px-6 py-4">2022</td>
                <td className="px-6 py-4">Mangkir</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

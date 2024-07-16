"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { addMahasiswa, MahasiswaData } from "@/services/operator";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function RegisterUser() {
  const [nim, setNIM] = useState("");
  const [nama, setNama] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [jalurMasuk, setJalurMasuk] = useState("");
  const [password, setPassword] = useState("");
  const [dosenwali_nip, setDosenWaliNIP] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [error, setError] = useState(null);
  const [transactionData, setTransactionData] = useState<MahasiswaData | null>(
    null
  );
  const router = useRouter();

  const handleAddMahasiswa = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // get the token from local storage
      if (!token) {
        throw new Error("No token found");
      }
      const response = await addMahasiswa(
        token,
        nama,
        nim,
        angkatan,
        role,
        status,
        jalurMasuk,
        password,
        dosenwali_nip
      );
      if (response) {
        console.log("Successfully added Transaksi");
        setTransactionData(response.data);

        console.log(response.data);
        setShowSuccessAlert(true);
        setTimeout(() => {
          router.push("/");
        }, 1500);
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <main className="flex-1 max-h-full p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-1">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Register User
        </h1>
        <form >
          <div className="grid grid-cols-1 gap-6 mt-4 mb-6 sm:grid-cols-2">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="nama">
                Nama <span className="text-red-500">*</span>
              </label>
              <input
                id="nama"
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                required
                placeholder="Nama"
              />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="NIM">
                NIM <span className="text-red-500">*</span>
              </label>
              <input
                id="NIM"
                type="text"
                value={nim}
                onChange={(e) => setNIM(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                required
                placeholder="NIM"
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="angkatan"
              >
                Angkatan <span className="text-red-500">*</span>
              </label>
              <input
                id="angkatan"
                type="text"
                value={angkatan}
                onChange={(e) => setAngkatan(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                required
                placeholder="Angkatan"
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="dosenWali"
              >
                Dosen Wali <span className="text-red-500">*</span>
              </label>
              <select
                id="dosenWali"
                value={dosenwali_nip}
                onChange={(e) => setDosenWaliNIP(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                required
              >
                <option value="">Dosen Wali</option>
                <option value="Aktif">197308291998022001</option>
              </select>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="roleUser"
              >
                Role User <span className="text-red-500">*</span>
              </label>
              <select
                id="roleUser"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                required
              >
                <option value="">Role User</option>
                <option value="Aktif">Mahasiswa</option>
              </select>
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="status">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                required
              >
                <option value="">Status</option>
                <option value="Aktif">Aktif</option>
              </select>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="roleUser"
              >
                Jalur Masuk <span className="text-red-500">*</span>
              </label>
              <select
                id="jalurMasuk"
                value={jalurMasuk}
                onChange={(e) => setJalurMasuk(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                required
              >
                <option value="">Jalur Masuk</option>
                <option value="SNBP">SNBP</option>
                <option value="SNBT">SNBT</option>
                <option value="Mandiri">Mandiri</option>
                <option value="SBUB">SBUB</option>
              </select>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="angkatan"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                required
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
              onClick={handleAddMahasiswa}
            >
              Register
            </button>
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Gagal Menambahkan Mahasiswa</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {showSuccessAlert && (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Berhasil Menambahkan Mahasiswa</AlertTitle>
                <AlertDescription>
                  Mahasiswa berhasil ditambahkan
                </AlertDescription>
              </Alert>
            )}
          </div>
        </form>

        <h2 className="text-center text-white mt-4 mb-4">OR</h2>

        <div>
          <label className="block text-sm font-medium text-white">
            Upload CSV File
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg className="mx-auto h-12 w-12 text-white">
                <Icon
                  icon="lucide:file-spreadsheet"
                  width="40"
                  height="40"
                  color="white"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a CSV file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    accept=".csv"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1 text-white">or drag and drop</p>
              </div>
              <p className="text-sm text-white">for bulk registration</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
            Register
          </button>
        </div>
      </section>
    </main>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Count, getCountData } from "@/services/operator";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function DashboardProdi() {
  const router = useRouter();
  const [count, setCountData] = useState<Count | null>(null);

  const getDetail = async (token: string) => {
    const res = await getCountData(token);
    setCountData(res);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    } else {
      getDetail(token);
    }
  }, []);

  const pieChartOptionsStatusMahasiswa = {
    options: {
      labels: ["Aktif", "DO", "Cuti", "Lulus"],
    },
    series: [count?.jumlahMhsAktif ?? 0, count?.jumlahMhsDropout ?? 0, count?.jumlahMhsCuti ?? 0, count?.jumlahMhsLulus ?? 0],
  };

  const pieChartOptionsUserRole = {
    options: {
      labels: ["Mahasiswa", "Dosen", "Departemen", "Operator"],
    },
    series: [
      count?.jumlahMahasiswa ?? 0,
      count?.jumlahDosenWali ?? 0,
      count?.jumlahDepartemen ?? 0,
      count?.jumlahOperatorProdi ?? 0,
    ],
  };

  return (
    <main className="flex-1 max-h-full p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
      <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
        <h1 className="text-2xl font-semibold whitespace-nowrap text-white">
          Dashboard
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-6 lg:grid-cols-3">
        <div className="p-3 transition-shadow border rounded-lg shadow-sm hover:shadow-lg bg-gray-100">
          <div className="flex items-start justify-between p-2 border rounded-lg shadow-lg bg-white">
            <div className="flex flex-col space-y-2">
              <span className="text-gray-400">Mahasiswa</span>
              <span className="text-lg font-semibold">
                {count?.jumlahMahasiswa}
              </span>
            </div>
            <div className="p-8"></div>
          </div>
        </div>
        <div className="p-3 transition-shadow border rounded-lg shadow-sm hover:shadow-lg bg-gray-100">
          <div className="flex items-start justify-between p-2 border rounded-lg shadow-lg bg-white">
            <div className="flex flex-col space-y-2">
              <span className="text-gray-400">Dosen</span>
              <span className="text-lg font-semibold">
                {count?.jumlahDosenWali}
              </span>
            </div>
            <div className="p-8"></div>
          </div>
        </div>
        <div className="p-3 transition-shadow border rounded-lg shadow-sm hover:shadow-lg bg-gray-100">
          <div className="flex items-start justify-between p-2 border rounded-lg shadow-lg bg-white">
            <div className="flex flex-col space-y-2">
              <span className="text-gray-400">Department</span>
              <span className="text-lg font-semibold">
                {count?.jumlahDepartemen}
              </span>
            </div>
            <div className="p-8"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="p-3 transition-shadow border rounded-lg shadow-sm hover:shadow-lg bg-gray-100">
          <div className="flex items-start justify-between p-2 border rounded-lg shadow-lg bg-white">
            <div className="flex flex-col space-y-2">
              <span className="text-gray-400">Mahasiswa Aktif</span>
              <span className="text-lg font-semibold">
                {count?.jumlahMhsAktif}
              </span>
            </div>
            <div className="p-8"></div>
          </div>
        </div>
        <div className="p-3 transition-shadow border rounded-lg shadow-sm hover:shadow-lg bg-gray-100">
          <div className="flex items-start justify-between p-2 border rounded-lg shadow-lg bg-white">
            <div className="flex flex-col space-y-2">
              <span className="text-gray-400">Mahasiswa DO</span>
              <span className="text-lg font-semibold">{count?.jumlahMhsDropout}</span>
            </div>
            <div className="p-8"></div>
          </div>
        </div>
        <div className="p-3 transition-shadow border rounded-lg shadow-sm hover:shadow-lg bg-gray-100">
          <div className="flex items-start justify-between p-2 border rounded-lg shadow-lg bg-white">
            <div className="flex flex-col space-y-2">
              <span className="text-gray-400">Mahasiswa Cuti</span>
              <span className="text-lg font-semibold">
                {count?.jumlahMhsCuti}
              </span>
            </div>
            <div className="p-8"></div>
          </div>
        </div>
        <div className="p-3 transition-shadow border rounded-lg shadow-sm hover:shadow-lg bg-gray-100">
          <div className="flex items-start justify-between p-2 border rounded-lg shadow-lg bg-white">
            <div className="flex flex-col space-y-2">
              <span className="text-gray-400">Mahasiswa Lulus</span>
              <span className="text-lg font-semibold">
                {count?.jumlahMhsLulus}
              </span>
            </div>
            <div className="p-8"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-6 lg:grid-cols-2">
        <div className="p-3 transition-shadow border rounded-lg shadow-sm hover:shadow-lg bg-gray-100">
          <div className="flex items-center justify-center p-2 border rounded-lg shadow-lg bg-white">
            <div className="flex flex-col space-y-2 items-center">
              <h2 className="text-l font-semibold whitespace-nowrap text-center mt-3">
                Status Mahasiswa
              </h2>
              <div className="py-6 grid place-items-center px-2">
                <ReactApexChart
                  options={pieChartOptionsStatusMahasiswa.options}
                  series={pieChartOptionsStatusMahasiswa.series}
                  type="pie"
                  width={280}
                  height={280}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 transition-shadow border rounded-lg shadow-sm hover:shadow-lg bg-gray-100">
          <div className="flex items-center justify-center p-2 border rounded-lg shadow-lg bg-white">
            <div className="flex flex-col space-y-2 items-center">
              <h2 className="text-l font-semibold whitespace-nowrap text-center mt-3">
                User Role
              </h2>
              <div className="py-6 flex justify-center items-center px-2">
                <ReactApexChart
                  options={pieChartOptionsUserRole.options}
                  series={pieChartOptionsUserRole.series}
                  type="pie"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

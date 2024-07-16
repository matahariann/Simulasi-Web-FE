"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { getOperator, Operator } from "@/services/operator";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { logout } from "@/services/auth";

export default function Sidebar() {
  const router = useRouter();
  const [operator, setOperator] = useState<Operator | null>(null);
  const getData = async (token: string) => {
    const res = await getOperator(token);
    setOperator(res);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    } else {
      getData(token);
    }
  }, []);

  const handleDialogContinue = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem("token");

      if (!token) {
        // Handle case where token is not available
        console.error("Token not found in local storage");
        return;
      }

      // Call logout function with the retrieved token
      const res = await logout(token);

      if (res) {
        console.log("Logout successful");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push("/");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className="md:w-60 bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
      <div className="flex flex-col space-y-6 w-full">
        <div className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-14 w-full">
          <img src="logoif.png" className="w-25 h-10 mx-auto" alt="Logo" />
        </div>
        <div className="flex flex-col space-y-5  md:px-4 ">
          <h1 className="font-semibold text-xl text-gray-500 px-2 mb-[-1rem]">
            {operator?.nama}
          </h1>
          <h2 className="font-semibold text-sm text-gray-500 px-2 mt-[-1rem] mb-[-2rem]">
            {operator?.nip}
          </h2>
          <Link
            href="/dashboard-prodi"
            className="flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100"
          >
            <Icon icon="lucide:home" width="24" height="24" color="black" />
            <span className="font-semibold text-xl flex text-black">Home</span>
          </Link>
          <Link
            href="/register-user"
            className="flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100"
          >
            <Icon
              icon="lucide:user-plus"
              width="24"
              height="24"
              color="black"
            />
            <span className="font-semibold text-xl flex text-black">
              Register User
            </span>
          </Link>
          <Link
            href="/data-mahasiswa"
            className="flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100"
          >
            <Icon
              icon="lucide:file-text"
              width="24"
              height="24"
              color="black"
            />
            <span className="font-semibold text-xl flex text-black">
              Data Mahasiswa
            </span>
          </Link>

          <div className="hs-dropdown relative inline-flex flex-col">
            <button
              id="hs-dropdown-default"
              type="button"
              className="hs-dropdown-toggle py-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
              onClick={toggleDropdown}
            >
              <Icon
                icon="lucide:users-round"
                width="24"
                height="24"
                color="black"
                className="ml-2 -mr-2"
              />
              <span className="font-semibold text-xl flex text-black px-4 ">
                Rekap Data
              </span>
              <svg
                className={`transform ${
                  isDropdownOpen ? "rotate-180" : ""
                } size-4`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div
              className={`hs-dropdown-menu transition-[opacity,margin] duration ${
                isDropdownOpen ? "opacity-100" : "opacity-0 hidden"
              } flex flex-col bg-white shadow-md rounded-lg p-2 mt-2 dark:divide-neutral-700`}
              aria-labelledby="hs-dropdown-default"
            >
              <a
                className="py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="/rekap-data-pkl"
              >
                PKL
              </a>
              <a
                className="py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="/rekap-data-skripsi"
              >
                Skripsi
              </a>
              <a
                className="py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="/rekap-data"
              >
                Status
              </a>
            </div>
          </div>
          
          <div className="flex flex-col space-y-9 w-full">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  className="flex flex-row space-x-2 items-center p-2 rounded-lg hover:bg-zinc-100"
                >
                  <Icon
                    icon="lucide:log-out"
                    width="24"
                    height="24"
                    color="black"
                  />
                  <span className="font-semibold text-xl flex">Logout</span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Apakah anda yakin ingin keluar ?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDialogContinue}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
}

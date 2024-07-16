import axios from "axios";

export type Operator = {
  nip: string;
  nama: string;
  email: string;
  noTelp?: string;
  user_id: number;
};

export type Mahasiswa = {
  nim: string;
  nama: string;
  alamat?: string;
  kabKota?: string;
  provinsi?: string;
  angkatan: string;
  jalurMasuk: string;
  email?: string;
  noTelp?: string;
  status: string;
  foto?: string;
  user_id: number;
  dosenwali_nip: string;
};

export type MahasiswaData = {
  message: string;
  transaction: Mahasiswa;
};

export type Count = {
  jumlahMahasiswa: number;
  jumlahUser: number;
  jumlahMhsAktif : number;
  jumlahMhsLulus : number;
  jumlahMhsDropout : number;
  jumlahMhsCuti : number;
  jumlahOperatorProdi : number;
  jumlahDosenWali : number;
  jumlahDepartemen : number;
}

export const getOperator = async (token: string): Promise<Operator> => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/operator/authenticated",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data.operator);

    return response.data.operator;
  } catch (error) {
    console.log(error);
    throw new Error("Terjadi kesalahan dalam mendapatkan data operator");
  }
};

export const getCountData = async (token: string): Promise<Count> => {
  try {
    const response = await axios.get("http://localhost:8000/api/count", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Terjadi kesalahan dalam mendapatkan jumlah data");
  }
};

export const addMahasiswa = async (
  token: string,
  nama: string,
  nim: string,
  angkatan: string,
  role: string,
  status: string,
  jalurMasuk: string,
  password: string,
  dosenwali_nip: string
) => {
  try {
    const response = await axios.post(
      `http://localhost:8000/api/tambahMahasiswa`,
      {
        nama,
        nim,
        angkatan,
        role,
        status,
        jalurMasuk,
        password,
        dosenwali_nip,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error(error)
    throw new Error("Terjadi kesalahan dalam menambahkan mahasiswa");
  }
};

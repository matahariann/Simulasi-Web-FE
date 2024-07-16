import axios from "axios";

export const login = async (username, password) => {
  try {
    const response = await axios.post("http://localhost:8000/api/login", {
      username: username,
      password: password,
    });

    console.log(response.data);

    if (response.data.message === "Login Berhasil") {
      return response.data.data.user;
    } else if (
      response.data.message === "Kombinasi username dan password tidak valid."
    ) {
      throw new Error("Kombinasi username dan password tidak valid.");
    } else if (response.data.message === "Akun tidak aktif.") {
      throw new Error("Akun tidak aktif.");
    } else {
      throw new Error("Terjadi kesalahan dalam proses login");
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error("Kombinasi username dan password tidak valid.");
    } else {
      throw error;
    }
  }
};

export const logout = async (token) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`, // Fixed missing template literal syntax
        },
      }
    );

    if (response.data && response.data.message === "Logout berhasil") {
      return true; // Berhasil logout
    } else {
      throw new Error("Gagal melakukan logout");
    }
  } catch (error) {
    // Include the original error message in the thrown error
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Terjadi kesalahan dalam proses logout";
    throw new Error(errorMessage);
  }
};
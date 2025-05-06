import axios from "axios";
const baseURL = "https://smtp-service-24du.onrender.com"

export const sendEmail = async (name: string, email: string, message: string) => {
  try {
    const res = await axios.post(`${baseURL}/`, {
      name,
      email,
      message
    });
    return res;
  } catch (error) {
    console.error("[Send Email failed]: ", error);
  }
};
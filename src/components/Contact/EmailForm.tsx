import { useState } from "react";
import { toast } from "sonner";
import { sendEmail } from "@/api/sendEmail";

type FormDataType = {
  name: string;
  email: string;
  message: string;
};

function EmailForm() {
  const [inputValue, setInputValue] = useState<FormDataType>({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name as keyof FormDataType]: value,
    }));
  };

  const handleSubmit = async () => {
    const { name, email, message } = inputValue;
    const nameLength = name.trim().length;
    const emailLength = email.trim().length;
    const messageLength = message.trim().length;
    const isValidEmail = /^\S+@\S+\.\S+$/.test(email.trim());

    if (!nameLength || !emailLength || !messageLength) {
      toast.error("Oops! Please fill all the inputs.");
    } else if (!isValidEmail) {
      toast.error("Please enter a valid email address.");
    } else {
      toast.success("Thanks for your message!");
      await sendEmail(name, email, message);
      setInputValue({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded shadow-md">
      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            onChange={(e) => handleInput(e)}
            value={inputValue.name}
            id="name"
            name="name"
            type="text"
            placeholder="Enter Your Name"
            className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 placeholder-gray-400 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            onChange={(e) => handleInput(e)}
            value={inputValue.email}
            id="email"
            name="email"
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 placeholder-gray-400 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            onChange={(e) => handleInput(e)}
            value={inputValue.message}
            id="message"
            name="message"
            rows={6}
            placeholder="Enter Your Message"
            className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 placeholder-gray-400 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        <div className="text-right">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            type="submit"
            className="cursor-pointer bg-purple-600 text-white text-sm font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-purple-700 transition"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmailForm;

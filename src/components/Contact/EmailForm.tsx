function EmailForm() {
  const handleSubmit = () => {
    alert("已寄出!");
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

const ContactForm = () => {
  return (
    <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">
      <h3 className="text-2xl font-bold mb-2">Start Your Project</h3>
      <p className="text-gray-400 mb-8">
        Tell us about your project and we’ll get back to you.
      </p>

      <form className="space-y-5">
        {["Full Name", "Email Address", "Subject"].map((label) => (
          <div key={label}>
            <label className="text-sm text-gray-300">{label}</label>
            <input
              className="w-full mt-1 px-4 py-3 rounded-lg bg-black/30
              border border-white/10 focus:outline-none
              focus:border-blue-500 transition"
            />
          </div>
        ))}

        <div>
          <label className="text-sm text-gray-300">Message</label>
          <textarea
            rows="5"
            className="w-full mt-1 px-4 py-3 rounded-lg bg-black/30
            border border-white/10 focus:outline-none
            focus:border-blue-500 transition"
          />
        </div>

        <button
          className="w-full mt-4 py-3 rounded-lg bg-blue-600 font-semibold
          transition-all duration-300
          hover:bg-blue-500
          hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
        >
          Send Message →
        </button>

        <p className="text-xs text-gray-400 text-center mt-4">
          🔒 Your information is secure and never shared
        </p>
      </form>
    </div>
  );
};

export default ContactForm;

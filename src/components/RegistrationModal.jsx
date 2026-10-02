import { useState } from "react";
import {
  ArrowRight,
  X,
  User,
  Mail,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const generateReferralCode = () => {
  const randomPart = Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase();

  return `AI60-${randomPart}`;
};

function RegistrationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    branch: "",
  });

  const referralLink = formData.referralCode
    ? `${window.location.origin}/#register?ref=${formData.referralCode}`
    : "";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing registrations
    const savedData = localStorage.getItem("ai60Registrations");

    let existingRegistrations = [];

    if (savedData) {
      try {
        existingRegistrations = JSON.parse(savedData);
      } catch (error) {
        console.error("Invalid registration data:", error);
        existingRegistrations = [];
      }
    }

    // Check if this email is already registered
    const alreadyRegistered = existingRegistrations.some(
      (registration) =>
        registration.email.toLowerCase() === formData.email.toLowerCase()
    );

    if (alreadyRegistered) {
      alert("This email is already registered!");
      return;
    }

    // Read referral code from the hash URL
    const savedReferral = sessionStorage.getItem("ai60Referral");

    const referredBy = savedReferral || null;

        // Generate a unique referral code
    const referralCode = generateReferralCode();

    // Create the complete registration
    const newRegistration = {
      ...formData,
      referralCode,
      referredBy,
      referralCount: 0,
    };

    // Add the new registration
    // Copy existing registrations
    let updatedRegistrations = [...existingRegistrations];

    // If this student came through a referral link,
    // give credit to the referring student
    if (referredBy) {
      updatedRegistrations = updatedRegistrations.map((registration) => {
        if (registration.referralCode === referredBy) {
          return {
            ...registration,
            referralCount: (registration.referralCount || 0) + 1,
          };
        }

        return registration;
      });
    }

    // Add the new registration
    updatedRegistrations.push(newRegistration);

    // Update formData so the success screen can show the referral code
    setFormData(newRegistration);

    // Save updated registrations
    localStorage.setItem(
      "ai60Registrations",
      JSON.stringify(updatedRegistrations)
    );

    window.dispatchEvent(new Event("registrationUpdated"));

    console.log("Registration saved:", newRegistration);

    sessionStorage.removeItem("ai60Referral");

    // Show success screen
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#0b1020] shadow-2xl"
          >

            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="border-b border-white/10 px-7 pb-6 pt-8">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">
                <GraduationCap
                  size={21}
                  className="text-cyan-300"
                />
              </div>

              <h2 className="font-display text-2xl font-bold text-white">
                Reserve your free spot
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Tell us a little about yourself and we'll save your
                place in the AI60 workshop.
              </p>
            </div>

            {/* Form */}
            {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 px-7 py-7"
            >

              {/* Name */}
              <div>
                <label className="mb-2 block text-xs font-medium text-slate-400">
                  Full name
                </label>

                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/40"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-xs font-medium text-slate-400">
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/40"
                  />
                </div>
              </div>

              {/* College */}
              <div>
                <label className="mb-2 block text-xs font-medium text-slate-400">
                  College / University
                </label>

                <div className="relative">
                  <GraduationCap
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    required
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    placeholder="Your college"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/40"
                  />
                </div>
              </div>

              {/* Branch */}
              <div>
                <label className="mb-2 block text-xs font-medium text-slate-400">
                  Branch / Specialization
                </label>

                <div className="relative">
                  <BookOpen
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    required
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    placeholder="e.g. CSE / AI & ML"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/40"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Reserve my free spot

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-[11px] text-slate-600">
                Free registration • 60-minute hands-on workshop
              </p>
            </form>
            ) : (
  <div className="px-7 py-12 text-center">
    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/10">
      <GraduationCap
        size={30}
        className="text-cyan-300"
      />
    </div>

    <h3 className="text-2xl font-bold text-white">
      You're registered! 🎉
    </h3>

    <p className="mt-3 text-sm leading-6 text-slate-400">
      Your referral code:
    </p>

    <div className="mx-auto mt-2 w-fit rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
      <span className="font-mono text-sm font-semibold text-cyan-300">
        {formData.referralCode}
      </span>
    </div>

    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(referralLink);
        alert("Referral link copied!");
      }}
      className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
    >
      Copy referral link
    </button>

    <p className="mt-3 text-sm leading-6 text-slate-400">
      Your spot has been reserved successfully,{" "}
      <span className="font-medium text-white">
        {formData.name}
      </span>
      .
    </p>

    <button
      type="button"
      onClick={handleClose}
      className="mt-7 w-full rounded-xl bg-white py-3.5 text-sm font-bold text-slate-950"
    >
      Done
    </button>
  </div>
)}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default RegistrationModal;
import { useEffect, useState } from "react";
import {
  Users,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function Registrations() {
  const [registrations, setRegistrations] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const registrationsPerPage = 10;

  useEffect(() => {
    const loadRegistrations = () => {
      const savedData = localStorage.getItem("ai60Registrations");

      if (!savedData) {
        setRegistrations([]);
        return;
      }

      try {
        const parsedData = JSON.parse(savedData);
        setRegistrations(parsedData);
      } catch (error) {
        console.error("Failed to load registrations:", error);
        setRegistrations([]);
      }
    };

    loadRegistrations();

    const handleRegistrationUpdate = () => {
      loadRegistrations();
    };

    window.addEventListener(
      "registrationUpdated",
      handleRegistrationUpdate
    );

    return () => {
      window.removeEventListener(
        "registrationUpdated",
        handleRegistrationUpdate
      );
    };
  }, []);

  // Search
  const filteredRegistrations = registrations.filter((registration) => {
    const search = searchTerm.toLowerCase();

    return (
      registration.name.toLowerCase().includes(search) ||
      registration.email.toLowerCase().includes(search) ||
      registration.college.toLowerCase().includes(search) ||
      registration.branch.toLowerCase().includes(search)
    );
  });

  // Pagination
  const totalPages = Math.ceil(
    filteredRegistrations.length / registrationsPerPage
  );

  const startIndex =
    (currentPage - 1) * registrationsPerPage;

  const currentRegistrations = filteredRegistrations.slice(
    startIndex,
    startIndex + registrationsPerPage
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      {/* Compact registration section */}
      <section
        id="registrations"
        className="border-t border-white/10 bg-[#060914] px-6 py-20"
      >
        <div className="mx-auto max-w-5xl">

          {/* Header */}
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
              <Users
                size={24}
                className="text-cyan-300"
              />
            </div>

            <h2 className="text-3xl font-bold text-white">
              Registered Participants
            </h2>

            <p className="mt-3 text-sm text-slate-400">
              People who have reserved their spot for the AI60 workshop.
            </p>
          </div>

          {/* Registration summary */}
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-slate-400">
                  Total registrations
                </p>

                <p className="mt-1 text-4xl font-bold text-white">
                  {registrations.length}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                <Users
                  size={24}
                  className="text-cyan-300"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="mt-6 flex w-full items-center justify-center rounded-xl bg-white py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              View all registrations
            </button>
          </div>
        </div>
      </section>

      {/* Registration management modal */}
      {showAll && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 px-4 backdrop-blur-md">

          <div className="relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b1020] shadow-2xl">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-7 py-6">

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Registered Participants
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  {registrations.length} total registrations
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowAll(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>

            </div>

            {/* Search */}
            <div className="border-b border-white/10 px-7 py-5">

              <div className="relative">

                <Search
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Search by name, email, college or branch..."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/40"
                />

              </div>

            </div>

            {/* Table */}
            <div className="flex-1 overflow-auto px-7 py-5">

              {currentRegistrations.length === 0 ? (
                <div className="py-16 text-center">

                  <Users
                    size={32}
                    className="mx-auto mb-4 text-slate-600"
                  />

                  <p className="text-sm text-slate-400">
                    No registrations found.
                  </p>

                </div>
              ) : (
                <div className="overflow-hidden rounded-2xl border border-white/10">

                  <table className="w-full text-left">

                    <thead className="bg-white/[0.04]">

                      <tr className="border-b border-white/10">

                        <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          #
                        </th>

                        <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Name
                        </th>

                        <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Email
                        </th>

                        <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          College
                        </th>

                        <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Branch
                        </th>

                      </tr>

                    </thead>

                    <tbody>

                      {currentRegistrations.map(
                        (registration, index) => (
                          <tr
                            key={`${registration.email}-${startIndex + index}`}
                            className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]"
                          >

                            <td className="px-5 py-4 text-sm text-slate-500">
                              {startIndex + index + 1}
                            </td>

                            <td className="px-5 py-4 text-sm font-medium text-white">
                              {registration.name}
                            </td>

                            <td className="px-5 py-4 text-sm text-slate-400">
                              {registration.email}
                            </td>

                            <td className="px-5 py-4 text-sm text-slate-400">
                              {registration.college}
                            </td>

                            <td className="px-5 py-4 text-sm text-slate-400">
                              {registration.branch}
                            </td>

                          </tr>
                        )
                      )}

                    </tbody>

                  </table>

                </div>
              )}

            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between border-t border-white/10 px-7 py-5">

                <p className="text-sm text-slate-500">
                  Page {currentPage} of {totalPages}
                </p>

                <div className="flex items-center gap-2">

                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() =>
                      setCurrentPage((page) => page - 1)
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <ChevronLeft size={17} />
                  </button>

                  <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() =>
                      setCurrentPage((page) => page + 1)
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <ChevronRight size={17} />
                  </button>

                </div>

              </div>
            )}

          </div>

        </div>
      )}
    </>
  );
}

export default Registrations;
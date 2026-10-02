import { useEffect, useState } from "react";
import {
  Users,
  UserPlus,
  Share2,
  TrendingUp,
  Trophy,
  ArrowLeft,
} from "lucide-react";

function GrowthDashboard() {
  const [registrations, setRegistrations] = useState([]);

  const loadRegistrations = () => {
    const savedRegistrations =
      JSON.parse(localStorage.getItem("ai60Registrations")) || [];

    setRegistrations(savedRegistrations);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      loadRegistrations();
    }, 0);

    const handleRegistrationUpdate = () => {
      loadRegistrations();
    };

    window.addEventListener(
      "registrationUpdated",
      handleRegistrationUpdate
    );

    return () => {
      clearTimeout(timer);

      window.removeEventListener(
        "registrationUpdated",
        handleRegistrationUpdate
      );
    };
  }, []);

  // Total registrations
  const totalRegistrations = registrations.length;

  // Registrations that came through someone's referral
  const referralRegistrations = registrations.filter(
    (registration) => registration.referredBy
  ).length;

  // Registrations without a referral
  const organicRegistrations =
    totalRegistrations - referralRegistrations;

  console.log("Organic registrations:", organicRegistrations);

  // People who have at least one successful referral
  const activeReferrers = registrations.filter(
    (registration) => (registration.referralCount || 0) > 0
  ).length;

  // Referral percentage
  const referralPercentage =
    totalRegistrations > 0
      ? Math.round(
          (referralRegistrations / totalRegistrations) * 100
        )
      : 0;

  // Sort users by referral count
  const topReferrers = [...registrations]
    .filter((registration) => registration.referralCode)
    .sort(
      (a, b) =>
        (b.referralCount || 0) -
        (a.referralCount || 0)
    )
    .slice(0, 5);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">

      <div className="mb-6">
        <button
          onClick={() => {
            window.location.hash = "";
          }}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to AI60 Website
        </button>
      </div>

      {/* Header */}
      <div className="mb-10 text-center">

        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10">
          <TrendingUp
            size={24}
            className="text-cyan-300"
          />
        </div>

        <h2 className="font-display text-3xl font-bold text-white">
          AI60 Growth Dashboard
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
          Track registrations and see how referrals are helping
          grow the AI60 workshop.
        </p>

      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {/* Total */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

          <div className="mb-5 flex items-center justify-between">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
              <Users
                size={20}
                className="text-cyan-300"
              />
            </div>

          </div>

          <p className="text-xs uppercase tracking-wider text-slate-500">
            Total registrations
          </p>

          <p className="mt-2 text-3xl font-bold text-white">
            {totalRegistrations}
          </p>

        </div>

        {/* Referral */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

          <div className="mb-5 flex items-center justify-between">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
              <UserPlus
                size={20}
                className="text-cyan-300"
              />
            </div>

          </div>

          <p className="text-xs uppercase tracking-wider text-slate-500">
            Referral registrations
          </p>

          <p className="mt-2 text-3xl font-bold text-white">
            {referralRegistrations}
          </p>

        </div>

        {/* Active referrers */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

          <div className="mb-5 flex items-center justify-between">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
              <Share2
                size={20}
                className="text-cyan-300"
              />
            </div>

          </div>

          <p className="text-xs uppercase tracking-wider text-slate-500">
            Active referrers
          </p>

          <p className="mt-2 text-3xl font-bold text-white">
            {activeReferrers}
          </p>

        </div>

        {/* Organic */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

          <div className="mb-5 flex items-center justify-between">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
              <TrendingUp
                size={20}
                className="text-cyan-300"
              />
            </div>

          </div>

          <p className="text-xs uppercase tracking-wider text-slate-500">
            Referral contribution
          </p>

          <p className="mt-2 text-3xl font-bold text-white">
            {referralPercentage}%
          </p>

        </div>

      </div>

      {/* Growth progress */}
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm font-semibold text-white">
              Progress toward 500 registrations
            </p>

            <p className="mt-1 text-xs text-slate-500">
              {totalRegistrations} of 500 registrations
            </p>
          </div>

          <p className="text-sm font-bold text-cyan-300">
            {Math.min(
              100,
              Math.round((totalRegistrations / 500) * 100)
            )}
            %
          </p>

        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">

          <div
            className="h-full rounded-full bg-cyan-400 transition-all duration-500"
            style={{
              width: `${Math.min(
                100,
                (totalRegistrations / 500) * 100
              )}%`,
            }}
          />

        </div>

      </div>

      {/* Top referrers */}
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">

        <div className="mb-6 flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
            <Trophy
              size={20}
              className="text-cyan-300"
            />
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Top Referrers
            </h3>

            <p className="text-xs text-slate-500">
              Participants bringing new registrations
            </p>
          </div>

        </div>

        {topReferrers.length === 0 ? (

          <p className="py-8 text-center text-sm text-slate-500">
            No referrals yet.
          </p>

        ) : (

          <div className="space-y-3">

            {topReferrers.map((registration, index) => (

              <div
                key={registration.email}
                className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-4"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-xs font-bold text-slate-400">
                    #{index + 1}
                  </div>

                  <div>

                    <p className="text-sm font-semibold text-white">
                      {registration.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {registration.referralCode}
                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <p className="text-sm font-bold text-cyan-300">
                    {registration.referralCount || 0}
                  </p>

                  <p className="text-[10px] uppercase tracking-wider text-slate-600">
                    referrals
                  </p>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default GrowthDashboard;
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-8">
      <div className="text-center">
        <p className="font-display text-massive text-white/10">404</p>
        <p className="mt-4 text-[15px] text-sage/60 font-light">
          Page not found.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 text-[12px] uppercase tracking-[0.2em] text-white border border-white/30 px-6 py-3 hover:bg-white hover:text-navy transition-all duration-500 ease-luxe"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

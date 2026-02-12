import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-8">
      <div>
        <p className="font-black text-[20vw] md:text-[15rem] leading-none tracking-tighter text-black/5">
          404
        </p>
        <p className="mt-4 text-sm text-black/40">Page not found.</p>
        <Link
          href="/"
          className="inline-block mt-8 text-[11px] font-bold uppercase tracking-widest bg-black text-white px-8 py-4 hover:bg-swiss-accent transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

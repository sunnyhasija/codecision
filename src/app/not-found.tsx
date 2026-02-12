import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-xs font-mono text-accent mb-6">404</p>
        <p className="text-[15px] text-text-secondary mb-8">
          Page not found.
        </p>
        <Button href="/" variant="secondary">
          Return home
        </Button>
      </div>
    </div>
  );
}

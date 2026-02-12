import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-sm text-accent font-mono mb-4">404</p>
        <h1 className="text-heading font-semibold tracking-tight text-text-primary mb-4">
          Page not found
        </h1>
        <p className="text-text-secondary mb-8">
          The page you are looking for does not exist.
        </p>
        <Button href="/">Return home</Button>
      </div>
    </div>
  );
}

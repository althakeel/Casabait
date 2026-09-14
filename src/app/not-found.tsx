import Link from "next/link";
import { PropertySearchBar } from "@/components/PropertySearchBar";

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-custom text-center">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-neutral-dark">Page Not Found</h2>
        <p className="mx-auto mt-3 max-w-md text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Try searching for a property or return to the homepage.
        </p>
        <div className="mt-8">
          <PropertySearchBar />
        </div>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

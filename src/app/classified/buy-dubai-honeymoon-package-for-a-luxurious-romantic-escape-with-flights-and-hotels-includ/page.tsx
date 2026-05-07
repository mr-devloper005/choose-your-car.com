import Link from "next/link";
import { NavbarShell } from "@/components/shared/navbar-shell";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { ContentImage } from "@/components/shared/content-image";

export const revalidate = 300;

export const metadata = {
  title: "Buy Dubai Honeymoon Package for a Luxurious Romantic Escape with Flights and Hotels Included",
  description:
    "Enjoy a luxurious romantic escape with Dubai honeymoon planning that bundles flights, hotels, and sightseeing into one smoother booking flow.",
};

export default function DubaiHoneymoonClassifiedPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavbarShell />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <Link href="/classified" className="text-sm text-muted-foreground hover:text-foreground">
          &larr; Back to Classified
        </Link>
        <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-card">
          <div className="relative aspect-[16/9] bg-muted">
            <ContentImage
              src="https://api.seoparadox.com/assets/images/imageye___-_imgi_44_1600x1200-17-1-1778094376725-3e440e40.webp"
              alt="Buy Dubai Honeymoon Package for a Luxurious Romantic Escape with Flights and Hotels Included"
              fill
              className="object-cover"
              intrinsicWidth={1600}
              intrinsicHeight={900}
            />
          </div>
          <div className="space-y-4 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Spotlight Classified</p>
            <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Buy Dubai Honeymoon Package for a Luxurious Romantic Escape with Flights and Hotels Included
            </h1>
            <p className="text-base leading-8 text-muted-foreground">
              Enjoy a luxurious romantic escape with curated Dubai honeymoon planning that combines flights,
              premium hotel stays, and sightseeing into one smoother booking flow through Bestravelz.
            </p>
            <p className="text-base leading-8 text-muted-foreground">
              This landing page keeps the published classified reachable while the broader dynamic lookup is being
              stabilized for this site build.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <a href="https://bestravelz.com" target="_blank" rel="noreferrer">Open Offer</a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/classified">Browse More Classifieds</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

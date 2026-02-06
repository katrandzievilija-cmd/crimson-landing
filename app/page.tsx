import { Hero } from "@/components/hero"
import { ProductSection } from "@/components/product-section"
import { BenefitsSection } from "@/components/benefits-section"
import { HowItWorks } from "@/components/how-it-works"
import { DiscretionSection } from "@/components/discretion-section"

import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main>
      <Hero />
      <ProductSection />
      <BenefitsSection />
      <HowItWorks />
      <DiscretionSection />

      <SiteFooter />
    </main>
  )
}

import { CheckCircle } from "lucide-react"

const steps = [
  "Connect a repository and start a shipping session.",
  "Capture commits, diffs, notes, and screenshots while the work is fresh.",
  "Shape the session into updates, recaps, launch notes, and changelog copy.",
  "Share the content with a link back to the public story of what shipped.",
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-3xl font-bold">How it works</h2>
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start gap-4 rounded-lg border bg-card p-5">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="text-lg leading-7">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

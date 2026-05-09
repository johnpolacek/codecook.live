import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Radio, Share2 } from "lucide-react"

const features = [
  {
    icon: <Code className="h-8 w-8 text-blue-500" />,
    title: "Commit-to-content",
    description: "Use real commits, diffs, and notes as the source material for useful updates.",
  },
  {
    icon: <Radio className="h-8 w-8 text-blue-500" />,
    title: "Live shipping sessions",
    description: "Make active work followable with a public timeline of decisions, changes, and shipped moments.",
  },
  {
    icon: <Share2 className="h-8 w-8 text-blue-500" />,
    title: "Shareable recaps",
    description: "Leave every session with posts, launch notes, and changelog copy ready to refine.",
  },
]

export default function Features() {
  return (
    <section id="product" className="px-6 pb-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">A publishing workflow for people who ship.</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="mb-2 text-blue-500">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

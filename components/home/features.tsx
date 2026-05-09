import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BoltIcon } from "@heroicons/react/24/solid"
import { Code, Radio } from "lucide-react"

const features = [
  {
    icon: <Code className="h-8 w-8 text-blue-500" />,
    title: "Commit-To-Content",
    description: "Turn selected commits, diffs, and notes into posts, recaps, and changelog-ready updates.",
  },
  {
    icon: <Radio className="h-8 w-8 text-blue-500" />,
    title: "Live Shipping Sessions",
    description: "Make active work followable with a public timeline of what changed and what ships next.",
  },
  {
    icon: <BoltIcon className="h-8 w-8 text-blue-500" />,
    title: "Audience Growth",
    description: "Package each session into shareable content so your progress compounds across channels.",
  },
]

export default function Features() {
  return (
    <section id="product" className="pb-8 px-6">
      <div className="container mx-auto max-w-6xl">
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

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  name: string
  title: string
  content: string
  image: string
  rating: number
  delay?: number
}

export function TestimonialCard({ name, title, content, image, rating, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`} />
            ))}
          </div>
          <h4 className="mb-2 text-lg font-semibold">{title}</h4>
          <p className="mb-6 text-sm text-muted-foreground">{content}</p>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={image} alt={name} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-sm text-muted-foreground">Patient</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}


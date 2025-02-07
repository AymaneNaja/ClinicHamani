import { MapPin, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function ContactInfo() {
  return (
    <motion.div
      className="grid gap-6 text-center sm:text-left sm:grid-cols-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-col items-center sm:items-start">
        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
          <MapPin className="h-5 w-5 text-blue-600" />
        </div>
        <h3 className="mb-1 font-semibold">Location</h3>
        <p className="text-sm text-muted-foreground">123 Dental Street, City, State 12345</p>
      </div>
      <div className="flex flex-col items-center sm:items-start">
        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
          <Phone className="h-5 w-5 text-blue-600" />
        </div>
        <h3 className="mb-1 font-semibold">Phone</h3>
        <p className="text-sm text-muted-foreground">(123) 456-7890</p>
      </div>
      <div className="flex flex-col items-center sm:items-start">
        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
          <Mail className="h-5 w-5 text-blue-600" />
        </div>
        <h3 className="mb-1 font-semibold">Email</h3>
        <p className="text-sm text-muted-foreground">contact@dentipai.com</p>
      </div>
    </motion.div>
  )
}


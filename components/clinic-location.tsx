"use client"
import { useEffect, useState } from "react"
import { MapPin, Clock, Phone, Mail } from "lucide-react"
import dynamic from "next/dynamic"
import "leaflet/dist/leaflet.css"

// Dynamically import Leaflet with no SSR
const MapComponent = dynamic(() => import("./map-component"), {
  ssr: false,
})

export function ClinicLocation() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Our Location
        </h2>
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          <div className="w-full lg:w-1/2 h-[500px] rounded-lg overflow-hidden shadow-lg">
            <MapComponent />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-6">
                Clinic Hamani
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                Welcome to Clinic Hamani, your trusted healthcare provider in Akbou. Our state-of-the-art facility is
                conveniently located to serve you and your family with the highest quality medical care.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-blue-600">Address</h4>
                  <p className="text-gray-600 text-lg">Rue Sidi Ali, Akbou, Algeria</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-blue-600">Working Hours</h4>
                  <p className="text-gray-600 text-lg">Monday - Friday: 8:00 AM - 8:00 PM</p>
                  <p className="text-gray-600 text-lg">Saturday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-blue-600">Phone</h4>
                  <p className="text-gray-600 text-lg">+213550504376</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-blue-600">Email</h4>
                  <p className="text-gray-600 text-lg">cliniquehamani@hotmail.fr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
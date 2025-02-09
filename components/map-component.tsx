"use client"
import { useEffect } from "react"
import L from "leaflet"

export default function MapComponent() {
  useEffect(() => {
    // Coordinates for Clinique Hamani, FG6F+XMJ, Akbou, Algeria
    const latitude = 36.462661
    const longitude = 4.524151

    // Initialize the map
    const map = L.map("map").setView([latitude, longitude], 15)

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map)

    // Custom marker icon
    const icon = L.icon({
      iconUrl: "/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    })

    // Add a marker with a popup
    L.marker([latitude, longitude], { icon })
      .addTo(map)
      .bindPopup("Clinique Hamani, FG6F+XMJ, Akbou, Algeria")
      .openPopup()

    // Cleanup the map instance on component unmount
    return () => {
      map.remove()
    }
  }, [])

  return <div id="map" className="w-full h-full"></div>
} 
"use client"

import { X } from "lucide-react"
import { useEffect } from "react"
import Image from "next/image"

interface ActionBoxProps {
  title: string
  details: string
  image?: string
  imageAlt?: string
  onClose: () => void
}

export function ActionBox({ title, details, image, imageAlt = "Featured image", onClose}: ActionBoxProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  const paragraphs = details.split(/\n\n+/).filter(Boolean)

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="bg-black/40 backdrop-blur-md rounded-2xl p-6 max-w-2xl w-full mx-4 shadow-2xl animate-in fade-in zoom-in-95 duration-300 flex flex-col max-h-[80vh]"
        style={{ borderColor: "rgba(232, 188, 185, 0.3)", borderWidth: "1px" }}
      >
        {/* Header - Fixed */}
        <div className="flex justify-between items-start mb-4 flex-shrink-0">
          <h2 className="text-2xl font-bold" style={{ color: "#E8BCB9" }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 hover:bg-white/10 transition-colors"
            aria-label="Close"
            style={{ color: "#E8BCB9" }}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto pr-2 custom-scrollbar flex-grow">
          {/* Optional Image */}
          {image && (
            <div className="mb-6">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <Image src={image || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
              </div>
            </div>
          )}

          {/* Text Content with Paragraphs */}
          <div className="space-y-4">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="leading-relaxed text-lg" style={{ color: "rgba(232, 188, 185, 0.9)" }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Footer - Fixed */}
        <div className="mt-6 flex justify-end flex-shrink-0 pt-2">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg transition-colors font-medium"
            style={{
              backgroundColor: "rgba(232, 188, 185, 0.2)",
              color: "#E8BCB9",
              borderColor: "rgba(232, 188, 185, 0.3)",
              borderWidth: "1px",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}


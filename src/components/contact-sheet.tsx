"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react"
import { X, ChevronDown } from "lucide-react"
import { useContactStore } from "@/lib/contact-store"

export function ContactSheet() {
  const { isOpen, closeContactSheet } = useContactStore()
  const firstNameInputRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    company: "",
    role: "",
    country: "",
    project: "",
  })
  const [buttonText, setButtonText] = useState("Submit")
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setButtonText("Submitting...")
    setShowSuccessMessage(false)
    setShowFailureMessage(false)
    
    try {
      const res = await fetch("/api/send", {
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          jobTitle: formData.jobTitle,
          company: formData.company,
          role: formData.role,
          country: formData.country,
          project: formData.project,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
      
      const { error } = await res.json()
      
      if (error) {
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText("Submit")
        return
      }
      
      setShowSuccessMessage(true)
      setShowFailureMessage(false)
      setButtonText("Message sent successfully!")
      
      // Reset form fields after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        jobTitle: "",
        company: "",
        role: "",
        country: "",
        project: "",
      })
      
      // Close the sheet after a delay
      setTimeout(() => {
        closeContactSheet()
        setButtonText("Submit")
        setShowSuccessMessage(false)
      }, 2000)
      
    } catch (error) {
      setShowSuccessMessage(false)
      setShowFailureMessage(true)
      setButtonText("Submit")
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // on open, focus the first name input
  useEffect(() => {
    if (isOpen) {
      const focusInput = () => {
        if (firstNameInputRef.current) {
          firstNameInputRef.current.focus()
        } else {
          requestAnimationFrame(focusInput)
        }
      }
      
      setTimeout(() => {
        requestAnimationFrame(focusInput)
      }, 100)
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onClose={closeContactSheet} className="relative z-50">
      {/* Backdrop */}
      <DialogBackdrop className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-out data-[closed]:opacity-0" />

      {/* Dialog Panel */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel 
              className="pointer-events-auto relative w-screen max-w-2xl transform transition duration-300 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              onTransitionEnd={() => {
                if (isOpen && firstNameInputRef.current) {
                  firstNameInputRef.current.focus()
                }
              }}
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-start justify-between p-8 pb-6">
          <div className="flex-1">
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-4">
              CONTACT / DEMO REQUEST • PARTNERSHIP INQUIRY
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
              Interested in solving your problems with Build?
            </h2>
          </div>
          <button onClick={closeContactSheet} className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 pb-8">
          <div className="space-y-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                FIRST NAME: <span className="text-red-500">*</span>
              </label>
              <input
                ref={firstNameInputRef}
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LAST NAME: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Business Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                BUSINESS EMAIL ADDRESS: <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                PHONE NUMBER: <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Job Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                JOB TITLE: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.jobTitle}
                onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                COMPANY/INSTITUTION: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Role Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                DO YOU CONSIDER YOURSELF AS A: <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  required
                  value={formData.role}
                  onChange={(e) => handleInputChange("role", e.target.value)}
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 focus:outline-none bg-transparent text-gray-900 appearance-none cursor-pointer"
                >
                  <option value="">Select your role</option>
                  <option value="developer">Developer</option>
                  <option value="investor">Investor</option>
                  <option value="architect">Architect</option>
                  <option value="contractor">Contractor</option>
                  <option value="consultant">Consultant</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Country Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                COUNTRY: <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  required
                  value={formData.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 focus:outline-none bg-transparent text-gray-900 appearance-none cursor-pointer"
                >
                  <option value="">Select your country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                TELL US ABOUT YOUR PROJECT. SOME CONTEXT WILL ALLOW US TO CONNECT YOU TO THE RIGHT TEAM FASTER:
              </label>
              <textarea
                rows={4}
                value={formData.project}
                onChange={(e) => handleInputChange("project", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-gray-900 focus:ring-0 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400 resize-none"
                placeholder="Describe your project..."
              />
            </div>
          </div>

          {/* Success/Error Messages */}
          {showSuccessMessage && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800">Message sent successfully! We'll get back to you soon.</p>
            </div>
          )}
          {showFailureMessage && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800">Sorry, there was an error sending your message. Please try again.</p>
            </div>
          )}

          {/* Footer */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-8 pt-6 gap-4 md:gap-0">
            <p className="text-xs text-gray-500 max-w-md">
              PLEASE SEE OUR PRIVACY POLICY FOR MORE INFORMATION ON HOW WE HANDLE THIS INFORMATION.
            </p>
            <button
              type="submit"
              disabled={buttonText !== "Submit"}
              className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
            >
              {buttonText}
            </button>
          </div>
        </form>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

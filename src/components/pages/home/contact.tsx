"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import youngWoman from "@/assets/images/contact.jpg";
import rightArrow from "@/assets/images/right-arrow.png";
import Flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Select from "react-select";
import { StylesConfig } from "react-select";
import { FaCalendar, FaClock, FaList, FaUser } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

interface FormData {
  service: string;
  date: string;
  time: string;
  name: string;
  phone: string;
}

interface FormErrors {
  service?: string;
  date?: string;
  time?: string;
  name?: string;
  phone?: string;
}

interface SelectOption {
  value: string;
  label: string;
}

const customStyles: StylesConfig<SelectOption, false> = {
  control: (provided) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    background: "transparent",
    padding: "0",
    "&:hover": {
      border: "none",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#2d2c2c" : "white",
    color: state.isSelected ? "white" : "#2d2c2c",
    "&:hover": {
      backgroundColor: "#a99d83",
      color: "white",
    },
    cursor: "pointer",
    padding: "10px 20px",
    fontFamily: "var(--font-primary)",
  }),
  menu: (provided) => ({
    ...provided,
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    border: "1px solid #eee",
    borderRadius: "4px",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#969595",
    fontFamily: "var(--font-primary)",
    paddingLeft: "56px",
    paddingRight: "32px",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#2d2c2c",
    fontFamily: "var(--font-primary)",
    paddingLeft: "56px",
    paddingRight: "32px",
  }),
};

const services = [
  { value: "Hair Styling", label: "Hair Styling" },
  { value: "Makeup", label: "Makeup" },
  { value: "Nail Care", label: "Nail Care" },
  { value: "Cosmetology", label: "Cosmetology" },
  { value: "Skin Treatment", label: "Skin Treatment" },
];

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    service: "",
    date: "",
    time: "",
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }
    if (!formData.date) {
      newErrors.date = "Please select a date";
    }
    if (!formData.time) {
      newErrors.time = "Please select a time";
    }
    if (!formData.name) {
      newErrors.name = "Please enter your name";
    }
    if (!formData.phone) {
      newErrors.phone = "Please enter your phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success message
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          service: "",
          date: "",
          time: "",
          name: "",
          phone: "",
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Initialize date picker
    const datePicker = Flatpickr("#date-input", {
      dateFormat: "Y-m-d",
      onChange: ([selectedDate]) => {
        if (selectedDate) {
          setFormData((prev) => ({
            ...prev,
            date: selectedDate.toISOString().split("T")[0],
          }));
        }
      },
    });

    // Initialize time picker
    const timePicker = Flatpickr("#time-input", {
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
      minTime: "09:00",
      maxTime: "18:00",
      onChange: ([selectedDate]) => {
        if (selectedDate) {
          setFormData((prev) => ({
            ...prev,
            time: selectedDate.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            }),
          }));
        }
      },
    });

    // Cleanup
    return () => {
      if (Array.isArray(datePicker)) {
        datePicker.forEach((instance) => instance.destroy());
      } else {
        datePicker.destroy();
      }

      if (Array.isArray(timePicker)) {
        timePicker.forEach((instance) => instance.destroy());
      } else {
        timePicker.destroy();
      }
    };
  }, []);

  return (
    <section id="d2c_contact">
      <div className="container">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="w-[90%] lg:w-[40%] hidden lg:block">
            <div className="bg-secondary h-[350px] md:h-[500px] lg:h-[700px] w-full md:w-[85%] flex justify-end pt-6 pl-6">
              <div className="-mr-[50px] md:-mr-[70px] xl:-mr-[100px]">
                <Image
                  src={youngWoman}
                  className="h-full object-contain object-bottom"
                  alt="Young woman in black hat"
                  width={500}
                  height={700}
                  priority
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[55%] mt-auto">
            <div className="d2c_header text-center lg:text-left w-full">
              <h3 className="d2c_subtitle">Take a Time</h3>
              <h2 className="d2c_title">Appointment</h2>
            </div>

            <form className="mt-6 relative" onSubmit={handleSubmit}>
              <div className="mb-6">
                <div className="relative bg-white py-3 flex items-center">
                  <span className="text-primary absolute left-8">
                    <FaList />
                  </span>
                  <Select
                    instanceId="service-select"
                    options={services}
                    value={services.find(
                      (option) => option.value === formData.service
                    )}
                    onChange={(option) => {
                      setFormData((prev) => ({
                        ...prev,
                        service: option?.value || "",
                      }));
                    }}
                    styles={customStyles}
                    placeholder="Select Service"
                    className="w-full"
                    isSearchable={false}
                  />
                </div>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-2">{errors.service}</p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-x-8 sm:gap-x-6 sm:grid-cols-6">
                <div className="sm:col-span-3 mb-6">
                  <div className="bg-white px-8 py-3 flex items-center">
                    <span className="text-primary">
                      <FaCalendar />
                    </span>
                    <input
                      type="text"
                      id="date-input"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Select Date"
                      readOnly
                    />
                  </div>
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-2">{errors.date}</p>
                  )}
                </div>
                <div className="sm:col-span-3 mb-6">
                  <div className="bg-white px-8 py-3 flex items-center">
                    <span className="text-primary">
                      <FaClock />
                    </span>
                    <input
                      type="text"
                      id="time-input"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Select Time"
                      readOnly
                    />
                  </div>
                  {errors.time && (
                    <p className="text-red-500 text-sm mt-2">{errors.time}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-x-8 sm:gap-x-6 sm:grid-cols-6">
                <div className="sm:col-span-3 mb-6">
                  <div className="bg-white px-8 py-3 flex items-center">
                    <span className="text-primary">
                      <FaUser />
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="form-control"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                  )}
                </div>
                <div className="sm:col-span-3 mb-6 ">
                  <div className="bg-white px-8 py-3 flex items-center">
                    <span className="text-primary">
                      <FaMobileAlt />
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="form-control"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="d2c_btn d2c_primary_btn w-full md:max-w-max text-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Booking...
                  </span>
                ) : (
                  <>
                    Book Now
                    <Image
                      src={rightArrow}
                      alt="Right Arrow"
                      width={24}
                      height={24}
                    />
                  </>
                )}
              </button>

              {isSubmitted && (
                // <div className="absolute inset-0 bg-[#e6c6c6] z-20  ">
                <div className="rounded-lg p-6 pl-0 text-left">
                  <div className="text-green-600 text-base mb-2">
                    Thank you for your appointment request! We will contact you
                    shortly to confirm your booking.
                  </div>
                </div>
                // </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

/* 
    Template Name: PureGlamy - Beauty Salon Next.js Template for Modern Salons
    Template URL: https://designtocodes.com/product/pureglamy-beauty-salon-next-js-template-for-modern-salons
    Description: Beauty salon Next.JS template that upgrades your beauty salon's website with PureGlamy - Beauty Salon Next.js Template for Modern Salons. Purchase the best!
    Author: DesignToCodes
    Author URL: https://designtocodes.com
    Text Domain: PureGlamy | Next.js | Portfolio Template
*/

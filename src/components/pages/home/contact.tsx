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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

            <div className="mt-6 relative">
              <a
                href="https://glowingskinbar.glossgenius.com/services"
                target="_blank"
                rel="noopener noreferrer"
                className="d2c_btn d2c_primary_btn w-full md:max-w-max text-center justify-center flex items-center gap-2"
              >
                Book Now
                <Image
                  src={rightArrow}
                  alt="Right Arrow"
                  width={24}
                  height={24}
                />
              </a>
            </div>
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

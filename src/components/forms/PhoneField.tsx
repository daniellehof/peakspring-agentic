"use client";

import { useState, useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/dist/css/intlTelInput.css";

interface PhoneFieldProps {
  required?: boolean;
  className?: string;
}

export function PhoneField({ required = true, className = "" }: PhoneFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const itiRef = useRef<any>(null);
  const [fullNumber, setFullNumber] = useState("");

  useEffect(() => {
    if (!inputRef.current) return;
    itiRef.current = intlTelInput(inputRef.current, {
      initialCountry: "nl",
      separateDialCode: true,
    });
    return () => { itiRef.current?.destroy(); };
  }, []);

  const handleChange = () => {
    if (itiRef.current) {
      setFullNumber(itiRef.current.getNumber() || "");
    }
  };

  return (
    <div className={className}>
      <input
        ref={inputRef}
        type="tel"
        required={required}
        placeholder="Phone number*"
        className="w-full rounded-[16px] border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#175a6b]"
        onChange={handleChange}
        data-full-number={fullNumber}
      />
    </div>
  );
}
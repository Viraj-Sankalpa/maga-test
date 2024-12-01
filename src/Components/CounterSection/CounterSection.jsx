"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function CounterSection() {
  const [counters, setCounters] = useState({
    projects: 0,
    workforce: 0,
    awards: 0,
  });
  const [startCounting, setStartCounting] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) setStartCounting(true);
  }, [inView]);

  // Increment function
  useEffect(() => {
    if (startCounting) {
      const interval = setInterval(() => {
        setCounters((prev) => ({
          projects: Math.min(prev.projects + 5, 425),
          workforce: Math.min(prev.workforce + 50, 10350),
          awards: Math.min(prev.awards + 5, 165),
        }));
      }, 30);

      return () => clearInterval(interval);
    }
  }, [startCounting]);

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-[#00464d] to-[#045961] shadow-lg p-10 w-full"
    >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center text-white py-6">
        {/* Counter Items */}
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold">{counters.projects}</h2>
          <p className="text-lg">Projects</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold">{counters.workforce}+</h2>
          <p className="text-lg">Workforce</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold">{counters.awards}</h2>
          <p className="text-lg">Awards</p>
        </div>
      </div>
    </section>
  );
}

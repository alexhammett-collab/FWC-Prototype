'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, Check } from 'lucide-react';

const timeSlots = [
  '9:00 AM',
  '9:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
  '3:30 PM',
  '4:00 PM',
];

function getDaysForWeek(startDate: Date) {
  const days = [];
  for (let i = 0; i < 5; i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    days.push(d);
  }
  return days;
}

function getMonday(date: Date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

function formatDay(date: Date) {
  return date.toLocaleDateString('en-GB', { weekday: 'short' });
}

function formatDate(date: Date) {
  return date.getDate();
}

function formatMonthYear(date: Date) {
  return date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

// Deterministic "available" slots based on day — simulates some days being busier
function getAvailableSlots(date: Date): string[] {
  const seed = date.getDay() + date.getDate();
  return timeSlots.filter((_, i) => (seed + i * 3) % 4 !== 0);
}

export default function MockCalendar() {
  const [weekStart, setWeekStart] = useState(() => getMonday(new Date()));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const days = useMemo(() => getDaysForWeek(weekStart), [weekStart]);
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const availableSlots = selectedDate ? getAvailableSlots(selectedDate) : [];

  const goNextWeek = () => {
    const next = new Date(weekStart);
    next.setDate(weekStart.getDate() + 7);
    setWeekStart(next);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const goPrevWeek = () => {
    const prev = new Date(weekStart);
    prev.setDate(weekStart.getDate() - 7);
    if (prev >= getMonday(today)) {
      setWeekStart(prev);
      setSelectedDate(null);
      setSelectedTime(null);
    }
  };

  const handleConfirm = () => {
    setConfirmed(true);
  };

  if (confirmed && selectedDate && selectedTime) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="mt-12 p-10 rounded-2xl bg-white border border-stone/30 shadow-lg text-center"
      >
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
          <Check size={28} className="text-gold" />
        </div>
        <h3 className="font-serif text-2xl text-navy mb-2">You&apos;re booked.</h3>
        <p className="text-slate leading-relaxed">
          {selectedDate.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })} at {selectedTime}
        </p>
        <p className="text-sm text-muted mt-4">
          This is a prototype — in production, a confirmation email would be sent.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="mt-12 rounded-2xl bg-white border border-stone/30 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-stone/20 bg-cream/30">
        <button
          onClick={goPrevWeek}
          disabled={weekStart <= getMonday(today)}
          className="p-2 rounded-lg hover:bg-stone/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={18} className="text-navy" />
        </button>
        <h3 className="font-serif text-lg text-navy">{formatMonthYear(days[0])}</h3>
        <button
          onClick={goNextWeek}
          className="p-2 rounded-lg hover:bg-stone/20 transition-colors"
        >
          <ChevronRight size={18} className="text-navy" />
        </button>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Day selector */}
        <div className="md:w-1/2 p-6 md:border-r border-stone/20">
          <p className="text-xs tracking-[0.2em] uppercase text-gold font-medium mb-4">Select a Day</p>
          <div className="grid grid-cols-5 gap-2">
            {days.map((day) => {
              const isPast = day < today;
              const isSelected = selectedDate && isSameDay(day, selectedDate);
              const isToday = isSameDay(day, today);
              return (
                <button
                  key={day.toISOString()}
                  disabled={isPast}
                  onClick={() => {
                    setSelectedDate(day);
                    setSelectedTime(null);
                  }}
                  className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-200 ${
                    isPast
                      ? 'opacity-30 cursor-not-allowed'
                      : isSelected
                        ? 'bg-navy text-white shadow-md'
                        : 'hover:bg-stone/20 text-navy'
                  }`}
                >
                  <span className={`text-xs font-medium uppercase ${isSelected ? 'text-white/70' : 'text-slate'}`}>
                    {formatDay(day)}
                  </span>
                  <span className={`text-lg font-semibold ${isSelected ? 'text-white' : ''}`}>
                    {formatDate(day)}
                  </span>
                  {isToday && (
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-gold' : 'bg-gold/60'}`} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Duration indicator */}
          <div className="mt-6 flex items-center gap-2 text-sm text-slate">
            <Clock size={14} className="text-gold" />
            <span>30 min &middot; Video call</span>
          </div>
        </div>

        {/* Time slots */}
        <div className="md:w-1/2 p-6">
          <p className="text-xs tracking-[0.2em] uppercase text-gold font-medium mb-4">
            {selectedDate ? 'Available Times' : 'Pick a day first'}
          </p>
          <AnimatePresence mode="wait">
            {selectedDate ? (
              <motion.div
                key={selectedDate.toISOString()}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-2 gap-2"
              >
                {availableSlots.map((time) => {
                  const isSelected = selectedTime === time;
                  return (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isSelected
                          ? 'bg-gold text-navy shadow-md'
                          : 'border border-stone/40 text-navy hover:border-gold/40 hover:bg-gold/5'
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center h-48 text-muted text-sm"
              >
                Select a day to see available times
              </motion.div>
            )}
          </AnimatePresence>

          {/* Confirm button */}
          <AnimatePresence>
            {selectedTime && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-6"
              >
                <button
                  onClick={handleConfirm}
                  className="w-full px-6 py-3.5 text-sm font-medium tracking-wide bg-navy text-warm-white rounded-full hover:bg-navy-light transition-all duration-300 hover:shadow-lg hover:shadow-navy/20"
                >
                  Confirm &mdash;{' '}
                  {selectedDate?.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })} at {selectedTime}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

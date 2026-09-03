import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Layers, 
  Tv, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ThemeMode, SchoolLandingData, SchoolCourse } from '../../types';

interface SchoolCoursesProps {
  school: SchoolLandingData;
  theme: ThemeMode;
  onOpenEnroll: (course?: SchoolCourse) => void;
}

export const SchoolCourses: React.FC<SchoolCoursesProps> = ({
  school,
  theme,
  onOpenEnroll,
}) => {
  const isDark = theme === 'dark';
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(school.courses[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedCourseId(prev => (prev === id ? null : id));
  };

  return (
    <section 
      id="courses"
      className="py-16 sm:py-24 border-b transition-colors"
      style={{
        backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
        borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
        color: isDark ? '#F5F4F0' : '#1F1A12',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3"
            style={{
              backgroundColor: isDark ? 'rgba(108, 99, 255, 0.12)' : 'rgba(181, 85, 31, 0.08)',
              color: isDark ? '#6C63FF' : '#B5551F',
            }}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>O'quv Dasturlari</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight mb-3">
            Amaliy Darslar va Kurslar Ro'yxati
          </h2>
          <p className="text-sm sm:text-base opacity-75">
            Har bir kurs real loyihalar va vazifalar asosida tuzilgan. O'zingizga mos dasturni tanlang.
          </p>
        </div>

        {/* Courses Stack */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {school.courses.map((course) => {
            const isExpanded = expandedCourseId === course.id;

            return (
              <div 
                key={course.id}
                className="rounded-3xl border shadow-sm transition-all overflow-hidden"
                style={{
                  backgroundColor: isDark ? '#12121A' : '#EDE7DA',
                  borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.12)',
                }}
              >
                {/* Course Header Bar */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span 
                        className="text-[11px] font-bold px-2.5 py-1 rounded-lg"
                        style={{
                          backgroundColor: isDark ? 'rgba(108, 99, 255, 0.15)' : 'rgba(181, 85, 31, 0.1)',
                          color: isDark ? '#6C63FF' : '#B5551F',
                        }}
                      >
                        {course.badge || course.level}
                      </span>
                      <span className="text-xs opacity-60">
                        {course.modulesCount} modul • {course.lessonsCount} ta amaliy dars
                      </span>
                    </div>

                    <div className="text-right">
                      <div className="font-display font-bold text-lg sm:text-xl leading-none">
                        {course.priceMonth}
                        <span className="text-xs font-sans font-normal opacity-60"> / oy</span>
                      </div>
                      <div className="text-[11px] opacity-60">
                        Jami: {course.priceTotal}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl mb-1.5">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm opacity-75 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  {/* Course Specs in pills */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
                    <div 
                      className="p-3 rounded-xl border flex items-center gap-2.5"
                      style={{
                        backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                        borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.08)',
                      }}
                    >
                      <Clock className="w-4 h-4 opacity-50 shrink-0" />
                      <div>
                        <div className="opacity-50 text-[10px] uppercase font-semibold">Davomiylik</div>
                        <div className="font-semibold">{course.duration}</div>
                      </div>
                    </div>

                    <div 
                      className="p-3 rounded-xl border flex items-center gap-2.5"
                      style={{
                        backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                        borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.08)',
                      }}
                    >
                      <Tv className="w-4 h-4 opacity-50 shrink-0" />
                      <div>
                        <div className="opacity-50 text-[10px] uppercase font-semibold">Formati</div>
                        <div className="font-semibold truncate">{course.format.split('+')[0]}</div>
                      </div>
                    </div>

                    <div 
                      className="p-3 rounded-xl border flex items-center gap-2.5"
                      style={{
                        backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                        borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.08)',
                      }}
                    >
                      <Layers className="w-4 h-4 opacity-50 shrink-0" />
                      <div>
                        <div className="opacity-50 text-[10px] uppercase font-semibold">Daraja</div>
                        <div className="font-semibold">{course.level}</div>
                      </div>
                    </div>
                  </div>

                  {/* Actions & Expand Toggle */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => toggleExpand(course.id)}
                      className="text-xs font-semibold opacity-75 hover:opacity-100 flex items-center gap-1.5 cursor-pointer py-1"
                    >
                      <span>{isExpanded ? "Dastur rejasini yopish" : "To'liq o'quv rejasini ko'rish"}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    <button
                      onClick={() => onOpenEnroll(course)}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs text-white shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.02]"
                      style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Ushbu Kursga Yozilish</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Expanded Curriculum Drawer */}
                {isExpanded && (
                  <div 
                    className="p-6 sm:p-7 border-t space-y-4"
                    style={{
                      backgroundColor: isDark ? '#0E0E16' : '#E6DFD0',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
                    }}
                  >
                    <div className="font-display font-bold text-sm uppercase tracking-wider opacity-80">
                      O'quv dasturi modullari ({course.curriculum.length} ta asosiy bosqich):
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {course.curriculum.map((topic, i) => (
                        <div 
                          key={i}
                          className="p-3 rounded-xl border flex items-start gap-2.5 text-xs font-medium"
                          style={{
                            backgroundColor: isDark ? '#12121A' : '#EDE7DA',
                            borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.08)',
                          }}
                        >
                          <div 
                            className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-0.5"
                            style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
                          >
                            {i + 1}
                          </div>
                          <span className="opacity-90">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

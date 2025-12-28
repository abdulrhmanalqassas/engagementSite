import React, { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Menu, X, Globe } from 'lucide-react';

const EngagementWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Get language from URL query parameter
  const getInitialLanguage = () => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang');
    return lang === 'ar' ? 'ar' : 'en';
  };
  
  const [language, setLanguage] = useState(getInitialLanguage());
  const [rsvpData, setRsvpData] = useState({
    name: '',
    email: '',
    attending: '',
    guests: '1',
    dietary: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Calculate days until wedding
  const [daysUntil, setDaysUntil] = useState(0);
  const [timeUntil, setTimeUntil] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const weddingDate = new Date('2026-01-16T16:00:00'); // 4:00 PM on wedding day
      const timeDiff = weddingDate - now;
      
      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        setDaysUntil(days);
        setTimeUntil({ days, hours, minutes, seconds });
      } else {
        setDaysUntil(0);
        setTimeUntil({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    
    calculateTime();
    const interval = setInterval(calculateTime, 1000); // Update every second
    
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRSVPChange = (field, value) => {
    setRsvpData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (rsvpData.name && rsvpData.email && rsvpData.attending) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    
    // Update URL with new language parameter
    const url = new URL(window.location);
    url.searchParams.set('lang', newLang);
    window.history.pushState({}, '', url);
  };

  const isRTL = language === 'ar';

  const content = {
    en: {
      names: "ABDULRAHMAN & BASMALA",
      menu: ['HOME', 'OUR STORY', 'DETAILS', 'LOCATION', 'MEMORIES'],
      hero: {
        invite: "You're invited to celebrate our engagement!",
        date: "JANUARY 16, 2026",
        countdown: `${daysUntil} days until the big day!`
      },
      story: {
        title: "OUR STORY",
        text: "Our journey began with a chance meeting and quickly grew into something special, filled with laughter, adventures and unforgettable memories. As we prepare to say \"I do,\" we're excited to celebrate this next chapter with our loved ones and look forward to the future ahead."
      },
      details: {
        title: "EVENT DETAILS",
        eventTitle: "ENGAGEMENT CELEBRATION",
        date: "Thursday, January 16, 2026",
        time: "4:00 PM - 8:00 PM",
        venue: "Seaside Garden Venue",
        address1: "123 Ocean View Drive",
        address2: "Coastal City, ST 12345",
        dressCode: "Dress Code",
        attire: "Cocktail Attire"
      },
      location: {
        title: "LOCATION",
        venue: "Seaside Garden Venue",
        gettingThere: "Getting There",
        byCar: "By Car:",
        carInfo: "Free parking available on-site. Use the main entrance off Ocean View Drive.",
        fromAirport: "From Airport:",
        airportInfo: "Approximately 25 minutes via Highway 1 South.",
        rideshare: "Rideshare:",
        rideshareInfo: "Uber and Lyft pickups available at the main entrance circle.",
        openMaps: "OPEN IN MAPS",
        accommodations: "NEARBY ACCOMMODATIONS",
        hotels: [
          {
            name: "Coastal Grand Hotel",
            distance: "0.5 miles from venue",
            description: "Luxury oceanfront accommodations with spa and dining.",
            phone: "(555) 555-1234"
          },
          {
            name: "Harbor Inn & Suites",
            distance: "1.2 miles from venue",
            description: "Comfortable rooms with complimentary breakfast and pool.",
            phone: "(555) 555-5678"
          },
          {
            name: "Seaside Boutique Hotel",
            distance: "0.8 miles from venue",
            description: "Charming boutique property with garden views.",
            phone: "(555) 555-9012"
          },
          {
            name: "The Maritime Resort",
            distance: "2.0 miles from venue",
            description: "Full-service resort with beach access and activities.",
            phone: "(555) 555-3456"
          }
        ]
      },
      rsvp: {
        title: "RSVP",
        fullName: "FULL NAME *",
        email: "EMAIL *",
        attending: "WILL YOU BE ATTENDING? *",
        selectPlaceholder: "Please Select",
        accepts: "Joyfully Accepts",
        declines: "Regretfully Declines",
        guests: "NUMBER OF GUESTS",
        dietary: "DIETARY RESTRICTIONS OR SPECIAL REQUESTS",
        submit: "SUBMIT RSVP",
        deadline: "Please RSVP by December 31, 2025",
        thankYou: "Thank You!",
        confirmation: "Your RSVP has been received. We can't wait to celebrate with you!"
      },
      footer: {
        message: "We can't wait to celebrate with you!"
      }
    },
    ar: {
      names: "عبدالرحمن و بسملة",
      menu: ['الرئيسية', 'قصتنا', 'التفاصيل', 'الموقع', 'ذكريات'],
      hero: {
        invite: "أنتم مدعوون للاحتفال بخطوبتنا!",
        date: "١٦ يناير ٢٠٢٦",
        countdown: `${daysUntil} يومًا حتى اليوم الكبير!`
      },
      story: {
        title: "قصتنا",
        text: "بدأت رحلتنا بلقاء مصادفة ونمت بسرعة إلى شيء مميز، مليء بالضحك والمغامرات والذكريات التي لا تُنسى. بينما نستعد لقول \"نعم\"، نحن متحمسون للاحتفال بهذا الفصل الجديد مع أحبائنا ونتطلع إلى المستقبل."
      },
      details: {
        title: "تفاصيل الحفل",
        eventTitle: "احتفال الخطوبة",
        date: "الخميس، ١٦ يناير ٢٠٢٦",
        time: "٤:٠٠ مساءً - ٨:٠٠ مساءً",
        venue: "حديقة البحر",
        address1: "١٢٣ طريق إطلالة المحيط",
        address2: "المدينة الساحلية، ١٢٣٤٥",
        dressCode: "قواعد اللباس",
        attire: "ملابس كوكتيل رسمية"
      },
      location: {
        title: "الموقع",
        venue: "حديقة البحر",
        gettingThere: "كيفية الوصول",
        byCar: "بالسيارة:",
        carInfo: "موقف سيارات مجاني متاح في الموقع. استخدم المدخل الرئيسي من طريق إطلالة المحيط.",
        fromAirport: "من المطار:",
        airportInfo: "حوالي ٢٥ دقيقة عبر الطريق السريع ١ جنوبًا.",
        rideshare: "خدمة توصيل:",
        rideshareInfo: "خدمات أوبر وليفت متاحة عند دائرة المدخل الرئيسي.",
        openMaps: "فتح في الخرائط",
        accommodations: "أماكن الإقامة القريبة",
        hotels: [
          {
            name: "فندق كوستال الكبير",
            distance: "٠.٥ ميل من المكان",
            description: "إقامة فاخرة على واجهة المحيط مع سبا ومطاعم.",
            phone: "(555) 555-1234"
          },
          {
            name: "هاربور إن آند سويتس",
            distance: "١.٢ ميل من المكان",
            description: "غرف مريحة مع إفطار مجاني ومسبح.",
            phone: "(555) 555-5678"
          },
          {
            name: "فندق سيسايد البوتيكي",
            distance: "٠.٨ ميل من المكان",
            description: "فندق بوتيك ساحر مع إطلالات على الحديقة.",
            phone: "(555) 555-9012"
          },
          {
            name: "منتجع ذا ماريتايم",
            distance: "٢.٠ ميل من المكان",
            description: "منتجع متكامل الخدمات مع شاطئ وأنشطة.",
            phone: "(555) 555-3456"
          }
        ]
      },
      rsvp: {
        title: "تأكيد الحضور",
        fullName: "الاسم الكامل *",
        email: "البريد الإلكتروني *",
        attending: "هل ستحضر؟ *",
        selectPlaceholder: "الرجاء الاختيار",
        accepts: "أقبل بسرور",
        declines: "أعتذر عن الحضور",
        guests: "عدد الضيوف",
        dietary: "القيود الغذائية أو الطلبات الخاصة",
        submit: "إرسال التأكيد",
        deadline: "يرجى تأكيد الحضور قبل ٣١ ديسمبر ٢٠٢٥",
        thankYou: "شكراً لك!",
        confirmation: "تم استلام تأكيد حضورك. نحن متحمسون للاحتفال معك!"
      },
      footer: {
        message: "نحن متحمسون للاحتفال معكم!"
      }
    }
  };

  const t = content[language];

  return (
    <div className={`min-h-screen bg-stone-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'} style={{ fontFamily: isRTL ? "'Scheherazade New', 'Amiri', serif" : "'Playfair Display', 'Cinzel', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&family=Amiri:wght@400;700&family=Playfair+Display:wght@400;600;700;900&family=Cinzel:wght@400;600;700&display=swap');
        
        .vintage-timer {
          background: linear-gradient(145deg, #f5f5dc 0%, #e8dcc0 100%);
          border: 3px solid #8b7355;
          box-shadow: 
            inset 0 2px 4px rgba(139, 115, 85, 0.2),
            0 8px 16px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(255, 255, 255, 0.5) inset;
          position: relative;
        }
        
        .vintage-timer::before {
          content: '';
          position: absolute;
          top: -6px;
          left: -6px;
          right: -6px;
          bottom: -6px;
          background: linear-gradient(45deg, #8b7355 0%, #a0826d 50%, #8b7355 100%);
          border-radius: 12px;
          z-index: -1;
        }
        
        .timer-digit {
          font-family: 'Cinzel', serif;
          background: linear-gradient(180deg, #2c1810 0%, #4a2c1a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
          font-weight: 700;
        }
        
        .timer-label {
          font-family: ${isRTL ? "'Scheherazade New', serif" : "'Playfair Display', serif"};
          color: #6b5d4f;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        .ornament-divider {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #8b7355, transparent);
          margin: 0 auto;
        }
      `}</style>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-stone-50/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 text-stone-600 hover:text-stone-900 transition-colors"
            >
              <Globe size={20} />
              <span className="text-sm">{language === 'en' ? 'AR' : 'EN'}</span>
            </button>
            
            <div className="text-center flex-1">
              <h1 className="text-2xl md:text-3xl tracking-wider text-stone-700">
                {t.names}
              </h1>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="hidden md:block w-20"></div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center gap-8 mt-4 text-sm tracking-widest">
            {t.menu.map((item, idx) => {
              const sectionIds = ['home', 'our-story', 'details', 'location', 'rsvp'];
              return (
                <button
                  key={idx}
                  onClick={() => scrollToSection(sectionIds[idx])}
                  className="text-stone-600 hover:text-stone-900 transition-colors"
                >
                  {item}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t border-stone-200 py-4">
            {t.menu.map((item, idx) => {
              const sectionIds = ['home', 'our-story', 'details', 'location', 'rsvp'];
              return (
                <button
                  key={idx}
                  onClick={() => scrollToSection(sectionIds[idx])}
                  className="block w-full text-center py-3 text-stone-600 hover:bg-stone-50 transition-colors"
                >
                  {item}
                </button>
              );
            })}
          </nav>
        )}
      </header>

      {/* Floral Decoration SVG */}
      <div className="fixed top-0 left-0 right-0 pointer-events-none z-40" style={{ marginTop: '80px' }}>
        <svg viewBox="0 0 1200 120" className="w-full h-28" xmlns="http://www.w3.org/2000/svg">
          {/* Main vine with leaves */}
          <path d="M0,60 Q100,40 200,55 Q300,70 400,55 Q500,40 600,55 Q700,70 800,55 Q900,40 1000,55 Q1100,70 1200,55" 
                stroke="#4A5568" fill="none" strokeWidth="2.5" opacity="0.5"/>
          
          {/* Detailed Rose 1 - Left */}
          <g transform="translate(180, 45)">
            {/* Outer petals */}
            <ellipse cx="0" cy="0" rx="18" ry="14" fill="#DC2626" opacity="0.85" transform="rotate(45)"/>
            <ellipse cx="0" cy="0" rx="18" ry="14" fill="#DC2626" opacity="0.85" transform="rotate(-45)"/>
            <ellipse cx="0" cy="0" rx="18" ry="14" fill="#EF4444" opacity="0.9" transform="rotate(0)"/>
            <ellipse cx="0" cy="0" rx="18" ry="14" fill="#EF4444" opacity="0.9" transform="rotate(90)"/>
            
            {/* Middle petals */}
            <ellipse cx="-2" cy="-2" rx="12" ry="10" fill="#F87171" opacity="0.9" transform="rotate(30)"/>
            <ellipse cx="2" cy="-2" rx="12" ry="10" fill="#F87171" opacity="0.9" transform="rotate(-30)"/>
            <ellipse cx="0" cy="2" rx="12" ry="10" fill="#EF4444" opacity="0.9"/>
            
            {/* Center */}
            <circle cx="0" cy="0" r="6" fill="#B91C1C" opacity="0.95"/>
            <circle cx="-1" cy="-1" r="3" fill="#7F1D1D" opacity="0.8"/>
            
            {/* Stem and leaves */}
            <line x1="0" y1="14" x2="0" y2="35" stroke="#15803D" strokeWidth="2.5"/>
            <ellipse cx="-8" cy="22" rx="6" ry="10" fill="#22C55E" opacity="0.8" transform="rotate(-30 -8 22)"/>
            <ellipse cx="8" cy="28" rx="6" ry="10" fill="#16A34A" opacity="0.8" transform="rotate(30 8 28)"/>
          </g>
          
          {/* Detailed Rose 2 - Center Left */}
          <g transform="translate(420, 50)">
            <ellipse cx="0" cy="0" rx="16" ry="12" fill="#EC4899" opacity="0.85" transform="rotate(40)"/>
            <ellipse cx="0" cy="0" rx="16" ry="12" fill="#EC4899" opacity="0.85" transform="rotate(-40)"/>
            <ellipse cx="0" cy="0" rx="16" ry="12" fill="#F472B6" opacity="0.9" transform="rotate(0)"/>
            <ellipse cx="0" cy="0" rx="16" ry="12" fill="#F472B6" opacity="0.9" transform="rotate(90)"/>
            
            <ellipse cx="-2" cy="-1" rx="10" ry="8" fill="#F9A8D4" opacity="0.9" transform="rotate(25)"/>
            <ellipse cx="2" cy="-1" rx="10" ry="8" fill="#F9A8D4" opacity="0.9" transform="rotate(-25)"/>
            
            <circle cx="0" cy="0" r="5" fill="#DB2777" opacity="0.95"/>
            <circle cx="-1" cy="-1" r="2.5" fill="#9F1239" opacity="0.8"/>
            
            <line x1="0" y1="12" x2="0" y2="30" stroke="#15803D" strokeWidth="2"/>
            <ellipse cx="-7" cy="20" rx="5" ry="9" fill="#22C55E" opacity="0.8" transform="rotate(-25 -7 20)"/>
            <ellipse cx="7" cy="24" rx="5" ry="9" fill="#16A34A" opacity="0.8" transform="rotate(25 7 24)"/>
          </g>
          
          {/* Detailed Rose 3 - Center Right */}
          <g transform="translate(780, 48)">
            <ellipse cx="0" cy="0" rx="17" ry="13" fill="#DC2626" opacity="0.85" transform="rotate(50)"/>
            <ellipse cx="0" cy="0" rx="17" ry="13" fill="#DC2626" opacity="0.85" transform="rotate(-50)"/>
            <ellipse cx="0" cy="0" rx="17" ry="13" fill="#EF4444" opacity="0.9" transform="rotate(0)"/>
            <ellipse cx="0" cy="0" rx="17" ry="13" fill="#EF4444" opacity="0.9" transform="rotate(90)"/>
            
            <ellipse cx="-1" cy="-2" rx="11" ry="9" fill="#F87171" opacity="0.9" transform="rotate(35)"/>
            <ellipse cx="1" cy="-2" rx="11" ry="9" fill="#F87171" opacity="0.9" transform="rotate(-35)"/>
            <ellipse cx="0" cy="1" rx="11" ry="9" fill="#EF4444" opacity="0.9"/>
            
            <circle cx="0" cy="0" r="5.5" fill="#B91C1C" opacity="0.95"/>
            <circle cx="-1" cy="-1" r="3" fill="#7F1D1D" opacity="0.8"/>
            
            <line x1="0" y1="13" x2="0" y2="32" stroke="#15803D" strokeWidth="2.5"/>
            <ellipse cx="-8" cy="21" rx="6" ry="10" fill="#22C55E" opacity="0.8" transform="rotate(-28 -8 21)"/>
            <ellipse cx="8" cy="26" rx="6" ry="10" fill="#16A34A" opacity="0.8" transform="rotate(28 8 26)"/>
          </g>
          
          {/* Lavender sprigs */}
          <g transform="translate(300, 50)">
            <line x1="0" y1="0" x2="-3" y2="28" stroke="#7C3AED" strokeWidth="2"/>
            <circle cx="-1" cy="5" r="2.5" fill="#A78BFA" opacity="0.9"/>
            <circle cx="-1.5" cy="10" r="2.5" fill="#A78BFA" opacity="0.9"/>
            <circle cx="-2" cy="15" r="2.5" fill="#A78BFA" opacity="0.9"/>
            <circle cx="-2.5" cy="20" r="2.5" fill="#A78BFA" opacity="0.9"/>
            <circle cx="-2.8" cy="25" r="2.5" fill="#A78BFA" opacity="0.9"/>
          </g>
          
          <g transform="translate(600, 52)">
            <line x1="0" y1="0" x2="3" y2="26" stroke="#7C3AED" strokeWidth="2"/>
            <circle cx="1" cy="4" r="2.5" fill="#A78BFA" opacity="0.9"/>
            <circle cx="1.5" cy="9" r="2.5" fill="#A78BFA" opacity="0.9"/>
            <circle cx="2" cy="14" r="2.5" fill="#A78BFA" opacity="0.9"/>
            <circle cx="2.3" cy="19" r="2.5" fill="#A78BFA" opacity="0.9"/>
            <circle cx="2.7" cy="24" r="2.5" fill="#A78BFA" opacity="0.9"/>
          </g>
          
          <g transform="translate(950, 48)">
            <line x1="0" y1="0" x2="-2" y2="27" stroke="#7C3AED" strokeWidth="2"/>
            <circle cx="-0.5" cy="5" r="2.5" fill="#A78BFA" opacity="0.9"/>
            <circle cx="-1" cy="10" r="2.5" fill="#A78BFA" opacity="0.9"/>
            <circle cx="-1.3" cy="15" r="2.5" fill="#A78BFA" opacity="0.9"/>
            <circle cx="-1.6" cy="20" r="2.5" fill="#A78BFA" opacity="0.9"/>
            <circle cx="-1.9" cy="25" r="2.5" fill="#A78BFA" opacity="0.9"/>
          </g>
          
          {/* Small flower buds */}
          <g transform="translate(520, 58)">
            <circle cx="0" cy="0" r="4" fill="#FBBF24" opacity="0.9"/>
            <circle cx="-1" cy="-1" r="2" fill="#F59E0B" opacity="0.9"/>
            <line x1="0" y1="4" x2="0" y2="12" stroke="#15803D" strokeWidth="1.5"/>
          </g>
          
          <g transform="translate(850, 60)">
            <circle cx="0" cy="0" r="4" fill="#FBBF24" opacity="0.9"/>
            <circle cx="-1" cy="-1" r="2" fill="#F59E0B" opacity="0.9"/>
            <line x1="0" y1="4" x2="0" y2="12" stroke="#15803D" strokeWidth="1.5"/>
          </g>
          
          {/* Additional leaves along vine */}
          <ellipse cx="250" cy="65" rx="8" ry="5" fill="#22C55E" opacity="0.7" transform="rotate(-35 250 65)"/>
          <ellipse cx="350" cy="72" rx="7" ry="4" fill="#16A34A" opacity="0.7" transform="rotate(25 350 72)"/>
          <ellipse cx="550" cy="68" rx="8" ry="5" fill="#22C55E" opacity="0.7" transform="rotate(-30 550 68)"/>
          <ellipse cx="680" cy="73" rx="7" ry="4" fill="#16A34A" opacity="0.7" transform="rotate(20 680 73)"/>
          <ellipse cx="1050" cy="66" rx="8" ry="5" fill="#22C55E" opacity="0.7" transform="rotate(-28 1050 66)"/>
        </svg>
      </div>

      <main className="pt-32">
        {/* Hero Section */}
        <section id="home" className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop"
                alt="Couple"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-4">
              <p className="text-xl md:text-2xl italic text-stone-600">
                {t.hero.invite}
              </p>
              
              <div className="flex items-center justify-center gap-3 py-6">
                <div className="h-px w-16 bg-stone-300"></div>
                <Heart className="text-red-500" size={24} fill="currentColor" />
                <div className="h-px w-16 bg-stone-300"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl tracking-wider text-stone-800 font-light mb-8">
                {t.hero.date}
              </h2>
              
              <div className="vintage-timer rounded-xl p-8 md:p-10 mt-8 max-w-3xl mx-auto">
                <div className="text-center mb-6">
                  <p className="text-lg md:text-xl text-stone-700 italic" style={{ fontFamily: isRTL ? "'Scheherazade New', serif" : "'Playfair Display', serif" }}>
                    {language === 'en' ? 'Counting Down to Forever' : 'العد التنازلي إلى الأبد'}
                  </p>
                  <div className="ornament-divider mt-3"></div>
                </div>
                
                <div className="grid grid-cols-4 gap-3 md:gap-6">
                  <div className="text-center">
                    <div className="timer-digit text-4xl md:text-6xl mb-2">
                      {String(timeUntil.days).padStart(2, '0')}
                    </div>
                    <div className="ornament-divider my-2"></div>
                    <div className="timer-label">{language === 'en' ? 'DAYS' : 'يوم'}</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="timer-digit text-4xl md:text-6xl mb-2">
                      {String(timeUntil.hours).padStart(2, '0')}
                    </div>
                    <div className="ornament-divider my-2"></div>
                    <div className="timer-label">{language === 'en' ? 'HOURS' : 'ساعة'}</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="timer-digit text-4xl md:text-6xl mb-2">
                      {String(timeUntil.minutes).padStart(2, '0')}
                    </div>
                    <div className="ornament-divider my-2"></div>
                    <div className="timer-label">{language === 'en' ? 'MINUTES' : 'دقيقة'}</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="timer-digit text-4xl md:text-6xl mb-2">
                      {String(timeUntil.seconds).padStart(2, '0')}
                    </div>
                    <div className="ornament-divider my-2"></div>
                    <div className="timer-label">{language === 'en' ? 'SECONDS' : 'ثانية'}</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-stone-400/30">
                  <div className="flex items-center justify-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-stone-600">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" opacity="0.6"/>
                    </svg>
                    <span className="text-sm text-stone-600 italic" style={{ fontFamily: isRTL ? "'Scheherazade New', serif" : "'Playfair Display', serif" }}>
                      {language === 'en' ? 'Until we celebrate together' : 'حتى نحتفل معاً'}
                    </span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-stone-600">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" opacity="0.6"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Butterfly & Flowers Divider 1 */}
        <div className="flex justify-center items-center py-12 gap-8">
          <svg width="80" height="80" viewBox="0 0 100 100" className="text-stone-700 opacity-70">
            {/* Butterfly */}
            <ellipse cx="35" cy="40" rx="20" ry="25" fill="#DC2626" opacity="0.7" transform="rotate(-20 35 40)"/>
            <ellipse cx="35" cy="40" rx="15" ry="20" fill="#EF4444" opacity="0.8" transform="rotate(-20 35 40)"/>
            <circle cx="32" cy="35" r="4" fill="#FEF3C7" opacity="0.9"/>
            <circle cx="35" cy="42" r="3" fill="#FEF3C7" opacity="0.9"/>
            
            <ellipse cx="65" cy="40" rx="20" ry="25" fill="#DC2626" opacity="0.7" transform="rotate(20 65 40)"/>
            <ellipse cx="65" cy="40" rx="15" ry="20" fill="#EF4444" opacity="0.8" transform="rotate(20 65 40)"/>
            <circle cx="68" cy="35" r="4" fill="#FEF3C7" opacity="0.9"/>
            <circle cx="65" cy="42" r="3" fill="#FEF3C7" opacity="0.9"/>
            
            <ellipse cx="40" cy="60" rx="15" ry="20" fill="#F97316" opacity="0.7" transform="rotate(-15 40 60)"/>
            <ellipse cx="40" cy="60" rx="11" ry="16" fill="#FB923C" opacity="0.8" transform="rotate(-15 40 60)"/>
            
            <ellipse cx="60" cy="60" rx="15" ry="20" fill="#F97316" opacity="0.7" transform="rotate(15 60 60)"/>
            <ellipse cx="60" cy="60" rx="11" ry="16" fill="#FB923C" opacity="0.8" transform="rotate(15 60 60)"/>
            
            <ellipse cx="50" cy="50" rx="4" ry="20" fill="#451a03" opacity="0.9"/>
            <circle cx="50" cy="35" r="5" fill="#451a03" opacity="0.9"/>
            <line x1="48" y1="32" x2="45" y2="25" stroke="#451a03" strokeWidth="1.5"/>
            <line x1="52" y1="32" x2="55" y2="25" stroke="#451a03" strokeWidth="1.5"/>
            <circle cx="45" cy="25" r="1.5" fill="#451a03"/>
            <circle cx="55" cy="25" r="1.5" fill="#451a03"/>
          </svg>
          
          <div className="flex gap-4">
            <svg width="40" height="60" viewBox="0 0 40 60">
              <ellipse cx="20" cy="20" rx="12" ry="10" fill="#EC4899" opacity="0.8" transform="rotate(45 20 20)"/>
              <ellipse cx="20" cy="20" rx="12" ry="10" fill="#EC4899" opacity="0.8" transform="rotate(-45 20 20)"/>
              <ellipse cx="20" cy="20" rx="10" ry="8" fill="#F472B6" opacity="0.9"/>
              <circle cx="20" cy="20" r="5" fill="#DB2777"/>
              <line x1="20" y1="30" x2="20" y2="55" stroke="#15803D" strokeWidth="2"/>
              <ellipse cx="14" cy="40" rx="4" ry="7" fill="#22C55E" opacity="0.8" transform="rotate(-30 14 40)"/>
            </svg>
            
            <svg width="40" height="60" viewBox="0 0 40 60">
              <ellipse cx="20" cy="18" rx="11" ry="9" fill="#FBBF24" opacity="0.8" transform="rotate(40 20 18)"/>
              <ellipse cx="20" cy="18" rx="11" ry="9" fill="#FBBF24" opacity="0.8" transform="rotate(-40 20 18)"/>
              <ellipse cx="20" cy="18" rx="9" ry="7" fill="#FDE047" opacity="0.9"/>
              <circle cx="20" cy="18" r="4" fill="#F59E0B"/>
              <line x1="20" y1="27" x2="20" y2="53" stroke="#15803D" strokeWidth="2"/>
              <ellipse cx="26" cy="38" rx="4" ry="7" fill="#22C55E" opacity="0.8" transform="rotate(30 26 38)"/>
            </svg>
          </div>
          
          <svg width="80" height="80" viewBox="0 0 100 100" className="text-stone-700 opacity-70">
            <ellipse cx="35" cy="40" rx="20" ry="25" fill="#8B5CF6" opacity="0.7" transform="rotate(-20 35 40)"/>
            <ellipse cx="35" cy="40" rx="15" ry="20" fill="#A78BFA" opacity="0.8" transform="rotate(-20 35 40)"/>
            <circle cx="32" cy="35" r="4" fill="white" opacity="0.9"/>
            <circle cx="35" cy="42" r="3" fill="white" opacity="0.9"/>
            
            <ellipse cx="65" cy="40" rx="20" ry="25" fill="#8B5CF6" opacity="0.7" transform="rotate(20 65 40)"/>
            <ellipse cx="65" cy="40" rx="15" ry="20" fill="#A78BFA" opacity="0.8" transform="rotate(20 65 40)"/>
            <circle cx="68" cy="35" r="4" fill="white" opacity="0.9"/>
            <circle cx="65" cy="42" r="3" fill="white" opacity="0.9"/>
            
            <ellipse cx="40" cy="60" rx="15" ry="20" fill="#6366F1" opacity="0.7" transform="rotate(-15 40 60)"/>
            <ellipse cx="40" cy="60" rx="11" ry="16" fill="#818CF8" opacity="0.8" transform="rotate(-15 40 60)"/>
            
            <ellipse cx="60" cy="60" rx="15" ry="20" fill="#6366F1" opacity="0.7" transform="rotate(15 60 60)"/>
            <ellipse cx="60" cy="60" rx="11" ry="16" fill="#818CF8" opacity="0.8" transform="rotate(15 60 60)"/>
            
            <ellipse cx="50" cy="50" rx="4" ry="20" fill="#1e1b4b" opacity="0.9"/>
            <circle cx="50" cy="35" r="5" fill="#1e1b4b" opacity="0.9"/>
            <line x1="48" y1="32" x2="45" y2="25" stroke="#1e1b4b" strokeWidth="1.5"/>
            <line x1="52" y1="32" x2="55" y2="25" stroke="#1e1b4b" strokeWidth="1.5"/>
            <circle cx="45" cy="25" r="1.5" fill="#1e1b4b"/>
            <circle cx="55" cy="25" r="1.5" fill="#1e1b4b"/>
          </svg>
        </div>

        {/* Our Story Section */}
        <section id="our-story" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center tracking-widest text-stone-800 mb-12">
              {t.story.title}
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-stone-600 leading-relaxed text-center">
                {t.story.text}
              </p>
            </div>
          </div>
        </section>

        {/* Rose Bouquet Divider */}
        <div className="flex justify-center py-12">
          <svg width="120" height="100" viewBox="0 0 120 100">
            {/* Center Rose */}
            <g transform="translate(60, 35)">
              <ellipse cx="0" cy="0" rx="14" ry="11" fill="#DC2626" opacity="0.85" transform="rotate(45)"/>
              <ellipse cx="0" cy="0" rx="14" ry="11" fill="#DC2626" opacity="0.85" transform="rotate(-45)"/>
              <ellipse cx="0" cy="0" rx="14" ry="11" fill="#EF4444" opacity="0.9"/>
              <ellipse cx="0" cy="0" rx="10" ry="8" fill="#F87171" opacity="0.9"/>
              <circle cx="0" cy="0" r="5" fill="#B91C1C"/>
              <line x1="0" y1="11" x2="0" y2="45" stroke="#15803D" strokeWidth="2.5"/>
              <ellipse cx="-6" cy="25" rx="5" ry="8" fill="#22C55E" opacity="0.8" transform="rotate(-25 -6 25)"/>
              <ellipse cx="6" cy="32" rx="5" ry="8" fill="#16A34A" opacity="0.8" transform="rotate(25 6 32)"/>
            </g>
            
            {/* Left Rose */}
            <g transform="translate(35, 45)">
              <ellipse cx="0" cy="0" rx="12" ry="9" fill="#EC4899" opacity="0.85" transform="rotate(40)"/>
              <ellipse cx="0" cy="0" rx="12" ry="9" fill="#EC4899" opacity="0.85" transform="rotate(-40)"/>
              <ellipse cx="0" cy="0" rx="12" ry="9" fill="#F472B6" opacity="0.9"/>
              <ellipse cx="0" cy="0" rx="8" ry="6" fill="#F9A8D4" opacity="0.9"/>
              <circle cx="0" cy="0" r="4" fill="#DB2777"/>
              <line x1="0" y1="9" x2="5" y2="38" stroke="#15803D" strokeWidth="2"/>
              <ellipse cx="-4" cy="22" rx="4" ry="7" fill="#22C55E" opacity="0.8" transform="rotate(-20 -4 22)"/>
            </g>
            
            {/* Right Rose */}
            <g transform="translate(85, 45)">
              <ellipse cx="0" cy="0" rx="12" ry="9" fill="#FBBF24" opacity="0.85" transform="rotate(35)"/>
              <ellipse cx="0" cy="0" rx="12" ry="9" fill="#FBBF24" opacity="0.85" transform="rotate(-35)"/>
              <ellipse cx="0" cy="0" rx="12" ry="9" fill="#FDE047" opacity="0.9"/>
              <ellipse cx="0" cy="0" rx="8" ry="6" fill="#FEF3C7" opacity="0.9"/>
              <circle cx="0" cy="0" r="4" fill="#F59E0B"/>
              <line x1="0" y1="9" x2="-5" y2="38" stroke="#15803D" strokeWidth="2"/>
              <ellipse cx="4" cy="22" rx="4" ry="7" fill="#22C55E" opacity="0.8" transform="rotate(20 4 22)"/>
            </g>
            
            {/* Ribbon */}
            <path d="M 40 65 Q 60 60 80 65" stroke="#DC2626" strokeWidth="3" fill="none" opacity="0.7"/>
            <path d="M 35 68 L 30 80 L 40 70 Z" fill="#DC2626" opacity="0.7"/>
            <path d="M 85 68 L 90 80 L 80 70 Z" fill="#DC2626" opacity="0.7"/>
          </svg>
        </div>

        {/* Event Details Section */}
        <section id="details" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center tracking-widest text-stone-800 mb-12">
              {t.details.title}
            </h2>
            
            <div className="max-w-4xl mx-auto">
              {/* Venue Image */}
              <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f29da8ee31?w=1000&h=600&fit=crop"
                  alt="Venue"
                  className="w-full"
                />
              </div>

              {/* Engagement Party Details */}
              <div className="bg-white rounded-lg shadow-md p-8 md:p-12 mb-8">
                <h3 className="text-2xl md:text-3xl text-center tracking-wider text-stone-800 mb-8">
                  {t.details.eventTitle}
                </h3>
                
                <div className="space-y-6">
                  <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Calendar className="text-stone-600 mt-1 flex-shrink-0" size={24} />
                    <div className={isRTL ? 'text-right' : ''}>
                      <p className="text-lg font-semibold text-stone-700">{t.details.date}</p>
                      <p className="text-stone-600">{t.details.time}</p>
                    </div>
                  </div>
                  
                  <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <MapPin className="text-stone-600 mt-1 flex-shrink-0" size={24} />
                    <div className={isRTL ? 'text-right' : ''}>
                      <p className="text-lg font-semibold text-stone-700">{t.details.venue}</p>
                      <p className="text-stone-600">{t.details.address1}</p>
                      <p className="text-stone-600">{t.details.address2}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-stone-200">
                  <h4 className="text-lg font-semibold text-stone-700 mb-3">{t.details.dressCode}</h4>
                  <p className="text-stone-600">{t.details.attire}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floral Heart Divider */}
        <div className="flex justify-center py-12">
          <svg width="100" height="100" viewBox="0 0 100 100">
            {/* Heart shape with flowers */}
            <path d="M50,85 C50,85 20,65 20,45 C20,35 25,30 32,30 C38,30 44,34 50,40 C56,34 62,30 68,30 C75,30 80,35 80,45 C80,65 50,85 50,85 Z" 
                  fill="none" stroke="#DC2626" strokeWidth="2" opacity="0.6"/>
            
            {/* Small flowers on heart */}
            <g transform="translate(32, 42)">
              <circle cx="0" cy="0" r="4" fill="#EC4899" opacity="0.9"/>
              <circle cx="0" cy="0" r="2" fill="#F9A8D4"/>
            </g>
            <g transform="translate(50, 38)">
              <circle cx="0" cy="0" r="4" fill="#FBBF24" opacity="0.9"/>
              <circle cx="0" cy="0" r="2" fill="#FEF3C7"/>
            </g>
            <g transform="translate(68, 42)">
              <circle cx="0" cy="0" r="4" fill="#DC2626" opacity="0.9"/>
              <circle cx="0" cy="0" r="2" fill="#FCA5A5"/>
            </g>
            <g transform="translate(50, 60)">
              <circle cx="0" cy="0" r="5" fill="#8B5CF6" opacity="0.9"/>
              <circle cx="0" cy="0" r="2.5" fill="#C4B5FD"/>
            </g>
          </svg>
        </div>

        {/* Location Section */}
        <section id="location" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center tracking-widest text-stone-800 mb-12">
              {t.location.title}
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-stone-50 rounded-lg p-8 md:p-12 mb-8">
                <div className={`flex items-start gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <MapPin className="text-stone-600 mt-1 flex-shrink-0" size={28} />
                  <div className={isRTL ? 'text-right' : ''}>
                    <h3 className="text-2xl font-semibold text-stone-700 mb-2">{t.location.venue}</h3>
                    <p className="text-stone-600 text-lg">{t.details.address1}</p>
                    <p className="text-stone-600 text-lg">{t.details.address2}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-stone-700 mb-4">{t.location.gettingThere}</h4>
                  <div className="space-y-3 text-stone-600">
                    <p>
                      <span className="font-semibold">{t.location.byCar}</span> {t.location.carInfo}
                    </p>
                    <p>
                      <span className="font-semibold">{t.location.fromAirport}</span> {t.location.airportInfo}
                    </p>
                    <p>
                      <span className="font-semibold">{t.location.rideshare}</span> {t.location.rideshareInfo}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => window.open('https://maps.google.com/?q=Seaside+Garden+Venue', '_blank')}
                  className="mt-8 w-full md:w-auto bg-stone-700 text-white px-8 py-3 rounded tracking-wide hover:bg-stone-800 transition-colors"
                >
                  {t.location.openMaps}
                </button>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-stone-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-3 text-stone-500" size={48} />
                    <p className="text-stone-600 text-lg">{t.location.venue}</p>
                    <p className="text-stone-500">{t.details.address1}</p>
                  </div>
                </div>
              </div>

              {/* Nearby Hotels */}
              <div className="mt-12">
                <h3 className="text-2xl text-center tracking-wider text-stone-800 mb-8">
                  {t.location.accommodations}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {t.location.hotels.map((hotel, idx) => (
                    <div key={idx} className={`bg-white border border-stone-200 rounded-lg p-6 ${isRTL ? 'text-right' : ''}`}>
                      <h4 className="text-lg font-semibold text-stone-700 mb-2">{hotel.name}</h4>
                      <p className="text-stone-600 mb-2">{hotel.distance}</p>
                      <p className="text-stone-500 text-sm mb-3">{hotel.description}</p>
                      <a 
                        href={`tel:${hotel.phone.replace(/\D/g, '')}`}
                        className="text-stone-700 hover:text-stone-900 text-sm underline"
                      >
                        {hotel.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Butterfly Garden Divider */}
        <div className="flex justify-center items-center py-12 gap-6">
          {/* Left butterfly */}
          <svg width="70" height="70" viewBox="0 0 100 100" className="animate-pulse">
            <ellipse cx="30" cy="35" rx="18" ry="22" fill="#F97316" opacity="0.75" transform="rotate(-25 30 35)"/>
            <ellipse cx="30" cy="35" rx="13" ry="17" fill="#FB923C" opacity="0.85" transform="rotate(-25 30 35)"/>
            <circle cx="28" cy="30" r="3" fill="white" opacity="0.9"/>
            
            <ellipse cx="70" cy="35" rx="18" ry="22" fill="#F97316" opacity="0.75" transform="rotate(25 70 35)"/>
            <ellipse cx="70" cy="35" rx="13" ry="17" fill="#FB923C" opacity="0.85" transform="rotate(25 70 35)"/>
            <circle cx="72" cy="30" r="3" fill="white" opacity="0.9"/>
            
            <ellipse cx="35" cy="55" rx="13" ry="18" fill="#FBBF24" opacity="0.75" transform="rotate(-18 35 55)"/>
            <ellipse cx="65" cy="55" rx="13" ry="18" fill="#FBBF24" opacity="0.75" transform="rotate(18 65 55)"/>
            
            <ellipse cx="50" cy="45" rx="3.5" ry="18" fill="#78350f" opacity="0.95"/>
            <circle cx="50" cy="32" r="4.5" fill="#78350f" opacity="0.95"/>
            <line x1="48" y1="29" x2="45" y2="22" stroke="#78350f" strokeWidth="1.5"/>
            <line x1="52" y1="29" x2="55" y2="22" stroke="#78350f" strokeWidth="1.5"/>
            <circle cx="45" cy="22" r="1.5" fill="#78350f"/>
            <circle cx="55" cy="22" r="1.5" fill="#78350f"/>
          </svg>
          
          {/* Center flowers */}
          <div className="flex flex-col gap-3">
            <svg width="50" height="50" viewBox="0 0 50 50">
              <g transform="translate(25, 25)">
                <ellipse cx="0" cy="0" rx="10" ry="8" fill="#EC4899" opacity="0.8" transform="rotate(0)"/>
                <ellipse cx="0" cy="0" rx="10" ry="8" fill="#EC4899" opacity="0.8" transform="rotate(72)"/>
                <ellipse cx="0" cy="0" rx="10" ry="8" fill="#EC4899" opacity="0.8" transform="rotate(144)"/>
                <ellipse cx="0" cy="0" rx="10" ry="8" fill="#EC4899" opacity="0.8" transform="rotate(216)"/>
                <ellipse cx="0" cy="0" rx="10" ry="8" fill="#EC4899" opacity="0.8" transform="rotate(288)"/>
                <circle cx="0" cy="0" r="4" fill="#FBBF24"/>
              </g>
            </svg>
            
            <svg width="50" height="50" viewBox="0 0 50 50">
              <g transform="translate(25, 25)">
                <ellipse cx="0" cy="0" rx="9" ry="7" fill="#8B5CF6" opacity="0.8" transform="rotate(0)"/>
                <ellipse cx="0" cy="0" rx="9" ry="7" fill="#8B5CF6" opacity="0.8" transform="rotate(72)"/>
                <ellipse cx="0" cy="0" rx="9" ry="7" fill="#8B5CF6" opacity="0.8" transform="rotate(144)"/>
                <ellipse cx="0" cy="0" rx="9" ry="7" fill="#8B5CF6" opacity="0.8" transform="rotate(216)"/>
                <ellipse cx="0" cy="0" rx="9" ry="7" fill="#8B5CF6" opacity="0.8" transform="rotate(288)"/>
                <circle cx="0" cy="0" r="3.5" fill="#FDE047"/>
              </g>
            </svg>
          </div>
          
          {/* Right butterfly */}
          <svg width="70" height="70" viewBox="0 0 100 100" className="animate-pulse" style={{animationDelay: '1s'}}>
            <ellipse cx="30" cy="35" rx="18" ry="22" fill="#10B981" opacity="0.75" transform="rotate(-25 30 35)"/>
            <ellipse cx="30" cy="35" rx="13" ry="17" fill="#34D399" opacity="0.85" transform="rotate(-25 30 35)"/>
            <circle cx="28" cy="30" r="3" fill="white" opacity="0.9"/>
            <circle cx="32" cy="37" r="2" fill="white" opacity="0.8"/>
            
            <ellipse cx="70" cy="35" rx="18" ry="22" fill="#10B981" opacity="0.75" transform="rotate(25 70 35)"/>
            <ellipse cx="70" cy="35" rx="13" ry="17" fill="#34D399" opacity="0.85" transform="rotate(25 70 35)"/>
            <circle cx="72" cy="30" r="3" fill="white" opacity="0.9"/>
            <circle cx="68" cy="37" r="2" fill="white" opacity="0.8"/>
            
            <ellipse cx="35" cy="55" rx="13" ry="18" fill="#14B8A6" opacity="0.75" transform="rotate(-18 35 55)"/>
            <ellipse cx="65" cy="55" rx="13" ry="18" fill="#14B8A6" opacity="0.75" transform="rotate(18 65 55)"/>
            
            <ellipse cx="50" cy="45" rx="3.5" ry="18" fill="#064e3b" opacity="0.95"/>
            <circle cx="50" cy="32" r="4.5" fill="#064e3b" opacity="0.95"/>
            <line x1="48" y1="29" x2="45" y2="22" stroke="#064e3b" strokeWidth="1.5"/>
            <line x1="52" y1="29" x2="55" y2="22" stroke="#064e3b" strokeWidth="1.5"/>
            <circle cx="45" cy="22" r="1.5" fill="#064e3b"/>
            <circle cx="55" cy="22" r="1.5" fill="#064e3b"/>
          </svg>
        </div>

        {/* RSVP Section - Replaced with Gallery */}
        <section id="rsvp" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center tracking-widest text-stone-800 mb-12">
              {language === 'en' ? 'MEMORIES' : 'ذكريات'}
            </h2>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop"
                    alt="Memory 1"
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <img
                    src="https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&h=600&fit=crop"
                    alt="Memory 2"
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <img
                    src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&h=600&fit=crop"
                    alt="Memory 3"
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <img
                    src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=600&fit=crop"
                    alt="Memory 4"
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <img
                    src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=600&fit=crop"
                    alt="Memory 5"
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <img
                    src="https://images.unsplash.com/photo-1544258621-f0e0fdddb0c6?w=600&h=600&fit=crop"
                    alt="Memory 6"
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <p className="text-lg text-stone-600 italic">
                  {language === 'en' 
                    ? "Every moment together is a beautiful memory in the making"
                    : "كل لحظة معًا هي ذكرى جميلة في طور التكوين"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-stone-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4">
              <Heart className="inline-block text-red-500 mb-2" size={32} fill="currentColor" />
            </div>
            <p className="text-2xl tracking-wider text-stone-700 mb-2">
              {t.names}
            </p>
            <p className="text-stone-600 italic">
              {t.hero.date}
            </p>
            <p className="text-sm text-stone-500 mt-6">
              {t.footer.message}
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default EngagementWebsite;
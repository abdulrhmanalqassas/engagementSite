import type { ContentMap } from './types'

export const content: ContentMap = {
  en: {
    names: 'ABDULRAHMAN & BASMALA',
    menu: ['HOME', 'OUR STORY', 'DETAILS', 'LOCATION', 'MEMORIES'],
    hero: { invite: "You're invited to celebrate our engagement!", date: 'JANUARY 16, 2026' },
    story: {
      title: 'OUR STORY',
      text:
        'Our journey began with a chance meeting and quickly grew into something special, filled with laughter, adventures and unforgettable memories. As we prepare to say "I do," we\'re excited to celebrate this next chapter with our loved ones and look forward to the future ahead.'
    },
    details: {
      title: 'EVENT DETAILS',
      eventTitle: 'ENGAGEMENT CELEBRATION',
      date: 'Thursday, January 16, 2026',
      time: '4:00 PM - 8:00 PM',
      venue: 'Seaside Garden Venue',
      address1: '123 Ocean View Drive',
      address2: 'Coastal City, ST 12345',
      dressCode: 'Dress Code',
      attire: 'Cocktail Attire'
    },
    location: {
      title: 'LOCATION',
      venue: 'Seaside Garden Venue',
      gettingThere: 'Getting There',
      byCar: 'By Car:',
      carInfo: 'Free parking available on-site. Use the main entrance off Ocean View Drive.',
      fromAirport: 'From Airport:',
      airportInfo: 'Approximately 25 minutes via Highway 1 South.',
      rideshare: 'Rideshare:',
      rideshareInfo: 'Uber and Lyft pickups available at the main entrance circle.',
      openMaps: 'OPEN IN MAPS',
      accommodations: 'NEARBY ACCOMMODATIONS',
      hotels: [
        { name: 'Coastal Grand Hotel', distance: '0.5 miles from venue', description: 'Luxury oceanfront accommodations with spa and dining.', phone: '(555) 555-1234' },
        { name: 'Harbor Inn & Suites', distance: '1.2 miles from venue', description: 'Comfortable rooms with complimentary breakfast and pool.', phone: '(555) 555-5678' },
        { name: 'Seaside Boutique Hotel', distance: '0.8 miles from venue', description: 'Charming boutique property with garden views.', phone: '(555) 555-9012' },
        { name: 'The Maritime Resort', distance: '2.0 miles from venue', description: 'Full-service resort with beach access and activities.', phone: '(555) 555-3456' }
      ]
    },
    rsvp: {
      title: 'RSVP',
      fullName: 'FULL NAME *',
      email: 'EMAIL *',
      attending: 'WILL YOU BE ATTENDING? *',
      selectPlaceholder: 'Please Select',
      accepts: 'Joyfully Accepts',
      declines: 'Regretfully Declines',
      guests: 'NUMBER OF GUESTS',
      dietary: 'DIETARY RESTRICTIONS OR SPECIAL REQUESTS',
      submit: 'SUBMIT RSVP',
      deadline: 'Please RSVP by December 31, 2025',
      thankYou: 'Thank You!',
      confirmation: "Your RSVP has been received. We can't wait to celebrate with you!"
    },
    footer: { message: "We can't wait to celebrate with you!" }
  },
  ar: {
    names: 'عبدالرحمن و بسملة',
    menu: ['الرئيسية', 'قصتنا', 'التفاصيل', 'الموقع', 'ذكريات'],
    hero: { invite: 'أنتم مدعوون للاحتفال بخطوبتنا!', date: '١٦ يناير ٢٠٢٦' },
    story: {
      title: 'قصتنا',
      text:
        'بدأت رحلتنا بلقاء مصادفة ونمت بسرعة إلى شيء مميز، مليء بالضحك والمغامرات والذكريات التي لا تُنسى. بينما نستعد لقول "نعم"، نحن متحمسون للاحتفال بهذا الفصل الجديد مع أحبائنا ونتطلع إلى المستقبل.'
    },
    details: {
      title: 'تفاصيل الحفل',
      eventTitle: 'احتفال الخطوبة',
      date: 'الخميس، ١٦ يناير ٢٠٢٦',
      time: '٤:٠٠ مساءً - ٨:٠٠ مساءً',
      venue: 'حديقة البحر',
      address1: '١٢٣ طريق إطلالة المحيط',
      address2: 'المدينة الساحلية، ١٢٣٤٥',
      dressCode: 'قواعد اللباس',
      attire: 'ملابس كوكتيل رسمية'
    },
    location: {
      title: 'الموقع',
      venue: 'حديقة البحر',
      gettingThere: 'كيفية الوصول',
      byCar: 'بالسيارة:',
      carInfo: 'موقف سيارات مجاني متاح في الموقع. استخدم المدخل الرئيسي من طريق إطلالة المحيط.',
      fromAirport: 'من المطار:',
      airportInfo: 'حوالي ٢٥ دقيقة عبر الطريق السريع ١ جنوبًا.',
      rideshare: 'خدمة توصيل:',
      rideshareInfo: 'خدمات أوبر وليفت متاحة عند دائرة المدخل الرئيسي.',
      openMaps: 'فتح في الخرائط',
      accommodations: 'أماكن الإقامة القريبة',
      hotels: [
        { name: 'فندق كوستال الكبير', distance: '٠.٥ ميل من المكان', description: 'إقامة فاخرة على واجهة المحيط مع سبا ومطاعم.', phone: '(555) 555-1234' },
        { name: 'هاربور إن آند سويتس', distance: '١.٢ ميل من المكان', description: 'غرف مريحة مع إفطار مجاني ومسبح.', phone: '(555) 555-5678' },
        { name: 'فندق سيسايد البوتيكي', distance: '٠.٨ ميل من المكان', description: 'فندق بوتيك ساحر مع إطلالات على الحديقة.', phone: '(555) 555-9012' },
        { name: 'منتجع ذا ماريتايم', distance: '٢.٠ ميل من المكان', description: 'منتجع متكامل الخدمات مع شاطئ وأنشطة.', phone: '(555) 555-3456' }
      ]
    },
    rsvp: {
      title: 'تأكيد الحضور',
      fullName: 'الاسم الكامل *',
      email: 'البريد الإلكتروني *',
      attending: 'هل ستحضر؟ *',
      selectPlaceholder: 'الرجاء الاختيار',
      accepts: 'أقبل بسرور',
      declines: 'أعتذر عن الحضور',
      guests: 'عدد الضيوف',
      dietary: 'القيود الغذائية أو الطلبات الخاصة',
      submit: 'إرسال التأكيد',
      deadline: 'يرجى تأكيد الحضور قبل ٣١ ديسمبر ٢٠٢٥',
      thankYou: 'شكراً لك!',
      confirmation: 'تم استلام تأكيد حضورك. نحن متحمسون للاحتفال معك!'
    },
    footer: { message: 'نحن متحمسون للاحتفال معكم!' }
  }
}
import type { ContentMap } from './types'

export const content: ContentMap = {
  en: {
    names: 'ABDULRAHMAN & BASMALA',
    menu: ['HOME', 'OUR STORY', 'DETAILS', 'LOCATION', 'MEMORIES'],
    hero: { invite: "You're invited to celebrate our engagement!", date: 'JANUARY 16, 2026' },
    story: {
      title: 'OUR STORY',
      text: `Our journey began with a chance meeting and quickly grew into something special, filled with laughter, adventures and unforgettable memories. As we prepare to say "I do," we're excited to celebrate this next chapter with our loved ones and look forward to the future ahead.

to pray for something you never knew could exist, and then find it,
to see no one but them, to pray for no one but them alone,
to refuse everyone else and accept no one but them.

You are a prayer God answered for me,
a dream I spent my whole life dreaming of,
until destiny chose to make that dream come true
and bring us together on the 7th of August, 2025.

And from that day on, we became each other. 🤍🤍🤍🤍🤍🤍`
    },
    details: {
      title: 'EVENT DETAILS',
      eventTitle: 'ENGAGEMENT CELEBRATION',
      date: 'Friday, January 16, 2026',
      time: '6:00 PM - 10:00 PM',
      venue: 'Home',
      address1: 'Taqsim 4, Qism Kafr El-Shaikh',
      address2: 'Kafr Al Sheikh First, Kafr El-Sheikh Governorate',
      dressCode: 'Dress Code',
      attire: 'Cocktail Attire'
    },
    location: {
      title: 'LOCATION',
      venue: 'Home',
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
        { name: 'Nearby Hotel', distance: 'Near home location', description: 'See on Google Maps: maps.app.goo.gl/hPLibpYVaLDyGp6u8', phone: 'N/A' },
        { name: 'The Palm Hotel', distance: '4-star hotel', description: 'See on Google Maps: maps.app.goo.gl/8MzVH4eEPjYYEggk8', phone: 'N/A' }
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
      text: `بدأت رحلتنا بلقاءٍ عابر، وسرعان ما تحوّلت إلى شيءٍ مميّز، مليء بالضحكات والمغامرات والذكريات التي لا تُنسى.
ومع استعدادنا لنقول "نعم"، يسعدنا أن نحتفل بهذا الفصل الجديد مع أحبّتنا، ونتطلّع إلى المستقبل بكل حب وأمل.

أن تدعو الله بشيءٍ لم تكن تعلم أصلًا أنه يمكن أن يوجد، ثم تجده،
أن ترى العالم كله في شخصٍ واحد،
وأن لا تدعو إلا له وحده،
وأن ترفض الجميع ولا تقبل إلا به.

أنت دعوة استجابها الله لي،
وحلمًا قضيت عمري كلّه أحلم به،
حتى اختار القدر أن يجعله حقيقة،
وجمعنا معًا في السابع من أغسطس 2025.

ومنذ ذلك اليوم، أصبحنا لبعضنا البعض. 🤍🤍🤍🤍🤍🤍`
    },
    details: {
      title: 'تفاصيل الحفل',
      eventTitle: 'احتفال الخطوبة',
      date: 'الجمعة، ١٦ يناير ٢٠٢٦',
      time: '٦:٠٠ مساءً - ١٠:٠٠ مساءً',
      venue: 'المنزل',
      address1: 'تقسيم ٤، قسم كفر الشيخ',
      address2: 'كفر الشيخ أول، محافظة كفر الشيخ',
      dressCode: 'قواعد اللباس',
      attire: 'ملابس كوكتيل رسمية'
    },
    location: {
      title: 'الموقع',
      venue: 'المنزل',
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
        { name: 'فندق قريب', distance: 'بالقرب من المنزل', description: 'عرض على خرائط Google: maps.app.goo.gl/hPLibpYVaLDyGp6u8', phone: 'N/A' },
        { name: 'فندق ذا بالم', distance: 'فندق ٤ نجوم', description: 'عرض على خرائط Google: maps.app.goo.gl/8MzVH4eEPjYYEggk8', phone: 'N/A' }
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

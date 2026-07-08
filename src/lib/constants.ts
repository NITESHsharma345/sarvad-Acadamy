export const SITE_CONFIG = {
  name: "SARVD Academy",
  tagline: "Every Student Seen. Every Dream Supported.",
  description:
    "India's most trusted personalized learning and mentorship platform. Expert guidance for Class 5–12, JEE, NEET, CUET, UPSC, and professional courses.",
  url: "https://sarvdacademy.com",
  whatsapp: "https://wa.me/919355133207",
  whatsappNumber: "+919355133207",
  email: "sarvdacademy@gmail.com",
  phone: "+91 93551 33207",
  address: "New Delhi, India",
  facebook: "https://www.facebook.com/share/1Bra3mg7x7/",
  instagram: "https://www.instagram.com/sarvdacademy?igsh=MWo2OWk0ZjF2amp0dg==",
  linkedin: "https://www.linkedin.com/in/sarvd-academy-43a66941a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  applyLink:
    "https://docs.google.com/forms/d/e/1FAIpQLSdxkWi48F-Y2UFDic8mnvYafETTn_SPmlr35oRRUeUL1ZAsXg/viewform",
  admissionsLink: "https://forms.gle/E9Rq72d89CA9S6v49",
};

export const STATS = [
  { value: 500, suffix: "+", label: "Students Mentored", icon: "Users" },
  { value: 20, suffix: "+", label: "Expert Educators", icon: "GraduationCap" },
  { value: 95, suffix: "%+", label: "Success Rate", icon: "TrendingUp" },
  { value: 5, suffix: "+", label: "Years of Excellence", icon: "Award" },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "School Programs (Class 5–12)", href: "/programs#school" },
      { label: "JEE / NEET Preparation", href: "/programs#competitive" },
      { label: "CUET / UPSC / SSC", href: "/programs#competitive" },
      { label: "Professional Courses", href: "/programs#professional" },
      { label: "Elite 5 Batch", href: "/programs#elite5" },
      { label: "Ultimate One (1-on-1)", href: "/programs#ultimate-one" },
    ],
  },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const WHY_CHOOSE = [
  {
    icon: "UserCheck",
    title: "Personalized Mentorship",
    description:
      "Every student receives a dedicated mentor who understands their strengths, challenges, and goals — crafting a truly individualized learning path.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: "Users",
    title: "Elite 5 Batch",
    description:
      "Maximum 5 students per batch ensures every student receives focused attention, personalized feedback, and active participation in every class.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: "Star",
    title: "Ultimate One Mentorship",
    description:
      "100% dedicated one-on-one sessions with your personal mentor — your schedule, your pace, your goals. The pinnacle of personalized education.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: "BarChart3",
    title: "Progress Tracking",
    description:
      "Real-time dashboards for students and parents. Track attendance, homework completion, test scores, and improvement trends weekly.",
    color: "from-green-500 to-teal-600",
  },
  {
    icon: "MessageSquare",
    title: "Parent Communication",
    description:
      "Regular weekly updates, parent-teacher meetings, and transparent reporting ensure parents are always informed and confident.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: "BookOpen",
    title: "Small Batch Learning",
    description:
      "Unlike mass coaching factories, our small batches ensure every doubt is addressed, every voice is heard, every student succeeds.",
    color: "from-rose-500 to-red-600",
  },
  {
    icon: "GraduationCap",
    title: "Expert Faculty",
    description:
      "20+ highly qualified educators with decades of combined experience, IIT/NIT alumni, and subject matter experts dedicated to your success.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: "Lightbulb",
    title: "Transparent Counselling",
    description:
      "Honest, unbiased career guidance. We help students and parents make informed decisions about the right program, batch, and learning path.",
    color: "from-yellow-500 to-amber-600",
  },
];

export const JOURNEY_STEPS = [
  {
    step: 1,
    title: "Enquiry",
    description: "Reach out via WhatsApp, phone, or our online form",
    icon: "Phone",
  },
  {
    step: 2,
    title: "Counselling",
    description: "Free 30-minute session to understand your goals",
    icon: "MessageCircle",
  },
  {
    step: 3,
    title: "Assessment",
    description: "Personalized diagnostic test to gauge current level",
    icon: "ClipboardList",
  },
  {
    step: 4,
    title: "Demo Class",
    description: "Experience our teaching style — absolutely free",
    icon: "Play",
  },
  {
    step: 5,
    title: "Admission",
    description: "Simple enrollment with flexible payment options",
    icon: "FileCheck",
  },
  {
    step: 6,
    title: "Progress Tracking",
    description: "Weekly reports, mentor feedback, and parent updates",
    icon: "TrendingUp",
  },
  {
    step: 7,
    title: "Success",
    description: "Achieve your academic and career goals with confidence",
    icon: "Trophy",
  },
];

export const SCHOOL_PROGRAMS = [
  {
    class: "Class 5–8",
    title: "Foundation Program",
    subtitle: "Building Strong Academic Roots",
    subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
    features: [
      "Concept clarity focus",
      "Regular assessments",
      "Homework assistance",
      "Parent updates",
    ],
    price: "Contact for pricing",
    badge: "Foundation",
    color: "from-blue-400 to-indigo-500",
  },
  {
    class: "Class 9–10",
    title: "Board Excellence Program",
    subtitle: "Ace Your CBSE / ICSE Boards",
    subjects: ["Mathematics", "Science", "English", "Social Science", "Hindi"],
    features: [
      "Board exam focused curriculum",
      "Previous year papers",
      "Mock tests",
      "Doubt clearing sessions",
    ],
    price: "Contact for pricing",
    badge: "Board Prep",
    color: "from-amber-400 to-orange-500",
  },
  {
    class: "Class 11–12",
    title: "Senior Excellence Program",
    subtitle: "From Boards to Competitive Exams",
    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "Accountancy",
      "Economics",
    ],
    features: [
      "JEE/NEET foundation",
      "Board + competitive prep",
      "Weekly tests",
      "Career counselling",
    ],
    price: "Contact for pricing",
    badge: "Most Popular",
    color: "from-green-400 to-teal-500",
  },
];

export const COMPETITIVE_EXAMS = [
  { name: "JEE Main & Advanced", icon: "Atom", category: "Engineering" },
  { name: "NEET UG", icon: "Stethoscope", category: "Medical" },
  { name: "CUET", icon: "University", category: "Undergraduate" },
  { name: "UPSC CSE", icon: "Building2", category: "Civil Services" },
  { name: "SSC CGL / CHSL", icon: "FileText", category: "Government" },
  { name: "Banking (IBPS/SBI)", icon: "Landmark", category: "Banking" },
  { name: "Railway (RRB)", icon: "Train", category: "Railway" },
  { name: "NDA / CDS", icon: "Shield", category: "Defence" },
  { name: "AFCAT", icon: "Plane", category: "Air Force" },
  { name: "CA Foundation", icon: "Calculator", category: "Finance" },
  { name: "CMA", icon: "PieChart", category: "Management" },
  { name: "CS Foundation", icon: "Scale", category: "Law & Business" },
];

export const ELITE_FIVE_FEATURES = [
  {
    icon: "Users",
    title: "Max 5 Students",
    description: "Ultra-small batches for maximum individual attention",
  },
  {
    icon: "UserCheck",
    title: "Dedicated Mentor",
    description: "One mentor tracks your entire learning journey",
  },
  {
    icon: "Target",
    title: "Personalized Goals",
    description: "Custom study plan aligned to your specific targets",
  },
  {
    icon: "BarChart2",
    title: "Weekly Analytics",
    description: "Detailed performance reports every week",
  },
  {
    icon: "MessageSquare",
    title: "Parent Integration",
    description: "Regular parent-mentor sync meetings",
  },
  {
    icon: "Clock",
    title: "Flexible Timings",
    description: "Choose batch timings that suit your schedule",
  },
];

export const ULTIMATE_ONE_FEATURES = [
  {
    icon: "User",
    title: "100% One-on-One",
    description: "Completely private sessions — just you and your mentor",
  },
  {
    icon: "Calendar",
    title: "Any Time, Any Day",
    description: "Schedule sessions at your complete convenience",
  },
  {
    icon: "BookOpen",
    title: "Custom Study Plan",
    description: "Curriculum designed around your exact needs and goals",
  },
  {
    icon: "Zap",
    title: "Instant Doubt Clearing",
    description: "Ask any question anytime during your session",
  },
  {
    icon: "TrendingUp",
    title: "Accelerated Progress",
    description: "Learn at your own pace — faster or deeper as needed",
  },
  {
    icon: "Heart",
    title: "Emotional Support",
    description: "Your mentor is your guide, cheerleader, and accountability partner",
  },
];

export const FAQS = [
  {
    category: "General",
    question: "What is SARVD Academy?",
    answer:
      "SARVD Academy is India's premium personalized learning and mentorship platform. We offer tailored education for Class 5–12 students, competitive exam aspirants, and professional certification seekers — through small-batch (Elite 5) and one-on-one (Ultimate One) programs.",
  },
  {
    category: "General",
    question: "What makes SARVD different from regular coaching institutes?",
    answer:
      "Unlike traditional coaching centers with 50–100 students per batch, SARVD limits batches to a maximum of 5 students (Elite 5) or offers completely personalized 1:1 mentorship (Ultimate One). Every student gets a dedicated mentor, personalized study plan, weekly progress reports, and regular parent communication.",
  },
  {
    category: "Programs",
    question: "What is the Elite 5 Program?",
    answer:
      "Elite 5 is our flagship small-batch learning model with a strict maximum of 5 students per batch. This ensures every student receives focused attention, personalized feedback, and active participation. Includes dedicated mentor, weekly analytics, and parent communication.",
  },
  {
    category: "Programs",
    question: "What is the Ultimate One Program?",
    answer:
      "Ultimate One is our premium 1:1 mentorship program. You get a dedicated personal mentor, completely flexible scheduling, a 100% customized study plan, and instant doubt-clearing support. It is the gold standard of personalized education.",
  },
  {
    category: "Admission",
    question: "How can I enroll at SARVD Academy?",
    answer:
      "Enrollment is simple: (1) Fill out our inquiry form or WhatsApp us. (2) Attend a free 30-minute counselling session. (3) Take our diagnostic assessment. (4) Attend a free demo class. (5) Confirm admission with flexible payment. We are always happy to help you find the right program.",
  },
  {
    category: "Admission",
    question: "Is there a free demo class available?",
    answer:
      "Yes! Every prospective student is entitled to a completely free demo class. You can experience our teaching quality, interact with the mentor, and assess if SARVD is the right fit — with absolutely no obligation to enroll.",
  },
  {
    category: "Scholarship",
    question: "Does SARVD offer scholarships?",
    answer:
      "Yes. SARVD Academy offers merit-based and need-based scholarships for deserving students. Scholarships can cover up to 50% of tuition fees. The process involves an application, interview, and assessment. Contact us for current scholarship availability.",
  },
  {
    category: "Parent",
    question: "How are parents kept informed about their child's progress?",
    answer:
      "Parents receive detailed weekly progress reports covering attendance, homework completion, test scores, and mentor feedback. We also conduct regular parent-mentor meetings and maintain open communication through WhatsApp and phone.",
  },
  {
    category: "Parent",
    question: "What subjects and classes do you cover?",
    answer:
      "We cover all subjects for Class 5–12 (CBSE/ICSE), plus JEE, NEET, CUET, UPSC, SSC, Banking, Railway, NDA, CDS, AFCAT, CA, CMA, and CS Foundation programs.",
  },
  {
    category: "General",
    question: "Are classes conducted online or offline?",
    answer:
      "SARVD Academy offers both online (live video sessions) and offline (in-center) modes depending on your location and preference. Online sessions are conducted via premium video conferencing tools with full interactive features.",
  },
];

export const BLOG_POSTS = [
  {
    slug: "how-to-crack-jee-with-personalized-learning",
    title: "How Personalized Learning Helps You Crack JEE in Your First Attempt",
    excerpt:
      "Discover why students who receive one-on-one mentorship consistently outperform those in large coaching batches — and what you can do differently.",
    category: "JEE Preparation",
    readTime: "5 min read",
    date: "June 28, 2025",
    image: "/blog/jee-prep.jpg",
  },
  {
    slug: "small-batch-vs-large-coaching",
    title: "Small Batch vs Large Coaching: Why Fewer Students = Better Results",
    excerpt:
      "An honest comparison of mass coaching factories versus small-batch personalized programs. The data might surprise you.",
    category: "Education Insights",
    readTime: "4 min read",
    date: "June 15, 2025",
    image: "/blog/small-batch.jpg",
  },
  {
    slug: "parent-guide-board-exam-support",
    title: "The Parent's Complete Guide to Supporting Your Child During Board Exams",
    excerpt:
      "Practical advice for parents on creating the right environment, managing anxiety, and being the support system your child needs.",
    category: "Parent Guide",
    readTime: "6 min read",
    date: "June 5, 2025",
    image: "/blog/parent-guide.jpg",
  },
];

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Parent of Class 10 Student",
    content:
      "SARVD Academy transformed my daughter's relationship with Mathematics. The personalized attention and weekly reports kept us completely informed. She scored 95% in boards!",
    rating: 5,
    avatar: "/testimonials/priya.jpg",
  },
  {
    name: "Arjun Mehta",
    role: "JEE Advanced Qualifier 2024",
    content:
      "The Elite 5 batch was a game-changer. Having only 5 students meant I could ask every doubt without hesitation. My mentor knew exactly where I was struggling and fixed it.",
    rating: 5,
    avatar: "/testimonials/arjun.jpg",
  },
  {
    name: "Sunita Verma",
    role: "Parent of NEET Aspirant",
    content:
      "Unlike other institutes, SARVD's counselling was completely honest. They helped us choose the right program without pushing us into unnecessary upgrades. Truly trustworthy.",
    rating: 5,
    avatar: "/testimonials/sunita.jpg",
  },
  {
    name: "Rahul Kumar",
    role: "SSC CGL Selected, 2024",
    content:
      "The Ultimate One program gave me a completely customized plan. My mentor scheduled sessions around my job timings. I cleared SSC CGL in my very first attempt!",
    rating: 5,
    avatar: "/testimonials/rahul.jpg",
  },
];

export const FACULTY = [
  {
    name: "Dr. Amit Sharma",
    subject: "Physics & JEE",
    experience: "12 Years",
    qualification: "IIT Delhi Alumni, PhD Physics",
    achievements: "Mentored 200+ JEE selections",
    avatar: "/faculty/amit.jpg",
  },
  {
    name: "Ms. Priyanka Gupta",
    subject: "Mathematics",
    experience: "8 Years",
    qualification: "M.Sc Mathematics, NET Qualified",
    achievements: "Specialist in Class 9–12 boards",
    avatar: "/faculty/priyanka.jpg",
  },
  {
    name: "Mr. Rajesh Nair",
    subject: "Chemistry & NEET",
    experience: "10 Years",
    qualification: "M.Sc Chemistry, NEET Expert",
    achievements: "50+ NEET qualifiers every year",
    avatar: "/faculty/rajesh.jpg",
  },
  {
    name: "Ms. Deepika Joshi",
    subject: "English & CUET",
    experience: "7 Years",
    qualification: "MA English, CUET Specialist",
    achievements: "Expert in competitive English",
    avatar: "/faculty/deepika.jpg",
  },
];

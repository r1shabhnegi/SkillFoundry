import React from "react";
import {
  Search,
  MapPin,
  Briefcase,
  Users,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Building2,
  Code,
  DollarSign,
  Target,
  Globe,
  Heart,
  Shield,
  Clock,
  Award,
  Mail,
  Phone,
  Twitter,
  Linkedin,
  Instagram,
  Filter,
  Bookmark,
  Eye,
  MessageCircle,
  Calendar,
  BarChart3,
  BookOpen,
  Video,
  Download,
  PlayCircle,
  ChevronDown,
  Bell,
  Zap,
  MapIcon,
  Settings,
  PieChart,
  LineChart,
  Smartphone,
  Monitor,
  Layers,
  Activity,
  FileText,
  HelpCircle,
  ChevronRight,
  TrendingDown,
  Users2,
  Brain,
  Rocket,
  Crown,
  Gift,
} from "lucide-react";

const JobPortalPage = () => {
  const jobCategories = [
    {
      icon: Code,
      title: "Technology",
      count: "2,543 jobs",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Briefcase,
      title: "Marketing",
      count: "1,245 jobs",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: DollarSign,
      title: "Finance",
      count: "987 jobs",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Target,
      title: "Sales",
      count: "1,876 jobs",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Heart,
      title: "Healthcare",
      count: "743 jobs",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Building2,
      title: "Construction",
      count: "567 jobs",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Globe,
      title: "Remote",
      count: "3,421 jobs",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: Users,
      title: "HR",
      count: "432 jobs",
      color: "bg-pink-100 text-pink-600",
    },
  ];

  const featuredJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      salary: "$120k - $160k",
      type: "Full-time",
      logo: "🚀",
      skills: ["React", "TypeScript", "Next.js"],
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Innovation Labs",
      location: "New York, NY",
      salary: "$130k - $180k",
      type: "Full-time",
      logo: "💡",
      skills: ["Strategy", "Analytics", "Leadership"],
      posted: "1 day ago",
    },
    {
      id: 3,
      title: "UX Designer",
      company: "Design Studio",
      location: "Remote",
      salary: "$80k - $110k",
      type: "Contract",
      logo: "🎨",
      skills: ["Figma", "User Research", "Prototyping"],
      posted: "3 days ago",
    },
  ];

  const stats = [
    { number: "50,000+", label: "Active Jobs" },
    { number: "25,000+", label: "Companies" },
    { number: "2M+", label: "Job Seekers" },
    { number: "95%", label: "Success Rate" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "Google",
      content:
        "Found my dream job in just 2 weeks! The platform made the entire process seamless.",
      avatar: "👩‍💻",
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "Meta",
      content:
        "The quality of job listings here is outstanding. Highly recommend to anyone job hunting.",
      avatar: "👨‍💼",
    },
    {
      name: "Emily Davis",
      role: "UX Designer",
      company: "Apple",
      content:
        "Great platform with excellent employer connections. Landed multiple interviews quickly.",
      avatar: "👩‍🎨",
    },
  ];

  const companies = [
    {
      name: "Google",
      logo: "🌟",
      employees: "150,000+",
      openJobs: 245,
      rating: 4.5,
    },
    {
      name: "Meta",
      logo: "📘",
      employees: "80,000+",
      openJobs: 189,
      rating: 4.3,
    },
    {
      name: "Apple",
      logo: "🍎",
      employees: "160,000+",
      openJobs: 156,
      rating: 4.6,
    },
    {
      name: "Microsoft",
      logo: "🪟",
      employees: "220,000+",
      openJobs: 298,
      rating: 4.4,
    },
    {
      name: "Amazon",
      logo: "📦",
      employees: "1.5M+",
      openJobs: 1250,
      rating: 4.1,
    },
    {
      name: "Netflix",
      logo: "📺",
      employees: "11,000+",
      openJobs: 67,
      rating: 4.5,
    },
  ];

  const careerResources = [
    {
      type: "Article",
      title: "10 Interview Tips That Will Land You The Job",
      excerpt: "Master the art of interviewing with these proven strategies...",
      readTime: "5 min read",
      category: "Interview Prep",
      author: "Sarah Martinez",
      date: "Dec 15, 2024",
      icon: FileText,
    },
    {
      type: "Video",
      title: "Resume Writing Masterclass",
      excerpt: "Learn to create resumes that get noticed by hiring managers...",
      readTime: "25 min watch",
      category: "Resume Tips",
      author: "David Kim",
      date: "Dec 12, 2024",
      icon: Video,
    },
    {
      type: "Guide",
      title: "Salary Negotiation Strategies",
      excerpt: "Negotiate your worth with confidence using these techniques...",
      readTime: "8 min read",
      category: "Career Growth",
      author: "Lisa Chen",
      date: "Dec 10, 2024",
      icon: BookOpen,
    },
  ];

  const salaryInsights = [
    {
      role: "Software Engineer",
      avgSalary: "$125,000",
      growth: "+8.5%",
      demand: "High",
    },
    {
      role: "Product Manager",
      avgSalary: "$145,000",
      growth: "+12.3%",
      demand: "Very High",
    },
    {
      role: "Data Scientist",
      avgSalary: "$130,000",
      growth: "+15.2%",
      demand: "Very High",
    },
    {
      role: "UX Designer",
      avgSalary: "$95,000",
      growth: "+6.8%",
      demand: "High",
    },
  ];

  const industryTrends = [
    {
      title: "Remote Work Revolution",
      description: "75% of companies now offer remote or hybrid positions",
      percentage: 75,
      trend: "up",
    },
    {
      title: "AI & Machine Learning",
      description: "300% increase in AI-related job postings this year",
      percentage: 300,
      trend: "up",
    },
    {
      title: "Green Jobs Growth",
      description: "Sustainability roles growing 50% faster than average",
      percentage: 50,
      trend: "up",
    },
  ];

  const pricingPlans = [
    {
      name: "Job Seeker",
      price: "Free",
      description: "Perfect for individual job seekers",
      features: [
        "Unlimited job applications",
        "Basic profile creation",
        "Job alerts",
        "Resume builder",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Premium Seeker",
      price: "$19/month",
      description: "Enhanced features for serious job hunters",
      features: [
        "Priority application review",
        "Advanced profile analytics",
        "Recruiter visibility boost",
        "1-on-1 career coaching call",
        "Premium templates",
        "Interview preparation tools",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For companies hiring at scale",
      features: [
        "Unlimited job postings",
        "Advanced candidate filtering",
        "Team collaboration tools",
        "Custom branding",
        "API access",
        "Dedicated account manager",
      ],
      popular: false,
    },
  ];

  const liveStats = [
    { label: "Jobs Posted Today", value: "1,247", icon: Briefcase },
    { label: "Applications Sent", value: "8,392", icon: Users },
    { label: "Interviews Scheduled", value: "423", icon: Calendar },
    { label: "Hires This Week", value: "156", icon: CheckCircle },
  ];

  const faqs = [
    {
      question: "How do I create a compelling profile?",
      answer:
        "Include a professional photo, detailed work experience, skills, and a summary that highlights your unique value proposition. Use keywords relevant to your industry.",
    },
    {
      question: "How long does it typically take to find a job?",
      answer:
        "On average, our users find a job within 6-8 weeks. However, this varies based on industry, experience level, and job market conditions.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No hidden fees! Our basic service is completely free for job seekers. Premium features are clearly outlined with transparent pricing.",
    },
    {
      question: "How do I know if a company is legitimate?",
      answer:
        "We verify all companies before they can post jobs. Look for the verified badge, read company reviews, and research the company independently.",
    },
  ];

  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <header className='bg-white shadow-sm border-b sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0 flex items-center'>
                <Briefcase className='h-8 w-8 text-blue-600' />
                <span className='ml-2 text-2xl font-bold text-gray-900'>
                  JobPortal
                </span>
              </div>
              <nav className='hidden md:ml-10 md:flex space-x-8'>
                <a
                  href='#'
                  className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium'>
                  Find Jobs
                </a>
                <a
                  href='#'
                  className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium'>
                  Companies
                </a>
                <a
                  href='#'
                  className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium'>
                  Salaries
                </a>
                <a
                  href='#'
                  className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium'>
                  Resources
                </a>
              </nav>
            </div>

            <div className='flex items-center space-x-4'>
              <button className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium'>
                For Employers
              </button>
              <button className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium'>
                Sign In
              </button>
              <button className='bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors'>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-50 to-indigo-100 py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              Find Your <span className='text-blue-600'>Dream Job</span>
              <br />
              Today
            </h1>
            <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              Discover thousands of job opportunities from top companies
              worldwide. Take the next step in your career with our intelligent
              job matching platform.
            </p>

            {/* Job Search */}
            <div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6'>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div className='md:col-span-2'>
                  <div className='relative'>
                    <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
                    <input
                      type='text'
                      placeholder='Job title, keywords, or company'
                      className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none'
                    />
                  </div>
                </div>
                <div>
                  <div className='relative'>
                    <MapPin className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
                    <input
                      type='text'
                      placeholder='Location'
                      className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none'
                    />
                  </div>
                </div>
                <button className='bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center'>
                  Search Jobs
                  <ArrowRight className='ml-2 h-5 w-5' />
                </button>
              </div>
            </div>

            <div className='mt-8 text-sm text-gray-600'>
              Popular searches: <span className='text-blue-600'>Remote</span>,{" "}
              <span className='text-blue-600'>Frontend Developer</span>,{" "}
              <span className='text-blue-600'>Product Manager</span>,{" "}
              <span className='text-blue-600'>Data Scientist</span>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Search Filters */}
      <section className='bg-white py-8 border-b border-gray-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap gap-4 items-center justify-between'>
            <div className='flex flex-wrap gap-3'>
              <div className='flex items-center space-x-2'>
                <Filter className='h-4 w-4 text-gray-600' />
                <span className='text-sm font-medium text-gray-700'>
                  Filters:
                </span>
              </div>

              <select className='px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
                <option>Salary Range</option>
                <option>$50k - $75k</option>
                <option>$75k - $100k</option>
                <option>$100k - $150k</option>
                <option>$150k+</option>
              </select>

              <select className='px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
                <option>Experience Level</option>
                <option>Entry Level (0-2 years)</option>
                <option>Mid Level (3-5 years)</option>
                <option>Senior Level (6-10 years)</option>
                <option>Executive (10+ years)</option>
              </select>

              <select className='px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
                <option>Job Type</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Freelance</option>
                <option>Internship</option>
              </select>

              <select className='px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
                <option>Remote Options</option>
                <option>Remote</option>
                <option>Hybrid</option>
                <option>On-site</option>
              </select>
            </div>

            <div className='flex items-center space-x-3'>
              <button className='flex items-center space-x-1 px-3 py-1 text-gray-600 hover:text-blue-600 transition-colors'>
                <Bell className='h-4 w-4' />
                <span className='text-sm'>Job Alerts</span>
              </button>
              <button className='flex items-center space-x-1 px-3 py-1 text-gray-600 hover:text-blue-600 transition-colors'>
                <Bookmark className='h-4 w-4' />
                <span className='text-sm'>Saved Jobs</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Statistics */}
      <section className='bg-gradient-to-r from-blue-50 to-indigo-50 py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {liveStats.map((stat, index) => (
              <div
                key={index}
                className='flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm'>
                <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                  <stat.icon className='h-5 w-5 text-blue-600' />
                </div>
                <div>
                  <div className='text-lg font-bold text-gray-900'>
                    {stat.value}
                  </div>
                  <div className='text-xs text-gray-600'>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div
                key={index}
                className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-blue-600 mb-2'>
                  {stat.number}
                </div>
                <div className='text-gray-600'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Browse by Category
            </h2>
            <p className='text-xl text-gray-600'>
              Explore job opportunities across various industries
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {jobCategories.map((category, index) => (
              <div
                key={index}
                className='bg-white rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer'>
                <div
                  className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                  <category.icon className='h-6 w-6' />
                </div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  {category.title}
                </h3>
                <p className='text-gray-600 text-sm'>{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Spotlight */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Top Companies Hiring Now
            </h2>
            <p className='text-xl text-gray-600'>
              Join thousands of professionals at these leading companies
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {companies.map((company, index) => (
              <div
                key={index}
                className='bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-200'>
                <div className='flex items-center justify-between mb-4'>
                  <div className='flex items-center'>
                    <div className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl'>
                      {company.logo}
                    </div>
                    <div className='ml-3'>
                      <h3 className='font-semibold text-gray-900'>
                        {company.name}
                      </h3>
                      <div className='flex items-center'>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(company.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className='ml-2 text-sm text-gray-600'>
                          {company.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='text-right'>
                    <div className='text-lg font-bold text-blue-600'>
                      {company.openJobs}
                    </div>
                    <div className='text-xs text-gray-600'>open jobs</div>
                  </div>
                </div>

                <div className='space-y-2 mb-4'>
                  <div className='flex items-center text-gray-600'>
                    <Users className='h-4 w-4 mr-2' />
                    <span className='text-sm'>
                      {company.employees} employees
                    </span>
                  </div>
                  <div className='flex items-center text-gray-600'>
                    <Building2 className='h-4 w-4 mr-2' />
                    <span className='text-sm'>Technology Company</span>
                  </div>
                </div>

                <div className='flex gap-2'>
                  <button className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors'>
                    View Jobs
                  </button>
                  <button className='bg-gray-100 text-gray-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors'>
                    <Eye className='h-4 w-4' />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className='text-center mt-12'>
            <button className='bg-gray-100 text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors'>
              Explore All Companies
            </button>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Featured Jobs
            </h2>
            <p className='text-xl text-gray-600'>
              Hand-picked job opportunities from top companies
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {featuredJobs.map((job) => (
              <div
                key={job.id}
                className='bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow'>
                <div className='flex items-start justify-between mb-4'>
                  <div className='flex items-center'>
                    <div className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl'>
                      {job.logo}
                    </div>
                    <div className='ml-3'>
                      <h3 className='font-semibold text-gray-900'>
                        {job.title}
                      </h3>
                      <p className='text-gray-600'>{job.company}</p>
                    </div>
                  </div>
                  <span className='text-xs text-gray-500'>{job.posted}</span>
                </div>

                <div className='space-y-2 mb-4'>
                  <div className='flex items-center text-gray-600'>
                    <MapPin className='h-4 w-4 mr-2' />
                    {job.location}
                  </div>
                  <div className='flex items-center text-gray-600'>
                    <DollarSign className='h-4 w-4 mr-2' />
                    {job.salary}
                  </div>
                  <div className='flex items-center text-gray-600'>
                    <Clock className='h-4 w-4 mr-2' />
                    {job.type}
                  </div>
                </div>

                <div className='flex flex-wrap gap-2 mb-4'>
                  {job.skills.map((skill, index) => (
                    <span
                      key={index}
                      className='px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full'>
                      {skill}
                    </span>
                  ))}
                </div>

                <button className='w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors'>
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className='text-center mt-12'>
            <button className='bg-gray-100 text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors'>
              View All Jobs
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              How It Works
            </h2>
            <p className='text-xl text-gray-600'>Get hired in 3 simple steps</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
            <div className='text-center'>
              <div className='w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <Search className='h-10 w-10 text-blue-600' />
              </div>
              <h3 className='text-xl font-semibold mb-4'>
                1. Search & Discover
              </h3>
              <p className='text-gray-600'>
                Browse thousands of job opportunities from top companies. Use
                our advanced filters to find the perfect match.
              </p>
            </div>

            <div className='text-center'>
              <div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <Users className='h-10 w-10 text-green-600' />
              </div>
              <h3 className='text-xl font-semibold mb-4'>2. Apply & Connect</h3>
              <p className='text-gray-600'>
                Apply to jobs with one click using your profile. Connect
                directly with hiring managers and recruiters.
              </p>
            </div>

            <div className='text-center'>
              <div className='w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <Award className='h-10 w-10 text-purple-600' />
              </div>
              <h3 className='text-xl font-semibold mb-4'>3. Get Hired</h3>
              <p className='text-gray-600'>
                Interview with confidence using our preparation tools. Land your
                dream job and advance your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Salary Insights */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Salary Insights
            </h2>
            <p className='text-xl text-gray-600'>
              Stay informed about market trends and compensation data
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
            {salaryInsights.map((insight, index) => (
              <div
                key={index}
                className='bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100'>
                <div className='flex items-center justify-between mb-2'>
                  <h3 className='font-semibold text-gray-900'>
                    {insight.role}
                  </h3>
                  <TrendingUp className='h-5 w-5 text-green-500' />
                </div>
                <div className='text-2xl font-bold text-blue-600 mb-1'>
                  {insight.avgSalary}
                </div>
                <div className='flex items-center justify-between text-sm'>
                  <span className='text-green-600 font-medium'>
                    {insight.growth}
                  </span>
                  <span className='text-gray-600'>{insight.demand} demand</span>
                </div>
              </div>
            ))}
          </div>

          <div className='bg-gray-50 rounded-2xl p-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
              <div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Salary Calculator
                </h3>
                <p className='text-gray-600 mb-6'>
                  Get personalized salary estimates based on your skills,
                  experience, and location.
                </p>
                <div className='space-y-4'>
                  <div className='grid grid-cols-2 gap-4'>
                    <input
                      type='text'
                      placeholder='Job Title'
                      className='px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    />
                    <input
                      type='text'
                      placeholder='Years of Experience'
                      className='px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    />
                  </div>
                  <input
                    type='text'
                    placeholder='Location'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  />
                  <button className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'>
                    Calculate Salary
                  </button>
                </div>
              </div>

              <div className='bg-white rounded-xl p-6 shadow-sm'>
                <div className='flex items-center justify-between mb-4'>
                  <h4 className='font-semibold text-gray-900'>Market Trends</h4>
                  <BarChart3 className='h-5 w-5 text-blue-600' />
                </div>
                <div className='space-y-4'>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Software Engineering</span>
                    <div className='flex items-center'>
                      <div className='w-24 h-2 bg-gray-200 rounded-full mr-2'>
                        <div className='w-20 h-2 bg-green-500 rounded-full'></div>
                      </div>
                      <span className='text-green-600 text-sm'>+12%</span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Product Management</span>
                    <div className='flex items-center'>
                      <div className='w-24 h-2 bg-gray-200 rounded-full mr-2'>
                        <div className='w-16 h-2 bg-blue-500 rounded-full'></div>
                      </div>
                      <span className='text-blue-600 text-sm'>+8%</span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Data Science</span>
                    <div className='flex items-center'>
                      <div className='w-24 h-2 bg-gray-200 rounded-full mr-2'>
                        <div className='w-18 h-2 bg-purple-500 rounded-full'></div>
                      </div>
                      <span className='text-purple-600 text-sm'>+15%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Trends */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Industry Trends
            </h2>
            <p className='text-xl text-gray-600'>
              Stay ahead with the latest job market insights
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {industryTrends.map((trend, index) => (
              <div
                key={index}
                className='bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow'>
                <div className='flex items-center justify-between mb-4'>
                  <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center'>
                    <TrendingUp className='h-6 w-6 text-green-600' />
                  </div>
                  <div className='text-3xl font-bold text-green-600'>
                    {trend.percentage}%
                  </div>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  {trend.title}
                </h3>
                <p className='text-gray-600'>{trend.description}</p>
              </div>
            ))}
          </div>

          <div className='mt-16 bg-blue-600 rounded-2xl p-8 text-white'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
              <div>
                <h3 className='text-2xl font-bold mb-4'>
                  Get Weekly Industry Reports
                </h3>
                <p className='text-blue-100 mb-6'>
                  Stay informed with our comprehensive weekly reports on job
                  market trends, salary insights, and industry developments.
                </p>
                <ul className='space-y-2 mb-6'>
                  <li className='flex items-center'>
                    <CheckCircle className='h-5 w-5 text-green-400 mr-2' />
                    <span>Market trend analysis</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='h-5 w-5 text-green-400 mr-2' />
                    <span>Salary benchmarking</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='h-5 w-5 text-green-400 mr-2' />
                    <span>Skills demand forecast</span>
                  </li>
                </ul>
              </div>

              <div className='bg-white rounded-xl p-6'>
                <h4 className='text-lg font-semibold text-gray-900 mb-4'>
                  Subscribe to Updates
                </h4>
                <div className='space-y-4'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900'
                  />
                  <button className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'>
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section className='py-20 bg-blue-600 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Hire Top Talent Today
              </h2>
              <p className='text-xl text-blue-100 mb-8'>
                Access millions of qualified candidates. Post jobs, review
                applications, and hire the best talent for your company.
              </p>

              <div className='space-y-4 mb-8'>
                <div className='flex items-center'>
                  <CheckCircle className='h-6 w-6 text-green-400 mr-3' />
                  <span>Access to 2M+ qualified candidates</span>
                </div>
                <div className='flex items-center'>
                  <CheckCircle className='h-6 w-6 text-green-400 mr-3' />
                  <span>Advanced candidate screening tools</span>
                </div>
                <div className='flex items-center'>
                  <CheckCircle className='h-6 w-6 text-green-400 mr-3' />
                  <span>Dedicated account management</span>
                </div>
                <div className='flex items-center'>
                  <CheckCircle className='h-6 w-6 text-green-400 mr-3' />
                  <span>Branded company pages</span>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <button className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
                  Post a Job
                </button>
                <button className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'>
                  Learn More
                </button>
              </div>
            </div>

            <div className='relative'>
              <div className='bg-white rounded-2xl p-8 shadow-2xl'>
                <div className='flex items-center mb-6'>
                  <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <Building2 className='h-6 w-6 text-blue-600' />
                  </div>
                  <div className='ml-4'>
                    <h3 className='font-semibold text-gray-900'>
                      Company Dashboard
                    </h3>
                    <p className='text-gray-600'>Manage your hiring process</p>
                  </div>
                </div>

                <div className='space-y-4'>
                  <div className='flex justify-between items-center py-3 border-b border-gray-100'>
                    <span className='text-gray-900'>Active Jobs</span>
                    <span className='font-semibold text-blue-600'>12</span>
                  </div>
                  <div className='flex justify-between items-center py-3 border-b border-gray-100'>
                    <span className='text-gray-900'>Applications</span>
                    <span className='font-semibold text-green-600'>248</span>
                  </div>
                  <div className='flex justify-between items-center py-3'>
                    <span className='text-gray-900'>Interviews Scheduled</span>
                    <span className='font-semibold text-purple-600'>15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              What Our Users Say
            </h2>
            <p className='text-xl text-gray-600'>
              Stories from successful job seekers
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className='bg-gray-50 rounded-xl p-8'>
                <div className='flex items-center mb-4'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='h-5 w-5 text-yellow-400 fill-current'
                    />
                  ))}
                </div>
                <p className='text-gray-700 mb-6'>"{testimonial.content}"</p>
                <div className='flex items-center'>
                  <div className='w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl mr-4'>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900'>
                      {testimonial.name}
                    </h4>
                    <p className='text-gray-600'>
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Resources */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Career Resources
            </h2>
            <p className='text-xl text-gray-600'>
              Expert advice and tools to accelerate your career growth
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
            {careerResources.map((resource, index) => (
              <div
                key={index}
                className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow'>
                <div className='flex items-center justify-between mb-4'>
                  <div className='flex items-center'>
                    <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                      <resource.icon className='h-5 w-5 text-blue-600' />
                    </div>
                    <span className='ml-3 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full'>
                      {resource.type}
                    </span>
                  </div>
                  <span className='text-xs text-gray-500'>
                    {resource.readTime}
                  </span>
                </div>

                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  {resource.title}
                </h3>
                <p className='text-gray-600 mb-4'>{resource.excerpt}</p>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center text-sm text-gray-500'>
                    <span>{resource.author}</span>
                    <span className='mx-2'>•</span>
                    <span>{resource.date}</span>
                  </div>
                  <span className='px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full'>
                    {resource.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Skills Assessment */}
            <div className='bg-white rounded-2xl p-8 shadow-sm'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center'>
                  <Brain className='h-6 w-6 text-purple-600' />
                </div>
                <div className='ml-4'>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    Skills Assessment
                  </h3>
                  <p className='text-gray-600'>
                    Evaluate your skills and get personalized recommendations
                  </p>
                </div>
              </div>

              <div className='space-y-4 mb-6'>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-700'>JavaScript</span>
                  <div className='flex items-center'>
                    <div className='w-24 h-2 bg-gray-200 rounded-full mr-2'>
                      <div className='w-20 h-2 bg-green-500 rounded-full'></div>
                    </div>
                    <span className='text-sm text-green-600'>Advanced</span>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-700'>React</span>
                  <div className='flex items-center'>
                    <div className='w-24 h-2 bg-gray-200 rounded-full mr-2'>
                      <div className='w-16 h-2 bg-blue-500 rounded-full'></div>
                    </div>
                    <span className='text-sm text-blue-600'>Intermediate</span>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-700'>Python</span>
                  <div className='flex items-center'>
                    <div className='w-24 h-2 bg-gray-200 rounded-full mr-2'>
                      <div className='w-12 h-2 bg-yellow-500 rounded-full'></div>
                    </div>
                    <span className='text-sm text-yellow-600'>Beginner</span>
                  </div>
                </div>
              </div>

              <button className='w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors'>
                Take Skills Assessment
              </button>
            </div>

            {/* Interview Prep */}
            <div className='bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center'>
                  <MessageCircle className='h-6 w-6 text-green-600' />
                </div>
                <div className='ml-4'>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    Interview Preparation
                  </h3>
                  <p className='text-gray-600'>
                    Practice with AI-powered mock interviews
                  </p>
                </div>
              </div>

              <div className='space-y-3 mb-6'>
                <div className='flex items-center text-gray-700'>
                  <CheckCircle className='h-4 w-4 text-green-500 mr-3' />
                  <span className='text-sm'>Common interview questions</span>
                </div>
                <div className='flex items-center text-gray-700'>
                  <CheckCircle className='h-4 w-4 text-green-500 mr-3' />
                  <span className='text-sm'>Industry-specific scenarios</span>
                </div>
                <div className='flex items-center text-gray-700'>
                  <CheckCircle className='h-4 w-4 text-green-500 mr-3' />
                  <span className='text-sm'>Real-time feedback</span>
                </div>
                <div className='flex items-center text-gray-700'>
                  <CheckCircle className='h-4 w-4 text-green-500 mr-3' />
                  <span className='text-sm'>Performance analytics</span>
                </div>
              </div>

              <button className='w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors'>
                Start Interview Prep
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Choose Your Plan
            </h2>
            <p className='text-xl text-gray-600'>
              Flexible pricing options for every career stage
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 p-8 ${
                  plan.popular
                    ? "border-blue-500 shadow-lg scale-105"
                    : "border-gray-200 shadow-sm"
                }`}>
                {plan.popular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <div className='bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium'>
                      Most Popular
                    </div>
                  </div>
                )}

                <div className='text-center mb-8'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    {plan.name}
                  </h3>
                  <div className='text-3xl font-bold text-gray-900 mb-2'>
                    {plan.price}
                  </div>
                  <p className='text-gray-600'>{plan.description}</p>
                </div>

                <div className='space-y-3 mb-8'>
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-green-500 mr-3' />
                      <span className='text-gray-700'>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}>
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Frequently Asked Questions
            </h2>
            <p className='text-xl text-gray-600'>
              Get answers to common questions about using JobPortal
            </p>
          </div>

          <div className='space-y-6'>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className='bg-white rounded-xl p-6 shadow-sm'>
                <div className='flex items-center justify-between mb-3'>
                  <h3 className='text-lg font-semibold text-gray-900'>
                    {faq.question}
                  </h3>
                  <ChevronDown className='h-5 w-5 text-gray-400' />
                </div>
                <p className='text-gray-600'>{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className='text-center mt-12'>
            <p className='text-gray-600 mb-4'>
              Can't find what you're looking for?
            </p>
            <button className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'>
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Mobile App Promotion */}
      <section className='py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Job Search On The Go
              </h2>
              <p className='text-xl text-purple-100 mb-8'>
                Download our mobile app and never miss an opportunity. Apply to
                jobs, get notifications, and manage your career from anywhere.
              </p>

              <div className='space-y-4 mb-8'>
                <div className='flex items-center'>
                  <Smartphone className='h-6 w-6 text-purple-300 mr-3' />
                  <span>Apply to jobs with one tap</span>
                </div>
                <div className='flex items-center'>
                  <Bell className='h-6 w-6 text-purple-300 mr-3' />
                  <span>Real-time job alerts</span>
                </div>
                <div className='flex items-center'>
                  <MessageCircle className='h-6 w-6 text-purple-300 mr-3' />
                  <span>Chat with recruiters directly</span>
                </div>
                <div className='flex items-center'>
                  <Activity className='h-6 w-6 text-purple-300 mr-3' />
                  <span>Track application status</span>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <button className='bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center'>
                  <Download className='h-5 w-5 mr-2' />
                  Download for iOS
                </button>
                <button className='bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center'>
                  <Download className='h-5 w-5 mr-2' />
                  Download for Android
                </button>
              </div>
            </div>

            <div className='relative'>
              <div className='bg-white rounded-3xl p-8 shadow-2xl'>
                <div className='flex items-center justify-between mb-6'>
                  <div className='flex items-center'>
                    <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
                      <Briefcase className='h-4 w-4 text-blue-600' />
                    </div>
                    <span className='ml-2 font-semibold text-gray-900'>
                      JobPortal
                    </span>
                  </div>
                  <div className='flex space-x-2'>
                    <div className='w-3 h-3 bg-red-400 rounded-full'></div>
                    <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
                    <div className='w-3 h-3 bg-green-400 rounded-full'></div>
                  </div>
                </div>

                <div className='space-y-4'>
                  <div className='flex items-center justify-between py-3 border-b border-gray-100'>
                    <span className='text-gray-900'>New Applications</span>
                    <span className='font-semibold text-blue-600'>5</span>
                  </div>
                  <div className='flex items-center justify-between py-3 border-b border-gray-100'>
                    <span className='text-gray-900'>Interview Invites</span>
                    <span className='font-semibold text-green-600'>2</span>
                  </div>
                  <div className='flex items-center justify-between py-3'>
                    <span className='text-gray-900'>Profile Views</span>
                    <span className='font-semibold text-purple-600'>24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Ready to Find Your Dream Job?
          </h2>
          <p className='text-xl text-blue-100 mb-8'>
            Join millions of job seekers who have found their perfect career
            match
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
              Get Started - It's Free
            </button>
            <button className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'>
              Browse Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div className='md:col-span-1'>
              <div className='flex items-center mb-6'>
                <Briefcase className='h-8 w-8 text-blue-400' />
                <span className='ml-2 text-2xl font-bold'>JobPortal</span>
              </div>
              <p className='text-gray-400 mb-6'>
                Connecting talent with opportunity. Find your next career move
                or hire top talent.
              </p>
              <div className='flex space-x-4'>
                <Twitter className='h-6 w-6 text-gray-400 hover:text-white cursor-pointer' />
                <Linkedin className='h-6 w-6 text-gray-400 hover:text-white cursor-pointer' />
                <Instagram className='h-6 w-6 text-gray-400 hover:text-white cursor-pointer' />
              </div>
            </div>

            <div>
              <h3 className='font-semibold mb-4'>For Job Seekers</h3>
              <ul className='space-y-2 text-gray-400'>
                <li>
                  <a
                    href='#'
                    className='hover:text-white'>
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-white'>
                    Career Advice
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-white'>
                    Resume Builder
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-white'>
                    Salary Guide
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='font-semibold mb-4'>For Employers</h3>
              <ul className='space-y-2 text-gray-400'>
                <li>
                  <a
                    href='#'
                    className='hover:text-white'>
                    Post Jobs
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-white'>
                    Search Resumes
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-white'>
                    Recruiting Solutions
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-white'>
                    Employer Branding
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='font-semibold mb-4'>Company</h3>
              <ul className='space-y-2 text-gray-400'>
                <li>
                  <a
                    href='#'
                    className='hover:text-white'>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-white'>
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-white'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-white'>
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-400'>
              © 2024 JobPortal. All rights reserved.
            </p>
            <div className='flex items-center mt-4 md:mt-0'>
              <Mail className='h-5 w-5 text-gray-400 mr-2' />
              <span className='text-gray-400'>support@jobportal.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JobPortalPage;

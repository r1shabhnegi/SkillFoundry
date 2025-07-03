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

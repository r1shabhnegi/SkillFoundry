"use client";
import React, { useState } from "react";
import {
  Search,
  Bell,
  MessageSquare,
  User,
  ChevronDown,
  Filter,
  MapPin,
  Clock,
  DollarSign,
  Bookmark,
  BookmarkCheck,
  Share2,
  Building2,
  Star,
  TrendingUp,
  Briefcase,
  Users,
  Eye,
  Heart,
  Settings,
  LogOut,
  Edit3,
  Camera,
  Award,
  CheckCircle,
  Calendar,
  Globe,
  Target,
  Zap,
  ArrowRight,
  MoreHorizontal,
  ThumbsUp,
  X,
  Plus,
  Menu,
  Home,
  FileText,
  Send,
} from "lucide-react";

const JobFeedPage = () => {
  const [savedJobs, setSavedJobs] = useState(new Set([1, 3]));
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  // Mock user data
  const userData = {
    name: "Alex Johnson",
    title: "Frontend Developer",
    location: "San Francisco, CA",
    avatar: "/api/placeholder/64/64",
    profileCompletion: 75,
    connectionsCount: 1247,
    profileViews: 89,
    appliedJobs: 12,
    savedJobsCount: 8,
    completedSections: {
      basicInfo: true,
      experience: true,
      education: true,
      skills: false,
      portfolio: true,
      preferences: false,
    },
  };

  // Mock jobs data
  const jobsData = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      companyLogo: "🚀",
      location: "San Francisco, CA",
      locationType: "Hybrid",
      salary: "$120k - $160k",
      postedTime: "2 hours ago",
      applicants: 47,
      description:
        "We're looking for a skilled Frontend Developer to join our growing team. You'll work on cutting-edge projects using React, TypeScript, and modern web technologies.",
      requirements: ["React", "TypeScript", "Node.js", "GraphQL"],
      benefits: [
        "Health Insurance",
        "Remote Work",
        "Stock Options",
        "Learning Budget",
      ],
      type: "Full-time",
      experience: "3-5 years",
      isPromoted: true,
      matchScore: 95,
    },
    {
      id: 2,
      title: "Product Designer",
      company: "Design Studio Pro",
      companyLogo: "🎨",
      location: "New York, NY",
      locationType: "Remote",
      salary: "$90k - $130k",
      postedTime: "5 hours ago",
      applicants: 23,
      description:
        "Join our design team to create beautiful and intuitive user experiences. We're seeking a creative mind with strong UX/UI skills.",
      requirements: ["Figma", "Sketch", "Prototyping", "User Research"],
      benefits: [
        "Flexible Hours",
        "Design Tools",
        "Conference Budget",
        "Health Insurance",
      ],
      type: "Full-time",
      experience: "2-4 years",
      isPromoted: false,
      matchScore: 87,
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "CloudTech Solutions",
      companyLogo: "☁️",
      location: "Austin, TX",
      locationType: "On-site",
      salary: "$140k - $180k",
      postedTime: "1 day ago",
      applicants: 67,
      description:
        "Looking for an experienced DevOps Engineer to help scale our infrastructure and improve deployment processes.",
      requirements: ["AWS", "Docker", "Kubernetes", "Python", "Terraform"],
      benefits: [
        "401k Match",
        "Unlimited PTO",
        "Tech Stipend",
        "Gym Membership",
      ],
      type: "Full-time",
      experience: "4-6 years",
      isPromoted: true,
      matchScore: 78,
    },
    {
      id: 4,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      companyLogo: "💡",
      location: "Remote",
      locationType: "Remote",
      salary: "$80k - $120k",
      postedTime: "2 days ago",
      applicants: 156,
      description:
        "Join a fast-growing startup as a Full Stack Developer. You'll have the opportunity to work on diverse projects and shape the product direction.",
      requirements: ["JavaScript", "Python", "React", "Django", "PostgreSQL"],
      benefits: [
        "Stock Options",
        "Flexible Schedule",
        "Learning Budget",
        "Remote Work",
      ],
      type: "Full-time",
      experience: "2-5 years",
      isPromoted: false,
      matchScore: 82,
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "AI Innovations",
      companyLogo: "🤖",
      location: "Seattle, WA",
      locationType: "Hybrid",
      salary: "$130k - $170k",
      postedTime: "3 days ago",
      applicants: 89,
      description:
        "Work with cutting-edge AI and machine learning technologies to solve complex business problems and drive data-driven decisions.",
      requirements: [
        "Python",
        "TensorFlow",
        "SQL",
        "Statistics",
        "Machine Learning",
      ],
      benefits: [
        "Research Time",
        "Conference Budget",
        "Health Insurance",
        "Stock Options",
      ],
      type: "Full-time",
      experience: "3-7 years",
      isPromoted: false,
      matchScore: 71,
    },
  ];

  // Mock notifications
  const notifications = [
    {
      id: 1,
      type: "application",
      title: "Application Update",
      message:
        "Your application for Senior Frontend Developer at TechCorp has been reviewed",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      type: "match",
      title: "New Job Match",
      message: "5 new jobs match your preferences",
      time: "4 hours ago",
      unread: true,
    },
    {
      id: 3,
      type: "message",
      title: "Message from Recruiter",
      message: "Sarah from TechCorp sent you a message",
      time: "1 day ago",
      unread: false,
    },
  ];

  const toggleSaveJob = (jobId: number) => {
    const newSavedJobs = new Set(savedJobs);
    if (newSavedJobs.has(jobId)) {
      newSavedJobs.delete(jobId);
    } else {
      newSavedJobs.add(jobId);
    }
    setSavedJobs(newSavedJobs);
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600 bg-green-100";
    if (score >= 80) return "text-blue-600 bg-blue-100";
    if (score >= 70) return "text-yellow-600 bg-yellow-100";
    return "text-gray-600 bg-gray-100";
  };

  const getLocationTypeColor = (type: string) => {
    switch (type) {
      case "Remote":
        return "text-green-600 bg-green-100";
      case "Hybrid":
        return "text-blue-600 bg-blue-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-white shadow-sm border-b sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <div className='flex items-center'>
              <div className='flex-shrink-0 flex items-center'>
                <Briefcase className='h-8 w-8 text-blue-600' />
                <span className='ml-2 text-2xl font-bold text-gray-900'>
                  JobPortal
                </span>
              </div>
              {/* Navigation */}
              <nav className='hidden md:ml-10 md:flex space-x-8'>
                <a
                  href='#'
                  className='text-blue-600 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium'>
                  Feed
                </a>
                <a
                  href='#'
                  className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium'>
                  My Applications
                </a>
                <a
                  href='#'
                  className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium'>
                  Messages
                </a>
                <a
                  href='#'
                  className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium'>
                  Companies
                </a>
              </nav>
            </div>

            {/* Search Bar */}
            <div className='flex-1 max-w-2xl mx-8'>
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
                <input
                  type='text'
                  placeholder='Search jobs, companies, or skills...'
                  className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none'
                />
              </div>
            </div>

            {/* Right Side Actions */}
            <div className='flex items-center space-x-4'>
              {/* Notifications */}
              <div className='relative'>
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className='p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors relative'>
                  <Bell className='h-6 w-6' />
                  <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                    2
                  </span>
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className='absolute right-0 top-12 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50'>
                    <div className='px-4 py-2 border-b border-gray-100'>
                      <h3 className='font-semibold text-gray-900'>
                        Notifications
                      </h3>
                    </div>
                    <div className='max-h-96 overflow-y-auto'>
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`px-4 py-3 hover:bg-gray-50 border-l-4 ${
                            notification.unread
                              ? "border-blue-500 bg-blue-50"
                              : "border-transparent"
                          }`}>
                          <div className='flex justify-between items-start'>
                            <div className='flex-1'>
                              <h4 className='font-medium text-gray-900 text-sm'>
                                {notification.title}
                              </h4>
                              <p className='text-gray-600 text-sm mt-1'>
                                {notification.message}
                              </p>
                              <span className='text-gray-400 text-xs'>
                                {notification.time}
                              </span>
                            </div>
                            {notification.unread && (
                              <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='px-4 py-2 border-t border-gray-100'>
                      <button className='text-blue-600 text-sm font-medium hover:text-blue-700'>
                        View all notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Messages */}
              <button className='p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors'>
                <MessageSquare className='h-6 w-6' />
              </button>

              {/* Profile Dropdown */}
              <div className='relative'>
                <button
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  className='flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors'>
                  <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
                    <User className='h-5 w-5 text-blue-600' />
                  </div>
                  <ChevronDown className='h-4 w-4 text-gray-600' />
                </button>

                {/* Profile Dropdown Menu */}
                {showProfileDropdown && (
                  <div className='absolute right-0 top-12 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50'>
                    <div className='px-4 py-3 border-b border-gray-100'>
                      <div className='flex items-center space-x-3'>
                        <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                          <User className='h-6 w-6 text-blue-600' />
                        </div>
                        <div>
                          <h3 className='font-semibold text-gray-900'>
                            {userData.name}
                          </h3>
                          <p className='text-gray-600 text-sm'>
                            {userData.title}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='py-1'>
                      <a
                        href='#'
                        className='flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100'>
                        <User className='h-4 w-4 mr-3' />
                        My Profile
                      </a>
                      <a
                        href='#'
                        className='flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100'>
                        <Settings className='h-4 w-4 mr-3' />
                        Settings
                      </a>
                      <a
                        href='#'
                        className='flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100'>
                        <FileText className='h-4 w-4 mr-3' />
                        My Applications
                      </a>
                      <div className='border-t border-gray-100 my-1'></div>
                      <a
                        href='#'
                        className='flex items-center px-4 py-2 text-red-600 hover:bg-red-50'>
                        <LogOut className='h-4 w-4 mr-3' />
                        Sign Out
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          {/* Left Sidebar - Profile Info */}
          <div className='lg:col-span-1 space-y-6'>
            {/* Profile Card */}
            <div className='bg-white rounded-xl shadow-sm p-6'>
              <div className='text-center'>
                <div className='relative inline-block'>
                  <div className='w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <User className='h-10 w-10 text-blue-600' />
                  </div>
                  <button className='absolute bottom-0 right-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700'>
                    <Camera className='h-3 w-3' />
                  </button>
                </div>
                <h3 className='font-semibold text-gray-900 text-lg'>
                  {userData.name}
                </h3>
                <p className='text-gray-600 mb-2'>{userData.title}</p>
                <p className='text-gray-500 text-sm flex items-center justify-center'>
                  <MapPin className='h-4 w-4 mr-1' />
                  {userData.location}
                </p>
              </div>

              {/* Profile Completion */}
              <div className='mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg'>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-sm font-medium text-gray-700'>
                    Profile Strength
                  </span>
                  <span className='text-sm font-bold text-blue-600'>
                    {userData.profileCompletion}%
                  </span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-2'>
                  <div
                    className='bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500'
                    style={{ width: `${userData.profileCompletion}%` }}></div>
                </div>
                <p className='text-xs text-gray-600 mt-2'>
                  Complete your profile to get better job matches
                </p>
                <button className='text-blue-600 text-sm font-medium mt-2 hover:text-blue-700'>
                  Complete Profile →
                </button>
              </div>

              {/* Quick Stats */}
              <div className='grid grid-cols-2 gap-4 mt-6'>
                <div className='text-center p-3 bg-gray-50 rounded-lg'>
                  <div className='text-lg font-bold text-gray-900'>
                    {userData.profileViews}
                  </div>
                  <div className='text-xs text-gray-600'>Profile Views</div>
                </div>
                <div className='text-center p-3 bg-gray-50 rounded-lg'>
                  <div className='text-lg font-bold text-gray-900'>
                    {userData.connectionsCount}
                  </div>
                  <div className='text-xs text-gray-600'>Connections</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className='bg-white rounded-xl shadow-sm p-6'>
              <h4 className='font-semibold text-gray-900 mb-4'>
                Quick Actions
              </h4>
              <div className='space-y-3'>
                <button className='w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors'>
                  <div className='flex items-center'>
                    <Bookmark className='h-5 w-5 text-gray-600 mr-3' />
                    <span className='text-gray-700'>Saved Jobs</span>
                  </div>
                  <span className='text-blue-600 font-medium'>
                    {userData.savedJobsCount}
                  </span>
                </button>
                <button className='w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors'>
                  <div className='flex items-center'>
                    <Send className='h-5 w-5 text-gray-600 mr-3' />
                    <span className='text-gray-700'>Applied Jobs</span>
                  </div>
                  <span className='text-green-600 font-medium'>
                    {userData.appliedJobs}
                  </span>
                </button>
                <button className='w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors'>
                  <div className='flex items-center'>
                    <Calendar className='h-5 w-5 text-gray-600 mr-3' />
                    <span className='text-gray-700'>Interviews</span>
                  </div>
                  <span className='text-purple-600 font-medium'>3</span>
                </button>
              </div>
            </div>

            {/* Profile Completion Checklist */}
            <div className='bg-white rounded-xl shadow-sm p-6'>
              <h4 className='font-semibold text-gray-900 mb-4'>
                Complete Your Profile
              </h4>
              <div className='space-y-3'>
                {Object.entries(userData.completedSections).map(
                  ([section, completed]) => (
                    <div
                      key={section}
                      className='flex items-center justify-between'>
                      <div className='flex items-center'>
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                            completed
                              ? "bg-green-100 text-green-600"
                              : "bg-gray-100 text-gray-400"
                          }`}>
                          {completed ? (
                            <CheckCircle className='h-3 w-3' />
                          ) : (
                            <Plus className='h-3 w-3' />
                          )}
                        </div>
                        <span
                          className={`text-sm ${
                            completed ? "text-gray-700" : "text-gray-500"
                          }`}>
                          {section.charAt(0).toUpperCase() + section.slice(1)}
                        </span>
                      </div>
                      {!completed && (
                        <button className='text-blue-600 text-xs hover:text-blue-700'>
                          Add
                        </button>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Main Content - Job Feed */}
          <div className='lg:col-span-3 space-y-6'>
            {/* Filters Bar */}
            <div className='bg-white rounded-xl shadow-sm p-6'>
              <div className='flex flex-wrap items-center justify-between gap-4'>
                <div className='flex items-center space-x-4'>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className='flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'>
                    <Filter className='h-4 w-4 text-gray-600' />
                    <span className='text-gray-700'>Filters</span>
                  </button>

                  <div className='flex space-x-2'>
                    <button
                      onClick={() => setActiveFilter("all")}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeFilter === "all"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}>
                      All Jobs
                    </button>
                    <button
                      onClick={() => setActiveFilter("recommended")}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeFilter === "recommended"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}>
                      Recommended
                    </button>
                    <button
                      onClick={() => setActiveFilter("recent")}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeFilter === "recent"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}>
                      Recent
                    </button>
                  </div>
                </div>

                <div className='flex items-center space-x-3'>
                  <span className='text-sm text-gray-600'>
                    {jobsData.length} jobs found
                  </span>
                  <select className='px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
                    <option>Most Recent</option>
                    <option>Best Match</option>
                    <option>Salary: High to Low</option>
                    <option>Salary: Low to High</option>
                  </select>
                </div>
              </div>

              {/* Extended Filters */}
              {showFilters && (
                <div className='mt-6 pt-6 border-t border-gray-100'>
                  <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    <select className='px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
                      <option>All Locations</option>
                      <option>Remote</option>
                      <option>San Francisco, CA</option>
                      <option>New York, NY</option>
                      <option>Austin, TX</option>
                    </select>
                    <select className='px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
                      <option>All Experience Levels</option>
                      <option>Entry Level (0-2 years)</option>
                      <option>Mid Level (3-5 years)</option>
                      <option>Senior Level (5+ years)</option>
                    </select>
                    <select className='px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
                      <option>All Salary Ranges</option>
                      <option>$50k - $80k</option>
                      <option>$80k - $120k</option>
                      <option>$120k - $160k</option>
                      <option>$160k+</option>
                    </select>
                    <select className='px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
                      <option>All Job Types</option>
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contract</option>
                      <option>Freelance</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* Job Listings */}
            <div className='space-y-6'>
              {jobsData.map((job) => (
                <div
                  key={job.id}
                  className={`bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 ${
                    job.isPromoted ? "border-l-4 border-yellow-400" : ""
                  }`}>
                  {/* Job Header */}
                  <div className='flex items-start justify-between mb-4'>
                    <div className='flex items-start space-x-4'>
                      <div className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl'>
                        {job.companyLogo}
                      </div>
                      <div className='flex-1'>
                        <div className='flex items-center space-x-2 mb-1'>
                          <h3 className='text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer'>
                            {job.title}
                          </h3>
                          {job.isPromoted && (
                            <span className='px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full'>
                              Promoted
                            </span>
                          )}
                        </div>
                        <p className='text-gray-600 font-medium'>
                          {job.company}
                        </p>
                        <div className='flex items-center space-x-4 mt-2 text-sm text-gray-500'>
                          <div className='flex items-center'>
                            <MapPin className='h-4 w-4 mr-1' />
                            {job.location}
                          </div>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getLocationTypeColor(
                              job.locationType
                            )}`}>
                            {job.locationType}
                          </span>
                          <div className='flex items-center'>
                            <Clock className='h-4 w-4 mr-1' />
                            {job.postedTime}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='flex items-center space-x-2'>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getMatchScoreColor(
                          job.matchScore
                        )}`}>
                        {job.matchScore}% match
                      </span>
                      <button
                        onClick={() => toggleSaveJob(job.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          savedJobs.has(job.id)
                            ? "text-blue-600 bg-blue-100 hover:bg-blue-200"
                            : "text-gray-600 bg-gray-100 hover:bg-gray-200"
                        }`}>
                        {savedJobs.has(job.id) ? (
                          <BookmarkCheck className='h-5 w-5' />
                        ) : (
                          <Bookmark className='h-5 w-5' />
                        )}
                      </button>
                      <button className='p-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors'>
                        <MoreHorizontal className='h-5 w-5' />
                      </button>
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-4'>
                    <div className='flex items-center text-gray-600'>
                      <DollarSign className='h-4 w-4 mr-2 text-green-600' />
                      <span className='text-sm font-medium'>{job.salary}</span>
                    </div>
                    <div className='flex items-center text-gray-600'>
                      <Briefcase className='h-4 w-4 mr-2 text-blue-600' />
                      <span className='text-sm'>{job.type}</span>
                    </div>
                    <div className='flex items-center text-gray-600'>
                      <Award className='h-4 w-4 mr-2 text-purple-600' />
                      <span className='text-sm'>{job.experience}</span>
                    </div>
                    <div className='flex items-center text-gray-600'>
                      <Users className='h-4 w-4 mr-2 text-orange-600' />
                      <span className='text-sm'>
                        {job.applicants} applicants
                      </span>
                    </div>
                  </div>

                  {/* Job Description */}
                  <p className='text-gray-700 mb-4 line-clamp-2'>
                    {job.description}
                  </p>

                  {/* Skills/Requirements */}
                  <div className='mb-4'>
                    <div className='flex flex-wrap gap-2'>
                      {job.requirements.slice(0, 4).map((skill, index) => (
                        <span
                          key={index}
                          className='px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full'>
                          {skill}
                        </span>
                      ))}
                      {job.requirements.length > 4 && (
                        <span className='px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full'>
                          +{job.requirements.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Benefits Preview */}
                  <div className='mb-4'>
                    <div className='flex flex-wrap gap-2'>
                      {job.benefits.slice(0, 3).map((benefit, index) => (
                        <span
                          key={index}
                          className='px-2 py-1 bg-green-50 text-green-700 text-xs rounded border border-green-200'>
                          {benefit}
                        </span>
                      ))}
                      {job.benefits.length > 3 && (
                        <span className='px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded border border-gray-200'>
                          +{job.benefits.length - 3} more benefits
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
                    <div className='flex space-x-3'>
                      <button className='bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center'>
                        Apply Now
                        <ArrowRight className='h-4 w-4 ml-2' />
                      </button>
                      <button className='border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors'>
                        View Details
                      </button>
                    </div>

                    <div className='flex items-center space-x-3'>
                      <button className='flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors'>
                        <Share2 className='h-4 w-4' />
                        <span className='text-sm'>Share</span>
                      </button>
                      <button className='flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors'>
                        <ThumbsUp className='h-4 w-4' />
                        <span className='text-sm'>Like</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className='text-center py-8'>
              <button className='bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors'>
                Load More Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFeedPage;

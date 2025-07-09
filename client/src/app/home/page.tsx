"use client";

import React, { useState } from "react";
import {
  Search,
  MapPin,
  Filter,
  SlidersHorizontal,
  Star,
  Clock,
  DollarSign,
  Briefcase,
  Heart,
  ExternalLink,
  Building2,
  Users,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock job data - in a real app this would come from an API
const mockJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    companyLogo:
      "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=64&h=64&fit=crop&crop=face",
    location: "San Francisco, CA",
    salaryRange: "$120k - $180k",
    jobType: "Full-time",
    remote: true,
    experience: "Senior",
    posted: "2 days ago",
    description:
      "We're looking for a passionate Senior Frontend Developer to join our growing team. You'll work on cutting-edge web applications using React, TypeScript, and modern development practices.",
    requirements: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    benefits: ["Health Insurance", "401k", "Remote Work", "Flexible Hours"],
    companySize: "500-1000",
    industry: "Technology",
    rating: 4.5,
    applicants: 23,
    featured: true,
  },
  {
    id: 2,
    title: "Product Manager",
    company: "InnovateLabs",
    companyLogo:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=64&h=64&fit=crop&crop=face",
    location: "New York, NY",
    salaryRange: "$130k - $200k",
    jobType: "Full-time",
    remote: false,
    experience: "Mid-level",
    posted: "1 day ago",
    description:
      "Join our product team to drive innovation and strategy for our flagship products. You'll collaborate with engineering, design, and marketing teams to deliver exceptional user experiences.",
    requirements: ["Product Strategy", "Agile", "Analytics", "User Research"],
    benefits: [
      "Health Insurance",
      "Stock Options",
      "Learning Budget",
      "Gym Membership",
    ],
    companySize: "100-500",
    industry: "Technology",
    rating: 4.2,
    applicants: 45,
    featured: false,
  },
  {
    id: 3,
    title: "UX Designer",
    company: "DesignStudio",
    companyLogo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    location: "Austin, TX",
    salaryRange: "$90k - $130k",
    jobType: "Full-time",
    remote: true,
    experience: "Mid-level",
    posted: "3 days ago",
    description:
      "We're seeking a talented UX Designer to create intuitive and engaging user experiences. You'll work on diverse projects from web applications to mobile interfaces.",
    requirements: ["Figma", "User Research", "Prototyping", "Design Systems"],
    benefits: [
      "Health Insurance",
      "Remote Work",
      "Creative Days",
      "Conference Budget",
    ],
    companySize: "50-100",
    industry: "Design",
    rating: 4.7,
    applicants: 67,
    featured: true,
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "DataCore Analytics",
    companyLogo:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
    location: "Seattle, WA",
    salaryRange: "$140k - $220k",
    jobType: "Full-time",
    remote: true,
    experience: "Senior",
    posted: "4 days ago",
    description:
      "Lead data science initiatives and build machine learning models that drive business decisions. Work with large datasets and cutting-edge ML technologies.",
    requirements: ["Python", "Machine Learning", "SQL", "Statistics"],
    benefits: [
      "Health Insurance",
      "Stock Options",
      "Remote Work",
      "Learning Budget",
    ],
    companySize: "200-500",
    industry: "Analytics",
    rating: 4.3,
    applicants: 34,
    featured: false,
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudTech",
    companyLogo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    location: "Denver, CO",
    salaryRange: "$110k - $160k",
    jobType: "Full-time",
    remote: true,
    experience: "Mid-level",
    posted: "1 week ago",
    description:
      "Join our infrastructure team to build and maintain scalable cloud solutions. You'll work with Kubernetes, AWS, and modern DevOps practices.",
    requirements: ["AWS", "Kubernetes", "Docker", "Terraform"],
    benefits: ["Health Insurance", "401k", "Remote Work", "Equipment Budget"],
    companySize: "100-200",
    industry: "Cloud Services",
    rating: 4.1,
    applicants: 56,
    featured: false,
  },
];

const JobCard = ({
  job,
  onSave,
  isSaved,
}: {
  job: any;
  onSave: (id: number) => void;
  isSaved: boolean;
}) => {
  return (
    <Card className='hover:shadow-lg transition-all duration-200 border-l-4 border-l-transparent hover:border-l-primary group cursor-pointer'>
      <CardHeader className='pb-4'>
        <div className='flex items-start justify-between'>
          <div className='flex items-start space-x-4 flex-1'>
            <Avatar className='h-12 w-12'>
              <AvatarImage
                src={job.companyLogo}
                alt={job.company}
              />
              <AvatarFallback>{job.company.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className='flex-1 min-w-0'>
              <div className='flex items-center gap-2 mb-1'>
                <h3 className='font-semibold text-lg text-foreground group-hover:text-primary transition-colors'>
                  {job.title}
                </h3>
                {job.featured && (
                  <Badge
                    variant='default'
                    className='bg-amber-100 text-amber-800 border-amber-200'>
                    <Star className='h-3 w-3 mr-1' />
                    Featured
                  </Badge>
                )}
              </div>
              <div className='flex items-center gap-4 text-sm text-muted-foreground mb-2'>
                <span className='font-medium text-foreground'>
                  {job.company}
                </span>
                <div className='flex items-center gap-1'>
                  <Star className='h-3 w-3 fill-yellow-400 text-yellow-400' />
                  <span>{job.rating}</span>
                </div>
                <div className='flex items-center gap-1'>
                  <Users className='h-3 w-3' />
                  <span>{job.companySize}</span>
                </div>
              </div>
              <div className='flex items-center gap-4 text-sm text-muted-foreground mb-3'>
                <div className='flex items-center gap-1'>
                  <MapPin className='h-3 w-3' />
                  <span>{job.location}</span>
                  {job.remote && (
                    <Badge
                      variant='secondary'
                      className='ml-1'>
                      Remote
                    </Badge>
                  )}
                </div>
                <div className='flex items-center gap-1'>
                  <DollarSign className='h-3 w-3' />
                  <span>{job.salaryRange}</span>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-3 w-3' />
                  <span>{job.posted}</span>
                </div>
              </div>
              <p className='text-sm text-muted-foreground line-clamp-2 mb-3'>
                {job.description}
              </p>
              <div className='flex flex-wrap gap-1 mb-3'>
                {job.requirements
                  .slice(0, 4)
                  .map((req: string, idx: number) => (
                    <Badge
                      key={idx}
                      variant='outline'
                      className='text-xs'>
                      {req}
                    </Badge>
                  ))}
                {job.requirements.length > 4 && (
                  <Badge
                    variant='outline'
                    className='text-xs'>
                    +{job.requirements.length - 4} more
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <div className='flex flex-col items-end gap-2'>
            <Button
              variant='ghost'
              size='icon'
              onClick={(e) => {
                e.stopPropagation();
                onSave(job.id);
              }}
              className={
                isSaved
                  ? "text-red-500 hover:text-red-600"
                  : "text-muted-foreground hover:text-foreground"
              }>
              <Heart className={`h-4 w-4 ${isSaved ? "fill-current" : ""}`} />
            </Button>
            <div className='text-xs text-muted-foreground text-right'>
              <div>{job.applicants} applicants</div>
              <div className='flex items-center gap-1 mt-1'>
                <TrendingUp className='h-3 w-3' />
                <span>Active</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className='pt-0'>
        <div className='flex items-center justify-between'>
          <div className='flex gap-2'>
            <Badge variant='secondary'>{job.jobType}</Badge>
            <Badge variant='outline'>{job.experience}</Badge>
            <Badge variant='outline'>{job.industry}</Badge>
          </div>
          <div className='flex gap-2'>
            <Button
              variant='outline'
              size='sm'>
              <ExternalLink className='h-3 w-3 mr-1' />
              View Job
            </Button>
            <Button size='sm'>Quick Apply</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const FilterSidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [selectedFilters, setSelectedFilters] = useState({
    jobType: [] as string[],
    experience: [] as string[],
    salary: "",
    remote: false,
    company: [] as string[],
  });

  const jobTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Freelance",
    "Internship",
  ];
  const experienceLevels = ["Entry Level", "Mid-level", "Senior", "Executive"];
  const salaryRanges = [
    "$50k+",
    "$80k+",
    "$100k+",
    "$120k+",
    "$150k+",
    "$200k+",
  ];

  return (
    <div
      className={`fixed left-0 top-0 h-full w-80 bg-background border-r z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:relative lg:translate-x-0 lg:z-auto`}>
      <div className='p-6 border-b lg:hidden'>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-semibold'>Filters</h2>
          <Button
            variant='ghost'
            size='icon'
            onClick={onClose}>
            ×
          </Button>
        </div>
      </div>

      <div className='p-6 space-y-6 h-full overflow-y-auto'>
        {/* Job Type Filter */}
        <div>
          <h3 className='font-medium mb-3 flex items-center gap-2'>
            <Briefcase className='h-4 w-4' />
            Job Type
          </h3>
          <div className='space-y-2'>
            {jobTypes.map((type) => (
              <label
                key={type}
                className='flex items-center space-x-2 cursor-pointer'>
                <input
                  type='checkbox'
                  className='rounded border-gray-300'
                  checked={selectedFilters.jobType.includes(type)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedFilters((prev) => ({
                        ...prev,
                        jobType: [...prev.jobType, type],
                      }));
                    } else {
                      setSelectedFilters((prev) => ({
                        ...prev,
                        jobType: prev.jobType.filter((t) => t !== type),
                      }));
                    }
                  }}
                />
                <span className='text-sm'>{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Experience Level Filter */}
        <div>
          <h3 className='font-medium mb-3 flex items-center gap-2'>
            <TrendingUp className='h-4 w-4' />
            Experience Level
          </h3>
          <div className='space-y-2'>
            {experienceLevels.map((level) => (
              <label
                key={level}
                className='flex items-center space-x-2 cursor-pointer'>
                <input
                  type='checkbox'
                  className='rounded border-gray-300'
                  checked={selectedFilters.experience.includes(level)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedFilters((prev) => ({
                        ...prev,
                        experience: [...prev.experience, level],
                      }));
                    } else {
                      setSelectedFilters((prev) => ({
                        ...prev,
                        experience: prev.experience.filter((l) => l !== level),
                      }));
                    }
                  }}
                />
                <span className='text-sm'>{level}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Salary Range Filter */}
        <div>
          <h3 className='font-medium mb-3 flex items-center gap-2'>
            <DollarSign className='h-4 w-4' />
            Salary Range
          </h3>
          <div className='space-y-2'>
            {salaryRanges.map((range) => (
              <label
                key={range}
                className='flex items-center space-x-2 cursor-pointer'>
                <input
                  type='radio'
                  name='salary'
                  className='border-gray-300'
                  checked={selectedFilters.salary === range}
                  onChange={() =>
                    setSelectedFilters((prev) => ({ ...prev, salary: range }))
                  }
                />
                <span className='text-sm'>{range}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Remote Work Filter */}
        <div>
          <h3 className='font-medium mb-3 flex items-center gap-2'>
            <MapPin className='h-4 w-4' />
            Work Location
          </h3>
          <label className='flex items-center space-x-2 cursor-pointer'>
            <input
              type='checkbox'
              className='rounded border-gray-300'
              checked={selectedFilters.remote}
              onChange={(e) =>
                setSelectedFilters((prev) => ({
                  ...prev,
                  remote: e.target.checked,
                }))
              }
            />
            <span className='text-sm'>Remote Only</span>
          </label>
        </div>

        {/* Location Filter */}
        <div>
          <h3 className='font-medium mb-3'>Location</h3>
          <Input placeholder='Enter city or zip code' />
        </div>

        {/* Company Filter */}
        <div>
          <h3 className='font-medium mb-3 flex items-center gap-2'>
            <Building2 className='h-4 w-4' />
            Company
          </h3>
          <Input placeholder='Search companies' />
        </div>

        <div className='pt-4 border-t'>
          <Button
            variant='outline'
            className='w-full'
            onClick={() => {
              setSelectedFilters({
                jobType: [],
                experience: [],
                salary: "",
                remote: false,
                company: [],
              });
            }}>
            Clear All Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

const JobFeedPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState("relevance");

  const handleSaveJob = (jobId: number) => {
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    );
  };

  const sortOptions = [
    { value: "relevance", label: "Most Relevant" },
    { value: "date", label: "Most Recent" },
    { value: "salary", label: "Highest Salary" },
    { value: "company", label: "Company Name" },
  ];

  return (
    <div className='min-h-screen bg-background'>
      {/* Header */}
      <header className='bg-background border-b sticky top-0 z-40'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center space-x-4'>
              <h1 className='text-2xl font-bold text-primary'>JobPortal</h1>
            </div>
            <div className='flex items-center space-x-4'>
              <Button
                variant='ghost'
                size='sm'>
                Saved Jobs ({savedJobs.length})
              </Button>
              <Button
                variant='ghost'
                size='sm'>
                Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className='bg-white border-b'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex gap-4 items-center'>
            <div className='flex-1 flex gap-2'>
              <div className='relative flex-1'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4' />
                <Input
                  placeholder='Job title, keywords, or company'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='pl-10'
                />
              </div>
              <div className='relative w-64'>
                <MapPin className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4' />
                <Input
                  placeholder='Location'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className='pl-10'
                />
              </div>
              <Button className='px-8'>Search</Button>
            </div>
            <Button
              variant='outline'
              size='icon'
              onClick={() => setShowFilters(!showFilters)}
              className='lg:hidden'>
              <Filter className='h-4 w-4' />
            </Button>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
        <div className='flex gap-6'>
          {/* Sidebar - Hidden on mobile, shown on desktop */}
          <div className='hidden lg:block w-80 flex-shrink-0'>
            <FilterSidebar
              isOpen={true}
              onClose={() => {}}
            />
          </div>

          {/* Mobile Sidebar Overlay */}
          {showFilters && (
            <div className='lg:hidden'>
              <div
                className='fixed inset-0 bg-black bg-opacity-50 z-40'
                onClick={() => setShowFilters(false)}
              />
              <FilterSidebar
                isOpen={showFilters}
                onClose={() => setShowFilters(false)}
              />
            </div>
          )}

          {/* Main Content */}
          <div className='flex-1 min-w-0'>
            {/* Results Header */}
            <div className='flex items-center justify-between mb-6'>
              <div>
                <h2 className='text-xl font-semibold'>Job Search Results</h2>
                <p className='text-sm text-muted-foreground mt-1'>
                  {mockJobs.length} jobs found{" "}
                  {searchQuery && `for "${searchQuery}"`}
                </p>
              </div>
              <div className='flex items-center gap-4'>
                <div className='flex items-center gap-2'>
                  <SlidersHorizontal className='h-4 w-4 text-muted-foreground' />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className='border border-input bg-background px-3 py-1 rounded-md text-sm'>
                    {sortOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className='space-y-4'>
              {mockJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onSave={handleSaveJob}
                  isSaved={savedJobs.includes(job.id)}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className='flex justify-center mt-8'>
              <div className='flex items-center space-x-2'>
                <Button
                  variant='outline'
                  size='sm'
                  disabled>
                  Previous
                </Button>
                <Button
                  variant='default'
                  size='sm'>
                  1
                </Button>
                <Button
                  variant='outline'
                  size='sm'>
                  2
                </Button>
                <Button
                  variant='outline'
                  size='sm'>
                  3
                </Button>
                <Button
                  variant='outline'
                  size='sm'>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFeedPage;

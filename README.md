# Professional Job Portal Website

A modern, responsive job portal built with Next.js, React, and Tailwind CSS featuring a comprehensive job feed, user profile management, and advanced search capabilities.

## Features

### 🏠 Landing Page (`/`)

- Modern hero section with job search functionality
- Job categories showcase
- Company spotlights
- Featured jobs
- Statistics and testimonials
- Career resources and salary insights
- Pricing plans and FAQ
- Mobile app promotion

### 📋 Job Feed Page (`/feed`)

- **Professional Header**: Search bar, notifications, profile dropdown
- **Profile Sidebar**:
  - User profile with completion indicator (75% completion shown)
  - Quick stats (profile views, connections)
  - Profile completion checklist
  - Quick actions (saved jobs, applied jobs, interviews)
- **Advanced Job Listings**:
  - Job match score indicator
  - Save/unsave job functionality
  - Detailed job information (salary, location, experience)
  - Skills and benefits preview
  - Application tracking
  - Job promotion indicators
- **Filtering System**:
  - Location type filters (Remote, Hybrid, On-site)
  - Experience level filtering
  - Salary range filters
  - Job type filtering
  - Sort by relevance, date, salary

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Layout**: Responsive CSS Grid and Flexbox

## Getting Started

1. **Install Dependencies**

   ```bash
   cd client
   npm install
   ```

2. **Run Development Server**

   ```bash
   npm run dev
   ```

3. **Open Application**
   - Landing page: `http://localhost:3000/`
   - Job feed: `http://localhost:3000/feed`

## Project Structure

```
client/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Landing page
│   │   ├── feed/
│   │   │   └── page.tsx      # Job feed page
│   │   ├── globals.css       # Global styles
│   │   └── layout.tsx        # Root layout
│   └── components/           # Reusable components (future)
```

## Key Components

### Profile Completion Indicator

- Shows 75% completion with visual progress bar
- Checklist of profile sections (basic info, experience, education, skills, portfolio, preferences)
- Encourages users to complete their profile for better job matches

### Job Matching System

- Each job shows a match percentage (71-95% range)
- Color-coded match scores (green for 90+, blue for 80+, yellow for 70+)
- Personalized job recommendations

### Interactive Features

- **Save Jobs**: Toggle save/unsave with visual feedback
- **Notifications**: Badge count with dropdown menu
- **Profile Dropdown**: Quick access to settings and profile
- **Filter System**: Advanced filtering with expandable options

### Professional Design Elements

- **Modern Cards**: Rounded corners, subtle shadows, hover effects
- **Color System**: Professional blue/gray palette
- **Typography**: Clear hierarchy with proper font weights
- **Responsive**: Mobile-first design approach
- **Accessibility**: Proper contrast ratios and keyboard navigation

## Mock Data

The application includes realistic mock data for:

- 5 diverse job listings (Frontend, Designer, DevOps, Full Stack, Data Scientist)
- User profile information
- Notification system
- Company information with ratings and employee counts

## Future Enhancements

- Real API integration
- User authentication
- Advanced filtering
- Company profiles
- Messaging system
- Application tracking
- Resume builder
- Interview scheduling

## Navigation

- **Landing to Feed**: Multiple CTA buttons and navigation links
- **Professional Header**: Consistent across pages
- **Breadcrumb Navigation**: Clear user location indication

This job portal provides a complete user experience from discovery to application, with professional UI/UX design patterns commonly found in leading job platforms like LinkedIn Jobs, Indeed, and Glassdoor.

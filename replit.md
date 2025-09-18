# DevCraft - Digital Development Agency Website

## Overview

DevCraft is a modern web application showcasing a digital development agency's services, portfolio, and team. The application features a single-page design with smooth scrolling navigation, contact form functionality, and a responsive design built with React and TypeScript. The site serves as both a marketing platform and a lead generation tool for the agency.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing with a single-page application approach
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Schema Validation**: Zod schemas shared between frontend and backend for consistent validation
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development and database implementation for production
- **Build System**: Vite for fast development and optimized production builds

### Component Structure
- **Layout Components**: Navigation, Hero, Services, Portfolio, About, Contact, and Footer sections
- **UI Components**: Comprehensive Shadcn/ui component library including forms, dialogs, toasts, and interactive elements
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

### API Design
- **Contact Endpoint**: POST `/api/contact` for form submissions with validation and persistence
- **Admin Endpoint**: GET `/api/contact` for retrieving contact submissions
- **Error Handling**: Centralized error handling with proper HTTP status codes and user-friendly messages

### Development Environment
- **Hot Reload**: Vite development server with hot module replacement
- **Type Checking**: TypeScript configuration with strict mode enabled
- **Code Quality**: ESLint configuration for code consistency
- **Path Aliases**: Configured path mapping for cleaner imports (@/, @shared/)

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for database connectivity
- **drizzle-orm**: Type-safe ORM for database operations with PostgreSQL dialect
- **drizzle-kit**: Database migration and schema management tools

### UI and Styling
- **@radix-ui/***: Accessible component primitives for building the UI system
- **tailwindcss**: Utility-first CSS framework for rapid styling
- **class-variance-authority**: Utility for managing component variants
- **clsx**: Conditional class name utility

### Form and Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Resolver adapters for validation libraries
- **zod**: TypeScript-first schema validation library

### Data Fetching
- **@tanstack/react-query**: Powerful data synchronization for React applications

### Development Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution environment for Node.js
- **@replit/vite-plugin-***: Replit-specific development enhancements

### Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Utilities
- **date-fns**: Modern JavaScript date utility library
- **embla-carousel-react**: Lightweight carousel library
- **cmdk**: Command menu component
- **lucide-react**: Beautiful and customizable SVG icons
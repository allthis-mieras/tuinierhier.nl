# Components Structure

This directory is organized following Astro.js best practices for scalable component organization.

## Directory Structure

```
components/
├── sections/          # Large page sections
│   ├── Hero.astro         # Landing page hero section
│   ├── News.astro         # News/blog listing section
│   ├── Services.astro     # Services showcase section
│   └── Contact.astro      # Contact form section
├── layout/            # Layout-related components
│   ├── Header.astro       # Site header with navigation
│   ├── Footer.astro       # Site footer
│   └── HeaderLink.astro   # Navigation link component
├── common/            # Reusable small components
│   ├── FormattedDate.astro # Date formatting utility
│   └── Tag.astro          # Content tags
└── features/          # Feature-specific components
    ├── blog/
    │   └── PostHeader.astro   # Blog post header
    └── seo/
        └── Seo.astro          # SEO meta tags
```

## Import Guidelines

### Sections
```astro
import Hero from "@/components/sections/Hero.astro";
import News from "@/components/sections/News.astro";
```

### Layout
```astro
import Header from "@/components/layout/Header.astro";
import Footer from "@/components/layout/Footer.astro";
```

### Common
```astro
import FormattedDate from "@/components/common/FormattedDate.astro";
import Tag from "@/components/common/Tag.astro";
```

### Features
```astro
import PostHeader from "@/components/features/blog/PostHeader.astro";
import Seo from "@/components/features/seo/Seo.astro";
```

## Organization Principles

- **sections/**: Large, self-contained page sections that represent major parts of a page
- **layout/**: Components that define the structural layout of pages (header, footer, navigation)
- **common/**: Small, reusable components that can be used across different features
- **features/**: Components grouped by specific functionality or domain area

This structure follows the [Astro.js file organization best practices](https://tillitsdone.com/blogs/astro-js-file-organization-guide/) and scales well as the project grows.
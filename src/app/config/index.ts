/*
 * Copyright 2025 Joe Richards
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { PortfolioConfig } from '@/app/types/config';
import { socials } from '@/app/config/socials';
import { projects } from '@/app/config/projects';
import { skills } from '@/app/config/skills';

/**
 * Default portfolio configuration
 * Edit this file to customize your portfolio
 */
export const portfolioConfig: PortfolioConfig = {
  siteMetadata: {
    title: 'Joe Richards',
    description: 'Portfolio website by Praveen',
    author: 'Joe Richards',
  },

  navigation: {
    logo: {
      text: 'Joe Richards',
    },
    links: [
      { href: 'home', label: 'Home' },
      { href: 'about', label: 'About' },
      { href: 'projects', label: 'Projects' },
      { href: 'skills', label: 'Skills' },
      { href: 'connect', label: 'Connect' },
    ],
  },

  sections: {
    home: {
      greeting: "Hi, I'm",
      name: 'Joe Richards',
      typingTexts: [
        'Crafting responsive, user-centric interfaces',
        'Solving complex problems',
        'Building secure backend systems',
      ],
      description:
        "I'm passionate about new web technologies and love creating seamless and impactful digital experiences on both the front and back ends. Whether experimenting with interactive UI designs or developing efficient and scalable backend systems, continuous learning is my strength.",
      scrollIndicatorText: 'Scroll to explore',
    },

    about: {
      title: 'About',
      subtitle: 'Me',
      bio: [
        "Hi, I’m a software engineer with over 8 years of hands-on experience building everything from scalable web apps to blockchain-based solutions",
        "I’ve worked as a senior full stack developer across a wide range of technologies,including front-end frameworks like React, Vue, Angular, and Next.js",
        "When I'm not working on code professionally, you'll find me reading about emerging technologies, contributing to open-source projects, and constantly picking up new skills and hobbies"
      ],
      details: [
        { label: 'Location', value: 'Based in Philippines' },
        { label: 'Experience', value: '10+ Years Experience' },
      ],
      qualities: [
        {
          icon: 'Rocket',
          title: 'Problem Solver',
          description:
            'I approach complex challenges with analytical thinking and break them down into manageable solutions.',
          gradient: 'from-emerald-500 to-blue-500',
        },
        {
          icon: 'Code',
          title: 'Clean Code Advocate',
          description:
            'I focus on maintainable, well-structured code that follows best practices and industry standards.',
          gradient: 'from-blue-500 to-violet-500',
        },
        {
          icon: 'Lightbulb',
          title: ' Design-to-Code Translator',
          description:
            'I bridge the gap between design and development, turning visuals into pixel-perfect, responsive components.',
          gradient: 'from-purple-500 to-indigo-500',
        },
        {
          icon: 'BarChart3',
          title: 'Performance Optimizer',
          description:
            'I streamline code and assets for speed, ensuring a smooth, high-performance user experience.',
          gradient: 'from-indigo-500 to-cyan-500',
        },
      ],
    },

    projects: {
      title: 'My',
      subtitle: 'Projects',
      description:
        "Here's a selection of projects that showcase my skills and passion for building exceptional digital experiences across different platforms.",
      projects: projects,
      viewMoreButton: {
        label: 'View More Projects',
        url: 'https://github.com/joe149-dev',
      },
    },

    skills: {
      title: 'Technical',
      subtitle: 'Skills',
      description:
        "I've gained proficiency in various technologies throughout my career. Here are the key tools and frameworks I use to build exceptional products.",
      categories: skills,
    },

    connect: {
      title: 'Connect',
      subtitle: 'With Me',
      description:
        'Feel free to connect with me on these platforms to discuss tech, share ideas, or just say hello!',
      socials: socials,
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Joe Richards. All rights reserved.`,
    tagline: 'Designed and built with ❤️',
  },
};

export default portfolioConfig;

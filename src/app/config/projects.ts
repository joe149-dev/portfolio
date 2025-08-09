/*
 * Copyright 2025 Praveen Kumar
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

import { Project } from '../types/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Shortly',
    description:
      'A comprehensive, modern URL shortener featuring user accounts, link management, and an analytics dashboard.',
    tags: ['Go', 'PostgreSQL'],
    githubLink: 'https://github.com/joe149-dev',
    liveLink: 'https://shortly-go.vercel.app/',
    type: 'Backend',
    thumbnail:
      'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/thumbnail.png',
    carouselImages: [
      'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/register.png',
      'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/dashboard.png',
      'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/create.png',
      'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/delete.png',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
  {
    id: 4,
    title: 'Insight',
    description:
      'Developed user-friendly interfaces for both web and mobile.Secured the user access with Auth0 for authentication.Implemented server-side logic and APIs.',
    tags: ['iOS', 'Android'],
    githubLink: 'https://github.com/joe149-dev',
    type: 'App',
    thumbnail:
      '/images/project-insightt.728129ef.png',
    carouselImages: [
      '/images/2.png',
      '/images/2.png',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
  {
    id: 5,
    title: 'Auction',
    description:
      'Developed online real estate platform using React, Redux, Typescript.Created front-end services to interact with GraphQL and REST endpoints written in Python and Java.',
    tags: ['React','React Hook', 'Semantic UI', 'SCSS','TypeScript.'],
    githubLink: 'https://github.com/joe149-dev',
    type: 'App',
    thumbnail:
      '/images/project-roofstock.7bbe0d7e.png',
    carouselImages: [
      '/images/project-auction.23c33caf.png',
      '/images/project-auction.23c33caf.png',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
  {
    id: 6,
    title: 'TaskDent',
    description:
      'Developed the front-end using Angular and Typescript, created responsive UI components, implemented business logic, and ensured code quality through testing and adherence to clean code principles.',
    tags: ['Angular','Typescript'],
    githubLink: 'https://github.com/joe149-dev',
    type: 'App',
    thumbnail:
      '/images/project-taskdent.7ad6f819.png',
    carouselImages: [
      '/images/3.png',
      '/images/3.png',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
];

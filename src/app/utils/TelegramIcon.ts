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
import React from 'react';

// Base interface for common icon props
interface BaseIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
  title?: string;
}

// Props for filled Telegram icon
interface TelegramIconProps extends BaseIconProps {
  color?: string;
}

// Main Telegram Icon Component
export const TelegramIcon: React.FC<TelegramIconProps> = ({ 
  size = 24, 
  color = "#0088cc", 
  className = "",
  'aria-label': ariaLabel = "Telegram Icon",
  title = "Telegram"
}) => {
  return React.createElement(
    'svg',
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      role: "img",
      'aria-label': ariaLabel,
      title: title
    },
    React.createElement('path', {
      d: "M21.944 2.617a1.013 1.013 0 0 0-1.022-.136L2.637 9.273c-.663.256-.658 1.27.007 1.52l4.583 1.727 1.727 4.583c.25.665 1.264.67 1.52.007l6.792-18.285a1.013 1.013 0 0 0-.322-1.208z",
      fill: color
    }),
    React.createElement('path', {
      d: "m10.896 11.393 2.211 5.89c.102.272.539.224.571-.063l.967-8.674-3.749 2.847z",
      fill: "#ffffff"
    })
  );
};

// Default export for easier importing
export default TelegramIcon;
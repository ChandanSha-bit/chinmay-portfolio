import React from 'react';

interface TechIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const JSIcon: React.FC<TechIconProps> = ({ size = 16, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M0 0h24v24H0V0z" fill="#F7DF1E" />
    <path d="M18.666 12.002c0 2.502-1.332 3.834-3.67 3.834-2.22 0-3.486-1.18-3.486-2.74H14c0 .878.502 1.34 1.144 1.34.698 0 1.096-.326 1.096-1.34V6.9h2.426v5.102zM10.99 12.986c0 1.704-1.016 2.85-2.906 2.85-1.742 0-2.822-1.042-2.822-2.618h2.384c0 .64.444.978 1.016.978.536 0 .86-.3.86-.878v-.03c0-.57-.428-.844-1.282-1.21l-.738-.316C6.182 11.238 5.25 10.4 5.25 9.006v-.03c0-1.472 1.082-2.5 2.766-2.5 1.576 0 2.624.9 2.624 2.384H8.256c0-.526-.37-.872-.888-.872-.47 0-.766.272-.766.716v.03c0 .484.346.702 1.106 1.026l.738.314c1.654.708 2.544 1.492 2.544 2.962v.03z" fill="#000000" />
  </svg>
);

export const TSIcon: React.FC<TechIconProps> = ({ size = 16, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M0 0h24v24H0V0z" fill="#3178C6" />
    <path d="M20.25 19.143v-2.071c0-1.63-.982-2.68-2.634-2.68-1.527 0-2.527.91-2.527 2.277v.027c0 1.402.946 2.143 2.536 2.786l.66.268c1.384.553 2.134 1.187 2.134 2.553v.027c0 1.705-1.259 2.866-3.08 2.866-1.893 0-3.098-1.018-3.098-2.732h2.321c0 .732.554 1.17 1.25 1.17.723 0 1.134-.34 1.134-1.16v-.028c0-.982-.58-1.464-1.92-1.99l-.66-.268c-1.66-.67-2.634-1.527-2.634-3.134v-.027c0-2.036 1.482-3.482 3.821-3.482 2.179 0 3.527 1.214 3.527 3.25h-2.348zm-11.455.518H4.634v-2.054H6.84V6.9H9.37v10.705h2.205v2.054H8.795z" fill="#FFFFFF" />
  </svg>
);

export const PythonIcon: React.FC<TechIconProps> = ({ size = 16, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M11.91 0c-1.74 0-3.32.14-4.54.4a5.95 5.95 0 0 0-4.66 4.7 9.87 9.87 0 0 0 0 3.8c.13.78.47 1.5.99 2.08l1.04.99a.46.46 0 0 1 .15.34v1.54a2.98 2.98 0 0 0 3 2.98h2.02v-2.02c0-1.64 1.34-2.98 2.98-2.98h5a2.98 2.98 0 0 0 2.98-2.98V7a6.97 6.97 0 0 0-5.96-6.85A18.8 18.8 0 0 0 11.9 0zm-2.98 2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm5.96 9.42c-1.74 0-3.32-.14-4.54-.4a5.95 5.95 0 0 0-4.66-4.7 9.87 9.87 0 0 0 0-3.8A6.97 6.97 0 0 0 11.69 24a18.8 18.8 0 0 0 2.98 0c1.74 0 3.32-.14 4.54-.4a5.95 5.95 0 0 0 4.66-4.7 9.87 9.87 0 0 0 0-3.8c-.13-.78-.47-1.5-.99-2.08l-1.04-.99a.46.46 0 0 1-.15-.34V10.1a2.98 2.98 0 0 0-3-2.98H14.9v2.02c0 1.64-1.34 2.98-2.98 2.98v-.2zm3 9.58a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="url(#python-gradient)" />
    <defs>
      <linearGradient id="python-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3776AB" />
        <stop offset="100%" stopColor="#FFD343" />
      </linearGradient>
    </defs>
  </svg>
);

export const NodeIcon: React.FC<TechIconProps> = ({ size = 16, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#339933" />
    <path d="M2 17l10 5 10-5" stroke="#339933" />
    <path d="M2 12l10 5 10-5" stroke="#339933" />
  </svg>
);

export const ReactIcon: React.FC<TechIconProps> = ({ size = 16, className, ...props }) => (
  <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={className} {...props}>
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const ExpressIcon: React.FC<TechIconProps> = ({ size = 16, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <text x="2" y="17" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="currentColor">ex</text>
  </svg>
);

export const NextIcon: React.FC<TechIconProps> = ({ size = 16, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm5.176 17.656l-5.69-7.39h-.878v5.526h-1.25V7.47h1.23l5.378 7.024V7.47h1.21v10.186z" />
  </svg>
);

export const DevopsIcon: React.FC<TechIconProps> = ({ size = 16, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} {...props}>
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" stroke="#60a5fa" />
    <path d="M12 3v18M3 12h18" stroke="#60a5fa" strokeDasharray="2 2" />
  </svg>
);

export const PostgresIcon: React.FC<TechIconProps> = ({ size = 16, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" fill="#336791" />
  </svg>
);

export const MongoIcon: React.FC<TechIconProps> = ({ size = 16, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 0c-.39 0-.75.05-1.12.14C6.35 1.15 3.32 5.08 3.32 9.77c0 4.09 2.29 7.66 5.56 9.9 1 .69 1.76 1.48 2.25 2.37l.87 1.58.87-1.58c.49-.89 1.25-1.68 2.25-2.37 3.27-2.24 5.56-5.81 5.56-9.9C20.68 5.08 17.65 1.15 13.12.14 12.75.05 12.39 0 12 0zm0 18.84a8.77 8.77 0 0 1-3.66-2.58A8.93 8.93 0 0 1 6.64 9.77c0-3.32 1.95-6.19 4.79-7 .2-.06.39-.1.57-.1V18.84z" fill="#47A248" />
  </svg>
);

export const PrismaIcon: React.FC<TechIconProps> = ({ size = 16, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 1.636l10.364 6v12L12 22.364l-10.364-6.728v-12L12 1.636z" fill="#0C344B" />
    <path d="M12 4.5l7.5 4.364v7.272L12 19.5l-7.5-3.364v-7.272L12 4.5z" fill="#5A67D8" />
  </svg>
);

export const RedisIcon: React.FC<TechIconProps> = ({ size = 16, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#D82C20" />
    <path d="M2 12l10 5 10-5M2 17l10 5 10-5" fill="#D82C20" />
  </svg>
);

export const DockerIcon: React.FC<TechIconProps> = ({ size = 16, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M13.983 8.871h-1.996v1.986h1.996V8.871zM11.186 8.871H9.19v1.986h1.996V8.871zM11.186 6.002H9.19v1.986h1.996V6.002zM13.983 6.002h-1.996v1.986h1.996V6.002zM16.78 8.871h-1.99v1.986h1.99V8.871zM16.78 6.002h-1.99v1.986h1.99V6.002zM22.374 8.871h-1.996v1.986h1.996V8.871zM19.577 8.871H17.58v1.986h1.996V8.871zM19.577 6.002H17.58v1.986h1.996V6.002zM8.388 8.871H6.4v1.986h1.988V8.871z" fill="#2496ED" />
    <path d="M23.763 10.428c-.139-.461-.349-.806-.613-1.07-.367-.364-.877-.546-1.5-.546-1.127 0-2.221.602-2.999 1.15-.094.066-.183.13-.268.19-.512-.39-.99-.613-1.5-.66v1.89h1.161c.491.01.897.16 1.25.32 1.488.675 2.148 2.054 2.188 3.52.015.549-.074 1.118-.268 1.637-.184.493-.464.912-.821 1.228-.68.601-1.632.884-2.846.884-.366 0-.73-.016-1.09-.044a10.024 10.024 0 0 1-3.665.748c-3.13 0-5.875-1.579-7.294-4.004-.334.02-.663.033-.984.033-1.077 0-2.1-.219-3.05-.653-.13-.06-.239-.125-.327-.19.09-.138.2-.266.326-.38.749-.684 1.834-1.066 3.195-1.13.064-1.221.464-2.317 1.187-3.237 1.343-1.706 3.633-2.736 6.307-2.736 2.023 0 3.821.597 5.097 1.624v.006c.074.057.147.117.218.179l.261-.225c.34-.294.7-.565 1.075-.806a5.534 5.534 0 0 1 1.6-.708c.587-.14 1.171-.2 1.745-.2.53 0 .977.051 1.332.149.124.034.238.077.34.128.093.048.169.106.223.175a.333.333 0 0 1 .082.203c-.001.218-.112.438-.344.664z" fill="#2496ED" />
  </svg>
);

export const TailwindIcon: React.FC<TechIconProps> = ({ size = 16, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" fill="#06B6D4" />
  </svg>
);

export const CPPIcon: React.FC<TechIconProps> = ({ size = 16, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M1.38 8.016v7.969L8.29 20v-4.004L4.825 14v-4.004L8.29 8V4.004L1.38 8.016zm14.331 4.004V8h-3.469V4.004l6.91 4.004v7.969l-6.91 4.008v-4.004h3.469v-4.004zm-6.924 0v4.004h3.465v4.004L5.342 16.02v-7.97l6.91-4.008v4.004H8.787v4.004z" fill="#00599C" />
  </svg>
);

export const GCPIcon: React.FC<TechIconProps> = ({ size = 16, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4" />
  </svg>
);

export const AWSIcon: React.FC<TechIconProps> = ({ size = 16, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#FF9900" />
  </svg>
);

export const LangChainIcon: React.FC<TechIconProps> = ({ size = 16, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 2a10 10 0 0 1 8 4 10 10 0 0 1 0 12 10 10 0 0 1-8 4 10 10 0 0 1-8-4 10 10 0 0 1 0-12 10 10 0 0 1 8-4z" stroke="#FF5733" />
    <path d="M12 6v12M8 12h8" stroke="#FF5733" />
  </svg>
);

export const GitIcon: React.FC<TechIconProps> = ({ size = 16, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="18" y1="18" x2="18" y2="18.01" stroke="#F05032" strokeWidth="4" />
    <line x1="6" y1="6" x2="6" y2="6.01" stroke="#F05032" strokeWidth="4" />
    <line x1="6" y1="18" x2="6" y2="18.01" stroke="#F05032" strokeWidth="4" />
    <path d="M18 18V9a4 4 0 0 0-4-4H6" stroke="#F05032" />
    <line x1="6" y1="6" x2="6" y2="18" stroke="#F05032" />
  </svg>
);

export const GraphQLIcon: React.FC<TechIconProps> = ({ size = 16, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#E10098" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <polygon points="12 2 22 8 22 18 12 22 2 18 2 8" />
    <polygon points="12 6 18 10 18 15 12 18 6 15 6 10" />
    <circle cx="12" cy="13" r="2.5" fill="#E10098" />
  </svg>
);

// Aliases for compatibility with Skills component
export const JavaScriptIcon = JSIcon;
export const TypeScriptIcon = TSIcon;
export const GCPicon = GCPIcon;

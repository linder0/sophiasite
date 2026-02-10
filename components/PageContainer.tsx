import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Reusable page container with consistent layout padding and max-width
 */
export default function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className="min-h-screen py-16 px-8">
      <div className={`max-w-4xl mx-auto ${className}`}>
        {children}
      </div>
    </div>
  );
}

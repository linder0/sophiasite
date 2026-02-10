"use client";

import { NotionRenderer } from 'react-notion-x';
import { ExtendedRecordMap } from 'notion-types';

interface NotionPageProps {
  recordMap: ExtendedRecordMap;
  title?: string;
}

export default function NotionPage({ recordMap, title }: NotionPageProps) {
  return (
    <div className="notion-page-wrapper">
      {title && (
        <h1 className="text-5xl font-bold mb-8 themed-text">{title}</h1>
      )}
      <div className="notion-content">
        <NotionRenderer
          recordMap={recordMap}
          fullPage={false}
          darkMode={false}
          showTableOfContents={false}
          minTableOfContentsItems={3}
          mapPageUrl={() => '#'}
        />
      </div>
    </div>
  );
}

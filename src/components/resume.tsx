'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownToLine, Download, Eye, File } from 'lucide-react';
import Image from 'next/image';

export function Resume() {
  // Resume details
  const resumeData = {
    title: "SuryaPrakash K's Resume",
    description:
      'Security Engineer | AI/ML for Cybersecurity | 4+ Years Experience',
    fileType: 'PDF',
    lastUpdated: 'December 2025',
    fileSize: '0.3 MB',
    // Update these paths to match your actual resume files in the /public folder
    previewImageSrc: '/Resume_SuryaPrakash_K.png',
    downloadUrl: '/Resume_SuryaPrakash_K.pdf',
  };

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = resumeData.downloadUrl;
    link.download = resumeData.downloadUrl.split('/').pop() || 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mx-auto w-full py-8 font-sans">
      <motion.div
        onClick={handleDownload}
        className="group relative cursor-pointer overflow-hidden rounded-xl bg-accent p-0 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.0, ease: 'easeOut' }}
        whileHover={{ scale: 1.01 }}
      >
        {/* Details area (bottom part) */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-foreground">
                {resumeData.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {resumeData.description}
              </p>
              <div className="mt-1 flex text-xs text-muted-foreground">
                <span>{resumeData.fileType}</span>
                <span className="mx-2">•</span>
                <span>Updated {resumeData.lastUpdated}</span>
                <span className="mx-2">•</span>
                <span>{resumeData.fileSize}</span>
              </div>
            </div>

            {/* Download indicator */}
            <motion.div
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-primary-foreground group-hover:bg-black/80"
              initial={{ scale: 1 }}
            >
              <Download className="h-5 w-5" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Resume;
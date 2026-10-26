"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import Link from "next/link";

export function OtherCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`other-card border-b border-black dark:border-neutral-800 px-6 md:px-8 py-5 flex flex-col gap-4 font-sans${hovered ? " is-active" : ""}`}
    >
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <p className="card-title font-sans text-base font-bold tracking-tight leading-tight">
            {project.title}
          </p>

          {project.label && (
            <span className="card-label text-[9px] font-semibold tracking-widest uppercase border px-1.5 py-0.5 rounded-sm shrink-0">
              {project.label}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-x-2 gap-y-0.5">
          {project.techStack.map((tech: string) => (
            <span key={tech} className="card-muted text-xs tracking-wide">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {(project.url || project.github || project.repos?.length) && (
        <div className="flex flex-wrap gap-2">
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="self-start"
            >
              <span className="card-btn inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wide rounded-sm border select-none">
                <ArrowUpRight className="w-3 h-3" strokeWidth={2.5} />
                View Project
              </span>
            </Link>
          )}
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="self-start"
            >
              <span className="card-btn inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wide rounded-sm border select-none">
                <ArrowUpRight className="w-3 h-3" strokeWidth={2.5} />
                GitHub
              </span>
            </Link>
          )}
          {project.repos?.map((repo) => (
            <Link
              key={repo.href}
              href={repo.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="self-start"
            >
              <span className="card-btn inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wide rounded-sm border select-none">
                <ArrowUpRight className="w-3 h-3" strokeWidth={2.5} />
                {repo.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </motion.div>
  );
}

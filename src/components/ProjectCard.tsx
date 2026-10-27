import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { Project } from "@/data/projects";
import { EASE } from "@/lib/motion";
import Link from "next/link";

const hoverT = { duration: 0.45, ease: EASE };

export function ProjectCard({
  project,
  index,
  expanded,
  onToggle,
}: {
  project: Project;
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  const isOpen = hovered || expanded;

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`project-card border-b border-black dark:border-neutral-800 font-sans px-6 md:px-8${isOpen ? " is-active" : ""}`}
    >
      <div
        className="flex items-start justify-between gap-6 py-5 md:py-6 md:cursor-default cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-baseline gap-5 min-w-0">
          <span className="card-index font-mono text-xs shrink-0 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-3">
              <h3 className="card-title font-sans text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                {project.title}
              </h3>

              {project.label && (
                <span className="card-label text-[10px] font-mono font-semibold tracking-widest uppercase border px-2 py-0.5 rounded-sm">
                  {project.label}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="card-muted text-sm tracking-wide">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 0 : -45 }}
          transition={hoverT}
          className="card-arrow hidden md:block shrink-0 mt-1"
        >
          <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.75} />
        </motion.div>

        <div className="card-arrow md:hidden shrink-0 mt-1">
          {expanded ? (
            <Minus className="w-5 h-5" strokeWidth={1.75} />
          ) : (
            <Plus className="w-5 h-5" strokeWidth={1.75} />
          )}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="desc"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.42, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-10 md:pl-12 max-w-2xl space-y-4">
              {project.bullets && project.bullets.length > 0 ? (
                <ul className="space-y-2">
                  {project.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="card-muted flex items-start gap-2.5 text-sm md:text-base font-sans leading-relaxed"
                    >
                      <span className="shrink-0 mt-2 w-1 h-1 rounded-full bg-current opacity-50" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="card-muted text-sm md:text-base font-sans leading-relaxed">
                  {project.description}
                </p>
              )}

              {(project.url || project.github || project.repos?.length) && (
                <div className="flex flex-wrap gap-2">
                  {project.url && (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="card-btn inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wide rounded-sm border select-none"
                    >
                      <ArrowUpRight className="w-3 h-3" strokeWidth={2.5} />
                      View Project
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="card-btn inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wide rounded-sm border select-none"
                    >
                      <ArrowUpRight className="w-3 h-3" strokeWidth={2.5} />
                      GitHub
                    </Link>
                  )}
                  {project.repos?.map((repo) => (
                    <Link
                      key={repo.href}
                      href={repo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="card-btn inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wide rounded-sm border select-none"
                    >
                      <ArrowUpRight className="w-3 h-3" strokeWidth={2.5} />
                      {repo.label}
                    </Link>
                  ))}
                </div>
              )}

              {project.login && (
                <p className="card-muted text-sm font-sans leading-relaxed">
                  Email: {project.login.email}
                  <br />
                  Password: {project.login.password}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

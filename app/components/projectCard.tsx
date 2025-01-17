import { useState } from 'react'
import Image from 'next/image'

interface ProjectCardProps {
  imgSrc: string
  title: string
  tags: string[]
  content: string
  onCardClick: (title: string, content: string) => void
}

export default function ProjectCard({ imgSrc, title, tags, content, onCardClick }: ProjectCardProps) {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={() => onCardClick(title, content)}
    >
      <Image src={imgSrc || "/placeholder.svg"} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

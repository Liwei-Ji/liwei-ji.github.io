'use client'

import { useState } from 'react'
import ProjectCard from './ProjectCard'
import Popup from './Popup'

const cardData = [
  {
    imgSrc: "https://liwei-ji.github.io/picture.jpg",
    title: "Title 1",
    tags: ["Tip", "Tip"],
    content: "Essay 1"
  },
  {
    imgSrc: "https://liwei-ji.github.io/picture.jpg",
    title: "Title 2",
    tags: ["Tip", "Tip"],
    content: "Essay 2"
  },
  {
    imgSrc: "https://liwei-ji.github.io/picture.jpg",
    title: "Title 3",
    tags: ["Tip", "Tip"],
    content: "Essay 3"
  },
  {
    imgSrc: "https://liwei-ji.github.io/picture.jpg",
    title: "Title 4",
    tags: ["Tip", "Tip"],
    content: "Essay 4"
  },
  {
    imgSrc: "https://liwei-ji.github.io/picture.jpg",
    title: "Title 5",
    tags: ["Tip", "Tip"],
    content: "Essay 5"
  },
]

export default function Projects() {
  const [popupData, setPopupData] = useState({ isOpen: false, title: '', content: '' })

  const handleCardClick = (title: string, content: string) => {
    setPopupData({ isOpen: true, title, content })
  }

  const closePopup = () => {
    setPopupData({ isOpen: false, title: '', content: '' })
  }

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <ProjectCard key={index} {...card} onCardClick={handleCardClick} />
          ))}
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center h-64">
            <p className="text-gray-500 dark:text-gray-400">A new update is coming soon...</p>
          </div>
        </div>
      </div>
      <Popup 
        isOpen={popupData.isOpen}
        onClose={closePopup}
        title={popupData.title}
        content={popupData.content}
      />
    </section>
  )
}

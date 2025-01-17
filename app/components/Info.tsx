import Image from 'next/image'
import { FaEnvelope, FaLinkedin, FaMedium } from 'react-icons/fa'

export default function Info() {
  return (
    <section id="info" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="md:w-1/3 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Hi <span className="wave-emoji inline-block transition-transform duration-300 ease-in-out hover:scale-150">👋</span>, I'm LiWei Ji
            </h2>
            <div className="mb-6">
              <Image
                src="https://liwei-ji.github.io/cover.png"
                alt="Profile Picture"
                width={300}
                height={300}
                className="rounded-full mx-auto"
              />
            </div>
            <div className="flex justify-center space-x-4">
              <a href="mailto:jpw0616@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors">
                <FaEnvelope size={24} />
              </a>
              <a href="https://linkedin.com/in/li-wei-ji" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://medium.com/@jpw0616" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors">
                <FaMedium size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="mb-4">I'm a UI/UX Designer based in Taiwan, passionate about creating digital experiences that are intuitive yet deeply engaging.</p>
            <p className="mb-4">With over 13 years of experience, I specialize in transforming complex challenges into simple, elegant solutions that not only delight users but also drive business impact.</p>
            <p className="mb-4">My design philosophy goes beyond aesthetics; it's grounded in a deep understanding of user needs and the creation of meaningful connections. To me, design is not just about looks - it's about bridging the gap between technology and people.</p>
            <p>If you'd like to connect or have a chat, I'd be happy to hear from you!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

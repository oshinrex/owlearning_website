import owlLogo from './owlearning_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faHeart, faLightbulb, faGraduationCap, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';

function App() {

  return (
    <nav className = "min-h-screen bg-white">
      <div className = "bg-white shadow-md sticky top-0 z-50">
       <div className="flex justify-between items-center h-16">
        <div className="flex items-center gap-2 ml-4">
          <img src={owlLogo} alt="Owl Learning Logo" className="h-10 w-10"/>
          <span className="font-semibold text-xl text-gray-900">Owl Learning</span>
        </div>
        <div className="hidden md:flex gap-[8em]">
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">About</a>
              <a href="#programs" className="text-gray-700 hover:text-amber-600 transition-colors">Programs</a>
              <a href="#get-involved" className="text-gray-700 hover:text-amber-600 transition-colors">Get Involved</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
        </div>
       <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors mr-4">
          Login
        </button>
      </div>
      </div>

      {/* Intro Section */}
      <section className = "relative bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className = "w-full flex">
          <div className = "grid md:grid-cols-2 gap-10 items-center m-4">
            <div className = "w-[80%] md:w-[80%] mx-auto">
              <h1 className = "w-[90%] text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Empowering Students through Education
              </h1>
              <p className = "text-gray-700 mb-8">
                Owl Learning provides free tutoring and educational support to students in foster care and underprivileged communities, helping them unlock their full potential.
              </p>
              <button className = "bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-colors">
                Request Tutoring
              </button>
              <button className = "ml-8 text-amber-600 px-6 py-3 rounded-full border-2 border-amber-600 hover:bg-amber-50 transition-colors">
                Become a Tutor
              </button>
            </div>

            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTHOuepi6YkYh-4JQbrgIsfMiDZiKdTRliow&s" alt="Tutoring Session" className = "w-[90%] rounded-lg shadow-lg"/>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className = "bg-white py-12 grid md:grid-cols-4 gap-6 text-center">
        <div className = "max-w-6xl mx-auto">
          <h2 className = "text-5xl font-bold text-amber-600 mb-4">40+</h2>
          <p className = "text-gray-700">Students helped</p>
        </div>
        <div className = "max-w-6xl mx-auto">
          <h2 className = "text-5xl font-bold text-amber-600 mb-4">600+</h2>
          <p className = "text-gray-700">Hours of tutoring</p>
        </div>
        <div className = "max-w-6xl mx-auto w-[60%]">
          <h2 className = "text-5xl font-bold text-amber-600 mb-4">$2000+</h2>
          <p className = "text-gray-700">raised for tutoring and school supplies</p>
        </div>
        <div className = "max-w-6xl mx-auto w-[60%]">
          <h2 className = "text-5xl font-bold text-amber-600 mb-4">4</h2>
          <p className = " text-gray-700">Foster care agency partnerships</p>
        </div>
      </section>
    

      {/* About */}
      <section id="about" className = "grid md:grid-cols-2 gap-10 items-center bg-gray-50 md-20 px-20">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3T12emCQVi8ugHc-LKi4jTdOEj3pPH6eng&s" alt="About Owl Learning" className = "my-15 w-[80%] mx-auto rounded-sm shadow-sm"/>
        <div className = "w-[80%] mx-auto my-10">
          <h1 className = "text-4xl font-bold text-gray-900 mb-4">Our Mission</h1>
          <p className = "text-gray-700 mb-6">
            Owl Learning was founded with the strong belief that every child deserves access to quality education, regardless of their background or circumstances.
          </p>
          <p className = "text-gray-700 mb-6">
            We work specifically with students in foster care and underprivileged communities, providing free one-on-one tutoring in all subjects. Our dedicated volunteers/mentors help students build confidence, improve grades, and develop a love for learning.
          </p>
          <div className = "mb-4">
            <FontAwesomeIcon icon={faBullseye} className="text-amber-600 mr-2"/>
            <span className = "text-gray-700 text-1.5xl font-bold">Targeted Support</span>
            <p className = "text-gray-700 ml-7">Personalized tutoring plans tailored to each student's needs</p>
          </div>
          <div className = "mb-4">
            <FontAwesomeIcon icon={faHeart} className="text-amber-600 mr-2"/>
            <span className = "text-gray-700 text-1.5xl font-bold">Caring Mentors</span>
            <p className = "text-gray-700 ml-7">Compassionate tutors who understand the unique challenges our students face</p>
          </div>
          <div className = "mb-4">
            <FontAwesomeIcon icon={faLightbulb} className="text-amber-600 mr-2"/>
            <span className = "text-gray-700 text-1.5xl font-bold">Proven Results</span>
            <p className = "text-gray-700 ml-7">Track record of academic improvement and increased confidence</p>
          </div>

        </div>
      </section>

      {/* Programs */}
      <section id="programs" className = "py-20 bg-white">
        <div className = "max-w-6xl mx-auto text-center mb-12">
          <h1 className = "text-4xl font-bold text-gray-900 mb-4">Our Programs</h1>
          <p className = "text-gray-700">
            We offer a range of programs to support our students' academic and personal growth.
          </p>
        </div>
        <div className = "grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
          <div className = "bg-amber-50 p-6 rounded-lg shadow-lg">
            <h2 className = "text-2xl font-bold text-gray-900 mb-4">One-on-One Tutoring</h2>
            <p className = "text-gray-700 mb-4">
              Personalized tutoring sessions tailored to each student's needs, covering primarily k-12 Math and English.
            </p>
          </div>
          <div className = "bg-amber-50 p-6 rounded-lg shadow-lg">
            <h2 className = "text-2xl font-bold text-gray-900 mb-4">Mentorship Program</h2>
            <p className = "text-gray-700 mb-4">
              Dedicated mentors provide guidance, support, and encouragement to help students navigate academic and personal challenges.
            </p>
          </div>
          <div className = "bg-amber-50 p-6 rounded-lg shadow-lg">
            <h2 className = "text-2xl font-bold text-gray-900 mb-4">Workshops & Enrichment</h2>
            <p className = "text-gray-700 mb-4">
              Interactive workshops and enrichment activities to foster a love for learning and build essential skills.
            </p>
          </div>
        </div>
      </section>

      <section id="get-involved" className = "py-20 bg-amber-600 text-center">
        <div className = "max-w-4xl mx-auto">
          <h1 className = "text-4xl font-bold text-white mb-4">Get Involved</h1>
          <p className = "text-white mb-8">
            Join us in making a difference in the lives of students who need it most
          </p>
          <div>

          </div>
          <button className = "bg-white text-amber-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
            Become a Volunteer
          </button>
        </div>
      </section>

  {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Reach out to learn more about our programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8 mt-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faMessage} className="text-amber-600 fa-lg"/>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600">tutoring@owlearning.org</p>
                  <p className="text-gray-600">owlearning101@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faPhone} className="text-amber-600 fa-lg"/>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600">925-886-9033</p>
                  <p className="text-sm text-gray-500">Leave us a voicemail and we will get back to you</p>
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
                <h3 className="font-semibold text-gray-900 mb-2">Request Tutoring Services</h3>
                <p className="text-gray-600 mb-4">
                  If you're a student in foster care or from an underprivileged background, fill out our intake form and we'll match you with a tutor.
                </p>
                <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors">
                  Student Application
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none"
                  >
                    <option>I need tutoring services</option>
                    <option>I want to volunteer</option>
                    <option>I want to donate</option>
                    <option>General inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none resize-none"
                    placeholder="Tell us more..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-amber-600 mr-2"/>
                <span className="font-semibold text-xl">Owl Learning</span>
              </div>
              <p className="text-gray-400">
                Empowering students in foster care and underprivileged communities through free tutoring and educational support.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#programs" className="hover:text-amber-400 transition-colors">Programs</a></li>
                <li><a href="#impact" className="hover:text-amber-400 transition-colors">Impact</a></li>
                <li><a href="#get-involved" className="hover:text-amber-400 transition-colors">Get Involved</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Other</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="" className="hover:text-amber-400 transition-colors">Request a Tutor</a></li>
                <li><a href="" className="hover:text-amber-400 transition-colors">Volunteer</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
                <li><a href="https://www.instagram.com/owlearning_/" className="hover:text-amber-400 transition-colors">Instagram</a></li>

              </ul>
            </div>

          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 Owl Learning. All rights reserved. 501(c)(3) Non-Profit Organization
            </p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </nav>);
}

export default App

import owlLogo from './owlearning_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faHeart, faLightbulb  } from '@fortawesome/free-solid-svg-icons';

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
          <button className = "ml-8 bg-white text-amber-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
            Donate Now
          </button> 
        </div>
      </section>

      <section>
        <h1>Get In Touch</h1>
        <p>Have questions or want to learn more about our programs? Reach out to us! We'd love to hear from you.</p>
        <div className = "grid md:grid-cols-2 gap-10 px-4">
          <div>

          </div>
          <div>
            <form>

            </form>
          </div>
        </div>
      </section>
  </nav>
  )
}

export default App

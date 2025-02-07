'use client'
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const ClinicHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-12 relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Floating Avatar */}
      <motion.div
        className="absolute top-0 right-10 w-24 h-24"
        animate={floatingAnimation}
      >
        <Image
          src="https://plus.unsplash.com/premium_vector-1719620661123-f57fb8f06551?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21pbHklMjBmYWNlfGVufDB8fDB8fHww"
          alt="Smiling face"
          width={96}
          height={96}
          className="rounded-full"
        />
      </motion.div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold tracking-tight"
          >
            Our Goal: We Are Committed to Your Health and Well-being
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600"
          >
            At MediPal Clinic, your health and well-being are our priority. We are here to provide
            personalized and compassionate care to support your journey towards better health.
          </motion.p>

          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-4">Read Our Story</h2>
            <p className="text-gray-600 mb-6">
              Our story began with the vision of offering exceptional medical care in a welcoming
              environment, where every patient is treated with the utmost respect and care.
            </p>

            <ul className="space-y-3">
              {[
                "Cutting-edge medical technology for accurate diagnoses and treatments.",
                "Available 24/7 for both in-person and online consultations.",
                "Convenient and flexible appointment scheduling.",
              ].map((text, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              variants={itemVariants}
              className="mt-8"
            >
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white transition-colors"
              >
                Book an Appointment
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Top Row */}
          <motion.div
            variants={imageVariants}
            className="col-span-2 md:col-span-1 rounded-2xl overflow-hidden"
          >
            <Image
              src="https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Medical consultation"
              width={600}
              height={400}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          
          <motion.div
            variants={imageVariants}
            className="rounded-2xl overflow-hidden"
          >
            <Image
              src="https://plus.unsplash.com/premium_photo-1661770341958-04638b51bdeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxoZWFsdGglMjBjYXJlfGVufDB8fDB8fHww"
              alt="Doctor and patient consultation"
              width={280}
              height={400}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Bottom Row */}
          <motion.div
            variants={imageVariants}
            className="rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1546659934-038aab8f3f3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGhlYWx0aCUyMGNhcmV8ZW58MHx8MHx8fDA%3D"
              alt="Medical checkup"
              width={280}
              height={200}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          <motion.div
            variants={imageVariants}
            className="rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhlYWx0aCUyMGNhcmV8ZW58MHx8MHx8fDA%3D"
              alt="Medical equipment"
              width={280}
              height={200}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ClinicHero;

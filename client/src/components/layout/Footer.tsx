import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0f2549] text-white py-14 md:py-16">
      <div className="container mx-auto px-6">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-12">

          {/* ================= LOGO ================= */}
          <div className="xl:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">

            <div className="relative mb-5">
              <span className="absolute inset-0 rounded-full bg-blue-400/20 blur-3xl"></span>

              <img
                src={logo}
                alt="Baal Krishna Shipping & Logistics"
                className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-white border-4 border-blue-100 shadow-xl"
              />
            </div>

            <h2 className="text-3xl font-extrabold tracking-wide">
              BAAL KRISHNA
            </h2>

            <p className="text-blue-200 tracking-[3px] font-semibold mt-1">
              SHIPPING & LOGISTICS
            </p>

            <p className="text-gray-300 mt-6 max-w-sm leading-7">
              Transforming global logistics through innovation, reliability,
              and exceptional service for over 30 years.
            </p>
          </div>

          {/* ================= QUICK LINKS ================= */}

          <div className="xl:col-span-3 flex flex-col items-center md:items-start">

            <h4 className="relative inline-block text-xl font-bold mb-8">
              Quick Links
              <span className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 -bottom-2 w-20 h-0.5 bg-blue-400 rounded-full"></span>
            </h4>

            <ul className="space-y-4 text-center md:text-left">

              <li>
                <a
                  href="#about-us"
                  className="text-gray-300 hover:text-white transition"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#our-services"
                  className="text-gray-300 hover:text-white transition"
                >
                  Our Services
                </a>
              </li>

              <li>
                <a
                  href="#timeline"
                  className="text-gray-300 hover:text-white transition"
                >
                  Our Journey
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="text-gray-300 hover:text-white transition"
                >
                  Testimonials
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* ================= CONTACT ================= */}

          <div className="xl:col-span-4 flex flex-col items-center md:items-start">

            <h4 className="relative inline-block text-xl font-bold mb-8">
              Get In Touch

              <span className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 -bottom-2 w-20 h-0.5 bg-blue-400 rounded-full"></span>

            </h4>

            <ul className="space-y-5 w-full">

              <li className="flex justify-center md:justify-start items-start gap-3 text-gray-300">

                <MapPin
                  size={20}
                  className="text-blue-300 mt-1 shrink-0"
                />

                <span>
                  347P+RM7, Sector 8, Gandhidham, Gujarat
                </span>

              </li>

              <li className="flex justify-center md:justify-start items-center gap-3 text-gray-300">

                <Phone
                  size={20}
                  className="text-blue-300 shrink-0"
                />

                <span>+91 8980753743</span>

              </li>

              <li className="flex justify-center md:justify-start items-center gap-3 text-gray-300">

                <Mail
                  size={20}
                  className="text-blue-300 shrink-0"
                />

                <a
                  href="mailto:contact@bklogiship.com"
                  className="hover:text-white transition"
                >
                  contact@bklogiship.com
                </a>

              </li>

            </ul>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 pt-6 border-t border-white/10">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">

            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Baal Krishna Shipping &
              Logistics. All rights reserved.
            </p>

            <div className="flex gap-6">

              <a
                href="#"
                className="hover:text-white transition"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="hover:text-white transition"
              >
                Terms of Service
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
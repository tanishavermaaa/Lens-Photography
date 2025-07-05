import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { ArrowLeft, Camera, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Camera,
    title: "Showcase Your Work",
    description: "Create stunning portfolios that attract your ideal clients",
  },
  {
    icon: Heart,
    title: "Connect with Couples",
    description: "Get discovered by couples planning their dream wedding",
  },
  {
    icon: Users,
    title: "Join Our Community",
    description: "Learn from other photographers and grow your craft",
  },
];

export default function JoinNow() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="flex">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Back Button */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/"
                className="flex items-center text-stone-600 hover:text-stone-800 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to home
              </Link>
            </motion.div>

            {/* Join Form */}
            <motion.div
              className="bg-white rounded-lg shadow-xl p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <h1 className="text-2xl font-light text-stone-800 mb-2">
                  Join <span className="font-bold text-amber-600">LENS</span>
                </h1>
                <p className="text-stone-600">
                  Start your photography journey with us
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="mt-1"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="mt-1"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="mt-1"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="mt-1"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Label htmlFor="userType">I am a...</Label>
                  <select
                    id="userType"
                    className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option value="photographer">Wedding Photographer</option>
                    <option value="couple">Couple Planning Wedding</option>
                    <option value="vendor">Wedding Vendor</option>
                  </select>
                </motion.div>

                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-stone-300 rounded"
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 text-sm text-stone-600"
                  >
                    I agree to the{" "}
                    <a href="#" className="text-amber-600 hover:text-amber-700">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-amber-600 hover:text-amber-700">
                      Privacy Policy
                    </a>
                  </label>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                    Create Account
                  </Button>
                </motion.div>
              </form>

              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <p className="text-stone-600">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Sign in
                  </Link>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Benefits */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-8 bg-gradient-to-br from-amber-500 to-orange-600">
          <div className="max-w-lg text-white">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-3xl font-light mb-8">
                Why join <span className="font-bold">LENS</span>?
              </h2>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <benefit.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-white/90">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 p-6 bg-white/10 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <p className="text-sm text-white/90">
                  "LENS helped me connect with amazing couples and grow my
                  wedding photography business beyond my dreams."
                </p>
                <p className="text-sm font-semibold mt-2">
                  - Sarah M., Wedding Photographer
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

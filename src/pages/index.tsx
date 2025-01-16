import { motion } from "framer-motion";
import { MapPin, Calendar, DollarSign, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function IndexPage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      {/* Hero Section */}
      <motion.section 
        className="text-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Badge variant="secondary" className="mb-4">
          Explore the World
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Discover Your Next Adventure
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Find the best destinations, tailored to your preferences.
        </p>
        <Button size="lg" className="mt-4" onClick={() => navigate('/dashboard')}>
          Start Exploring <MapPin className="ml-2 h-4 w-4" />
        </Button>
      </motion.section>

      {/* Interactive Map Section */}
      <motion.section
        className="relative h-96 bg-blue-200 rounded-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Placeholder for Interactive Map */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-blue-600">Interactive Map Coming Soon!</span>
        </div>
      </motion.section>

      {/* Destination Cards Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-3"
      >
        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                <Calendar className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold">Flexible Dates</h3>
              <p className="text-muted-foreground">
                Choose travel dates that suit your schedule.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                <DollarSign className="h-6 w-6 text-coral-600" />
              </div>
              <h3 className="text-xl font-bold">Budget Friendly</h3>
              <p className="text-muted-foreground">
                Find destinations that fit your budget.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Exciting Activities</h3>
              <p className="text-muted-foreground">
                Discover activities that match your interests.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </div>
  );
}

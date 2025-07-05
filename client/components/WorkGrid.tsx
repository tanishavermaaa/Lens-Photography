import { motion } from "framer-motion";

interface Work {
  id: number;
  image: string;
  title: string;
  likes: number;
  views: string;
}

interface WorkGridProps {
  works: Work[];
  delay?: number;
}

export default function WorkGrid({ works, delay = 0 }: WorkGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {works.map((work, index) => (
        <motion.div
          key={work.id}
          className="group cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delay + index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 mb-3 relative">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
          <h3 className="font-medium text-foreground mb-2 group-hover:text-accent-pink transition-colors line-clamp-2">
            {work.title}
          </h3>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="text-red-500">❤️</span>
              {work.likes}
            </span>
            <span className="flex items-center gap-1">
              <span>👁️</span>
              {work.views}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

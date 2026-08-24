import type { OperationalCases } from "@/lib/types";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { GlassCard } from "./ui/glass-card";

type Props = {
  data: OperationalCases;
  title: string;
};

export default function OperationalCasesSection({ data, title }: Props) {
  return (
    <section
      id="operations"
      className="py-12 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🧭 {title}
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((item, index) => (
            <MotionWrapper key={item.href} delay={index * 0.1}>
              <GlassCard className="h-full flex flex-col overflow-hidden dark:border-purple-500/10">
                <CardHeader className="bg-gradient-to-r from-purple-500/5 to-pink-500/5">
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.summary}
                  </p>
                </CardContent>
                <CardFooter className="border-t border-border/30 bg-gradient-to-r from-purple-500/5 to-pink-500/5 pt-6">
                  <motion.a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-muted-foreground hover:text-purple-500 transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {item.linkLabel}
                  </motion.a>
                </CardFooter>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

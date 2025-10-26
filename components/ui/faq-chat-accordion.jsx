"use client";;
import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function FaqAccordion({
  data,
  className,
  timestamp = "Every day, 9:01 AM",
  questionClassName,
  answerClassName
}) {
  const [openItem, setOpenItem] = React.useState(null);

  return (
    <div className={cn("p-4", className)}>
      {timestamp && (
        <div className="mb-4 text-sm text-muted-foreground">{timestamp}</div>
      )}
      <Accordion.Root
        type="single"
        collapsible
        value={openItem || ""}
        onValueChange={(value) => setOpenItem(value)}>
        {data.map((item) => (
          <Accordion.Item value={item.id.toString()} key={item.id} className="mb-2">
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-start gap-x-4">
                <div
                  className={cn(
                    "relative flex items-center space-x-2 rounded-xl p-2 transition-colors",
                    openItem === item.id.toString() 
                      ? "bg-primary/20 text-primary" 
                      : "bg-muted hover:bg-primary/10",
                    questionClassName
                  )}>
                  {item.icon && (
                    <span
                      className={cn("absolute bottom-6", item.iconPosition === "right" ? "right-0" : "left-0")}
                      style={{
                        transform: item.iconPosition === "right" 
                          ? "rotate(7deg)" 
                          : "rotate(-4deg)",
                      }}>
                      {item.icon}
                    </span>
                  )}
                  <span className="font-medium text-white">{item.question}</span>
                </div>

                <span
                  className={cn(
                    "text-cyan-300 transition-colors",
                    openItem === item.id.toString() && "text-pink-400"
                  )}>
                  {openItem === item.id.toString() ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content asChild forceMount>
              <motion.div
                initial="collapsed"
                animate={openItem === item.id.toString() ? "open" : "collapsed"}
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden">
                <div className="ml-7 mt-1 md:ml-16">
                  <div
                    className={cn(
                      "relative max-w-xs rounded-2xl bg-primary px-4 py-2 text-primary-foreground",
                      answerClassName
                    )}>
                    {item.answer}
                  </div>
                </div>
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
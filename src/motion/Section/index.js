import { useInView } from 'framer-motion'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const Section = ({ children, className }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <motion.section
            ref={ref}
            className={`className ${className}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            {children}
        </motion.section>
    )
}

export default Section

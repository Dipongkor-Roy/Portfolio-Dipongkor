import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

function LoaderSimple({ setLoading }) {
    const [loading, setLocalLoading] = useState(true);
    const controls = useAnimation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLocalLoading(false);
            setLoading(false); // Update the loading state in the App component
        }, 3000);

        return () => clearTimeout(timer);
    }, [setLoading]);

    useEffect(() => {
        if (loading) {
            controls.start({
                opacity: 1,
                transition: { duration: 1 }
            });
        } else {
            controls.start({
                opacity: 0,
                transition: { duration: 1 }
            }).then(() => setLocalLoading(false)); // Remove the loader from DOM
        }
    }, [loading, controls]);

    if (!loading && !setLocalLoading) return null; // Don't render if not loading

    return (
        <motion.div
            className="fixed bg-black h-min-screen top-0 left-0 w-full h-full flex justify-center items-center z-10"
            animate={controls}
        >
            <div className="p-4 rounded-md">
                <div className="flex justify-center">
                    <>
                        <motion.span
                            className="w-4 h-4 my-12 mx-1 bg-white rounded-full"
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0],
                                transition: { duration: 1, repeat: 2 }
                            }}
                        />
                        <motion.span
                            className="w-4 h-4 my-12 mx-1 bg-white rounded-full"
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0],
                                transition: { duration: 1, repeat: 1.8, delay: 0.2 }
                            }}
                        />
                        <motion.span
                            className="w-4 h-4 my-12 mx-1 bg-white rounded-full"
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0],
                                transition: { duration: 1, repeat: 1.6, delay: 0.4 }
                            }}
                        />
                    </>
                </div>
            </div>
        </motion.div>
    );
}

export default LoaderSimple;

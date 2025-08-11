import React, { useEffect, useRef } from 'react';
import '../styles/testimonials.css';

export default function PatientTestimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const testimonials = [
        {
            name: 'John Doe',
            message: 'The care and attention I received was outstanding. Highly recommended!',
            image: 'https://via.placeholder.com/100x100.png?text=JD',
            rating: 5
        },
        {
            name: 'Priya Sharma',
            message: 'Very professional and effective treatment. The doctor really listened to me.',
            image: 'https://via.placeholder.com/100x100.png?text=PS',
            rating: 4
        },
        {
            name: 'Amit Verma',
            message: 'Thanks to this clinic, my joint pain has reduced drastically.',
            image: 'https://via.placeholder.com/100x100.png?text=AV',
            rating: 5
        },
        {
            name: 'Sarah Khan',
            message: 'Loved the convenience of online consultation. Great service!',
            image: 'https://via.placeholder.com/100x100.png?text=SK',
            rating: 4
        },
        {
            name: 'Ravi Mehra',
            message: 'Clean facility and expert doctor. I’ve been coming here for years.',
            image: 'https://via.placeholder.com/100x100.png?text=RM',
            rating: 5
        }
    ];


    const loopedTestimonials = [...testimonials, ...testimonials];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrame: number;

        const scroll = () => {
            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                scrollContainer.scrollLeft = 0;
            } else {
                scrollContainer.scrollLeft += 1;
            }
            animationFrame = requestAnimationFrame(scroll);
        };

        animationFrame = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrame);
    }, []);

    return (
        <section className="testimonials-section">
            <h2 className="testimonials-heading">What Our Patients Say</h2>
            <div className="testimonials-scroll" ref={scrollRef}>
                {loopedTestimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <img src={testimonial.image} alt={testimonial.name} />
                        <p className="message">"{testimonial.message}"</p>
                        <div className="stars">
                            {'★'.repeat(testimonial.rating)}
                            {'☆'.repeat(5 - testimonial.rating)}
                        </div>
                        <h4 className="name">— {testimonial.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}

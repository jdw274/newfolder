function TestimonialCard({ quote, author, role, company }) {
    return (
        <div className="testimonial-card p-8" data-name="testimonial-card">
            <div className="mb-6">
                <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
            </div>
            <p className="text-lg mb-6 text-gray-300" data-name="testimonial-quote">{quote}</p>
            <div>
                <p className="font-semibold" data-name="testimonial-author">{author}</p>
                <p className="text-gray-400" data-name="testimonial-role">{role}, {company}</p>
            </div>
        </div>
    );
}

function Testimonials() {
    return null;
}

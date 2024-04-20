export default function FAQSection({title, description}) {
    return(
        <section className="flex flex-col items-center mb-10">
            <div className="w-80">
                <h2 className="font-bold text-lg text-gray-600 mb-2">Q. {title}</h2>
                <p className="text-gray-600 text-sm px-4 py-2 bg-slate-200 rounded-md">{description}</p>
            </div>
        </section>
    )
};

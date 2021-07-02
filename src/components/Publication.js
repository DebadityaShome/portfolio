import React, { useEffect, useState } from "react";
import sanityClient from "../client";

export default function Publication() {
    const [publicationData, setPublicationData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "publication"]{
        title,
        date,
        conferenceName,
        description,
        publicationType,
        link,
        tags
        }`).then((data) => setPublicationData(data))
        .catch(console.error);
    }, []);
    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center">My Publications</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                    Welcome to my Publications page!
                </h2>
                <section className="grid grid-cols-2 gap-8">
                    {publicationData && publicationData.map((publication, index) => (
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a
                            href={publication.link}
                            alt={publication.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                { publication.title }
                            </a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold"> Finished on</strong>:{" "}
                                {new Date(publication.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Conference</strong>:{" "}
                                {publication.conferenceName}
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>:{" "}
                                {publication.publicationType}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                {publication.description}
                            </p>
                            <a 
                            href={publication.link} 
                            rel="noopener noreferrer" 
                            target="_blank" 
                            className="text-red-500 font-bold hover:underline hover:text-red-400"
                            >
                                View the publication{" "}
                            <span role="img" aria-label="right pointer">
                                👉
                            </span>
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    );
}
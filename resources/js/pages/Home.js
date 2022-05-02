import React from "react";
import ResourceCard from '../components/ResourceCard';
function Home() {
    return (
        <div className="">
            <div class="text-center mt-10">
                <p className=""> Download resources for almost all design projects </p>
                <p className="text-4xl leading-8 py-4 capitalize text-blue-900 font-bold"> Design resources for all your ideas </p>
            </div>
            <div className="search_container max-w-lg mx-auto my-4 flex flex-row items-center">
                <input className="border flex-1 rounded p-2" placeholder="Search by anything..."/>
                <button class="bg-green-500 ml-2 text-white p-2 px-4 rounded">Search</button>
            </div>
            <div className="grid grid-cols-4 max-w-6xl mx-auto">
            {[...Array(10)].map((x, i) =>
                <div className="p-4">
                    <ResourceCard key={i} />
                </div>
            )}
                {/* <ResourceCard /> */}
            </div>
        </div>
    );
}
export default Home;
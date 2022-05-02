import React from "react";
function ResourceCard() {
    return (
        <div className="card flex flex-col rounded shadow bg-gray-100">
                    <img class="border-b-5 h-44 w-full object-cover" src="/images/image.png"/>
                    <div className="p-3 text-sm py-4">
                        <p className="py-2 text-gray-800 font-semibold">Designresources.io</p>
                        <p className=" text-gray-600 line-clamp-3">
                            Download resources for figma, adobe xd
                        </p>
                    </div>
                </div>
    );
}
export default ResourceCard;
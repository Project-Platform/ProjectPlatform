import React from "react";

const Pagination2 = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='flex flex-wrap justify-center mt-4'>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 font-semibold text-base mx-2.5 rounded-md cursor-pointer transition ease-out duration-300 bg- text-black border border-gray-200 ${page === currentPage ? "font-extrabold border-black bg-black text-white" : ""}`}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination2;

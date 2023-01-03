import React from "react";
import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <section>
      <div className="px-4 py-8 max-w-screen-xl mx-auto md:py-12 md:px-6 lg:px-8 lg:pt-20">
        {/* Header */}
        <header className="text-center">
          <h2 className="font-bold text-4xl text-gray-900 md:text-5xl max-w-2xl mx-auto">
            Read trusted reviews from our customers
          </h2>
          <p className="my-4 leading-6 font-normal text-lg text-black-500 max-w-xl mx-auto ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            praesentium natus sapiente commodi. Aliquid sunt tempore iste
            repellendus explicabo dignissimos placeat, autem harum dolore
            reprehenderit quis! Quo totam dignissimos earum.
          </p>
        </header>

        {/* Rating*/}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </section>
  );
};

export default Review;

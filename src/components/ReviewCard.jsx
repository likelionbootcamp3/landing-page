const StarReview = () => {
  return (
    <svg
      aria-hidden="true"
      class="w-5 h-5 text-green-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Rating star</title>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  );
};

const ReviewCard = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src="https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80"
        alt=""
        className="rounded-full object-cover h-24 w-24 mx-auto shadow-xl"
      />
      <blockquote className="-mt-6 flex flex-col items-center justify-between p-12 shadow-xl rounded-lg">
        <h3 className="font-bold text-lg text-gray-700">Sophie Lennon</h3>
        <h5 className="mt-1 font-medium text-xs text-gray-500">
          Digital Marketing at Studio
        </h5>
        <p className="mt-4 leading-6 text-gray-500 max-w-md mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          voluptatem alias ut provident sapiente repellendus.
        </p>

        {/* Rating */}
        <div className="mt-8 flex gap-0.5 justify-center">
          <StarReview />
          <StarReview />
          <StarReview />
          <StarReview />
          <StarReview />
        </div>
      </blockquote>
    </div>
  );
};

export default ReviewCard;

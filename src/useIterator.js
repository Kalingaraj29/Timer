import react from "react";

const useIterator = () => {
  const callcustomhook = (time) => {
    const data = setTimeout(() => {
      return time;
    }, 10000);

    return data;
  };

  return { callcustomhook };
};

export default useIterator;

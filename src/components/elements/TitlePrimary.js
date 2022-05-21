import React from 'react';

const TitlePrimary = ({title, detail, cta}) => {
  return (
    <div className="flex justify-between mt-10">
      <div className="max-w-[50%]">
        <h2 className="font-bold text-2xl">
          {title}
        </h2>
        <p className="mt-2.5">{detail}</p>
      </div>
      <button className="button">
        {cta}
      </button>
    </div>
  );
};

export default TitlePrimary;
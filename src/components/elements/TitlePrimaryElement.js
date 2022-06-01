import React from 'react';
import {Link} from "react-router-dom";

const TitlePrimaryElement = ({title, detail, url, cta}) => {
  return (
    <div className="flex justify-between mt-10">
      <div className="max-w-[50%]">
        <h2 className="font-bold text-2xl">
          {title}
        </h2>
        <p className="mt-2.5">{detail}</p>
      </div>
      <div>
        <Link to={url}>
          <button className="button">
            {cta}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TitlePrimaryElement;
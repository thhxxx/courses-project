import React, {useState} from 'react';

const data = [
  {
    title: "Lorem ipsum dolor sit amet.",
    content: [
      "Lorem ipsum dolor.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit amet."
    ]
  },
  {
    title: "Errors and exceptions handling",
    content: [
      "Errors and exceptions handling",
      "Errors and Exception Handling",
      "Errors and Exceptions Homework",
      "Errors and Exception Homework - Solutions",
      "Pylint Overview",
      "Running tests with the Unittest Library"
    ]
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    content: [
      "Lorem ipsum dolor.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit amet."
    ]
  },
  {
    title: "Errors and exceptions handling",
    content: [
      "Errors and exceptions handling",
      "Errors and Exception Handling",
      "Errors and Exceptions Homework",
      "Errors and Exception Homework - Solutions",
      "Pylint Overview",
      "Running tests with the Unittest Library"
    ]
  }
]
const CourseContentAccordion = () => {
  const [clicked, setClicked] = useState(null)
  const toggleContent = index => {
    if (clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
  }
  return (
    <div className="border rounded-5 px-4">
      {
        data.map((value, index) => {
          return <div key={index} className="py-4 cursor-pointer">
            <h1 className="rounded-5 p-4 bg-[#7A7A7A]"
                style={clicked === index && "color: #377dff"}
                onClick={() => toggleContent(index)}>
              <i className="fa-solid fa-address-book"/> {value.title}
            </h1>
            {
              clicked === index && value.content.map((value1, index1) => {
                return <p className="border-b p-4 text-sm last:border-b-0" key={index1}>
                  <i className="fa-solid fa-circle-play"/> {value1}
                </p>
              })
            }
          </div>
        })
      }
    </div>
  );
};

export default CourseContentAccordion;
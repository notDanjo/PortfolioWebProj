import React, { useState } from "react";

export default function About() {
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [showMemberInfoModal, setShowMemberInfoModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const toggleMembersModal = () => {
    setShowMembersModal(!showMembersModal);
  };

  const toggleMemberInfoModal = (member) => {
    setSelectedMember(member);
    setShowMemberInfoModal(!showMemberInfoModal);
  };

  // Rest of your code remains the same, just replace showModal with showMembersModal or showMemberInfoModal as appropriate
  // Also replace toggleModal with toggleMembersModal or toggleMemberInfoModal as appropriate

  const members = [
    {
      id: 1,
      name: "Ivan Agbay",
      image: "./ivan.jpg",
      description: "Human ChatGPT",
      about: "Born to be wild",
      contact: "911",
      projects: "Created Facebook and ChatGPT",
      skills: "Fluent in programming languages",
    },
    {
      id: 2,
      name: "Kurt Dacaymat",
      image: "./ivan.jpg",
      description: "Kulot ChatGPT",
      about: "Secret",
      contact: "143",
      projects: "Created Secret",
      skills: "Fluent in Secret",
    },
    // ... add more members as needed
  ];

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Reed.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div className="flex justify-center">
            <button
              onClick={toggleMembersModal}
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Members
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>

      {/* Larger Modal for Up to Fourteen Members */}
      {showMembersModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full p-5">
              {/* Content for Up to Fifteen Members */}
              <div className="bg-gray-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-lg">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4 text-center">
                  Members Information
                </h3>
                <div className="grid grid-cols-5 gap-4">
                  {members.map((member) => (
                    <div
                      key={member.id}
                      className="flex flex-col items-center cursor-pointer bg-white p-3 rounded-lg"
                      onClick={() => toggleMemberInfoModal(member.id)}
                    >
                      <img
                        className="w-24 h-24 rounded-full mb-2"
                        src={member.image}
                        alt={member.name}
                      />
                      <p className="text-sm text-gray-500">{member.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={toggleMembersModal}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Member Information Modal */}
      {showMemberInfoModal && selectedMember !== null && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full p-5">
              {/* Member Information Content */}
              <div className="bg-gray-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-lg">
                <div className="flex flex-col items-center">
                  <img
                    className="w-24 h-24 rounded-full mb-2"
                    src={
                      members.find((member) => member.id === selectedMember)
                        .image
                    }
                    alt={
                      members.find((member) => member.id === selectedMember)
                        .name
                    }
                  />
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4 text-center">
                    {
                      members.find((member) => member.id === selectedMember)
                        .name
                    }{" "}
                    Information
                  </h3>
                </div>
                <div className="h-64 overflow-y-auto border-t border-b border-gray-200 bg-white p-3 rounded-lg">
                  <div className="border-b border-gray-200 py-2">
                    <p className="mb-2">
                      About:{" "}
                      {
                        members.find((member) => member.id === selectedMember)
                          .about
                      }
                    </p>
                  </div>
                  <div className="border-b border-gray-200 py-2">
                    <p className="mb-2">
                      Contact:{" "}
                      {
                        members.find((member) => member.id === selectedMember)
                          .contact
                      }
                    </p>
                  </div>
                  <div className="border-b border-gray-200 py-2">
                    <p className="mb-2">
                      Projects:{" "}
                      {
                        members.find((member) => member.id === selectedMember)
                          .projects
                      }
                    </p>
                  </div>
                  <div className="border-b border-gray-200 py-2">
                    <p className="mb-2">
                      Skills:{" "}
                      {
                        members.find((member) => member.id === selectedMember)
                          .skills
                      }
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={() => toggleMemberInfoModal(null)}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

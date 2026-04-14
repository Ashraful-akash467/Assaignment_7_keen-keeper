import React from "react";

const friends = [
  {
    name: "David Kim",
    tag: "WORK",
    status: "Almost Due",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Emma Wilson",
    tag: "FAMILY",
    status: "Overdue",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Lisa Nakamura",
    tag: "WORK",
    status: "Overdue",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "James Wright",
    tag: "SOCIAL",
    status: "Overdue",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "David Kim",
    tag: "WORK",
    status: "Overdue",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Emma Wilson",
    tag: "FAMILY",
    status: "On Track",
    img: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "Lisa Nakamura",
    tag: "WORK",
    status: "On Track",
    img: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    name: "James Wright",
    tag: "SOCIAL",
    status: "Almost Due",
    img: "https://randomuser.me/api/portraits/men/8.jpg",
  },
];

const StatusBadge = ({ status }) => {
  const colors = {
    "On Track": "bg-green-100 text-green-700",
    Overdue: "bg-red-100 text-red-600",
    "Almost Due": "bg-yellow-100 text-yellow-700",
  };

  return (
    <span className={`text-xs px-3 py-1 rounded-full ${colors[status]}`}>
      {status}
    </span>
  );
};

const TagBadge = ({ tag }) => {
  return (
    <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
      {tag}
    </span>
  );
};

const FriendCard = ({ friend }) => {
  return (
    <div className="bg-white shadow-sm rounded-xl p-4 text-center">
      <img
        src={friend.img}
        alt=""
        className="w-14 h-14 rounded-full mx-auto mb-2"
      />
      <h3 className="font-semibold text-sm">{friend.name}</h3>
      <p className="text-xs text-gray-400 mb-1">6d ago</p>

      <div className="flex justify-center gap-1 mb-2">
        <TagBadge tag={friend.tag} />
      </div>

      <StatusBadge status={friend.status} />
    </div>
  );
};

const StatsCard = ({ number, label }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 text-center w-full">
      <h2 className="text-xl font-bold">{number}</h2>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
        <h1 className="font-bold text-lg">KeenKeeper</h1>

        <div className="flex gap-4 text-sm">
          <button className="bg-green-700 text-white px-3 py-1 rounded-md">
            Home
          </button>
          <button className="text-gray-500">Timeline</button>
          <button className="text-gray-500">Stats</button>
        </div>
      </div>

      {/* Hero */}
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold mb-2">
          Friends to keep close in your life
        </h2>
        <p className="text-gray-500 text-sm mb-4">
          Your personal shelf of meaningful connections.
        </p>

        <button className="bg-green-700 text-white px-4 py-2 rounded-md">
          + Add a Friend
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 mb-8">
        <StatsCard number="10" label="Total Friends" />
        <StatsCard number="3" label="On Track" />
        <StatsCard number="6" label="Need Attention" />
        <StatsCard number="12" label="Interactions This Month" />
      </div>

      {/* Friends */}
      <div className="px-6 mb-10">
        <h3 className="font-semibold mb-4">Your Friends</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {friends.map((friend, index) => (
            <FriendCard key={index} friend={friend} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-green-900 text-white text-center py-10">
        <h2 className="text-2xl font-bold mb-2">KeenKeeper</h2>
        <p className="text-sm mb-4">
          Your personal shelf of meaningful connections.
        </p>

        <div className="flex justify-center gap-3 mb-4">
          <div className="w-8 h-8 bg-white text-green-900 rounded-full flex items-center justify-center">
            f
          </div>
          <div className="w-8 h-8 bg-white text-green-900 rounded-full flex items-center justify-center">
            g
          </div>
          <div className="w-8 h-8 bg-white text-green-900 rounded-full flex items-center justify-center">
            x
          </div>
        </div>

        <p className="text-xs text-gray-300">
          © 2026 KeenKeeper. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default App;